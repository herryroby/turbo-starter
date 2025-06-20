// This is a protected Server Component that performs server-side GraphQL fetching.

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { createServerApolloClient } from '@/lib/graphql/server-client';
import { GET_TODOS_QUERY } from '@/lib/graphql/queries';
import { GetTodosQueryData } from '@/types/graphql';
import { TaskList } from './task-list';
import type { ComponentProps } from 'react';

export default async function DashboardPage() {
  const supabase = createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect('/login');
  }

  // --- Server-Side GraphQL Fetch ---
  const apolloClient = createServerApolloClient();
  // Infer the type directly from the child component's props for robustness.
  let initialTodos: ComponentProps<typeof TaskList>['initialTodos'] = [];
  try {
    // This query is executed on the server and is now strongly typed.
    const { data: gqlData } = await apolloClient.query<GetTodosQueryData>({
      query: GET_TODOS_QUERY,
    });
    initialTodos = gqlData?.todosCollection?.edges.map((edge) => edge.node) || [];
  } catch (error) {
    console.error('GraphQL fetch failed on server:', error);
    // Handle server-side fetch error, e.g., by showing a message.
  }

  return (
    <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Welcome, {user.email}</h1>
            <p className="text-neutral-500 dark:text-neutral-400">Here are your tasks:</p>
        </div>
      
      {/* Render the Client Component with server-fetched initial data */}
      <TaskList initialTodos={initialTodos} />
    </div>
  );
}
