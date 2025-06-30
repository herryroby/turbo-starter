'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { addTenant, deleteTenant, updateTenant } from '../actions';
import { Tenant } from '../types';

const tenantFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  schema_name: z.string().min(1, 'Schema name is required')
});

export type TenantFormValues = z.infer<typeof tenantFormSchema>;

interface UseTenantFormProps {
  tenant?: Tenant;
}

export const useTenantForm = ({ tenant }: UseTenantFormProps) => {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const form = useForm<TenantFormValues>({
    resolver: zodResolver(tenantFormSchema),
    defaultValues: {
      name: tenant?.business_name || '',
      schema_name: tenant?.subdomain || ''
    }
  });

  // This useEffect will reset the form every time the `tenant` data changes.
  useEffect(() => {
    if (tenant) {
      form.reset({
        name: tenant.business_name || '',
        schema_name: tenant.subdomain || ''
      });
    } else {
      form.reset({
        name: '',
        schema_name: ''
      });
    }
  }, [tenant, form]);

  const onSubmit = (values: TenantFormValues) => {
    startTransition(async () => {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('schema_name', values.schema_name);

      const result = tenant ? await updateTenant(tenant.id, formData) : await addTenant(formData);

      if (result.error) {
        toast.error(`Error: ${result.error}`);
      } else {
        toast.success(`Tenant ${tenant ? 'updated' : 'added'} successfully!`);
        router.refresh();
        setIsSuccess(true);
      }
    });
  };

  const handleDelete = () => {
    if (!tenant) return;

    startTransition(async () => {
      const result = await deleteTenant(tenant.id);
      if (result.error) {
        toast.error(`Error: ${result.error}`);
      } else {
        toast.success('Tenant deleted successfully!');
        router.refresh();
        setIsSuccess(true);
      }
    });
  };

  return { form, onSubmit, handleDelete, isPending, isSuccess };
};
