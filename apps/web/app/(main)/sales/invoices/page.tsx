'use client';

import ListPage from '@/components/shared/list-page';
import { salesInvoices } from '@/data/sales';
import type { SalesInvoice } from '@/types/sales';
import type { ColumnDef, Row } from '@tanstack/react-table';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SalesInvoicesPage = () => {
  const router = useRouter();
  const [data] = useState<SalesInvoice[]>(salesInvoices);

  const redirectToEdit = (row: SalesInvoice): void => {
    router.push(`/sales/invoices/add?invoiceId=${row.invoiceId}`);
  };

  const columns: ColumnDef<SalesInvoice>[] = [
    {
      accessorKey: 'invoiceId',
      header: 'Invoice No',
      cell: ({ row }: { row: Row<SalesInvoice> }) => (
        <button
          type="button"
          className="text-primary m-0 cursor-pointer border-none bg-transparent p-0"
          onClick={() => redirectToEdit(row.original)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              redirectToEdit(row.original);
            }
          }}
          tabIndex={0}
          aria-label={`Edit Sales Invoice ${row.getValue('invoiceId')}`}
          style={{ background: 'none', border: 'none' }}
        >
          {row.getValue('invoiceId')}
        </button>
      )
    },
    {
      accessorKey: 'customerName',
      header: 'Customer Name',
      cell: ({ row }) => <div className="max-w-[200px] truncate">{row.getValue('customerName')}</div>
    },
    {
      accessorKey: 'createdAt',
      header: 'Invoice Date',
      cell: ({ row }) => {
        const date = row.getValue('createdAt') as Date;
        return <div>{date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })}</div>;
      }
    },
    {
      accessorKey: 'dueDate',
      header: 'Due Date',
      cell: ({ row }) => {
        const date = row.getValue('dueDate') as Date;
        return <div>{date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })}</div>;
      }
    },
    {
      accessorKey: 'amount',
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }: { row: Row<SalesInvoice> }) => {
        const amount = row.getValue('amount') as number;
        const formatted = new Intl.NumberFormat('id-ID').format(amount);
        return <div className="text-right">{formatted}</div>;
      }
    },
    {
      accessorKey: 'totalAmount',
      header: () => <div className="text-right">Total</div>,
      cell: ({ row }: { row: Row<SalesInvoice> }) => {
        const totalAmount = row.getValue('totalAmount') as number;
        const formatted = new Intl.NumberFormat('id-ID').format(totalAmount);
        return <div className="text-right font-medium">{formatted}</div>;
      }
    },
    {
      accessorKey: 'status',
      header: () => <div className="text-center">Status</div>,
      cell: ({ row }: { row: Row<SalesInvoice> }) => {
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
    }
  ];

  return (
    <ListPage
      pageTitle="Sales Invoices"
      subPageTitle="Manage all sales invoices"
      columns={columns}
      data={data}
      totals={{ columns: [{ id: 'amount' }, { id: 'totalAmount' }] }}
      filterColumn="customerName"
      searchPlaceholder="Search customer..."
      defaultSortableColumns={['invoiceId', 'customerName', 'date', 'dueDate', 'status', 'amount', 'totalAmount']}
      addLink="/sales/invoices/add"
    />
  );
};

export default SalesInvoicesPage;
