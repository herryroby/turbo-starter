'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { headers, cookies } from 'next/headers';

import { createClient } from '@/lib/supabase/server';
import { z } from 'zod';
import { LoginSchema, SignupSchema } from '@/lib/schemas';

// --- LOGIN ACTION ---
type LoginResponse = { error?: string; success?: boolean };
export const login = async (values: z.infer<typeof LoginSchema>): Promise<LoginResponse> => {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword(values);

  if (error) {
    console.error('Login Error:', error.message);
    return { error: 'Could not authenticate user. Please check your credentials.' };
  }

  // Determine redirect target from "next" param if it exists
  const referer = (await headers()).get('referer');
  const redirectTo = (() => {
    if (!referer) return '/dashboard';
    try {
      const url = new URL(referer);
      return url.searchParams.get('next') ?? '/dashboard';
    } catch {
      return '/dashboard';
    }
  })();

  revalidatePath('/', 'layout');
  redirect(redirectTo);
};

// --- SIGNUP ACTION ---
type SignupResponse = { error?: string; success?: boolean };
export const signup = async (values: z.infer<typeof SignupSchema>): Promise<SignupResponse> => {
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
    options: {
      // You can pass additional user metadata here if needed
      data: {
        full_name: values.fullName
      }
    }
  });

  if (error) {
    console.error('Signup Error:', error.message);
    return { error: 'Could not sign up user. Please try again.' };
  }

  const referer = (await headers()).get('referer');
  const redirectTo = (() => {
    if (!referer) return '/dashboard';
    try {
      const url = new URL(referer);
      return url.searchParams.get('next') ?? '/dashboard';
    } catch {
      return '/dashboard';
    }
  })();

  revalidatePath('/', 'layout');
  redirect(redirectTo);
};

// --- OAUTH LOGIN (GOOGLE) ---
export const loginWithGoogle = async () => {
  const supabase = await createClient();
  const headersList = await headers();
  const origin = headersList.get('origin');

  // Extract `next` query param from referer (login page URL)
  const referer = headersList.get('referer');
  let nextParam = '';
  if (referer) {
    try {
      const url = new URL(referer);
      const n = url.searchParams.get('next');
      if (n) nextParam = n;
    } catch {
      // ignore parsing errors
    }
  }

  // Persist intended path in a short-lived cookie so callback can read it
  if (nextParam) {
    const cookieStore = await cookies();
    cookieStore.set('next_path', nextParam, {
      path: '/',
      maxAge: 600, // 10 minutes
      sameSite: 'lax',
    });
  }

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${origin}/auth/callback${nextParam ? `?next=${encodeURIComponent(nextParam)}` : ''}`
    }
  });

  if (error) {
    console.error('OAuth Error:', error.message);
    // Redirect to a login page with an error message
    return redirect('/login?error=Could not authenticate with Google');
  }

  return redirect(data.url);
};

// --- SIGN OUT ACTION ---
export const signOut = async () => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('SignOut Error:', error.message);
    // It's often better to handle this gracefully on the client
    // but we can redirect as a fallback.
    return redirect('/?error=Could not sign out');
  }

  redirect('/login');
};
