'use server';

import { Tenant } from '@/app/(main)/(admin)/tenants/types';
import { createAdminClient } from '@/lib/supabase/admin';
import { revalidatePath } from 'next/cache';

export const addTenant = async (formData: FormData) => {
  const supabase = createAdminClient();

  const business_name = formData.get('name') as string;
  const subdomain = formData.get('schema_name') as string;

  const { data, error } = await supabase
    .from('tenants')
    .insert([
      {
        business_name,
        subdomain,
        display_name: business_name,
        business_type: 'trading' // Default value
      }
    ])
    .select();

  if (error) {
    console.error('Error adding tenant:', error);
    return { error: error.message };
  }

  revalidatePath('/admin/tenants');

  return { data };
};

export const updateTenant = async (id: string, formData: FormData) => {
  const supabase = createAdminClient();

  const business_name = formData.get('name') as string;
  const subdomain = formData.get('schema_name') as string;

  const { data, error } = await supabase
    .from('tenants')
    .update({
      business_name,
      subdomain,
      display_name: business_name
    })
    .eq('id', id)
    .select();

  if (error) {
    console.error('Error updating tenant:', error);
    return { error: error.message };
  }

  revalidatePath('/admin/tenants');

  return { data };
};

export const deleteTenant = async (id: string) => {
  const supabase = createAdminClient();

  const { error } = await supabase.from('tenants').delete().eq('id', id);

  if (error) {
    console.error('Error deleting tenant:', error);
    return { error: error.message };
  }

  revalidatePath('/admin/tenants');

  return {};
};

export const getTenants = async (): Promise<Tenant[]> => {
  const supabase = createAdminClient();
  const { data, error } = await supabase.from('tenants').select('*');

  if (error) {
    console.error('Error fetching tenants:', error);
    return [];
  }

  return data;
};
