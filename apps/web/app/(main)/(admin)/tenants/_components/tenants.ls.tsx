'use client';

import { getSortableColumns } from '@/lib/utils/table';
import { Button, DataTable } from '@repo/ui';
import { ColumnDef, Row } from '@tanstack/react-table';
import { FilePlus } from 'lucide-react';
import { useTenantModal } from '../_context/tenant-modal-context';
import { PageInfo, Tenant } from '../types';

interface TenantListProps {
  data: Tenant[];
  pageCount: number;
  pageInfo?: PageInfo;
  pageTitle: string;
  filterColumn: string;
  searchPlaceholder: string;
}

export const TenantsList = ({
  data,
  pageCount,
  pageInfo,
  pageTitle,
  filterColumn,
  searchPlaceholder
}: TenantListProps) => {
  const { openModal } = useTenantModal();

  const columns: ColumnDef<Tenant>[] = [
    {
      accessorKey: 'business_name',
      header: 'Name',
      cell: ({ row }: { row: Row<Tenant> }) => (
        <button
          type="button"
          className="text-primary m-0 cursor-pointer border-none bg-transparent p-0"
          onClick={() => openModal(row.original)}
          style={{ background: 'none', border: 'none' }}
        >
          {row.getValue('business_name')}
        </button>
      )
    },
    {
      accessorKey: 'business_type',
      header: 'Type'
    },
    {
      accessorKey: 'country',
      header: 'Country'
    },
    {
      accessorKey: 'currency',
      header: 'Currency'
    },
    {
      accessorKey: 'is_active',
      header: 'Active'
    },
    {
      accessorKey: 'created_at',
      header: 'Created At',
      cell: ({ row }) => {
        const date = new Date(row.getValue('created_at'));
        return date.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });
      }
    },
    {
      accessorKey: 'updated_at',
      header: 'Updated At',
      cell: ({ row }) => {
        const date = new Date(row.getValue('updated_at'));
        return date.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });
      }
    }
  ];

  const sortableColumns = getSortableColumns(columns);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-1 text-3xl font-medium">{pageTitle}</h1>
        </div>
        <Button onClick={() => openModal()}>
          <FilePlus className="size-4" />
          <span>Add Tenant</span>
        </Button>
      </div>
      <DataTable
        columns={columns}
        data={data}
        pageCount={pageCount}
        pageInfo={pageInfo}
        filterColumn={filterColumn}
        searchPlaceholder={searchPlaceholder}
        defaultSortableColumns={sortableColumns}
      />
    </div>
  );
};
