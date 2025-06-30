'use client';

import { Tenant } from '@/app/(main)/(admin)/tenants/types';
import { getSortableColumns } from '@/lib/utils/table';
import {
  Button,
  ColumnDef,
  DataTable,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label
} from '@repo/ui';
import { Row } from '@tanstack/react-table';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { toast } from 'sonner';
import { addTenant } from '../actions';
import { PageInfo } from '../types';

interface TenantListProps {
  data: Tenant[];
  pageCount: number;
  pageInfo?: PageInfo;
  pageTitle: string;
  filterColumn: string;
  searchPlaceholder: string;
}

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Adding...' : 'Add Tenant'}
    </Button>
  );
};

export const TenantsList = ({
  data,
  pageCount,
  pageInfo,
  pageTitle,
  filterColumn,
  searchPlaceholder
}: TenantListProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  const columns: ColumnDef<Tenant>[] = [
    {
      accessorKey: 'business_name',
      header: 'Name',
      cell: ({ row }: { row: Row<Tenant> }) => (
        <button
          type="button"
          className="text-primary m-0 cursor-pointer border-none bg-transparent p-0"
          onClick={() => setIsDialogOpen(true)}
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
        return date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
      }
    },
    {
      accessorKey: 'updated_at',
      header: 'Updated At',
      cell: ({ row }) => {
        const date = new Date(row.getValue('updated_at'));
        return date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
      }
    }
  ];

  const sortableColumns = getSortableColumns(columns);

  const handleAddTenantAction = async (formData: FormData) => {
    const result = await addTenant(formData);
    if (result.error) {
      toast.error(`Error: ${result.error}`);
    } else {
      toast.success('Tenant added successfully!');
      router.refresh(); // Refresh data by re-running the Server Component
      setIsDialogOpen(false); // Close dialog
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{pageTitle}</h1>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>Add Tenant</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Tenant</DialogTitle>
            </DialogHeader>
            <form action={handleAddTenantAction}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" name="name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="schema_name" className="text-right">
                    Schema Name
                  </Label>
                  <Input id="schema_name" name="schema_name" className="col-span-3" />
                </div>
              </div>
              <SubmitButton />
            </form>
          </DialogContent>
        </Dialog>
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
