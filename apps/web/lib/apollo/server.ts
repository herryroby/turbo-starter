// apps/web/lib/apollo/server.ts
import { createClient } from '@/lib/supabase/server';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { cache } from 'react';

export const getClient = cache(async () => {
  const supabase = await createClient();
  const {
    data: { session }
  } = await supabase.auth.getSession();

  const token = session?.access_token;

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL,
      headers: {
        apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${token || ''}`
      },
      // Ensure we don't cache sensitive data on the server
      fetchOptions: { cache: 'no-store' }
    })
  });
});
