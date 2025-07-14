'use client';

import type { PurchaseInvoice } from '@/types/purchases';
import { ListPage } from '@repo/ui/index';
import type { ColumnDef, Row } from '@tanstack/react-table';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PurchaseInvoicesClient() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<PurchaseInvoice[]>([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        // In a real app, you would fetch this from your API
        const response = await fetch('/api/purchases/invoices');
        if (!response.ok) {
          throw new Error('Failed to fetch purchase invoices');
        }
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Error fetching purchase invoices:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInvoices();
  }, []);

  const redirectToEdit = (row: PurchaseInvoice): void => {
    router.push(`/purchases/invoices/add?invoiceId=${row.invoiceId}`);
  };

  const columns: ColumnDef<PurchaseInvoice>[] = [
    {
      accessorKey: 'invoiceId',
      header: 'Invoice No',
      cell: ({ row }: { row: Row<PurchaseInvoice> }) => (
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
          aria-label={`Edit Purchase Invoice ${row.getValue('invoiceId')}`}
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
      accessorKey: 'createdAt',
      header: 'Invoice Date',
      cell: ({ row }) => {
        const date = row.getValue('createdAt') as Date;
        return date?.toLocaleDateString() || '-';
      }
    },
    {
      accessorKey: 'dueDate',
      header: 'Due Date',
      cell: ({ row }) => {
        const date = row.getValue('dueDate') as Date;
        return date?.toLocaleDateString() || '-';
      }
    },
    {
      accessorKey: 'totalAmount',
      header: 'Total',
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue('totalAmount'));
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(amount);
        return formatted;
      }
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => {
        const status = row.getValue('status') as string;
        const statusClass =
          {
            Paid: 'bg-green-100 text-green-800',
            Unpaid: 'bg-yellow-100 text-yellow-800',
            Overdue: 'bg-red-100 text-red-800',
            Cancelled: 'bg-gray-100 text-gray-800'
          }[status] || 'bg-gray-100 text-gray-800';

        return <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusClass}`}>{status}</span>;
      }
    }
  ];

  if (isLoading) {
    return <div>Loading purchase invoices...</div>;
  }

  return (
    <div className="space-y-4">
      <ListPage
        pageTitle="Purchase Invoices"
        addLink="/purchases/invoices/add"
        columns={columns}
        data={data}
        filterColumn="supplierName"
        searchPlaceholder="Search purchase invoices..."
      />
    </div>
  );
}
