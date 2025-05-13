'use client';

import { Button } from '@repo/ui/components/button';
import { Checkbox } from '@repo/ui/components/checkbox';
import { DataTable } from '@repo/ui/components/data-table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@repo/ui/components/dropdown-menu';
import type { ColumnDef } from '@tanstack/react-table';
import { FilePlus, MoreVertical } from 'lucide-react';
import Link from 'next/link';

interface ListPageProps<TData> {
  pageTitle: string;
  subPageTitle?: string;
  columns: ColumnDef<TData>[];
  filterColumn: string;
  searchPlaceholder: string;
  data: TData[];
}

function ListPage<TData>({
  pageTitle,
  subPageTitle,
  columns,
  filterColumn,
  searchPlaceholder,
  data
}: ListPageProps<TData>) {
  const tableColumns: ColumnDef<TData>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && undefined)}
          onCheckedChange={(checked) => table.toggleAllPageRowsSelected(!!checked)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(checked) => row.toggleSelected(!!checked)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false
    },
    ...columns,
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
    }
  ];

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-1 text-3xl font-bold">{pageTitle}</h1>
            <p className="text-neutral-500 dark:text-neutral-400">{subPageTitle}</p>
          </div>
          <Link href="/purchases/invoices/add">
            <Button>
              <FilePlus className="size-4" />
              <span>Add {pageTitle}</span>
            </Button>
          </Link>
        </div>
        <DataTable
          columns={tableColumns}
          data={data}
          totals={{ columns: [{ id: 'amount' }, { id: 'totalAmount' }] }}
          filterColumn={filterColumn}
          searchPlaceholder={searchPlaceholder}
        />
      </div>
    </>
  );
}

export default ListPage;
