'use server';

import { User } from '@/app/(main)/(admin)/users/types';
import { createAdminClient } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';

export const getUsers = async (): Promise<User[]> => {
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from('app_users')
      .select(`
        id,
        full_name,
        email,
        created_at,
        tenants:tenant_id (business_name)
      `);

    if (error) {
      console.error('Error fetching users:', error);
      return [];
    }

    // Map the data to match the User type
    return (data || []).map(user => {
      const tenant = Array.isArray(user.tenants) ? user.tenants[0] : user.tenants;
      return {
        id: user.id,
        full_name: user.full_name || '',
        email: user.email || '',
        created_at: user.created_at ? new Date(user.created_at).toISOString() : new Date().toISOString(),
        tenants: tenant?.business_name ? { name: tenant.business_name } : null
      };
    });
  } catch (error) {
    console.error('Error in getUsers:', error);
    return [];
  }
};

export const syncUser = async () => {
  try {
    const supabase = await createClient();
    const adminClient = createAdminClient();

    const {
      data: { user }
    } = await supabase.auth.getUser();

    if (!user) {
      return { error: 'User not authenticated' };
    }

    // Check if user exists in app_users using the admin client
    const { data: appUser, error: appUserError } = await adminClient
      .from('app_users')
      .select('id')
      .eq('id', user.id)
      .single();

    if (appUserError && appUserError.code !== 'PGRST116') {
      // PGRST116 means no rows found, which is not an error in this case.
      console.error('Error checking for user:', appUserError);
      return { error: appUserError.message };
    }

    if (appUser) {
      // User already exists, no need to sync
      return { data: 'User already exists' };
    }

    // Get default tenant (you might want to change this logic)
    const { data: tenant, error: tenantError } = await adminClient
      .from('tenants')
      .select('id')
      .eq('is_default', true)
      .single();

    if (tenantError) {
      console.error('Error getting default tenant:', tenantError);
      return { error: 'Failed to get default tenant' };
    }

    if (!tenant) {
      return { error: 'No default tenant found' };
    }

    // Get admin role
    const { data: role, error: roleError } = await adminClient
      .from('roles')
      .select('id')
      .eq('name', 'admin')
      .single();

    if (roleError) {
      console.error('Error getting admin role:', roleError);
      return { error: 'Failed to get admin role' };
    }

    if (!role) {
      return { error: 'Admin role not found. Please seed the database with roles.' };
    }

    if (!user.email) {
      return { error: 'User email is required' };
    }

    const userData = {
      id: user.id,
      tenant_id: tenant.id,
      email: user.email,
      full_name: user.user_metadata?.full_name || user.email.split('@')[0],
      avatar_url: user.user_metadata?.avatar_url || null,
      role_id: role.id,
      is_super_admin: true, // First user is super admin
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    const { error: insertError } = await adminClient
      .from('app_users')
      .insert([userData]);

    if (insertError) {
      console.error('Error creating app user:', insertError);
      return { error: insertError.message };
    }

    return { data: 'User synced successfully' };
  } catch (error) {
    console.error('Error in syncUser:', error);
    return { error: error instanceof Error ? error.message : 'An unknown error occurred' };
  }
};
