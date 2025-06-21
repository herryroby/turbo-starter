'use client';

import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';

interface CurrentUser {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
}

export const useCurrentUser = (): CurrentUser | null => {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error('Error fetching user:', error);
        setUser(null);
        return;
      }

      if (data.user) {
        const { id, user_metadata, email } = data.user;
        setUser({
          id,
          name: user_metadata.full_name || user_metadata.name || null,
          email: email ?? null,
          image: user_metadata.avatar_url || user_metadata.picture || null,
        });
      } else {
        setUser(null);
      }
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          const { id, user_metadata, email } = session.user;
          setUser({
            id,
            name: user_metadata.full_name || user_metadata.name || null,
            email: email ?? null,
            image: user_metadata.avatar_url || user_metadata.picture || null,
          });
        } else {
          setUser(null);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase]);

  return user;
};
