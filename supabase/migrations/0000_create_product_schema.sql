-- Create custom types
CREATE TYPE public.unit_of_measure AS ENUM (
    'unit',
    'kg',
    'gram',
    'liter',
    'ml'
);

-- Create product_categories table
CREATE TABLE public.product_categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMPTZ WITH TIME ZONE DEFAULT NOW()
);

-- Create products table
CREATE TABLE public.products (
    product_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code TEXT UNIQUE,
    name TEXT NOT NULL,
    description TEXT,
    category_id UUID REFERENCES public.product_categories(id),
    unit_of_measure public.unit_of_measure NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    is_purchased BOOLEAN DEFAULT FALSE,
    is_sold BOOLEAN DEFAULT FALSE,
    purchase_price NUMERIC(10, 2) DEFAULT 0,
    selling_price NUMERIC(10, 2) DEFAULT 0,
    quantity INTEGER DEFAULT 0,
    reorder_point INTEGER DEFAULT 0,
    reorder_quantity INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMPTZ WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.product_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create policies for product_categories
CREATE POLICY "Allow authenticated users to read product categories" ON public.product_categories FOR SELECT TO authenticated USING (TRUE);
CREATE POLICY "Allow authenticated users to insert product categories" ON public.product_categories FOR INSERT TO authenticated WITH CHECK (TRUE);
CREATE POLICY "Allow authenticated users to update product categories" ON public.product_categories FOR UPDATE TO authenticated USING (TRUE);
CREATE POLICY "Allow authenticated users to delete product categories" ON public.product_categories FOR DELETE TO authenticated USING (TRUE);

-- Create policies for products
CREATE POLICY "Allow authenticated users to read products" ON public.products FOR SELECT TO authenticated USING (TRUE);
CREATE POLICY "Allow authenticated users to insert products" ON public.products FOR INSERT TO authenticated WITH CHECK (TRUE);
CREATE POLICY "Allow authenticated users to update products" ON public.products FOR UPDATE TO authenticated USING (TRUE);
CREATE POLICY "Allow authenticated users to delete products" ON public.products FOR DELETE TO authenticated USING (TRUE);

-- Function to update `updated_at` timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for product_categories
CREATE TRIGGER update_product_categories_updated_at
BEFORE UPDATE ON public.product_categories
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Trigger for products
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
