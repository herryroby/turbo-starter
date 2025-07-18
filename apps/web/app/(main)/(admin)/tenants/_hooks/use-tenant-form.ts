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
      name: '',
      schema_name: ''
    }
  });

  useEffect(() => {
    form.reset({
      name: tenant?.business_name || '',
      schema_name: tenant?.subdomain || ''
    });
  }, [tenant, form]);

  const { mutate: mutateTenant, isPending: isSaving } = useMutation({
    mutationFn: async (values: TenantFormValues) => {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('schema_name', values.schema_name);
      const action = tenant ? updateTenant(tenant.id, formData) : addTenant(formData);
      const result = await action;
      if (result.error) throw new Error(result.error);
      return result.data;
    },
    onMutate: async (newTenantData) => {
      await queryClient.cancelQueries({ queryKey: ['tenants'] });
      const previousTenants = queryClient.getQueryData<Tenant[]>(['tenants']);

      queryClient.setQueryData<Tenant[]>(['tenants'], (old) => {
        const newTenant = {
          id: tenant?.id || 'temp-id',
          business_name: newTenantData.name,
          subdomain: newTenantData.schema_name,
          created_at: new Date().toISOString()
        };
        return tenant ? old?.map((t) => (t.id === tenant.id ? { ...t, ...newTenant } : t)) : [...(old || []), newTenant];
      });

      return { previousTenants };
    },
    onError: (err, newTenant, context) => {
      toast.error(`Failed to ${tenant ? 'update' : 'add'} tenant: ${err.message}`);
      if (context?.previousTenants) {
        queryClient.setQueryData(['tenants'], context.previousTenants);
      }
    },
    onSuccess: () => {
      toast.success(`Tenant ${tenant ? 'updated' : 'added'} successfully!`);
      onSuccess?.();
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tenants'] });
      router.refresh();
    }
  });

  const { mutate: deleteTenantMutation, isPending: isDeleting } = useMutation({
    mutationFn: async () => {
      if (!tenant) throw new Error('No tenant selected for deletion.');
      const result = await deleteTenant(tenant.id);
      if (result.error) throw new Error(result.error);
      return result;
    },
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['tenants'] });
      const previousTenants = queryClient.getQueryData<Tenant[]>(['tenants']);
      queryClient.setQueryData<Tenant[]>(['tenants'], (old) => old?.filter((t) => t.id !== tenant?.id));
      return { previousTenants };
    },
    onError: (err, variables, context) => {
      toast.error(`Failed to delete tenant: ${err.message}`);
      if (context?.previousTenants) {
        queryClient.setQueryData(['tenants'], context.previousTenants);
      }
    },
    onSuccess: () => {
      toast.success('Tenant deleted successfully!');
      onSuccess?.();
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tenants'] });
      router.refresh();
    }
  });

  const onSubmit = (values: TenantFormValues) => mutateTenant(values);
  const handleDelete = () => deleteTenantMutation();

  return { form, onSubmit, handleDelete, isPending: isSaving || isDeleting };
};
