// apps/web/lib/supabase/client.ts
// This file creates a Supabase client for use in browser environments (Client Components).

import { createBrowserClient } from '@supabase/ssr';
import type { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

export const createClient = (): SupabaseClient<Database> =>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
