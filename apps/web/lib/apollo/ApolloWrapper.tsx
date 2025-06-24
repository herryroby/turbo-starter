// apps/web/lib/apollo/ApolloWrapper.tsx
'use client';

import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr';
import { makeClient } from '@/lib/apollo/client';

// This wrapper provides the Apollo Client to the client-side React tree.
// It uses the makeClient function we defined separately to keep the code DRY.
export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
