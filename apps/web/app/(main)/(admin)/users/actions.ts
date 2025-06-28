'use server';

import { User } from '@/app/(main)/(admin)/users/types';
import { createAdminClient } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';

export const getUsers = async (): Promise<User[]> => {
  const supabase = createAdminClient();
  const { data, error } = await supabase.from('app_users').select('*, tenants(name)');

  if (error) {
    console.error('Error fetching users:', error);
    return [];
  }

  return data;
};

export const syncUser = async () => {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: 'User not authenticated' };
  }

  // Check if user exists in app_users
  const { data: appUser, error: appUserError } = await supabase
    .from('app_users')
    .select('id')
    .eq('id', user.id)
    .single();

  if (appUserError && appUserError.code !== 'PGRST116') {
    // PGRST116 means no rows found, which is not an error in this case.
    console.error('Error checking for user:', appUserError);
    return { error: 'Failed to check user existence.' };
  }

  // If user already exists, do nothing.
  if (appUser) {
    return { data: 'User already exists.' };
  }

  // If user does not exist, create them
  // First, find a tenant to assign the user to.
  const { data: tenant, error: tenantError } = await supabase.from('tenants').select('id').limit(1).single();

  if (tenantError || !tenant) {
    console.error('Error fetching default tenant:', tenantError);
    return {
      error: 'No tenant available to assign the user to. Please create a tenant first.'
    };
  }

  // Find default role
  const { data: role, error: roleError } = await supabase.from('roles').select('id').eq('name', 'Admin').single();

  if (roleError || !role) {
    console.error('Error fetching admin role:', roleError);
    return { error: 'Admin role not found. Please seed the database with roles.' };
  }

  const { error: insertError } = await supabase.from('app_users').insert([
    {
      id: user.id,
      tenant_id: tenant.id,
      email: user.email,
      full_name: user.user_metadata.full_name || user.email,
      avatar_url: user.user_metadata.avatar_url,
      role_id: role.id,
      is_super_admin: true // First user is super admin
    }
  ]);

  if (insertError) {
    console.error('Error creating app user:', insertError);
    return { error: insertError.message };
  }

  return { data: 'User synced successfully' };
};
