import { ApolloLink, HttpLink } from '@apollo/client';
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink
} from '@apollo/client-nextjs-experimental-ssr';

export const makeClient = () => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL,
    headers: {
      apiKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    },
    fetchOptions: { cache: 'no-store' }
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true
            }),
            httpLink
          ])
        : httpLink
  });
};

// Separate function to get the client instance
export const getClient = () => {
  return makeClient();
};
