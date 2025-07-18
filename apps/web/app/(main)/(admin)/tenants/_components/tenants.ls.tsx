'use client';

import { Button, DataTable } from '@repo/ui';
import { ColumnDef } from '@tanstack/react-table';
import { FilePlus } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { useTenantModal } from '../_context/tenant-modal-context';
import { Tenant } from '../types';

interface TenantListProps {
  data: Tenant[];
  totalCount: number;
}

export const TenantsList = ({ data, totalCount }: TenantListProps) => {
  const { openModal } = useTenantModal();
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '10';
  const pageNumber = Number(page);
  const pageSize = parseInt(limit, 10);
  const pageCount = totalCount > 0 ? Math.ceil(totalCount / pageSize) : 1;

  const createQueryString = useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }
      return newSearchParams.toString();
    },
    [searchParams]
  );

  const columns: ColumnDef<Tenant>[] = useMemo(
    () => [
      {
        accessorKey: 'business_name',
        header: 'Name',
        cell: ({ row }) => (
          <button
            type="button"
            className="text-primary cursor-pointer border-none bg-transparent p-0"
            onClick={() => openModal(row.original)}
          >
            {row.getValue('business_name')}
          </button>
        ),
        enableSorting: true,
      },
      {
        accessorKey: 'subdomain',
        header: 'Subdomain',
        enableSorting: true,
      },
      {
        accessorKey: 'created_at',
        header: 'Created At',
        cell: ({ row }) => {
          const value = row.getValue('created_at');
          if (!value) return '-';
          const date = new Date(value as string);
          return date.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
        },
        enableSorting: true,
      },
    ],
    [openModal]
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Tenants</h2>
          <p className="text-muted-foreground">Here is the list of your tenants.</p>
        </div>
        <Button onClick={() => openModal()}>
          <FilePlus className="mr-2 size-4" />
          Add Tenant
        </Button>
      </div>

      <DataTable columns={columns} data={data} pageCount={pageCount} />

      <div className="flex items-center justify-between pt-4">
        <div className="text-muted-foreground flex-1 text-sm">
          Page {pageNumber} of {pageCount}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push(`?${createQueryString({ page: pageNumber - 1 })}`)}
            disabled={pageNumber <= 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push(`?${createQueryString({ page: pageNumber + 1 })}`)}
            disabled={pageNumber >= pageCount}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
