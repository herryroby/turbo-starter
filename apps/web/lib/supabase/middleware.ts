// apps/web/lib/supabase/middleware.ts
// This file creates a Supabase client specifically for use in Next.js middleware.

import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { type NextRequest, NextResponse } from 'next/server';
import type { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

type SupabaseMiddleware = {
  supabase: SupabaseClient<Database>;
  response: NextResponse;
};

/**
 * updateSession is a helper function that creates a Supabase client and refreshes the user's session cookie.
 * This should be called in a Next.js Middleware function.
 */
export async function updateSession(
  request: NextRequest
): Promise<SupabaseMiddleware> {
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          response.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          response.cookies.set({ name, value: '', ...options });
        },
      },
    }
  );

  // IMPORTANT: The auth session is refreshed here
  await supabase.auth.getUser();

  return { supabase, response };
}
