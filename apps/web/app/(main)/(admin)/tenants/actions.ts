'use server';

import { createAdminClient } from '@/lib/supabase/admin';
import { revalidatePath } from 'next/cache';
import { PaginatedData, Tenant } from './types';

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

export const getTenants = async ({
  page = 1,
  pageSize = 10
}: {
  page?: number;
  pageSize?: number;
}): Promise<PaginatedData<Tenant>> => {
  const supabase = createAdminClient();
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  // Fetch tenants and total count concurrently
  const tenantsPromise = supabase
    .from('tenants')
    .select('*')
    .range(from, to)
    .order('created_at', { ascending: false });

  const countPromise = supabase
    .from('tenants')
    .select('id', { count: 'exact', head: true });

  const [{ data: tenants, error: tenantsError }, { count, error: countError }] =
    await Promise.all([tenantsPromise, countPromise]);

  if (tenantsError) {
    console.error('Error fetching tenants:', tenantsError);
    throw new Error(tenantsError.message);
  }
  if (countError) {
    console.error('Error fetching tenants count:', countError);
    throw new Error(countError.message);
  }

  return {
    data: tenants || [],
    totalCount: count || 0
  };
};
