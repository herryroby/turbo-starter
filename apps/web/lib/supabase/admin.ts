// /apps/web/lib/supabase/admin.ts
// This file creates a Supabase admin client for use in server-side environments
// where escalated privileges are required (e.g., for background jobs or admin tasks).
// This client bypasses Row Level Security (RLS).

// IMPORTANT: This client uses the service_role key and should NEVER be exposed to the client-side.

import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

// Ensure the environment variables are not undefined. The exclamation mark asserts this.
// In a real-world scenario, you might want to have a more robust configuration management.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const createAdminClient = () => {
  if (!serviceRoleKey) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is not set in environment variables.');
  }

  // The admin client is a singleton to avoid creating multiple instances.
  return createClient<Database>(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
};

// Export a singleton instance of the admin client
export const supabaseAdmin = createAdminClient();
