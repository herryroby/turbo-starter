'use client';

import { createClient } from '@/lib/supabase/client';
import type { User } from '@/types/user';
import type { User as SupabaseUser } from '@supabase/supabase-js';
import { useCallback, useEffect, useState } from 'react';

interface UseUserReturn {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useUser = (): UseUserReturn => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();

  // Helper function to transform Supabase user to User interface
  const transformUser = useCallback((supabaseUser: SupabaseUser): User => {
    const { id, user_metadata, email } = supabaseUser;
    return {
      id,
      name: user_metadata?.full_name || user_metadata?.name || null,
      email: email ?? null,
      image: user_metadata?.avatar_url || user_metadata?.picture || null
    };
  }, []);

  // Refetch function for manual refresh
  const refetch = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase.auth.getUser();

      if (fetchError) {
        throw fetchError;
      }

      setUser(data.user ? transformUser(data.user) : null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      console.error('Error fetching user:', err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, [supabase, transformUser]);

  useEffect(() => {
    // Initial fetch
    refetch();

    // Listen to auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      try {
        setError(null);

        if (session?.user) {
          setUser(transformUser(session.user));
        } else {
          setUser(null);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
        setError(errorMessage);
        console.error('Auth state change error:', err);
      } finally {
        setLoading(false);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase, transformUser, refetch]);

  return {
    user,
    loading,
    isAuthenticated: !!user,
    error,
    refetch
  };
};
