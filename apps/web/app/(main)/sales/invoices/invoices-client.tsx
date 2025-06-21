'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ListPage from '@/components/shared/list-page';
import type { SalesInvoice } from '@/types/sales';
import type { ColumnDef, Row } from '@tanstack/react-table';

export default function InvoicesClient() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<SalesInvoice[]>([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        // In a real app, you would fetch this from your API
        const response = await fetch('/api/sales/invoices');
        if (!response.ok) {
          throw new Error('Failed to fetch invoices');
        }
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Error fetching invoices:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInvoices();
  }, []);

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
        const statusClass = {
          Paid: 'bg-green-100 text-green-800',
          Unpaid: 'bg-yellow-100 text-yellow-800',
          Overdue: 'bg-red-100 text-red-800',
          Cancelled: 'bg-gray-100 text-gray-800'
        }[status] || 'bg-gray-100 text-gray-800';

        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClass}`}>
            {status}
          </span>
        );
      }
    }
  ];

  if (isLoading) {
    return <div>Loading invoices...</div>;
  }

  return (
    <div className="space-y-4">
      <ListPage
        pageTitle="Sales Invoices"
        addLink="/sales/invoices/add"
        columns={columns}
        data={data}
        filterColumn="customerName"
        searchPlaceholder="Search invoices..."
      />
    </div>
  );
}
