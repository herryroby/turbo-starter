// apps/web/app/(main)/dashboard/task-list.tsx
'use client';

import { useQuery } from '@apollo/client';
import { GET_TODOS_QUERY } from '@/lib/graphql/queries';
import { GetTodosQueryData, Todo } from '@/types/graphql';

interface TaskListProps {
  initialTodos: Todo[];
}

export const TaskList = ({ initialTodos }: TaskListProps) => {
  // useQuery is strongly typed with our GraphQL query data structure.
  const { loading, error, data } = useQuery<GetTodosQueryData>(GET_TODOS_QUERY);

  // Start with server-provided data, update with client-fetched data when available.
  const todosToRender = data?.todosCollection?.edges.map((edge) => edge.node) ?? initialTodos;

  if (loading && todosToRender.length === 0) return <p className="mt-4">Loading tasks...</p>;
  if (error) return <p className="mt-4 text-red-500">Error loading tasks: {error.message}</p>;

  return (
    <div className="w-full">
      <ul className="mt-4 space-y-3">
        {todosToRender.map((todo) => (
          <li
            key={todo.id}
            className={`p-4 rounded-lg shadow-sm transition-all ${
              todo.is_complete ? 'bg-green-100 text-gray-500 line-through' : 'bg-white dark:bg-neutral-800'
            }`}
          >
            {todo.task}
          </li>
        ))}
        {todosToRender.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No tasks found. Try adding one!</p>
        )}
      </ul>
    </div>
  );
};
