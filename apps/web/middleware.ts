// apps/web/middleware.ts
// This middleware is responsible for session management and route protection.

import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { type NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/dashboard']; // Add any other routes you want to protect
const publicOnlyRoutes = ['/login', '/signup']; // Routes accessible only when logged out

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

  // Redirect to login if user is not authenticated and accessing a protected route.
  if (!session && protectedRoutes.some(path => pathname.startsWith(path))) {
    const redirectUrl = new URL('/login', request.url);
    redirectUrl.searchParams.set('redirect_to', pathname); // Optional: redirect back after login
    return Response.redirect(redirectUrl);
  }

  // Redirect to dashboard if user is authenticated and accessing a public-only route.
  if (session && publicOnlyRoutes.some(path => pathname.startsWith(path))) {
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
