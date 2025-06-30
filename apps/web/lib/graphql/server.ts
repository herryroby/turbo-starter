// apps/web/lib/graphql/server.ts
// This file configures the Apollo Client for SERVER-SIDE GraphQL communication.

import { HttpLink } from '@apollo/client';
import { ApolloClient, InMemoryCache, registerApolloClient } from '@apollo/client-integration-nextjs';
import { setContext } from '@apollo/client/link/context';
// IMPORTANT: We use the server-only Supabase client here.
import { createClient } from '@/lib/supabase/server';

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL!
});

const authLink = setContext(async (_, { headers }) => {
  // This uses the server-side getSession which reads the auth cookie.
  const supabase = await createClient();
  const {
    data: { session }
  } = await supabase.auth.getSession();
  const token = session?.access_token;

  return {
    headers: {
      ...headers,
      apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
});

// This function creates a new Apollo client for a single server-side request.
export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
  });
});
