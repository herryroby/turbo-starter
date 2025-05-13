'use client';

import ListPage from '@/components/shared/list-page/list-page';
import { salesInvoices } from '@/data/sales';
import type { SalesInvoice } from '@/types/sales';
import type { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';

const SalesInvoicesPage = () => {
  const [data] = useState<SalesInvoice[]>(salesInvoices);

  const columns: ColumnDef<SalesInvoice>[] = [
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
    }
  ];

  return (
    <ListPage
      pageTitle="Sales Invoices"
      subPageTitle="Manage all sales invoices"
      columns={columns}
      filterColumn="customerName"
      searchPlaceholder="Search customer..."
      data={data}
    />
  );
};

export default SalesInvoicesPage;
