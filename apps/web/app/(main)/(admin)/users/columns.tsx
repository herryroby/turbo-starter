'use client';

import { User } from '@/app/(main)/(admin)/users/types';
import { ColumnDef } from '@repo/ui';

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'full_name',
    header: 'Full Name'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'tenants.name',
    header: 'Tenant',
    cell: ({ row }) => {
      const user = row.original;
      return user.tenants?.name || 'N/A';
    }
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
