import { ColumnDef } from '@tanstack/react-table';

export const getSortableColumns = <T>(columns: ColumnDef<T>[]) =>
  columns
    .map((column) => {
      if ('accessorKey' in column && typeof column.accessorKey === 'string') {
        return column.accessorKey;
      }
      return undefined;
    })
    .filter(Boolean) as string[];
