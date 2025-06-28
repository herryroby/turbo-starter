'use client';

import { Tenant } from '@/app/(main)/(admin)/tenants/types';
import { ColumnDef } from '@repo/ui';

export const columns: ColumnDef<Tenant>[] = [
  {
    accessorKey: 'business_name',
    header: 'Name'
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
    accessorKey: 'subdomain',
    header: 'Schema Name'
  },
  {
    accessorKey: 'created_at',
    header: 'Created At',
    cell: ({ row }) => {
      const date = new Date(row.getValue('created_at'));
      return date.toLocaleDateString();
    }
  }
];
