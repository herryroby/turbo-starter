// apps/web/lib/apollo/client.ts
'use client';

import { createClient } from '@/lib/supabase/client';
import { ApolloLink, HttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client-integration-nextjs';
import { setContext } from '@apollo/client/link/context';

// This function creates a new Apollo Client for client-side rendering.
// It's exported for use in the ApolloWrapper.
export const makeClient = (): ApolloClient<any> => {
  const httpLink = new HttpLink({
    // The Supabase GraphQL endpoint is exposed here
    uri: process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL,
    fetchOptions: { cache: 'no-store' }
  });

  // This auth link middleware injects the Supabase JWT into every GraphQL request.
  const authLink = setContext(async (_, { headers }) => {
    const supabase = createClient();
    const {
      data: { session }
    } = await supabase.auth.getSession();

    const token = session?.access_token;

    // Return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        Authorization: token ? `Bearer ${token}` : ''
      }
    };
  });

  // This is a client-only file, so we can directly create the link chain.
  const link = ApolloLink.from([authLink, httpLink]);

  return new ApolloClient({
    cache: new InMemoryCache(),
    link
  });
};
