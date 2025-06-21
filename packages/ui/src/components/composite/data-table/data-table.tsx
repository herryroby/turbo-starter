'use client';

import { useDebounce } from '@repo/ui/hooks/use-debounce';
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type Cell,
  type Header,
  type Table as ReactTableType,
  type Row,
  type ColumnDef as TanStackColumnDef
} from '@tanstack/react-table';
import { saveAs } from 'file-saver';
import * as React from 'react';
import { useCallback } from 'react';
import * as XLSX from 'xlsx';

import { Button } from '@repo/ui/components/ui/button';
import { Checkbox } from '@repo/ui/components/ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@repo/ui/components/ui/table';
import { ArrowDown, ArrowUp, ChevronsUpDown } from 'lucide-react';
import { DataTableFooter } from './data-table-footer';
import { DataTablePagination } from './data-table-pagination';
import { DataTableToolbar } from './data-table-toolbar';

// Define a custom ColumnDef that extends TanStack's ColumnDef
export type CustomColumnDef<TData extends object, TValue = unknown> = TanStackColumnDef<TData, TValue> & {
  headerAlign?: 'left' | 'center' | 'right';
};

interface DataTableProps<TData extends object, TValue> {
  columns: CustomColumnDef<TData, TValue>[];
  data: TData[];
  filterColumn?: string;
  searchPlaceholder?: string;
  defaultSortableColumns?: string[];
  totals?: {
    label?: string;
    columns: {
      id: string;
      formatter?: (value: number) => string;
    }[];
  };
  error?: Error | null;
  enableGlobalFilter?: boolean;
  globalFilterPlaceholder?: string;
  filename?: string;
  pageCount?: number;
}

export const DataTable = <TData extends object, TValue = unknown>({
  columns,
  data,
  filterColumn,
  searchPlaceholder = 'Search...',
  defaultSortableColumns = [],
  totals,
  error,
  enableGlobalFilter = false,
  globalFilterPlaceholder = 'Search all columns...',
  filename = 'data-export',
  pageCount
}: DataTableProps<TData, TValue>): React.ReactElement => {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState<string>('');
  const debouncedGlobalFilter = useDebounce(globalFilter, 300);

  // Create a new array with the selection column at the beginning
  const columnsWithSelection: CustomColumnDef<TData, unknown>[] = React.useMemo(
    () => [
      {
        id: 'select',
        header: ({ table: headerTable }: { table: ReactTableType<TData> }) => (
          <Checkbox
            checked={
              headerTable.getIsAllPageRowsSelected() || (headerTable.getIsSomePageRowsSelected() && 'indeterminate')
            }
            onCheckedChange={(value) => headerTable.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
            className="translate-y-[2px]"
          />
        ),
        cell: ({ row }: { row: Row<TData> }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="translate-y-[2px]"
          />
        ),
        enableSorting: false,
        enableHiding: false
      } as CustomColumnDef<TData, unknown>,
      ...(columns as CustomColumnDef<TData, unknown>[])
    ],
    [columns]
  );

  const table = useReactTable({
    data,
    columns: columnsWithSelection as TanStackColumnDef<TData, unknown>[],
    pageCount: pageCount ?? -1,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter: debouncedGlobalFilter
    },
    manualPagination: true,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    // Performance optimizations
    getExpandedRowModel: getExpandedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    // Enable global filtering
    globalFilterFn: 'includesString',
    // Memoize the filtering for better performance
    enableGlobalFilter: enableGlobalFilter
  });

  // Define export functions with a simple, direct approach that ignores column structure
  const exportToExcel = useCallback(() => {
    try {
      // Get all filtered data
      const filteredRows = table.getFilteredRowModel().flatRows;
      const exportData: Record<string, unknown>[] = [];

      // Process each row
      filteredRows.forEach((row) => {
        if (!row.original) return;

        // Create a data object for this row
        const rowData: Record<string, unknown> = {};

        // Get each original property directly (ignoring table columns)
        const originalData = row.original as Record<string, unknown>;

        // Directly iterate over all object properties
        Object.keys(originalData).forEach((key) => {
          const value = originalData[key];

          // Only include non-complex values
          const valueType = typeof value;
          if (value === null || value === undefined) return;

          if (
            valueType !== 'function' &&
            (valueType !== 'object' ||
              value instanceof Date ||
              (Array.isArray(value) && value.every((v) => typeof v !== 'object')))
          ) {
            rowData[key] = value;
          }
        });

        exportData.push(rowData);
      });

      // Create Excel file with all properties
      const worksheet = XLSX.utils.json_to_sheet(exportData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

      const excelBuffer = XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'array'
      });

      const excelBlob = new Blob([excelBuffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });

      saveAs(excelBlob, `${filename}.xlsx`);
    } catch (error) {
      console.error('Error exporting to Excel:', error);
    }
  }, [table, filename]);

  const exportToCSV = useCallback(() => {
    try {
      // Get all filtered data
      const filteredRows = table.getFilteredRowModel().flatRows;
      const exportData: Record<string, unknown>[] = [];

      // Process each row
      filteredRows.forEach((row) => {
        if (!row.original) return;

        // Create a data object for this row
        const rowData: Record<string, unknown> = {};

        // Get each original property directly (ignoring table columns)
        const originalData = row.original as Record<string, unknown>;

        // Directly iterate over all object properties
        Object.keys(originalData).forEach((key) => {
          const value = originalData[key];

          // Only include non-complex values
          const valueType = typeof value;
          if (value === null || value === undefined) return;

          if (
            valueType !== 'function' &&
            (valueType !== 'object' ||
              value instanceof Date ||
              (Array.isArray(value) && value.every((v) => typeof v !== 'object')))
          ) {
            rowData[key] = value;
          }
        });

        exportData.push(rowData);
      });

      // Create CSV file
      const worksheet = XLSX.utils.json_to_sheet(exportData);
      const csvOutput = XLSX.utils.sheet_to_csv(worksheet);
      const csvBlob = new Blob([csvOutput], { type: 'text/csv;charset=utf-8' });

      saveAs(csvBlob, `${filename}.csv`);
    } catch (error) {
      console.error('Error exporting to CSV:', error);
    }
  }, [table, filename]);

  // Highlight matching text in cells
  const highlightText = useCallback(
    (text: string): React.ReactNode => {
      if (!debouncedGlobalFilter || typeof text !== 'string') return text;

      const regex = new RegExp(`(${debouncedGlobalFilter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      const parts = text.split(regex);

      if (parts.length <= 1) return text;

      return parts.map((part, i) => {
        if (part.toLowerCase() === debouncedGlobalFilter.toLowerCase()) {
          return (
            <span key={i} className="bg-yellow-200 dark:bg-yellow-800">
              {part}
            </span>
          );
        }
        return part;
      });
    },
    [debouncedGlobalFilter]
  );

  // Memoize cell rendering for better performance
  const renderCell = useCallback(
    (cell: Cell<TData, unknown>) => {
      const content = flexRender(cell.column.columnDef.cell, cell.getContext());

      // Only apply highlighting to string content when global filter is active
      if (debouncedGlobalFilter && typeof content === 'string') {
        return highlightText(content);
      }

      return content;
    },
    [debouncedGlobalFilter, highlightText]
  );

  // Handle error state after all hooks are defined
  if (error) {
    return (
      <div className="bg-destructive/10 text-destructive my-4 rounded-md border p-4">
        <p>Error loading data: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <DataTableToolbar
        table={table}
        filterColumn={filterColumn}
        searchPlaceholder={searchPlaceholder}
        enableGlobalFilter={enableGlobalFilter}
        globalFilterValue={globalFilter}
        onGlobalFilterChange={setGlobalFilter}
        globalFilterPlaceholder={globalFilterPlaceholder}
        onExportExcel={exportToExcel}
        onExportCSV={exportToCSV}
      />
      <div className="border-b border-l-0 border-r-0">
        <Table className="bg-neutral-50 dark:bg-neutral-800">
          <TableHeader className="bg-neutral-50 dark:bg-neutral-800">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header: Header<TData, unknown>) => {
                  const columnDef = header.column.columnDef as CustomColumnDef<TData, unknown>;
                  const isSortable =
                    columnDef.enableSorting !== false &&
                    (columnDef.enableSorting === true ||
                      ('accessorKey' in header.column.columnDef &&
                        header.column.columnDef.accessorKey &&
                        typeof header.column.columnDef.accessorKey === 'string' &&
                        defaultSortableColumns.includes(header.column.columnDef.accessorKey as string)));

                  const headerAlignment = columnDef.headerAlign || 'left';
                  const textAlignClass =
                    headerAlignment === 'center'
                      ? 'justify-center'
                      : headerAlignment === 'right'
                        ? 'justify-end'
                        : 'justify-start';

                  const columnIndex = columnsWithSelection.findIndex((col) => col.id === header.column.id);
                  const isFirstDataColumn = columnIndex === 1;

                  return (
                    <TableHead key={header.id} className="h-12 px-0 py-2 text-neutral-800 dark:text-neutral-200">
                      <div className="flex">
                        {header.column.id !== 'select' && !isFirstDataColumn && (
                          <div className="mr-3 h-6 border-l border-neutral-300 dark:border-neutral-700" />
                        )}
                        {header.isPlaceholder ? null : isSortable ? (
                          <Button
                            variant="ghost"
                            onClick={() => header.column.toggleSorting(header.column.getIsSorted() === 'asc')}
                            className={`flex h-auto min-w-0 flex-1 p-0 hover:bg-transparent ${textAlignClass} `}
                          >
                            <span
                              className={`flex-grow ${headerAlignment === 'center' ? 'text-center' : headerAlignment === 'right' ? 'text-right' : 'text-left'}`}
                            >
                              {flexRender(header.column.columnDef.header, header.getContext())}
                            </span>
                            {header.column.getIsSorted() === 'asc' ? (
                              <ArrowUp className="ml-2 size-4" />
                            ) : header.column.getIsSorted() === 'desc' ? (
                              <ArrowDown className="ml-2 size-4" />
                            ) : (
                              <ChevronsUpDown className="ml-2 size-4" />
                            )}
                          </Button>
                        ) : (
                          <div
                            className={`flex-1 px-3 ${headerAlignment === 'center' ? 'text-center' : headerAlignment === 'right' ? 'text-right' : 'text-left'}`}
                          >
                            {flexRender(header.column.columnDef.header, header.getContext())}
                          </div>
                        )}
                      </div>
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="dark:bg-card bg-white">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row: Row<TData>) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell: Cell<TData, unknown>) => (
                    <TableCell
                      key={cell.id}
                      className={`${cell.column.id === 'select' ? 'px-3' : cell.column.id === 'more' ? 'p-0' : 'px-7'}`}
                    >
                      {renderCell(cell)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columnsWithSelection.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          {totals && (
            <DataTableFooter columns={columns as TanStackColumnDef<TData, unknown>[]} data={data} totals={totals} />
          )}
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
};
