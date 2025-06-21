'use client';

import {
  Button,
  CustomColumnDef,
  DataTable,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@repo/ui';
import { FilePlus, MoreVertical } from 'lucide-react';
import Link from 'next/link';

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
}

function ListPage<TData extends object>({
  pageTitle,
  subPageTitle,
  data,
  columns,
  totals,
  filterColumn,
  searchPlaceholder,
  defaultSortableColumns,
  addLink,
  pageCount
}: ListPageProps<TData>) {
  const tableColumns: CustomColumnDef<TData, unknown>[] = [
    {
      id: 'more',
      cell: () => (
        <div className="w-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={'ghost'}>
                <MoreVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="" onCloseAutoFocus={(e) => e.preventDefault()}>
              <DropdownMenuLabel className="">Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="">Copy</DropdownMenuItem>
              <DropdownMenuItem>Paste</DropdownMenuItem>
              <DropdownMenuItem>Cut</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
      enableSorting: false,
      enableHiding: false
    },
    ...columns
  ];

  return (
    <>
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
          columns={tableColumns}
          data={data}
          totals={totals}
          filterColumn={filterColumn}
          searchPlaceholder={searchPlaceholder}
          defaultSortableColumns={defaultSortableColumns}
          pageCount={pageCount}
        />
      </div>
    </>
  );
}

export default ListPage;
