'use client';

import { Table } from '@tanstack/react-table';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import * as React from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext
} from '@repo/ui/components/ui/pagination';
import { Select } from '@repo/ui/components/composite/select';

interface PageInfo {
  endCursor?: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string | null;
}

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  pageInfo?: PageInfo | null;
}

export const DataTablePagination = <TData,>({ table, pageInfo }: DataTablePaginationProps<TData>): React.ReactElement => {
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

    const handleNextPage = (): void => {
    if (!pageInfo?.hasNextPage || !pageInfo.endCursor) return;
    router.push(`${pathname}?${createQueryString({ after: pageInfo.endCursor, page: null })}`, {
      scroll: false
    });
  };

  const handlePageSizeChange = (pageSize: number): void => {
    router.push(`${pathname}?${createQueryString({ pageSize, page: 1 })}`, {
      scroll: false
    });
  };

  

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
            {/* Previous button can be implemented later if hasPreviousPage is available */}
            <PaginationItem>
              <PaginationNext
                onClick={handleNextPage}
                aria-label="Next page"
                aria-disabled={!pageInfo?.hasNextPage}
                tabIndex={!pageInfo?.hasNextPage ? -1 : 0}
                className={!pageInfo?.hasNextPage ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                size="default"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        
      </div>
    </div>
  );
};
