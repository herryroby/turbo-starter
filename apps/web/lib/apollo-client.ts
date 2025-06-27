import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/client-integration-nextjs';

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL,
      headers: {
        apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      },
      fetchOptions: { cache: 'no-store' }
    })
  });
});
