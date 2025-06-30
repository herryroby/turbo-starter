'use client';

import { getSortableColumns } from '@/lib/utils/table';
import { Button, DataTable } from '@repo/ui';
import { ColumnDef, Row } from '@tanstack/react-table';
import { FilePlus } from 'lucide-react';
import { useState } from 'react';
import { PageInfo, Tenant } from '../types';
import { TenantFormModal } from './tenant.fm';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTenant, setSelectedTenant] = useState<Tenant | undefined>(undefined);

  const handleOpenModal = (tenant?: Tenant) => {
    setSelectedTenant(tenant);
    setIsModalOpen(true);
  };

  const columns: ColumnDef<Tenant>[] = [
    {
      accessorKey: 'business_name',
      header: 'Name',
      cell: ({ row }: { row: Row<Tenant> }) => (
        <button
          type="button"
          className="text-primary m-0 cursor-pointer border-none bg-transparent p-0"
          onClick={() => handleOpenModal(row.original)}
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
        <Button onClick={() => handleOpenModal()}>
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
      <TenantFormModal tenant={selectedTenant} open={isModalOpen} onOpenChangeAction={setIsModalOpen} />
    </div>
  );
};
