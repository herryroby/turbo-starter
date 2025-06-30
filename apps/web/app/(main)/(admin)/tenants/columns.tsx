'use client';

import { ColumnDef } from '@repo/ui';
import { Tenant } from './types';

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
    accessorKey: 'created_at',
    header: 'Created At',
    cell: ({ row }) => {
      const date = new Date(row.getValue('created_at'));
      return date.toLocaleDateString();
    }
  },
  {
    accessorKey: 'updated_at',
    header: 'Updated At',
    cell: ({ row }) => {
      const date = new Date(row.getValue('updated_at'));
      return date.toLocaleDateString();
    }
  }
];
