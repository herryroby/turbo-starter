// apps/web/lib/graphql/queries.ts
import { gql } from '@apollo/client';

// This is a placeholder query.
// You will need to have a 'todos' table with RLS and GraphQL enabled in Supabase.
export const GET_TODOS_QUERY = gql`
  query GetTodos {
    todosCollection {
      edges {
        node {
          id
          task
          is_complete
          inserted_at
        }
      }
    }
  }
`;
