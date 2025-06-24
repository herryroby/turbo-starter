// apps/web/app/auth/callback/route.ts
// This route handler is responsible for exchanging the auth code for a session.

import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';


export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const nextRaw = searchParams.get('next');
  let next = '/dashboard';
  if (nextRaw) {
    try {
      const decoded = decodeURIComponent(nextRaw);
      next = decoded.startsWith('/') ? decoded : `/${decoded}`;
    } catch {
      // keep default /dashboard
    }
  }

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
