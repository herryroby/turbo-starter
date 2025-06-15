'use client';

import { Table } from '@tanstack/react-table';
import { FileDown, FileSpreadsheet, Search, X } from 'lucide-react';
import * as React from 'react';

import { Button } from '@repo/ui/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@repo/ui/components/ui/dropdown-menu';
import { Input } from '@repo/ui/components/ui/input';
import { Separator } from '@repo/ui/components/ui/separator';
import { DataTableViewOptions } from './data-table-view-options';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filterColumn?: string;
  searchPlaceholder?: string;
  enableGlobalFilter?: boolean;
  globalFilterValue?: string;
  onGlobalFilterChange?: (value: string) => void;
  globalFilterPlaceholder?: string;
  onExportExcel?: () => void;
  onExportCSV?: () => void;
}

export const DataTableToolbar = <TData,>({
  table,
  filterColumn,
  searchPlaceholder = 'Search...',
  enableGlobalFilter = false,
  globalFilterValue = '',
  onGlobalFilterChange,
  globalFilterPlaceholder = 'Search...',
  onExportExcel,
  onExportCSV
}: DataTableToolbarProps<TData>): React.ReactElement => {
  // Check if any filters are applied (column or global)
  const isFiltered = table.getState().columnFilters.length > 0 || !!table.getState().globalFilter;

  return (
    <div className="mb-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
      <div className="flex flex-1 items-center space-x-2">
        {filterColumn && (
          <div className="relative">
            <Search className="text-muted-foreground absolute left-2 top-2.5 size-4" />
            <Input
              placeholder={searchPlaceholder}
              value={(table.getColumn(filterColumn)?.getFilterValue() as string) ?? ''}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                table.getColumn(filterColumn)?.setFilterValue(event.target.value)
              }
              className="w-[150px] pl-8 lg:w-[250px]"
            />
          </div>
        )}
        {enableGlobalFilter && (
          <div className="relative">
            <Search className="text-muted-foreground absolute left-2 top-2.5 size-4" />
            <Input
              placeholder={globalFilterPlaceholder}
              value={globalFilterValue}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => onGlobalFilterChange?.(event.target.value)}
              className="w-[150px] pl-8 lg:w-[250px]"
            />
          </div>
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => {
              table.resetColumnFilters();
              table.resetGlobalFilter();
              onGlobalFilterChange?.('');
            }}
            className="px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 size-4" />
          </Button>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {(onExportExcel || onExportCSV) && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="cursor-pointer hover:cursor-pointer">
                <FileDown className="mr-2 size-4" />
                Export
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {onExportExcel && (
                <DropdownMenuItem onClick={onExportExcel} className="cursor-pointer">
                  <FileSpreadsheet className="mr-2 size-4" />
                  Export to Excel
                </DropdownMenuItem>
              )}
              {onExportExcel && onExportCSV && <Separator className="my-1" />}
              {onExportCSV && (
                <DropdownMenuItem onClick={onExportCSV} className="cursor-pointer">
                  <FileDown className="mr-2 size-4" />
                  Export to CSV
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
};
