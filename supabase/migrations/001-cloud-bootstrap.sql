-- ==============================================================================
-- Qubix ERP - Supabase Cloud Bootstrap Script
-- ==============================================================================
-- This script sets up a new Supabase Cloud project from scratch.
-- Run this entire script once in the Supabase SQL Editor.
-- It is idempotent and can be re-run if needed.
-- ==============================================================================


-- ==============================================================================
-- Function:  Sets up the basic tables for product and category management.
-- ==============================================================================

-- Create the table for product categories.
CREATE TABLE IF NOT EXISTS public.product_categories (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    name character varying NOT NULL,
    is_active boolean DEFAULT true,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz,
    CONSTRAINT product_categories_pkey PRIMARY KEY (id)
);

-- Create the table for products.
CREATE TABLE IF NOT EXISTS public.products (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    name character varying NOT NULL,
    description text,
    price numeric(10, 2) NOT NULL,
    sku character varying(50) NOT NULL,
    is_active boolean DEFAULT true,
    category_id uuid,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz,
    CONSTRAINT products_pkey PRIMARY KEY (id),
    CONSTRAINT products_sku_key UNIQUE (sku),
    CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.product_categories(id) ON DELETE SET NULL
);

-- ==============================================================================
-- Function:  Sets up the core tables for multi-tenancy (tenants, profiles).
-- ==============================================================================

-- Create the tenants table to isolate data between different users/organizations.
CREATE TABLE IF NOT EXISTS public.tenants (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    name text NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    CONSTRAINT tenants_pkey PRIMARY KEY (id)
);

-- Create the profiles table to store user-specific data, linked to auth.users and tenants.
CREATE TABLE IF NOT EXISTS public.profiles (
    id uuid NOT NULL,
    full_name text NULL,
    avatar_url text NULL,
    tenant_id uuid NULL,
    updated_at timestamptz NULL,
    CONSTRAINT profiles_pkey PRIMARY KEY (id),
    CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE,
    CONSTRAINT profiles_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE SET NULL
);


-- ==============================================================================
-- Function:  Implements Row Level Security (RLS) for multi-tenancy.
-- ==============================================================================

-- Create a helper function to securely get the tenant_id from a user's JWT.
CREATE OR REPLACE FUNCTION public.get_tenant_id()
RETURNS uuid
LANGUAGE sql
STABLE
AS $$
  SELECT NULLIF(current_setting('request.jwt.claims', TRUE)::jsonb ->> 'tenant_id', '')::uuid;
$$;

-- Enable Row Level Security on the profiles table.
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Allow authenticated users to view their own profile.
CREATE POLICY "Allow users to view their own profile" ON public.profiles
FOR SELECT TO authenticated USING (auth.uid() = id);

-- ==============================================================================
-- Function: handle_new_user
-- Description: Trigger function to automatically create a profile for a new user.
-- ==============================================================================
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$;

-- ==============================================================================
-- Trigger: on_auth_user_created
-- Description: Fires after a new user is inserted into auth.users.
-- ==============================================================================
create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- RLS Policy: Allow users to insert profiles only into their own tenant.
CREATE POLICY "Allow tenant members to insert profiles" ON public.profiles
FOR INSERT TO authenticated WITH CHECK (public.get_tenant_id() = tenant_id);

-- RLS Policy: Allow users to update profiles only within their own tenant.
CREATE POLICY "Allow tenant members to update profiles" ON public.profiles
FOR UPDATE TO authenticated USING (public.get_tenant_id() = tenant_id);

-- RLS Policy: Allow users to delete profiles only from their own tenant.
CREATE POLICY "Allow tenant members to delete profiles" ON public.profiles
FOR DELETE TO authenticated USING (public.get_tenant_id() = tenant_id);


-- ==============================================================================
-- Function:  Grants minimal, secure permissions for GraphQL codegen to work.
-- ==============================================================================

-- Grant USAGE permission on the public schema to the anon role.
-- This allows the role to "see" the schema exists.
GRANT USAGE ON SCHEMA public TO anon;

-- Grant SELECT permission on specific tables to the anon role.
-- This allows the GraphQL introspection query to see these tables.
GRANT SELECT ON TABLE public.profiles TO anon;
GRANT SELECT ON TABLE public.products TO anon;
GRANT SELECT ON TABLE public.product_categories TO anon;

-- Create a highly restrictive RLS policy for the anon role.
-- This is a critical security step. It allows the table to be visible for codegen,
-- but ensures the anon role can never actually retrieve any data rows.
CREATE POLICY "Allow anon introspection only on profiles" ON public.profiles
FOR SELECT TO anon USING (false);

CREATE POLICY "Allow anon introspection only on products" ON public.products
FOR SELECT TO anon USING (false);

CREATE POLICY "Allow anon introspection only on product_categories" ON public.product_categories
FOR SELECT TO anon USING (false);

-- ==============================================================================
-- End of Bootstrap Script
-- ==============================================================================
