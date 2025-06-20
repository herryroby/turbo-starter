// apps/web/components/providers/apollo-provider.tsx
// This component provides the Apollo Client to the React component tree.
'use client';

import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from '@/lib/graphql/client';

// Create a single instance of the Apollo Client
const client = createApolloClient();

export const GqlProvider = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
