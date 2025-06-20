// apps/web/middleware.ts
// This middleware is responsible for session management and route protection.

import { type NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';

const protectedRoutes = ['/dashboard']; // Add any other routes you want to protect
const publicOnlyRoutes = ['/login', '/signup']; // Routes accessible only when logged out

export async function middleware(request: NextRequest) {
  const { supabase, response } = await updateSession(request);

  // Get the current user session
  const { data: { session } } = await supabase.auth.getSession();

  const { pathname } = request.nextUrl;

  // Redirect to login if user is not authenticated and accessing a protected route
  if (!session && protectedRoutes.some(path => pathname.startsWith(path))) {
    return Response.redirect(new URL('/login', request.url));
  }

  // Redirect to dashboard if user is authenticated and accessing a public-only route
  if (session && publicOnlyRoutes.some(path => pathname.startsWith(path))) {
    return Response.redirect(new URL('/dashboard', request.url));
  }

  // Continue the request chain
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
