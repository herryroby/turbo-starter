// apps/web/lib/graphql/client.ts
// This file configures the Apollo Client for CLIENT-SIDE GraphQL communication.
'use client';

import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// IMPORTANT: We use the client-safe Supabase client here.
import { createClient } from '@/lib/supabase/client';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL!
});

const authLink = setContext(async (_, { headers }) => {
  // This uses the browser-safe getSession method.
  const supabase = createClient();
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

// This function creates a new Apollo Client instance for the browser.
export const createApolloClient = () => {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    ssrMode: typeof window === 'undefined'
  });
};
