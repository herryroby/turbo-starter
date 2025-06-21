'use client';

import { Table } from '@tanstack/react-table';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import * as React from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@repo/ui/components/ui/pagination';
import { Select } from '@repo/ui/components/composite/select';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export const DataTablePagination = <TData,>({ table }: DataTablePaginationProps<TData>): React.ReactElement => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = React.useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());
      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }
      return newSearchParams.toString();
    },
    [searchParams]
  );

  const handlePageChange = (pageIndex: number): void => {
    router.push(`${pathname}?${createQueryString({ page: pageIndex < 0 ? 1 : pageIndex + 1 })}`, {
      scroll: false
    });
  };

  const handlePageSizeChange = (pageSize: number): void => {
    router.push(`${pathname}?${createQueryString({ pageSize, page: 1 })}`, {
      scroll: false
    });
  };

  const basePage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();

  const generatePagination = (): (number | string)[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages || 0 }, (_, i) => i + 1);
    }

    const basePages = [1, totalPages];
    const startPages = basePage <= 3 ? [2, 3, 4] : [];
    const endPages = basePage >= totalPages - 2 ? [totalPages - 3, totalPages - 2, totalPages - 1] : [];
    const middlePages = basePage > 3 && basePage < totalPages - 2 ? [basePage - 1, basePage, basePage + 1] : [];

    const uniquePages = [...new Set([...basePages, ...startPages, ...middlePages, ...endPages])].sort(
      (a, b) => a - b
    ) as number[];

    const pagesWithEllipsis: (number | string)[] = [];
    for (let i = 0; i < uniquePages.length; i++) {
      if (typeof uniquePages[i] !== 'undefined') {
        pagesWithEllipsis.push(uniquePages[i] as number);
      }
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
            className="h-8 w-[70px] cursor-pointer"
            contentClassName="text-center"
            data={[
              { pageSize: 10, name: '10' },
              { pageSize: 20, name: '20' },
              { pageSize: 30, name: '30' },
              { pageSize: 40, name: '40' },
              { pageSize: 50, name: '50' }
            ]}
            value={`${table.getState().pagination.pageSize}`}
            onChange={(value) => handlePageSizeChange(Number(value))}
            getOptionLabel={(item) => item?.name ?? ''}
            getOptionValue={(item) => item?.pageSize.toString() ?? ''}
            disableFilter
          />
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem className="hidden sm:inline-flex">
              <PaginationLink
                size="icon"
                onClick={!table.getCanPreviousPage() ? undefined : () => handlePageChange(0)}
                aria-label="First page"
                aria-disabled={!table.getCanPreviousPage()}
                tabIndex={!table.getCanPreviousPage() ? -1 : 0}
                className={!table.getCanPreviousPage() ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              >
                <ChevronsLeft className="h-4 w-4" />
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationPrevious
                onClick={!table.getCanPreviousPage() ? undefined : () => handlePageChange(table.getState().pagination.pageIndex - 1)}
                aria-label="Previous page"
                aria-disabled={!table.getCanPreviousPage()}
                tabIndex={!table.getCanPreviousPage() ? -1 : 0}
                className={!table.getCanPreviousPage() ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                size="default"
              />
            </PaginationItem>

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
                    onClick={() => handlePageChange(typeof page === 'number' ? page - 1 : 0)}
                    size="default"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            <PaginationItem>
              <PaginationNext
                onClick={!table.getCanNextPage() ? undefined : () => handlePageChange(table.getState().pagination.pageIndex + 1)}
                aria-label="Next page"
                aria-disabled={!table.getCanNextPage()}
                tabIndex={!table.getCanNextPage() ? -1 : 0}
                className={!table.getCanNextPage() ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                size="default"
              />
            </PaginationItem>

            <PaginationItem className="hidden sm:inline-flex">
              <PaginationLink
                size="icon"
                onClick={!table.getCanNextPage() ? undefined : () => handlePageChange(table.getPageCount() - 1)}
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
