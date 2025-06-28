'use client';

import { addTenant, getTenants } from '@/app/(main)/(admin)/tenants/actions';
import { columns } from '@/app/(main)/(admin)/tenants/columns';
import { Tenant } from '@/app/(main)/(admin)/tenants/types';
import {
  Button,
  DataTable,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label
} from '@repo/ui';
import { useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { toast } from 'sonner';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Adding...' : 'Add Tenant'}
    </Button>
  );
};

export const TenantClient = () => {
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchTenants = async () => {
    const data = await getTenants();
    setTenants(data);
  };

  useEffect(() => {
    fetchTenants();
  }, []);

  const handleAddTenantAction = async (formData: FormData) => {
    const result = await addTenant(formData);
    if (result.error) {
      toast.error(`Error: ${result.error}`);
    } else {
      toast.success('Tenant added successfully!');
      fetchTenants(); // Refresh data
      setIsDialogOpen(false); // Close dialog
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Tenant Management</h1>
          <p className="text-muted-foreground">Manage your tenants here.</p>
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
      <DataTable columns={columns} data={tenants} />
    </div>
  );
};
