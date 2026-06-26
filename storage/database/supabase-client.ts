import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.COZE_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.COZE_SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_ROLE_KEY = process.env.COZE_SUPABASE_SERVICE_ROLE_KEY;

export function getSupabaseCredentials(): { url: string; anonKey: string } {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error('Supabase credentials not found in environment variables');
  }
  return { url: SUPABASE_URL, anonKey: SUPABASE_ANON_KEY };
}

export function getSupabaseClient(token?: string) {
  const { url, anonKey } = getSupabaseCredentials();
  const key = token ? anonKey : (SUPABASE_SERVICE_ROLE_KEY || anonKey);

  return createClient(url, key, {
    db: {
      timeout: 60000,
    },
    auth: {
      autoRefreshToken: true,
      persistSession: token ? true : false,
    },
    global: {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    },
  });
}