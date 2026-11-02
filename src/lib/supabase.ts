import { createClient } from "@supabase/supabase-js";
import { env } from "./env";

// Main project: content tables, auth, admin RPCs, storage, edge functions.
export const supabase = createClient(env.supabaseUrl, env.supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
