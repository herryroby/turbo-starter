'use client';

import { Table } from '@tanstack/react-table';
import { Columns3Cog } from 'lucide-react';
import * as React from 'react';

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

interface ColumnMetaType {
  headerName?: string;
}

export const DataTableViewOptions = <TData,>({ table }: DataTableViewOptionsProps<TData>): React.ReactElement => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" className="ml-auto hidden h-9 cursor-pointer px-3 lg:flex">
        <Columns3Cog className="mr-2 size-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-[220px]">
      <DropdownMenuLabel>Toggle Columns</DropdownMenuLabel>
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
              headerName = (columnDef.meta as ColumnMetaType)?.headerName || displayName;
            } else {
              headerName = displayName;
            }

            return (
              <div
                key={columnId}
                className="flex cursor-pointer items-center space-x-4 rounded px-2 py-2 hover:bg-slate-50 dark:hover:bg-slate-900"
                onClick={() => column.toggleVisibility(!column.getIsVisible())}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    column.toggleVisibility(!column.getIsVisible());
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Toggle ${headerName} column visibility`}
              >
                <Switch checked={column.getIsVisible()} onCheckedChange={(value) => column.toggleVisibility(!!value)} />
                <span
                  className={cn('text-sm', column.getIsVisible() ? 'font-medium' : 'text-muted-foreground font-normal')}
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
