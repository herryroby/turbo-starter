// apps/web/types/graphql.ts
// This file contains TypeScript interfaces for our GraphQL queries.

/**
 * Represents a single Todo item from the database.
 */
export interface Todo {
  id: string;
  task: string;
  is_complete: boolean;
  inserted_at: string;
}

/**
 * Represents an edge in the GraphQL connection model, containing a node (the Todo item).
 */
export interface TodoEdge {
  node: Todo;
}

/**
 * Represents the structure of the data returned by the GetTodos query.
 */
export interface GetTodosQueryData {
  todosCollection: {
    edges: TodoEdge[];
  };
}
