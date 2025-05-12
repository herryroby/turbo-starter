'use client';

import { purchaseInvoices } from '@/data/purchases';
import type { PurchaseInvoice } from '@/types/purchases';
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
import { useState } from 'react';

const PurchaseInvoicesPage = () => {
  const [data] = useState<PurchaseInvoice[]>(purchaseInvoices);

  const columns: ColumnDef<PurchaseInvoice>[] = [
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
    {
      accessorKey: 'invoiceId',
      header: 'Invoice No',
      cell: ({ row }) => <div>{row.getValue('invoiceId')}</div>
    },
    {
      accessorKey: 'vendorName',
      header: 'Vendor Name',
      cell: ({ row }) => <div className="max-w-[200px] truncate">{row.getValue('vendorName')}</div>
    },
    {
      accessorKey: 'date',
      header: 'Invoice Date',
      cell: ({ row }: { row: any }) => {
        const date = row.getValue('date') as Date;
        return <div>{date.toLocaleDateString()}</div>;
      }
    },
    {
      accessorKey: 'dueDate',
      header: 'Due Date',
      cell: ({ row }: { row: any }) => {
        const date = row.getValue('dueDate') as Date;
        return <div>{date.toLocaleDateString()}</div>;
      }
    },
    {
      accessorKey: 'status',
      header: () => <div className="text-center">Status</div>,
      cell: ({ row }: { row: any }) => {
        const status = row.getValue('status') as string;
        return (
          <div className="text-center">
            <div
              className={`inline-flex rounded-md px-2 py-1 text-center text-xs font-medium ${
                status === 'Paid'
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
              }`}
            >
              {status}
            </div>
          </div>
        );
      }
    },
    {
      accessorKey: 'amount',
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }: { row: any }) => {
        const amount = parseFloat(row.getValue('amount'));
        const formatted = new Intl.NumberFormat('id-ID').format(amount);
        return <div className="text-right">{formatted}</div>;
      }
    },
    {
      accessorKey: 'totalAmount',
      header: () => <div className="text-right">Total</div>,
      cell: ({ row }: { row: any }) => {
        const amount = parseFloat(row.getValue('totalAmount'));
        const formatted = new Intl.NumberFormat('id-ID').format(amount);
        return <div className="text-right font-medium">{formatted}</div>;
      }
    },
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
            <h1 className="text-3xl font-bold">Purchase Invoices</h1>
            <p className="text-zinc-500 dark:text-zinc-400">Manage all purchase invoices</p>
          </div>
          <Link href="/purchases/invoices/add">
            <Button>
              <FilePlus className="size-4" />
              <span>Add Purchase Invoice</span>
            </Button>
          </Link>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <DataTable columns={columns} data={data} filterColumn="vendorName" searchPlaceholder="Search vendor..." />
        </div>
      </div>
    </>
  );
};

export default PurchaseInvoicesPage;
