import { ColumnDef } from '@tanstack/react-table';
import * as React from 'react';

import { TableCell, TableFooter, TableRow } from '@repo/ui/components/table';

interface DataTableFooterProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  totals: {
    label?: string;
    columns: {
      id: string;
      formatter?: (value: number) => string;
    }[];
  };
}

export function DataTableFooter<TData, TValue>({ columns, data, totals }: DataTableFooterProps<TData, TValue>) {
  return (
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
            const formatted = totalCol.formatter ? totalCol.formatter(sum) : new Intl.NumberFormat('id-ID').format(sum);

            totalColumns.push({ index: colIndex, total: sum, formatted });
          }

          // Sort by column index to maintain table order
          totalColumns.sort((a, b) => a.index - b.index);

          // Get indices of columns that need totals
          const totalIndices = totalColumns.map((col) => col.index);

          if (totalIndices.length === 0) {
            // No valid total columns, add a single cell spanning the whole row
            cells.push(
              <TableCell key="total-label" colSpan={columns.length} className="bg-neutral-50 dark:bg-neutral-800">
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
  );
}
