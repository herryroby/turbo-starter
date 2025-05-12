import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';
import * as React from 'react';

import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@repo/ui/components/table';
import { DataTablePagination } from './data-table-pagination';
import { DataTableToolbar } from './data-table-toolbar';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filterColumn?: string;
  searchPlaceholder?: string;
  totals?: {
    label?: string;
    columns: {
      id: string;
      formatter?: (value: number) => string;
    }[];
  };
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filterColumn,
  searchPlaceholder = 'Search...',
  totals
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel()
  });

  return (
    <div className="space-y-4">
      {filterColumn && (
        <DataTableToolbar table={table} filterColumn={filterColumn} searchPlaceholder={searchPlaceholder} />
      )}
      <div className="border-b border-l-0 border-r-0">
        <Table>
          <TableHeader className="bg-neutral-50 dark:bg-neutral-800">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="h-10 p-4 text-neutral-800 dark:text-neutral-200">
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No data found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          {totals && (
            <TableFooter className="border-t bg-neutral-50 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
              <TableRow className="border-0">
                {(() => {
                  // Create an array to hold all cells for the footer row
                  const cells: React.ReactNode[] = [];

                  // Map to store column IDs/accessorKeys to their indices
                  const columnMap = new Map<string, number>();

                  // Build the column map
                  columns.forEach((col, index) => {
                    if ('accessorKey' in col && typeof col.accessorKey === 'string') {
                      columnMap.set(col.accessorKey, index);
                    }
                    if ('id' in col && typeof col.id === 'string') {
                      columnMap.set(col.id, index);
                    }
                  });

                  // Store column indices that need totals and their calculated values
                  const totalColumns: Array<{
                    index: number;
                    total: number;
                    formatted: string;
                  }> = [];

                  // Calculate totals for each specified column
                  for (const totalCol of totals.columns) {
                    const colIndex = columnMap.get(totalCol.id);
                    if (colIndex === undefined) continue;

                    const column = columns[colIndex];
                    if (!column) continue;

                    // Get the accessor key to extract data
                    let accessorKey = '';
                    if ('accessorKey' in column && typeof column.accessorKey === 'string') {
                      accessorKey = column.accessorKey;
                    } else if ('id' in column && typeof column.id === 'string') {
                      accessorKey = column.id;
                    }

                    if (!accessorKey) continue;

                    // Calculate sum for this column
                    const sum = data.reduce((acc, row) => {
                      const rowData = row as Record<string, unknown>;
                      const value = rowData[accessorKey];

                      let numValue = 0;
                      if (typeof value === 'number') {
                        numValue = value;
                      } else if (typeof value === 'string') {
                        const parsed = parseFloat(value.replace(/[^\d.-]/g, ''));
                        if (!isNaN(parsed)) {
                          numValue = parsed;
                        }
                      }

                      return acc + numValue;
                    }, 0);

                    // Format the total value
                    const formatted = totalCol.formatter
                      ? totalCol.formatter(sum)
                      : new Intl.NumberFormat('id-ID').format(sum);

                    totalColumns.push({ index: colIndex, total: sum, formatted });
                  }

                  // Sort by column index to maintain table order
                  totalColumns.sort((a, b) => a.index - b.index);

                  // Get indices of columns that need totals
                  const totalIndices = totalColumns.map((col) => col.index);

                  if (totalIndices.length === 0) {
                    // No valid total columns, add a single cell spanning the whole row
                    cells.push(
                      <TableCell
                        key="total-label"
                        colSpan={columns.length}
                        className="bg-neutral-50 dark:bg-neutral-800"
                      >
                        {totals.label || 'Total'}
                      </TableCell>
                    );
                    return cells;
                  }

                  // The first column with a total
                  const firstTotalIndex = Math.min(...totalIndices);

                  // Add the "Total" label cell
                  if (firstTotalIndex > 0) {
                    cells.push(
                      <TableCell key="total-label" colSpan={firstTotalIndex}>
                        {totals.label || 'Total'}
                      </TableCell>
                    );
                  } else {
                    cells.push(<TableCell key="total-label">{totals.label || 'Total'}</TableCell>);
                  }

                  // Track the last processed column index
                  let currentIndex = firstTotalIndex;

                  // Process each total column and add spacers between them
                  for (let i = 0; i < totalColumns.length; i++) {
                    const totalColumn = totalColumns[i];
                    if (!totalColumn) continue; // Skip if undefined

                    const { index, formatted } = totalColumn;

                    // Add spacer if needed
                    if (index > currentIndex) {
                      cells.push(
                        <TableCell key={`spacer-${currentIndex}-${index}`} colSpan={index - currentIndex}></TableCell>
                      );
                    }

                    // Add the total cell
                    cells.push(
                      <TableCell key={`total-${index}`} className="text-right font-medium">
                        {formatted}
                      </TableCell>
                    );

                    currentIndex = index + 1;
                  }

                  // Add final spacer if needed
                  if (currentIndex < columns.length) {
                    cells.push(
                      <TableCell
                        key="final-spacer"
                        colSpan={columns.length - currentIndex}
                        className="bg-neutral-50 dark:bg-neutral-800"
                      ></TableCell>
                    );
                  }

                  return cells;
                })()}
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
