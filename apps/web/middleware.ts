// apps/web/middleware.ts
// This middleware is responsible for session management and route protection.

import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { type NextRequest, NextResponse } from 'next/server';

// Routes accessible without authentication
// Routes accessible without authentication (e.g., login, signup, OAuth callback)
const publicRoutes = ['/login', '/signup', '/register', '/auth'];
// Routes that should NOT be accessible when authenticated (login & signup pages only)
const publicOnlyRoutes = ['/login', '/signup', '/register'];

export async function middleware(request: NextRequest) {
  // This response object will be used to pass cookies to the browser.
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // Create a Supabase client for the middleware context.
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          // The middleware will update the request and response cookies.
          request.cookies.set({ name, value, ...options });
          response.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          // The middleware will delete the request and response cookies.
          request.cookies.set({ name, value: '', ...options });
          response.cookies.set({ name, value: '', ...options });
        },
      },
    }
  );

  // IMPORTANT: Refresh session so it doesn't expire unexpectedly. This line is crucial.
  const { data: { session } } = await supabase.auth.getSession();

  const { pathname } = request.nextUrl;

  // Redirect to login if user is not authenticated and the route is NOT public.
  if (!session && !publicRoutes.some(path => pathname.startsWith(path))) {
    const redirectUrl = new URL('/login', request.url);
    redirectUrl.searchParams.set('next', pathname);
    return Response.redirect(redirectUrl);
  }

  // If user is authenticated and hits a public-only route, honour "next" param first.
  if (session && publicOnlyRoutes.some(path => pathname.startsWith(path))) {
    const nextParam = request.nextUrl.searchParams.get('next');
    if (nextParam) {
      return Response.redirect(new URL(nextParam, request.url));
    }
    return Response.redirect(new URL('/dashboard', request.url));
  }

  // Return the response, which now contains the updated session cookie.
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
