function required(name: keyof ImportMetaEnv): string {
  const value = import.meta.env[name];
  if (!value) throw new Error(`Missing env variable ${name} — see .env.example`);
  return value;
}

export const env = {
  supabaseUrl: required("VITE_SUPABASE_URL"),
  supabaseKey: required("VITE_SUPABASE_PUBLISHABLE_KEY"),
  internshipSupabaseUrl: required("VITE_INTERNSHIP_SUPABASE_URL"),
  internshipSupabaseKey: required("VITE_INTERNSHIP_SUPABASE_PUBLISHABLE_KEY"),
};
