// apps/web/lib/apollo/server.ts
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { createClient } from '@/lib/supabase/server';

// This creates a singleton Apollo Client for use in Server Components.
export const { getClient } = registerApolloClient(async () => {
  // The createClient function is self-contained and gets cookies internally.
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
