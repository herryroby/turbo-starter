'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
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
  onSuccess?: () => void;
}

export const useTenantForm = ({ tenant, onSuccess }: UseTenantFormProps) => {
  const queryClient = useQueryClient();
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

  const { mutate: mutateTenant, isPending: isSaving } = useMutation({
    mutationFn: async (values: TenantFormValues) => {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('schema_name', values.schema_name);

      const result = tenant ? await updateTenant(tenant.id, formData) : await addTenant(formData);

      if (result.error) {
        throw new Error(result.error);
      }

      return result.data;
    },
    onSuccess: () => {
      toast.success(`Tenant ${tenant ? 'updated' : 'added'} successfully!`);
      queryClient.invalidateQueries({ queryKey: ['tenants'] });
      router.refresh();
      onSuccess?.();
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    }
  });

  const onSubmit = (values: TenantFormValues) => {
    mutateTenant(values);
  };

  const { mutate: deleteTenantMutation, isPending: isDeleting } = useMutation({
    mutationFn: async () => {
      if (!tenant) return;
      const result = await deleteTenant(tenant.id);
      if (result.error) {
        throw new Error(result.error);
      }
      return result;
    },
    onSuccess: () => {
      toast.success('Tenant deleted successfully!');
      queryClient.invalidateQueries({ queryKey: ['tenants'] });
      router.refresh();
      onSuccess?.();
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    }
  });

  const handleDelete = () => {
    deleteTenantMutation();
  };

  return { form, onSubmit, handleDelete, isPending: isSaving || isDeleting };
};
