'use client';

import { salesInvoices } from '@/data/sales';
import type { SalesInvoice } from '@/types/sales';
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
import { useState } from 'react';

export default function InvoicesPage() {
  const [data] = useState<SalesInvoice[]>(salesInvoices);

  const columns: ColumnDef<SalesInvoice>[] = [
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
      accessorKey: 'customerName',
      header: 'Customer Name',
      cell: ({ row }) => <div className="max-w-[200px] truncate">{row.getValue('customerName')}</div>
    },
    {
      accessorKey: 'date',
      header: 'Invoice Date',
      cell: ({ row }) => {
        const date = row.getValue('date') as Date;
        return <div>{date.toLocaleDateString()}</div>;
      }
    },
    {
      accessorKey: 'dueDate',
      header: 'Due Date',
      cell: ({ row }) => {
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-1 text-3xl font-bold">Sales Invoices</h1>
          <p className="text-zinc-500 dark:text-zinc-400">Manage all sales invoices</p>
        </div>
        <Button className="flex items-center gap-1" onClick={() => (window.location.href = '/sales/invoices/add')}>
          <FilePlus className="h-4 w-4" />
          <span>Add Sales Invoice</span>
        </Button>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
        <DataTable columns={columns} data={data} filterColumn="customerName" searchPlaceholder="Search customer..." />
      </div>
    </div>
  );
}
