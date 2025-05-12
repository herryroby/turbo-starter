import { Table } from '@tanstack/react-table';
import { Columns3Cog } from 'lucide-react';

import { Button } from '@repo/ui/components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@repo/ui/components/dropdown-menu';
import { Switch } from '@repo/ui/components/switch';
import { cn } from '@repo/ui/lib/utils';

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function DataTableViewOptions<TData>({ table }: DataTableViewOptionsProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-9 px-3">
          <Columns3Cog className="mr-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="z-[100] w-[220px] rounded-md border border-slate-200 bg-white p-3 shadow-lg backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950"
        sideOffset={5}
        avoidCollisions={true}
        collisionPadding={20}
        forceMount
        style={{ backgroundColor: 'white' }}
      >
        <DropdownMenuLabel className="mb-2 text-base font-bold">Toggle Column</DropdownMenuLabel>
        <DropdownMenuSeparator className="mb-3" />
        <div className="max-h-[300px] space-y-1 overflow-y-auto pr-1">
          {table
            .getAllColumns()
            .filter((column) => typeof column.accessorFn !== 'undefined' && column.getCanHide())
            .map((column) => {
              const columnId = column.id;
              const displayName = columnId
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, (str) => str.toUpperCase())
                .trim();

              let headerName = '';
              const columnDef = column.columnDef;

              if (columnDef.header && typeof columnDef.header === 'string') {
                headerName = columnDef.header;
              } else if (columnDef.header && typeof columnDef.header === 'function') {
                headerName = (columnDef.meta as any)?.headerName || displayName;
              } else {
                headerName = displayName;
              }

              return (
                <div
                  key={columnId}
                  className="flex cursor-pointer items-center space-x-4 rounded px-2 py-2 hover:bg-slate-50 dark:hover:bg-slate-900"
                  onClick={() => column.toggleVisibility(!column.getIsVisible())}
                >
                  <Switch
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  />
                  <span
                    className={cn(
                      'text-sm',
                      column.getIsVisible() ? 'font-medium' : 'text-muted-foreground font-normal'
                    )}
                  >
                    {headerName}
                  </span>
                </div>
              );
            })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
