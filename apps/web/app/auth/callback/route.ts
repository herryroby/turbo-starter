// apps/web/app/auth/callback/route.ts
// This route handler is responsible for exchanging the auth code for a session.

import { cookies } from 'next/headers';
import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';


export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const cookieStore = await cookies();
  const nextFromCookie = cookieStore.get('next_path')?.value;
  const nextFromUrl = searchParams.get('next');

  // Prioritize cookie, then URL param, then default
  let next = nextFromCookie || nextFromUrl || '/dashboard';

  // Ensure it's a valid relative path
  if (!next.startsWith('/')) {
    next = `/${next}`;
  }

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      // Clean up the cookie after use
      if (nextFromCookie) {
        cookieStore.delete('next_path');
      }
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
