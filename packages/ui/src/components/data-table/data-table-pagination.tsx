'use client';

import { Table } from '@tanstack/react-table';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import * as React from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@repo/ui/components/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@repo/ui/components/select';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export const DataTablePagination = <TData,>({ table }: DataTablePaginationProps<TData>): React.ReactElement => {
  // Calculate page numbers to display
  const basePage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();

  // Generate page numbers to display
  const generatePagination = (): (number | string)[] => {
    // If there are 7 or fewer pages, show all
    if (totalPages <= 7) {
      return Array.from({ length: totalPages || 0 }, (_, i) => i + 1);
    }

    // Always include first and last page
    const basePages = [1, totalPages];

    // Add current page and pages around it
    const startPages = basePage <= 3 ? [2, 3, 4] : [];
    const endPages = basePage >= totalPages - 2 ? [totalPages - 3, totalPages - 2, totalPages - 1] : [];
    const middlePages = basePage > 3 && basePage < totalPages - 2 ? [basePage - 1, basePage, basePage + 1] : [];

    // Combine all page numbers and remove duplicates
    const uniquePages = [...new Set([...basePages, ...startPages, ...middlePages, ...endPages])].sort(
      (a, b) => a - b
    ) as number[];

    // Add ellipsis indicators
    const pagesWithEllipsis: (number | string)[] = [];
    for (let i = 0; i < uniquePages.length; i++) {
      // Ensure we're not pushing empty values
      if (typeof uniquePages[i] !== 'undefined') {
        pagesWithEllipsis.push(uniquePages[i] as number);
      }

      // Add ellipsis if there's a gap
      const nextPage = uniquePages[i + 1];
      const currentPage = uniquePages[i];
      if (nextPage && currentPage && nextPage - currentPage > 1) {
        pagesWithEllipsis.push('ellipsis');
      }
    }

    return pagesWithEllipsis;
  };

  const pages = generatePagination();

  return (
    <div className="flex flex-col items-center justify-between gap-4 px-2 sm:flex-row">
      <div className="text-muted-foreground text-sm">
        {table.getFilteredSelectedRowModel().rows.length || 0} of {table.getFilteredRowModel().rows.length || 0} rows
        selected.
      </div>

      <div className="flex items-center gap-6">
        <div className="flex min-w-[200px] items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px] cursor-pointer">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Pagination>
          <PaginationContent>
            {/* First page button */}
            <PaginationItem className="hidden sm:inline-flex">
              <PaginationLink
                size="icon"
                onClick={!table.getCanPreviousPage() ? undefined : () => table.setPageIndex(0)}
                aria-label="First page"
                aria-disabled={!table.getCanPreviousPage()}
                tabIndex={!table.getCanPreviousPage() ? -1 : 0}
                className={!table.getCanPreviousPage() ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              >
                <ChevronsLeft className="h-4 w-4" />
              </PaginationLink>
            </PaginationItem>

            {/* Previous page button */}
            <PaginationItem>
              <PaginationPrevious
                onClick={!table.getCanPreviousPage() ? undefined : () => table.previousPage()}
                aria-label="Previous page"
                aria-disabled={!table.getCanPreviousPage()}
                tabIndex={!table.getCanPreviousPage() ? -1 : 0}
                className={!table.getCanPreviousPage() ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                size="default"
              />
            </PaginationItem>

            {/* Page numbers */}
            {pages.map((page, i) => {
              if (page === 'ellipsis') {
                return (
                  <PaginationItem key={`ellipsis-${i}`} className="hidden cursor-pointer sm:inline-flex">
                    <PaginationEllipsis />
                  </PaginationItem>
                );
              }

              return (
                <PaginationItem key={`page-${page}-${i}`} className="hidden cursor-pointer sm:inline-flex">
                  <PaginationLink
                    isActive={page === basePage}
                    onClick={() => table.setPageIndex(typeof page === 'number' ? page - 1 : 0)}
                    size="default"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            {/* Next page button */}
            <PaginationItem>
              <PaginationNext
                onClick={!table.getCanNextPage() ? undefined : () => table.nextPage()}
                aria-label="Next page"
                aria-disabled={!table.getCanNextPage()}
                tabIndex={!table.getCanNextPage() ? -1 : 0}
                className={!table.getCanNextPage() ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                size="default"
              />
            </PaginationItem>

            {/* Last page button */}
            <PaginationItem className="hidden sm:inline-flex">
              <PaginationLink
                size="icon"
                onClick={!table.getCanNextPage() ? undefined : () => table.setPageIndex(table.getPageCount() - 1)}
                aria-label="Last page"
                aria-disabled={!table.getCanNextPage()}
                tabIndex={!table.getCanNextPage() ? -1 : 0}
                className={!table.getCanNextPage() ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              >
                <ChevronsRight className="h-4 w-4" />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <div className="text-sm font-medium sm:hidden">
          {basePage} of {totalPages}
        </div>
      </div>
    </div>
  );
};
