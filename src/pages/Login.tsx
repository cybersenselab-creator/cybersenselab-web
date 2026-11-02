import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";

const inputClass = `w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm
                           focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all`;

export default function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      toast.error("Kullanıcı adı ve şifre gerekli.");
      return;
    }
    setSubmitting(true);
    try {
      // signIn also verifies admin rights (admin_me) and rejects non-admin accounts.
      await signIn(email, password);
      toast.success("Giriş başarılı. Yönlendiriliyorsunuz...");
      navigate("/admin");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Giriş başarısız.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50/50 py-12 px-4">
      <div className="w-full max-w-sm">
        <Link to="/" className="flex items-center justify-center gap-3 mb-8">
          <img src="/logos/sargem.svg" alt="SARGEM CyberSense Laboratuvarı" className="w-10 h-10 rounded-full object-cover" />
          <span className="text-navy font-bold text-sm">CyberSense Laboratuvarı</span>
        </Link>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/50 p-8">
          <div className="text-center mb-6">
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide mb-1">Yönetim Girişi</p>
            <h1 className="text-xl font-bold text-navy">Güvenli Admin Oturumu</h1>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">Kullanıcı Adı</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                placeholder="E-posta adresiniz"
                autoComplete="username"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">Şifre</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClass}
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
            </div>
            <button type="submit" disabled={submitting} className="btn-cyber w-full justify-center">
              {submitting ? (
                <>
                  <i className="fa fa-circle-notch fa-spin" /> Kontrol ediliyor
                </>
              ) : (
                <>
                  <i className="fa fa-right-to-bracket" /> Giriş
                </>
              )}
            </button>
          </form>
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">
          <Link to="/" className="hover:text-cyan transition-colors">
            <i className="fa fa-arrow-left mr-1" /> Ana sayfaya dön
          </Link>
        </p>
      </div>
    </div>
  );
}
