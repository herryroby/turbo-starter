// apps/web/lib/graphql/server-client.ts
// This file configures the Apollo Client for SERVER-SIDE GraphQL communication.

import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// IMPORTANT: We use the server-only Supabase client here.
import { createClient } from '@/lib/supabase/server';


const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL!,
});

const authLink = setContext(async (_, { headers }) => {
  // This uses the server-side getSession which reads the auth cookie.
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  const token = session?.access_token;

  return {
    headers: {
      ...headers,
      apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// This function creates a new Apollo client for a single server-side request.
export const createServerApolloClient = () => {
  return new ApolloClient({
    ssrMode: true, // Indicates that this is for server-side rendering.
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};
