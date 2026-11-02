import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { env } from "./env";

// Separate project that only serves internship projects (/projeler/staj).
// Read-only and anonymous, so no session handling.
let client: SupabaseClient | null = null;

export function getInternshipSupabase(): SupabaseClient {
  client ??= createClient(env.internshipSupabaseUrl, env.internshipSupabaseKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
  return client;
}
