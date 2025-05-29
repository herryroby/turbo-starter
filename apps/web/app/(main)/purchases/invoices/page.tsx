'use client';

import ListPage from '@/components/common/list-page/list-page';
import { purchaseInvoices } from '@/data/purchases';
import type { PurchaseInvoice } from '@/types/purchases';
import type { ColumnDef, Row } from '@tanstack/react-table';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const PurchaseInvoicesPage = () => {
  const router = useRouter();
  const [data] = useState<PurchaseInvoice[]>(purchaseInvoices);

  const redirectToEdit = (row: PurchaseInvoice): void => {
    router.push(`/sales/invoices/add?invoiceId=${row.invoiceId}`);
  };

  const columns: ColumnDef<PurchaseInvoice>[] = [
    {
      accessorKey: 'invoiceId',
      header: 'Invoice No',
      cell: ({ row }: { row: Row<PurchaseInvoice> }) => (
        <button
          type="button"
          className="m-0 cursor-pointer border-none bg-transparent p-0 font-semibold"
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
      accessorKey: 'supplierName',
      header: 'Supplier Name',
      cell: ({ row }) => <div className="max-w-[200px] truncate">{row.getValue('supplierName')}</div>
    },
    {
      accessorKey: 'date',
      header: 'Invoice Date',
      cell: ({ row }: { row: Row<PurchaseInvoice> }) => {
        const date = row.getValue('date') as Date;
        return <div>{date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })}</div>;
      }
    },
    {
      accessorKey: 'dueDate',
      header: 'Due Date',
      cell: ({ row }: { row: Row<PurchaseInvoice> }) => {
        const date = row.getValue('dueDate') as Date;
        return <div>{date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })}</div>;
      }
    },
    {
      accessorKey: 'status',
      header: () => <div className="text-center">Status</div>,
      cell: ({ row }: { row: Row<PurchaseInvoice> }) => {
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
      cell: ({ row }: { row: Row<PurchaseInvoice> }) => {
        const amount = parseFloat(row.getValue('amount'));
        const formatted = new Intl.NumberFormat('id-ID').format(amount);
        return <div className="text-right">{formatted}</div>;
      }
    },
    {
      accessorKey: 'totalAmount',
      header: () => <div className="text-right">Total</div>,
      cell: ({ row }: { row: Row<PurchaseInvoice> }) => {
        const amount = parseFloat(row.getValue('totalAmount'));
        const formatted = new Intl.NumberFormat('id-ID').format(amount);
        return <div className="text-right font-medium">{formatted}</div>;
      }
    }
  ];

  return (
    <ListPage
      pageTitle="Purchase Invoices"
      subPageTitle="Manage all purchase invoices"
      columns={columns}
      filterColumn="supplierName"
      searchPlaceholder="Search supplier..."
      data={data}
      addLink="/purchases/invoices/add"
      defaultSortableColumns={['invoiceId', 'supplierName', 'date', 'dueDate', 'status', 'amount', 'totalAmount']}
    />
  );
};

export default PurchaseInvoicesPage;
