import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";

type AuthContextValue = {
  session: Session | null;
  isAdmin: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

// A session only counts if `admin_me` confirms the user is an admin;
// otherwise it is signed out immediately.
export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [admin, setAdmin] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(true);
  const currentToken = useRef<string | null>(null);
  const pendingChecks = useRef(new Map<string, Promise<boolean>>());

  const clear = useCallback(() => {
    setSession(null);
    setAdmin(null);
  }, []);

  const verifyAdmin = useCallback(
    (next: Session) => {
      const token = next.access_token;
      currentToken.current = token;
      const pending = pendingChecks.current.get(token);
      if (pending) return pending;

      const check = (async () => {
        const { data, error } = await supabase.rpc("admin_me");
        if (currentToken.current !== token) return false;
        if (error || !data) {
          currentToken.current = null;
          clear();
          try {
            await supabase.auth.signOut();
          } catch (err) {
            console.error("Yetkisiz oturum kapatılamadı.", err);
          }
          return false;
        }
        setSession(next);
        setAdmin(data);
        return true;
      })().finally(() => {
        pendingChecks.current.delete(token);
      });

      pendingChecks.current.set(token, check);
      return check;
    },
    [clear],
  );

  useEffect(() => {
    let cancelled = false;

    const handle = async (next: Session | null) => {
      if (cancelled) return;
      if (!next) {
        currentToken.current = null;
        clear();
        setIsLoading(false);
        return;
      }
      const token = next.access_token;
      currentToken.current = token;
      setIsLoading(true);
      await verifyAdmin(next);
      if (!cancelled && (currentToken.current === token || currentToken.current === null)) {
        setIsLoading(false);
      }
    };

    supabase.auth.getSession().then(({ data, error }) => {
      if (cancelled) return;
      if (error) {
        currentToken.current = null;
        clear();
        setIsLoading(false);
        return;
      }
      handle(data.session);
    });

    // Deferred so Supabase calls inside the handler don't deadlock the auth lock.
    const { data } = supabase.auth.onAuthStateChange((_event, next) => {
      setTimeout(() => handle(next), 0);
    });

    return () => {
      cancelled = true;
      data.subscription.unsubscribe();
    };
  }, [clear, verifyAdmin]);

  const signIn = useCallback(
    async (email: string, password: string) => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        if (!data.session) throw new Error("Oturum oluşturulamadı.");
        if (!(await verifyAdmin(data.session))) {
          throw new Error("Bu hesabın yönetim paneline erişim yetkisi yok.");
        }
      } finally {
        setIsLoading(false);
      }
    },
    [verifyAdmin],
  );

  const signOut = useCallback(async () => {
    currentToken.current = null;
    clear();
    await supabase.auth.signOut();
  }, [clear]);

  return (
    <AuthContext.Provider value={{ session, isAdmin: admin !== null, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
