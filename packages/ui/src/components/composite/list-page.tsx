'use client';

import { FilePlus } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { DataTable } from './data-table';
import type { CustomColumnDef } from './data-table/data-table';

interface PageInfo {
  endCursor?: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string | null;
}

interface ListPageProps<TData extends object> {
  pageTitle: string;
  subPageTitle?: string;
  data: TData[];
  columns: CustomColumnDef<TData, unknown>[];
  totals?: {
    columns: { id: string }[];
  };
  filterColumn: string;
  searchPlaceholder: string;
  defaultSortableColumns?: string[];
  addLink?: string;
  pageCount?: number;
  pageInfo?: PageInfo | null;
}

export function ListPage<TData extends object>({
  pageTitle,
  subPageTitle,
  data,
  columns,
  totals,
  filterColumn,
  searchPlaceholder,
  defaultSortableColumns,
  addLink,
  pageCount,
  pageInfo
}: ListPageProps<TData>) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-1 text-3xl font-medium">{pageTitle}</h1>
          <p className="text-neutral-500 dark:text-neutral-400">{subPageTitle}</p>
        </div>
        {addLink && (
          <Link href={addLink}>
            <Button>
              <FilePlus className="size-4" />
              <span>Add {pageTitle.slice(0, -1)}</span>
            </Button>
          </Link>
        )}
      </div>
      <DataTable
        columns={columns}
        data={data}
        totals={totals}
        filterColumn={filterColumn}
        searchPlaceholder={searchPlaceholder}
        defaultSortableColumns={defaultSortableColumns}
        pageCount={pageCount}
        pageInfo={pageInfo}
      />
    </div>
  );
}
