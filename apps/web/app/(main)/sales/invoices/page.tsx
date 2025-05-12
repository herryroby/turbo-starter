'use client';

import invoices from '@/data/sales';
import type { Invoice } from '@/types/sales';
import { Button } from '@repo/ui/components/button';
import { DataTable } from '@repo/ui/components/data-table';
import type { ColumnDef } from '@tanstack/react-table';
import { FilePlus } from 'lucide-react';
import { useState } from 'react';

export default function InvoicesPage() {
  const [data] = useState<Invoice[]>(invoices);

  const columns: ColumnDef<Invoice>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <input
          type="checkbox"
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && undefined)}
          onChange={(e) => table.toggleAllPageRowsSelected(!!e.target.checked)}
          aria-label="Select all"
          className="h-4 w-4 rounded border-gray-300"
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          onChange={(e) => row.toggleSelected(!!e.target.checked)}
          aria-label="Select row"
          className="h-4 w-4 rounded border-gray-300"
        />
      ),
      enableSorting: false,
      enableHiding: false
    },
    {
      accessorKey: 'invoiceNo',
      header: 'Invoice No',
      cell: ({ row }) => <div>{row.getValue('invoiceNo')}</div>
    },
    {
      accessorKey: 'company',
      header: 'Company',
      cell: ({ row }) => <div className="max-w-[200px] truncate">{row.getValue('company')}</div>
    },
    {
      accessorKey: 'dueDate',
      header: 'Due Date',
      cell: ({ row }) => <div>{row.getValue('dueDate')}</div>
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }: { row: any }) => {
        const status = row.getValue('status') as string;
        return (
          <div
            className={`inline-flex rounded-md px-2 py-1 text-xs font-medium ${
              status === 'Paid'
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
            }`}
          >
            {status}
          </div>
        );
      }
    },
    {
      accessorKey: 'amount',
      header: 'Amount',
      cell: ({ row }: { row: any }) => {
        const amount = parseFloat(row.getValue('amount'));
        const formatted = new Intl.NumberFormat('id-ID').format(amount);
        return <div className="text-right">{formatted}</div>;
      }
    },
    {
      accessorKey: 'total',
      header: 'Total',
      cell: ({ row }: { row: any }) => {
        const amount = parseFloat(row.getValue('total'));
        const formatted = new Intl.NumberFormat('id-ID').format(amount);
        return <div className="text-right font-medium">{formatted}</div>;
      }
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tagihan</h1>
          <p className="text-zinc-500 dark:text-zinc-400">Kelola semua tagihan pelanggan Anda</p>
        </div>
        <Button className="flex items-center gap-1" onClick={() => (window.location.href = '/sales/invoices/add')}>
          <FilePlus className="h-4 w-4" />
          <span>Tambah Tagihan</span>
        </Button>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
        <DataTable columns={columns} data={data} filterColumn="perusahaan" searchPlaceholder="Cari perusahaan..." />
      </div>
    </div>
  );
}
