import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

let supabase;
try {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} catch (err) {
  console.error('Supabase client initialization error:', err);
  supabase = null;
}

export { supabase };
