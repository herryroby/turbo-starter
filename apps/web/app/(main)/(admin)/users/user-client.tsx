'use client';

import { getUsers, syncUser } from '@/app/(main)/(admin)/users/actions';
import { columns } from '@/app/(main)/(admin)/users/columns';
import { User } from '@/app/(main)/(admin)/users/types';
import { DataTable } from '@repo/ui';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export const UserClient = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const initialize = async () => {
      const syncResult = await syncUser();
      if (syncResult.error) {
        toast.error(syncResult.error);
      } else if (syncResult.data) {
        // Only show success toast if there was a sync action
        if (syncResult.data.includes('synced')) {
          toast.success(syncResult.data);
        }
      }

      const data = await getUsers();
      setUsers(data);
    };

    initialize();
  }, []);

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">User Management</h1>
        <p className="text-muted-foreground">Manage your application users here.</p>
      </div>
      <DataTable columns={columns} data={users} />
    </div>
  );
};
