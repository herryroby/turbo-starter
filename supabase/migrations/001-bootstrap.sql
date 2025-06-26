-- ==============================================================================
-- SAAS ERP SYSTEM FOR UMKM INDONESIA
-- ==============================================================================
-- Modules: Financial, Accounting, Sales, Procurement, Inventory
-- Database: PostgreSQL (Supabase Cloud)
-- Target: Multi-industry UMKM Indonesia
--
-- This script sets up a new Supabase Cloud project from scratch.
-- Run this entire script once in the Supabase SQL Editor.
-- It is idempotent and can be re-run if needed.
-- ==============================================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ========================================
-- DROP TABLES (FOR RE-RUNNABILITY)
-- Order matters due to foreign key constraints
-- ========================================

DROP TABLE IF EXISTS journal_entry_lines CASCADE;
DROP TABLE IF EXISTS journal_entries CASCADE;
DROP TABLE IF EXISTS payment_allocations CASCADE;
DROP TABLE IF EXISTS payments CASCADE;
DROP TABLE IF EXISTS invoice_items CASCADE;
DROP TABLE IF EXISTS invoices CASCADE;
DROP TABLE IF EXISTS delivery_items CASCADE;
DROP TABLE IF EXISTS deliveries CASCADE;
DROP TABLE IF EXISTS sales_order_items CASCADE;
DROP TABLE IF EXISTS sales_orders CASCADE;
DROP TABLE IF EXISTS goods_receipt_items CASCADE;
DROP TABLE IF EXISTS goods_receipts CASCADE;
DROP TABLE IF EXISTS purchase_order_items CASCADE;
DROP TABLE IF EXISTS purchase_orders CASCADE;
DROP TABLE IF EXISTS stock_movements CASCADE;
DROP TABLE IF EXISTS inventory CASCADE;
DROP TABLE IF EXISTS bank_accounts CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS product_categories CASCADE;
DROP TABLE IF EXISTS suppliers CASCADE;
DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS warehouses CASCADE;
DROP TABLE IF EXISTS audit_logs CASCADE;
DROP TABLE IF EXISTS app_users CASCADE;
DROP TABLE IF EXISTS tenant_subscription_add_ons CASCADE;
DROP TABLE IF EXISTS tenants CASCADE;
DROP TABLE IF EXISTS subscription_plans CASCADE;
DROP TABLE IF EXISTS add_ons CASCADE;
DROP TABLE IF EXISTS role_permissions CASCADE;
DROP TABLE IF EXISTS permissions CASCADE;
DROP TABLE IF EXISTS roles CASCADE;
DROP TABLE IF EXISTS chart_of_accounts CASCADE;
DROP TABLE IF EXISTS unit_of_measures CASCADE; -- Added for new table


-- ========================================
-- CORE TENANT & USER MANAGEMENT
-- ========================================

-- Roles table (Global roles for all tenants)
CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(50) UNIQUE NOT NULL, -- e.g., 'Owner', 'Manager', 'Staff', 'Accountant'
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Permissions table (Global permissions)
CREATE TABLE permissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) UNIQUE NOT NULL, -- e.g., 'can_manage_products', 'can_view_reports'
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Role_Permissions junction table (Menghubungkan peran dengan izin)
CREATE TABLE role_permissions (
    role_id UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
    permission_id UUID NOT NULL REFERENCES permissions(id) ON DELETE CASCADE,
    PRIMARY KEY (role_id, permission_id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Subscription Plans table
CREATE TABLE subscription_plans (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(50) UNIQUE NOT NULL, -- e.g., 'Starter Pack', 'Growth Pack'
    description TEXT,
    base_price_monthly DECIMAL(15,2) NOT NULL,
    base_price_annually DECIMAL(15,2),
    max_users INTEGER,
    storage_gb INTEGER,
    features JSONB, -- e.g., {"modules": ["Product Management"], "ai": ["Weekly Summary"]}
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add-Ons table
CREATE TABLE add_ons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) UNIQUE NOT NULL, -- e.g., 'AI Product Insight', 'Whatsapp Integration'
    description TEXT,
    price_monthly DECIMAL(15,2) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tenants table (UMKM/Businesses) - Updated with subscription_plan_id
CREATE TABLE tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_name VARCHAR(255) NOT NULL,
    display_name VARCHAR(255) NOT NULL,
    subdomain VARCHAR(100) UNIQUE NOT NULL,
    business_type VARCHAR(50) NOT NULL, -- retail, manufacturing, service, trading, restaurant, etc
    industry VARCHAR(100), -- makanan, fashion, elektronik, jasa, dll
    tax_id VARCHAR(50), -- NPWP
    phone VARCHAR(20),
    email VARCHAR(255),
    address TEXT,
    city VARCHAR(100),
    province VARCHAR(100),
    postal_code VARCHAR(10),
    country VARCHAR(10) DEFAULT 'ID',
    currency VARCHAR(3) DEFAULT 'IDR',
    timezone VARCHAR(50) DEFAULT 'Asia/Jakarta',
    subscription_plan_id UUID REFERENCES subscription_plans(id), -- FK to subscription_plans
    subscription_status VARCHAR(20) DEFAULT 'active', -- active, suspended, cancelled, trial
    subscription_start_at TIMESTAMP WITH TIME ZONE,
    subscription_ends_at TIMESTAMP WITH TIME ZONE,
    last_billed_at TIMESTAMP WITH TIME ZONE,
    is_trial BOOLEAN DEFAULT FALSE,
    trial_ends_at TIMESTAMP WITH TIME ZONE,
    settings JSONB DEFAULT '{}',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tenant_Subscription_Add_Ons junction table (Menghubungkan tenant dengan add-on)
CREATE TABLE tenant_subscription_add_ons (
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    add_on_id UUID NOT NULL REFERENCES add_ons(id) ON DELETE CASCADE,
    PRIMARY KEY (tenant_id, add_on_id),
    activated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- App_Users table (Application-specific users, linked to Supabase auth.users)
-- Menambahkan kolom user_settings untuk preferensi pengguna
CREATE TABLE app_users (
    -- PENTING: Dalam lingkungan Supabase nyata, `id` ini HARUS merujuk ke `auth.users.id`.
    -- Untuk tujuan skrip contoh ini, foreign key sementara dihapus agar skrip dapat berjalan tanpa perlu mendaftar pengguna nyata.
    -- Jika Anda ingin mengaktifkan kembali foreign key ini, hapus komentar pada baris di bawah ini dan pastikan ID yang Anda masukkan ada di auth.users.
    -- id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    id UUID PRIMARY KEY, -- Removed REFERENCES auth.users(id) for sample data script execution
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL, -- Redundant dengan auth.users, tapi berguna untuk aplikasi
    full_name VARCHAR(255) NOT NULL,
    employee_id VARCHAR(50),
    position VARCHAR(100),
    department VARCHAR(100),
    phone VARCHAR(20),
    avatar_url TEXT,
    role_id UUID NOT NULL REFERENCES roles(id), -- FK ke peran global
    permissions JSONB DEFAULT '{}', -- Untuk override izin spesifik pengguna
    user_settings JSONB DEFAULT '{}', -- Kolom baru untuk menyimpan preferensi pengguna (misal: light/dark mode)
    last_login_at TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN DEFAULT true,
    is_super_admin BOOLEAN DEFAULT FALSE, -- New column to identify super administrators
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_email_per_tenant UNIQUE (tenant_id, email) -- Memastikan email unik dalam daftar pengguna tenant
);

-- Audit_Logs table (Untuk melacak semua perubahan penting dalam sistem)
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID, -- Removed NOT NULL and REFERENCES tenants(id) ON DELETE CASCADE
    user_id UUID REFERENCES app_users(id), -- Pengguna yang melakukan tindakan (NULL untuk tindakan sistem)
    action_type VARCHAR(50) NOT NULL, -- e.g., 'CREATE', 'UPDATE', 'DELETE', 'LOGIN'
    entity_type VARCHAR(50) NOT NULL, -- e.g., 'Product', 'Sales Order', 'AppUser'
    entity_id UUID, -- ID dari record yang terpengaruh (bisa UUID untuk sebagian besar tabel)
    old_value JSONB, -- Representasi JSON dari status entitas SEBELUM tindakan
    new_value JSONB, -- Representasi JSON dari status entitas SETELAH tindakan
    changed_fields TEXT[], -- Array nama kolom yang berubah (e.g., ['nama', 'harga'])
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    user_agent TEXT,
    details TEXT
);

-- ========================================
-- MASTER DATA
-- ========================================

-- Chart of Accounts (COA)
CREATE TABLE chart_of_accounts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    code VARCHAR(20) NOT NULL,
    name VARCHAR(255) NOT NULL,
    account_type VARCHAR(50) NOT NULL, -- asset, liability, equity, revenue, expense
    account_subtype VARCHAR(100), -- current_asset, fixed_asset, current_liability, etc
    parent_id UUID REFERENCES chart_of_accounts(id),
    level INTEGER DEFAULT 1,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_coa_code_per_tenant UNIQUE (tenant_id, code)
);

-- Customers
CREATE TABLE customers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    customer_code VARCHAR(50) NOT NULL,
    name VARCHAR(255) NOT NULL,
    company_name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    tax_id VARCHAR(50), -- NPWP customer
    address TEXT,
    city VARCHAR(100),
    province VARCHAR(100),
    postal_code VARCHAR(10),
    customer_type VARCHAR(50) DEFAULT 'individual', -- individual, company
    customer_group VARCHAR(100), -- VIP, regular, wholesale, retail
    credit_limit DECIMAL(15,2) DEFAULT 0,
    payment_terms INTEGER DEFAULT 0, -- days
    discount_percent DECIMAL(5,2) DEFAULT 0,
    notes TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_customer_code_per_tenant UNIQUE (tenant_id, customer_code)
);

-- Suppliers/Vendors
CREATE TABLE suppliers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    supplier_code VARCHAR(50) NOT NULL,
    name VARCHAR(255) NOT NULL,
    company_name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    tax_id VARCHAR(50),
    address TEXT,
    city VARCHAR(100),
    province VARCHAR(100),
    postal_code VARCHAR(10),
    supplier_type VARCHAR(100), -- raw_material, finished_goods, service
    payment_terms INTEGER DEFAULT 30, -- days
    currency VARCHAR(3) DEFAULT 'IDR',
    bank_name VARCHAR(100),
    bank_account VARCHAR(50),
    notes TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_supplier_code_per_tenant UNIQUE (tenant_id, supplier_code)
);

-- Product Categories
CREATE TABLE product_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    code VARCHAR(20) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    parent_id UUID REFERENCES product_categories(id),
    level INTEGER DEFAULT 1,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_category_code_per_tenant UNIQUE (tenant_id, code)
);

-- Unit of Measures table
CREATE TABLE unit_of_measures (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    name VARCHAR(50) NOT NULL, -- e.g., 'Pieces', 'Kilogram', 'Liter'
    abbreviation VARCHAR(10) NOT NULL UNIQUE, -- e.g., 'Pcs', 'Kg', 'Ltr'
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_uom_abbreviation_per_tenant UNIQUE (tenant_id, abbreviation)
);

-- Products - Updated to use unit_of_measure_id
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    category_id UUID REFERENCES product_categories(id),
    unit_of_measure_id UUID NOT NULL REFERENCES unit_of_measures(id), -- Changed from VARCHAR to UUID FK
    sku VARCHAR(100) NOT NULL,
    barcode VARCHAR(100),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    product_type VARCHAR(50) DEFAULT 'finished_goods', -- raw_material, work_in_progress, finished_goods, service
    cost_price DECIMAL(15,2) DEFAULT 0,
    selling_price DECIMAL(15,2) DEFAULT 0,
    minimum_stock DECIMAL(10,2) DEFAULT 0,
    maximum_stock DECIMAL(10,2),
    reorder_point DECIMAL(10,2),
    weight DECIMAL(8,3),
    dimensions VARCHAR(100),
    brand VARCHAR(100),
    warranty_period INTEGER, -- in months
    tax_rate DECIMAL(5,2) DEFAULT 0, -- PPN 11%
    image_url TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_sku_per_tenant UNIQUE (tenant_id, sku)
);

-- Warehouses/Locations
CREATE TABLE warehouses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    code VARCHAR(20) NOT NULL,
    name VARCHAR(255) NOT NULL,
    address TEXT,
    city VARCHAR(100),
    province VARCHAR(100),
    manager_name VARCHAR(255),
    phone VARCHAR(20),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- Added missing updated_at column
    CONSTRAINT unique_warehouse_code_per_tenant UNIQUE (tenant_id, code)
);

-- Bank Accounts
CREATE TABLE bank_accounts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    account_name VARCHAR(255) NOT NULL,
    bank_name VARCHAR(100) NOT NULL,
    account_number VARCHAR(100) NOT NULL,
    account_type VARCHAR(50) DEFAULT 'checking', -- savings, checking, credit
    currency VARCHAR(3) DEFAULT 'IDR',
    balance DECIMAL(15,2) DEFAULT 0,
    chart_of_account_id UUID REFERENCES chart_of_accounts(id), -- Link to COA (e.g., Cash in Bank)
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_bank_account_per_tenant UNIQUE (tenant_id, account_number)
);


-- ========================================
-- INVENTORY MANAGEMENT
-- ========================================

-- Stock/Inventory
CREATE TABLE inventory (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    warehouse_id UUID NOT NULL REFERENCES warehouses(id) ON DELETE CASCADE,
    quantity_on_hand DECIMAL(10,2) DEFAULT 0,
    quantity_reserved DECIMAL(10,2) DEFAULT 0,
    quantity_available DECIMAL(10,2) GENERATED ALWAYS AS (quantity_on_hand - quantity_reserved) STORED,
    average_cost DECIMAL(15,2) DEFAULT 0,
    last_transaction_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_product_warehouse UNIQUE (tenant_id, product_id, warehouse_id)
);

-- Stock Movements/Transactions
CREATE TABLE stock_movements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    warehouse_id UUID NOT NULL REFERENCES warehouses(id) ON DELETE CASCADE,
    movement_type VARCHAR(50) NOT NULL, -- in, out, adjustment, transfer
    transaction_type VARCHAR(50), -- purchase, sale, production, adjustment, opening_balance
    reference_type VARCHAR(50), -- purchase_order, sales_order, production_order, adjustment
    reference_id UUID,
    quantity DECIMAL(10,2) NOT NULL,
    unit_cost DECIMAL(15,2) DEFAULT 0,
    total_cost DECIMAL(15,2) DEFAULT 0,
    notes TEXT,
    transaction_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES app_users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ========================================
-- PROCUREMENT MODULE
-- ========================================

-- Purchase Orders
CREATE TABLE purchase_orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    po_number VARCHAR(50) NOT NULL,
    supplier_id UUID NOT NULL REFERENCES suppliers(id),
    warehouse_id UUID REFERENCES warehouses(id),
    order_date TIMESTAMP WITH TIME ZONE NOT NULL,
    expected_date TIMESTAMP WITH TIME ZONE,
    status VARCHAR(20) DEFAULT 'draft', -- draft, sent, confirmed, partial_received, received, cancelled
    subtotal DECIMAL(15,2) DEFAULT 0,
    discount_amount DECIMAL(15,2) DEFAULT 0,
    tax_amount DECIMAL(15,2) DEFAULT 0,
    total_amount DECIMAL(15,2) DEFAULT 0,
    currency VARCHAR(3) DEFAULT 'IDR',
    exchange_rate DECIMAL(10,4) DEFAULT 1,
    payment_terms INTEGER DEFAULT 30,
    notes TEXT,
    created_by UUID REFERENCES app_users(id),
    approved_by UUID REFERENCES app_users(id),
    approved_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_po_number_per_tenant UNIQUE (tenant_id, po_number)
);

-- Purchase Order Items
CREATE TABLE purchase_order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    purchase_order_id UUID NOT NULL REFERENCES purchase_orders(id) ON DELETE CASCADE,
    product_id UUID NOT NULL REFERENCES products(id),
    quantity DECIMAL(10,2) NOT NULL,
    unit_price DECIMAL(15,2) NOT NULL,
    discount_percent DECIMAL(5,2) DEFAULT 0,
    discount_amount DECIMAL(15,2) DEFAULT 0,
    tax_percent DECIMAL(5,2) DEFAULT 0,
    tax_amount DECIMAL(15,2) DEFAULT 0,
    total_amount DECIMAL(15,2) NOT NULL,
    quantity_received DECIMAL(10,2) DEFAULT 0,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Goods Receipts
CREATE TABLE goods_receipts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    receipt_number VARCHAR(50) NOT NULL,
    purchase_order_id UUID REFERENCES purchase_orders(id),
    supplier_id UUID NOT NULL REFERENCES suppliers(id),
    warehouse_id UUID NOT NULL REFERENCES warehouses(id),
    receipt_date TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(20) DEFAULT 'draft', -- draft, received, cancelled
    total_amount DECIMAL(15,2) DEFAULT 0,
    notes TEXT,
    received_by UUID REFERENCES app_users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- Added missing updated_at column
    CONSTRAINT unique_receipt_number_per_tenant UNIQUE (tenant_id, receipt_number)
);

-- Goods Receipt Items
CREATE TABLE goods_receipt_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    goods_receipt_id UUID NOT NULL REFERENCES goods_receipts(id) ON DELETE CASCADE,
    purchase_order_item_id UUID REFERENCES purchase_order_items(id),
    product_id UUID NOT NULL REFERENCES products(id),
    quantity_received DECIMAL(10,2) NOT NULL,
    unit_cost DECIMAL(15,2) NOT NULL,
    total_cost DECIMAL(15,2) NOT NULL,
    expiry_date TIMESTAMP WITH TIME ZONE,
    batch_number VARCHAR(50),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ========================================
-- SALES MODULE
-- ========================================

-- Sales Orders
CREATE TABLE sales_orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    order_number VARCHAR(50) NOT NULL,
    customer_id UUID NOT NULL REFERENCES customers(id),
    warehouse_id UUID REFERENCES warehouses(id),
    order_date TIMESTAMP WITH TIME ZONE NOT NULL,
    delivery_date TIMESTAMP WITH TIME ZONE,
    status VARCHAR(20) DEFAULT 'draft', -- draft, confirmed, partial_delivered, delivered, invoiced, cancelled
    subtotal DECIMAL(15,2) DEFAULT 0,
    discount_amount DECIMAL(15,2) DEFAULT 0,
    tax_amount DECIMAL(15,2) DEFAULT 0,
    total_amount DECIMAL(15,2) DEFAULT 0,
    shipping_cost DECIMAL(15,2) DEFAULT 0,
    grand_total DECIMAL(15,2) DEFAULT 0,
    currency VARCHAR(3) DEFAULT 'IDR',
    payment_terms INTEGER DEFAULT 0,
    sales_person UUID REFERENCES app_users(id),
    shipping_address TEXT,
    notes TEXT,
    created_by UUID REFERENCES app_users(id),
    approved_by UUID REFERENCES app_users(id),
    approved_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_order_number_per_tenant UNIQUE (tenant_id, order_number)
);

-- Sales Order Items
CREATE TABLE sales_order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    sales_order_id UUID NOT NULL REFERENCES sales_orders(id) ON DELETE CASCADE,
    product_id UUID NOT NULL REFERENCES products(id),
    quantity DECIMAL(10,2) NOT NULL,
    unit_price DECIMAL(15,2) NOT NULL,
    discount_percent DECIMAL(5,2) DEFAULT 0,
    discount_amount DECIMAL(15,2) DEFAULT 0,
    tax_percent DECIMAL(5,2) DEFAULT 0,
    tax_amount DECIMAL(15,2) DEFAULT 0,
    total_amount DECIMAL(15,2) NOT NULL,
    quantity_delivered DECIMAL(10,2) DEFAULT 0,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Deliveries
CREATE TABLE deliveries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    delivery_number VARCHAR(50) NOT NULL,
    sales_order_id UUID REFERENCES sales_orders(id),
    customer_id UUID NOT NULL REFERENCES customers(id),
    warehouse_id UUID NOT NULL REFERENCES warehouses(id),
    delivery_date TIMESTAMP WITH TIME ZONE NOT NULL,
    delivery_address TEXT,
    status VARCHAR(20) DEFAULT 'draft', -- draft, shipped, delivered, cancelled
    driver_name VARCHAR(255),
    vehicle_number VARCHAR(20),
    shipping_cost DECIMAL(15,2) DEFAULT 0,
    notes TEXT,
    delivered_by UUID REFERENCES app_users(id),
    delivered_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- Added missing updated_at column
    CONSTRAINT unique_delivery_number_per_tenant UNIQUE (tenant_id, delivery_number)
);

-- Delivery Items
CREATE TABLE delivery_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    delivery_id UUID NOT NULL REFERENCES deliveries(id) ON DELETE CASCADE,
    sales_order_item_id UUID REFERENCES sales_order_items(id),
    product_id UUID NOT NULL REFERENCES products(id),
    quantity_delivered DECIMAL(10,2) NOT NULL,
    unit_price DECIMAL(15,2) NOT NULL,
    total_amount DECIMAL(15,2) NOT NULL,
    batch_number VARCHAR(50),
    expiry_date TIMESTAMP WITH TIME ZONE,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ========================================
-- FINANCIAL & ACCOUNTING MODULE
-- ========================================

-- Invoices (Sales & Purchase)
CREATE TABLE invoices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    invoice_number VARCHAR(50) NOT NULL,
    invoice_type VARCHAR(20) NOT NULL, -- sales, purchase
    reference_type VARCHAR(50), -- sales_order, purchase_order, delivery, goods_receipt
    reference_id UUID,
    customer_id UUID REFERENCES customers(id),
    supplier_id UUID REFERENCES suppliers(id),
    invoice_date TIMESTAMP WITH TIME ZONE NOT NULL,
    due_date TIMESTAMP WITH TIME ZONE,
    status VARCHAR(20) DEFAULT 'draft', -- draft, sent, partial_paid, paid, overdue, cancelled
    subtotal DECIMAL(15,2) DEFAULT 0,
    discount_amount DECIMAL(15,2) DEFAULT 0,
    tax_amount DECIMAL(15,2) DEFAULT 0,
    total_amount DECIMAL(15,2) DEFAULT 0,
    paid_amount DECIMAL(15,2) DEFAULT 0,
    outstanding_amount DECIMAL(15,2) GENERATED ALWAYS AS (total_amount - paid_amount) STORED,
    currency VARCHAR(3) DEFAULT 'IDR',
    exchange_rate DECIMAL(10,4) DEFAULT 1,
    payment_terms INTEGER DEFAULT 30,
    notes TEXT,
    created_by UUID REFERENCES app_users(id),
    approved_by UUID REFERENCES app_users(id),
    approved_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_invoice_number_per_tenant UNIQUE (tenant_id, invoice_number)
);

-- Invoice Items
CREATE TABLE invoice_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    invoice_id UUID NOT NULL REFERENCES invoices(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id), -- Nullable if it's a service/non-product item
    account_id UUID NOT NULL REFERENCES chart_of_accounts(id), -- Revenue or Expense account
    description TEXT NOT NULL,
    quantity DECIMAL(10,2) DEFAULT 1,
    unit_price DECIMAL(15,2) NOT NULL,
    discount_percent DECIMAL(5,2) DEFAULT 0,
    discount_amount DECIMAL(15,2) DEFAULT 0,
    tax_percent DECIMAL(5,2) DEFAULT 0,
    tax_amount DECIMAL(15,2) DEFAULT 0,
    total_amount DECIMAL(15,2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Payments
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    payment_number VARCHAR(50) NOT NULL,
    payment_type VARCHAR(20) NOT NULL, -- received, paid
    customer_id UUID REFERENCES customers(id), -- Nullable if payment is for supplier
    supplier_id UUID REFERENCES suppliers(id), -- Nullable if payment is from customer
    payment_date TIMESTAMP WITH TIME ZONE NOT NULL,
    payment_method VARCHAR(50) NOT NULL, -- cash, bank_transfer, check, credit_card, e_wallet
    bank_account_id UUID REFERENCES bank_accounts(id),
    reference_number VARCHAR(100), -- Transaction ID, check number, etc.
    amount DECIMAL(15,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'IDR',
    exchange_rate DECIMAL(10,4) DEFAULT 1,
    notes TEXT,
    created_by UUID REFERENCES app_users(id),
    approved_by UUID REFERENCES app_users(id),
    approved_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP, -- Added missing updated_at column
    CONSTRAINT unique_payment_number_per_tenant UNIQUE (tenant_id, payment_number)
);

-- Payment Allocations (linking payments to invoices)
CREATE TABLE payment_allocations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    payment_id UUID NOT NULL REFERENCES payments(id) ON DELETE CASCADE,
    invoice_id UUID NOT NULL REFERENCES invoices(id) ON DELETE CASCADE,
    allocated_amount DECIMAL(15,2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Journal Entries
CREATE TABLE journal_entries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    entry_number VARCHAR(50) NOT NULL,
    entry_date TIMESTAMP WITH TIME ZONE NOT NULL,
    reference_type VARCHAR(50), -- manual, sales_invoice, purchase_invoice, payment_received, payment_paid, good_receipt, good_issue, etc
    reference_id UUID,
    description TEXT NOT NULL,
    total_debit DECIMAL(15,2) DEFAULT 0,
    total_credit DECIMAL(15,2) DEFAULT 0,
    status VARCHAR(20) DEFAULT 'draft', -- draft, posted, cancelled
    created_by UUID REFERENCES app_users(id),
    posted_by UUID REFERENCES app_users(id),
    posted_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_entry_number_per_tenant UNIQUE (tenant_id, entry_number)
);

-- Journal Entry Lines
CREATE TABLE journal_entry_lines (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES tenants(id) ON DELETE CASCADE,
    journal_entry_id UUID NOT NULL REFERENCES journal_entries(id) ON DELETE CASCADE,
    account_id UUID NOT NULL REFERENCES chart_of_accounts(id),
    description TEXT,
    debit_amount DECIMAL(15,2) DEFAULT 0,
    credit_amount DECIMAL(15,2) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ========================================
-- INDEXES FOR PERFORMANCE
-- ========================================

-- Tenant isolation indexes
CREATE INDEX idx_app_users_tenant_id ON app_users(tenant_id);
CREATE INDEX idx_chart_of_accounts_tenant_id ON chart_of_accounts(tenant_id);
CREATE INDEX idx_customers_tenant_id ON customers(tenant_id);
CREATE INDEX idx_suppliers_tenant_id ON suppliers(tenant_id);
CREATE INDEX idx_product_categories_tenant_id ON product_categories(tenant_id);
CREATE INDEX idx_products_tenant_id ON products(tenant_id);
CREATE INDEX idx_warehouses_tenant_id ON warehouses(tenant_id);
CREATE INDEX idx_inventory_tenant_id ON inventory(tenant_id);
CREATE INDEX idx_stock_movements_tenant_id ON stock_movements(tenant_id);
CREATE INDEX idx_purchase_orders_tenant_id ON purchase_orders(tenant_id);
CREATE INDEX idx_purchase_order_items_tenant_id ON purchase_order_items(tenant_id);
CREATE INDEX idx_goods_receipts_tenant_id ON goods_receipts(tenant_id);
CREATE INDEX idx_goods_receipt_items_tenant_id ON goods_receipt_items(tenant_id);
CREATE INDEX idx_sales_orders_tenant_id ON sales_orders(tenant_id);
CREATE INDEX idx_sales_order_items_tenant_id ON sales_order_items(tenant_id);
CREATE INDEX idx_deliveries_tenant_id ON deliveries(tenant_id);
CREATE INDEX idx_delivery_items_tenant_id ON delivery_items(tenant_id);
CREATE INDEX idx_invoices_tenant_id ON invoices(tenant_id);
CREATE INDEX idx_invoice_items_tenant_id ON invoice_items(tenant_id);
CREATE INDEX idx_payments_tenant_id ON payments(tenant_id);
CREATE INDEX idx_payment_allocations_tenant_id ON payment_allocations(tenant_id);
CREATE INDEX idx_journal_entries_tenant_id ON journal_entries(tenant_id);
CREATE INDEX idx_journal_entry_lines_tenant_id ON journal_entry_lines(tenant_id);
CREATE INDEX idx_bank_accounts_tenant_id ON bank_accounts(tenant_id);
CREATE INDEX idx_audit_logs_tenant_id ON audit_logs(tenant_id);
CREATE INDEX idx_tenant_subscription_add_ons_tenant_id ON tenant_subscription_add_ons(tenant_id);
CREATE INDEX idx_unit_of_measures_tenant_id ON unit_of_measures(tenant_id); -- Added for new table


-- Business logic indexes
CREATE INDEX idx_products_sku ON products(tenant_id, sku);
CREATE INDEX idx_customers_code ON customers(tenant_id, customer_code);
CREATE INDEX idx_suppliers_code ON suppliers(tenant_id, supplier_code);
CREATE INDEX idx_inventory_product_warehouse ON inventory(tenant_id, product_id, warehouse_id);
CREATE INDEX idx_stock_movements_product_date ON stock_movements(tenant_id, product_id, transaction_date);
CREATE INDEX idx_sales_orders_customer_date ON sales_orders(tenant_id, customer_id, order_date);
CREATE INDEX idx_purchase_orders_supplier_date ON purchase_orders(tenant_id, supplier_id, order_date);
CREATE INDEX idx_invoices_date_status ON invoices(tenant_id, invoice_date, status);
CREATE INDEX idx_payments_date ON payments(tenant_id, payment_date);
CREATE INDEX idx_journal_entries_date_status ON journal_entries(tenant_id, entry_date, status);
CREATE INDEX idx_journal_entry_lines_account ON journal_entry_lines(tenant_id, account_id);
CREATE INDEX idx_invoices_reference ON invoices(tenant_id, reference_type, reference_id);
CREATE INDEX idx_payments_customer_supplier ON payments(tenant_id, customer_id, supplier_id);
CREATE INDEX idx_sales_orders_status_delivery_date ON sales_orders(tenant_id, status, delivery_date);
CREATE INDEX idx_purchase_orders_status_expected_date ON purchase_orders(tenant_id, status, expected_date);
CREATE INDEX idx_goods_receipts_po_id ON goods_receipts(tenant_id, purchase_order_id);
CREATE INDEX idx_deliveries_so_id ON deliveries(tenant_id, sales_order_id);
CREATE INDEX idx_audit_logs_user_action ON audit_logs(tenant_id, user_id, action_type);
CREATE INDEX idx_audit_logs_entity_type_id ON audit_logs(tenant_id, entity_type, entity_id);
CREATE INDEX idx_unit_of_measures_abbreviation ON unit_of_measures(tenant_id, abbreviation); -- Added for new table

-- ========================================
-- ROW LEVEL SECURITY (RLS)
-- ========================================

-- Enable RLS on all tenant-specific tables
ALTER TABLE tenants ENABLE ROW LEVEL SECURITY;
ALTER TABLE app_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE chart_of_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE suppliers ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE warehouses ENABLE ROW LEVEL SECURITY;
ALTER TABLE inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE stock_movements ENABLE ROW LEVEL SECURITY;
ALTER TABLE purchase_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE purchase_order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE goods_receipts ENABLE ROW LEVEL SECURITY;
ALTER TABLE goods_receipt_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE sales_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE sales_order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE deliveries ENABLE ROW LEVEL SECURITY;
ALTER TABLE delivery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoice_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE bank_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_allocations ENABLE ROW LEVEL SECURITY;
ALTER TABLE journal_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE journal_entry_lines ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE tenant_subscription_add_ons ENABLE ROW LEVEL SECURITY;
ALTER TABLE unit_of_measures ENABLE ROW LEVEL SECURITY; -- Added for new table


-- Note: RLS on global tables (roles, permissions, subscription_plans, add_ons)
-- is usually more permissive for 'SELECT' for authenticated users,
-- but restricted for 'INSERT/UPDATE/DELETE' (e.g., only by admin functions/service_role).

CREATE POLICY select_global_master_data ON roles
    FOR SELECT TO authenticated
    USING (true);
CREATE POLICY select_global_master_data ON permissions
    FOR SELECT TO authenticated
    USING (true);
CREATE POLICY select_global_master_data ON subscription_plans
    FOR SELECT TO authenticated
    USING (true);
CREATE POLICY select_global_master_data ON add_ons
    FOR SELECT TO authenticated
    USING (true);
-- Modify permissions/roles/subscription_plans/add_ons can be restricted to service_role or admin user via functions
-- For simplicity, we'll keep it globally readable but not modifiable by general users via RLS.

-- Fungsi untuk memeriksa apakah pengguna saat ini adalah super admin
CREATE OR REPLACE FUNCTION is_current_user_super_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER -- SECURITY DEFINER agar fungsi dapat membaca app_users terlepas dari RLS pada tabel itu
AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1
        FROM public.app_users -- Gunakan `public.app_users` untuk memastikan akses ke tabel di luar skema RLS saat ini
        WHERE id = auth.uid()
          AND is_super_admin = TRUE
    );
END;
$$;

-- RLS Policies for tenant isolation (ensure all tables are covered)
-- Kebijakan untuk tabel 'tenants' biasanya lebih ketat, seringkali hanya 'service_role' atau fungsi tertentu yang dapat mengelola tenants.
-- Untuk kesederhanaan, asumsikan pengguna 'authenticated' dapat melihat detail tenant mereka sendiri.
CREATE POLICY tenant_isolation_tenants ON tenants
    FOR SELECT TO authenticated
    USING (id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

-- Kebijakan untuk INSERT pada tabel tenants (hanya untuk super admin atau proses pendaftaran)
CREATE POLICY allow_tenant_signup ON tenants
    FOR INSERT TO public
    WITH CHECK (true); -- Ini sangat permisif, biasanya dibatasi oleh fungsi/sistem otentikasi

CREATE POLICY tenant_isolation_app_users ON app_users
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_chart_of_accounts ON chart_of_accounts
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_customers ON customers
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_suppliers ON suppliers
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_product_categories ON product_categories
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_products ON products
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_warehouses ON warehouses
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_inventory ON inventory
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_stock_movements ON stock_movements
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_purchase_orders ON purchase_orders
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_purchase_order_items ON purchase_order_items
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_goods_receipts ON goods_receipts
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_goods_receipt_items ON goods_receipt_items
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_sales_orders ON sales_orders
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_sales_order_items ON sales_order_items
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_deliveries ON deliveries
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_delivery_items ON delivery_items
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_invoices ON invoices
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_invoice_items ON invoice_items
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_payments ON payments
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_bank_accounts ON bank_accounts
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_payment_allocations ON payment_allocations
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_journal_entries ON journal_entries
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_journal_entry_lines ON journal_entry_lines
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

-- Kebijakan RLS untuk audit_logs (hanya bisa dibaca oleh pengguna tenant terkait atau super admin)
CREATE POLICY tenant_isolation_audit_logs ON audit_logs
    FOR SELECT TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

-- Untuk audit_logs, INSERT sebaiknya dari trigger atau fungsi terpercaya, bukan akses langsung pengguna.
-- POLICY ini memungkinkan trigger untuk menulis.
CREATE POLICY allow_insert_audit_logs_by_triggers ON audit_logs
    FOR INSERT TO public -- Ini biasanya dilakukan melalui fungsi yang memiliki 'SECURITY DEFINER'
    WITH CHECK (true);

CREATE POLICY tenant_isolation_tenant_subscription_add_ons ON tenant_subscription_add_ons
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

CREATE POLICY tenant_isolation_unit_of_measures ON unit_of_measures -- Added for new table
    FOR ALL TO authenticated
    USING (tenant_id = (SELECT tenant_id FROM app_users WHERE app_users.id = auth.uid()) OR is_current_user_super_admin());

-- ==============================================================================
-- Grant USAGE on schema and SELECT on tables for anon role (for GraphQL)
-- ==============================================================================
-- This allows PostgREST/GraphQL to see the tables and expose them via the API.
-- The RLS policies below will prevent any data from actually being returned.

-- Grant usage on the public schema to the anon role
GRANT USAGE ON SCHEMA public TO anon;

-- Grant select on all tables in the public schema to the anon role
-- This is necessary for the GraphQL introspection to see the table structure.
GRANT SELECT ON ALL TABLES IN SCHEMA public TO anon;

-- Add RLS policies for the 'anon' role to prevent data leakage.
-- The `USING (false)` clause ensures that no rows are ever returned to the anon role,
-- while still allowing the schema to be introspected for code generation.

CREATE POLICY "Allow anon select on products for introspection"
ON "public"."products"
AS PERMISSIVE FOR SELECT
TO anon
USING (false);

CREATE POLICY "Allow anon select on product_categories for introspection"
ON "public"."product_categories"
AS PERMISSIVE FOR SELECT
TO anon
USING (false);

CREATE POLICY "Allow anon select on unit_of_measures for introspection"
ON "public"."unit_of_measures"
AS PERMISSIVE FOR SELECT
TO anon
USING (false);

-- You might also want to add policies for other tables if you need their schema to be introspected by anonymous users for client-side code generation,
-- but ensure that USING(false) or other restrictive conditions are always applied to prevent data exposure.


-- ========================================
-- TRIGGERS & FUNCTIONS
-- ========================================

-- Function untuk memperbarui kolom updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Tambahkan triggers untuk updated_at (pastikan semua tabel yang relevan dicakup)
CREATE TRIGGER update_tenants_updated_at BEFORE UPDATE ON tenants FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_app_users_updated_at BEFORE UPDATE ON app_users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON customers FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_suppliers_updated_at BEFORE UPDATE ON suppliers FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_product_categories_updated_at BEFORE UPDATE ON product_categories FOR EACH ROW EXECUTE FUNCTION update_updated_at_column(); -- Added for completeness
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_warehouses_updated_at BEFORE UPDATE ON warehouses FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_bank_accounts_updated_at BEFORE UPDATE ON bank_accounts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_inventory_updated_at BEFORE UPDATE ON inventory FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_purchase_orders_updated_at BEFORE UPDATE ON purchase_orders FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_goods_receipts_updated_at BEFORE UPDATE ON goods_receipts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column(); -- Added for completeness
CREATE TRIGGER update_sales_orders_updated_at BEFORE UPDATE ON sales_orders FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_deliveries_updated_at BEFORE UPDATE ON deliveries FOR EACH ROW EXECUTE FUNCTION update_updated_at_column(); -- Added for completeness
CREATE TRIGGER update_invoices_updated_at BEFORE UPDATE ON invoices FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_payments_updated_at BEFORE UPDATE ON payments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_roles_updated_at BEFORE UPDATE ON roles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_permissions_updated_at BEFORE UPDATE ON permissions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_subscription_plans_updated_at BEFORE UPDATE ON subscription_plans FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_add_ons_updated_at BEFORE UPDATE ON add_ons FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_unit_of_measures_updated_at BEFORE UPDATE ON unit_of_measures FOR EACH ROW EXECUTE FUNCTION update_updated_at_column(); -- Added for new table


-- Function untuk memperbarui inventaris setelah pergerakan stok (perbaikan perhitungan biaya rata-rata)
CREATE OR REPLACE FUNCTION update_inventory_from_stock_movement()
RETURNS TRIGGER AS $$
DECLARE
    l_current_qty DECIMAL(10,2);
    l_current_avg_cost DECIMAL(15,2);
    l_updated_qty DECIMAL(10,2);
    l_updated_avg_cost DECIMAL(15,2);
BEGIN
    -- Dapatkan kuantitas dan biaya rata-rata saat ini
    SELECT quantity_on_hand, average_cost INTO l_current_qty, l_current_avg_cost
    FROM inventory
    WHERE tenant_id = NEW.tenant_id
      AND product_id = NEW.product_id
      AND warehouse_id = NEW.warehouse_id;

    -- Jika tidak ada record inventaris yang ada, inisialisasi
    IF l_current_qty IS NULL THEN
        l_current_qty = 0;
        l_current_avg_cost = 0;
    END IF;

    -- Hitung kuantitas baru berdasarkan tipe pergerakan
    IF NEW.movement_type = 'in' THEN
        l_updated_qty = l_current_qty + NEW.quantity;
        -- Hitung biaya rata-rata baru untuk pergerakan 'in' (rata-rata tertimbang)
        IF NEW.unit_cost > 0 AND l_updated_qty > 0 THEN
            l_updated_avg_cost = ((l_current_qty * l_current_avg_cost) + (NEW.quantity * NEW.unit_cost)) / l_updated_qty;
        ELSE
            l_updated_avg_cost = l_current_avg_cost; -- Jika tidak ada biaya atau kuantitas, pertahankan rata-rata saat ini
        END IF;
    ELSE -- 'out', 'adjustment' (mengurangi stok)
        l_updated_qty = l_current_qty - NEW.quantity;
        -- Untuk pergerakan 'out', biaya rata-rata biasanya tidak langsung berubah di sini,
        -- biasanya diterapkan pada perhitungan HPP. Kita hanya akan mempertahankan rata-rata yang ada.
        l_updated_avg_cost = l_current_avg_cost;
    END IF;

    -- Perbarui atau masukkan record inventaris
    INSERT INTO inventory (tenant_id, product_id, warehouse_id, quantity_on_hand, average_cost, last_transaction_at)
    VALUES (NEW.tenant_id, NEW.product_id, NEW.warehouse_id, l_updated_qty, l_updated_avg_cost, NEW.transaction_date)
    ON CONFLICT (tenant_id, product_id, warehouse_id)
    DO UPDATE SET
        quantity_on_hand = EXCLUDED.quantity_on_hand,
        average_cost = EXCLUDED.average_cost,
        last_transaction_at = EXCLUDED.last_transaction_at,
        updated_at = CURRENT_TIMESTAMP;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_inventory_from_stock_movement
    AFTER INSERT OR UPDATE OF quantity, movement_type ON stock_movements
    FOR EACH ROW EXECUTE FUNCTION update_inventory_from_stock_movement();


-- Function untuk memperbarui total jumlah untuk Sales Orders
CREATE OR REPLACE FUNCTION update_sales_order_totals()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE sales_orders
    SET
        subtotal = (SELECT COALESCE(SUM(total_amount - tax_amount), 0) FROM sales_order_items WHERE sales_order_id = NEW.sales_order_id),
        discount_amount = (SELECT COALESCE(SUM(discount_amount), 0) FROM sales_order_items WHERE sales_order_id = NEW.sales_order_id),
        tax_amount = (SELECT COALESCE(SUM(tax_amount), 0) FROM sales_order_items WHERE sales_order_id = NEW.sales_order_id),
        total_amount = (SELECT COALESCE(SUM(total_amount), 0) FROM sales_order_items WHERE sales_order_id = NEW.sales_order_id),
        grand_total = (SELECT COALESCE(SUM(total_amount), 0) FROM sales_order_items WHERE sales_order_id = NEW.sales_order_id) + sales_orders.shipping_cost
    WHERE id = NEW.sales_order_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_sales_order_totals
AFTER INSERT OR UPDATE OR DELETE ON sales_order_items
FOR EACH ROW EXECUTE FUNCTION update_sales_order_totals();


-- Function untuk memperbarui total jumlah untuk Purchase Orders
CREATE OR REPLACE FUNCTION update_purchase_order_totals()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE purchase_orders
    SET
        subtotal = (SELECT COALESCE(SUM(total_amount - tax_amount), 0) FROM purchase_order_items WHERE purchase_order_id = NEW.purchase_order_id),
        discount_amount = (SELECT COALESCE(SUM(discount_amount), 0) FROM purchase_order_items WHERE purchase_order_id = NEW.purchase_order_id),
        tax_amount = (SELECT COALESCE(SUM(tax_amount), 0) FROM purchase_order_items WHERE purchase_order_id = NEW.purchase_order_id),
        total_amount = (SELECT COALESCE(SUM(total_amount), 0) FROM purchase_order_items WHERE purchase_order_id = NEW.purchase_order_id)
    WHERE id = NEW.purchase_order_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_purchase_order_totals
AFTER INSERT OR UPDATE OR DELETE ON purchase_order_items
FOR EACH ROW EXECUTE FUNCTION update_purchase_order_totals();


-- Function untuk memperbarui total jumlah untuk Invoices
CREATE OR REPLACE FUNCTION update_invoice_totals()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE invoices
    SET
        subtotal = (SELECT COALESCE(SUM(total_amount - tax_amount), 0) FROM invoice_items WHERE invoice_id = NEW.invoice_id),
        discount_amount = (SELECT COALESCE(SUM(discount_amount), 0) FROM invoice_items WHERE invoice_id = NEW.invoice_id),
        tax_amount = (SELECT COALESCE(SUM(tax_amount), 0) FROM invoice_items WHERE invoice_id = NEW.invoice_id),
        total_amount = (SELECT COALESCE(SUM(total_amount), 0) FROM invoice_items WHERE invoice_id = NEW.invoice_id)
    WHERE id = NEW.invoice_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_invoice_totals
AFTER INSERT OR UPDATE OR DELETE ON invoice_items
FOR EACH ROW EXECUTE FUNCTION update_invoice_totals();


-- Function untuk memperbarui jumlah terbayar dan status faktur setelah alokasi pembayaran
CREATE OR REPLACE FUNCTION update_invoice_payment_status()
RETURNS TRIGGER AS $$
DECLARE
    l_total_paid DECIMAL(15,2);
    l_total_invoice DECIMAL(15,2);
BEGIN
    -- Hitung total jumlah yang dialokasikan untuk faktur
    SELECT COALESCE(SUM(allocated_amount), 0) INTO l_total_paid
    FROM payment_allocations
    WHERE invoice_id = NEW.invoice_id;

    -- Dapatkan total jumlah faktur
    SELECT total_amount INTO l_total_invoice
    FROM invoices
    WHERE id = NEW.invoice_id;

    -- Perbarui jumlah terbayar dan status faktur
    UPDATE invoices
    SET
        paid_amount = l_total_paid,
        status = CASE
            WHEN l_total_paid >= l_total_invoice THEN 'paid'
            WHEN l_total_paid > 0 AND l_total_paid < l_total_invoice THEN 'partial_paid'
            ELSE 'sent' -- Asumsi 'sent' adalah status setelah dibuat dan sebelum ada pembayaran
        END
    WHERE id = NEW.invoice_id;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_invoice_payment_status
AFTER INSERT OR UPDATE OR DELETE ON payment_allocations
FOR EACH ROW EXECUTE FUNCTION update_invoice_payment_status();

-- Function untuk memperbarui total debit/kredit di header jurnal setelah perubahan baris
CREATE OR REPLACE FUNCTION update_journal_entry_header_totals()
RETURNS TRIGGER AS $$
DECLARE
    l_debit_sum DECIMAL(15,2);
    l_credit_sum DECIMAL(15,2);
    l_je_id UUID;
BEGIN
    -- Determine which journal_entry_id to operate on
    IF TG_OP = 'DELETE' THEN
        l_je_id := OLD.journal_entry_id;
    ELSE
        l_je_id := NEW.journal_entry_id;
    END IF;

    -- Sum debits and credits for the specific journal entry
    SELECT COALESCE(SUM(debit_amount), 0), COALESCE(SUM(credit_amount), 0)
    INTO l_debit_sum, l_credit_sum
    FROM journal_entry_lines
    WHERE journal_entry_id = l_je_id;

    -- Update total_debit and total_credit in the journal_entries header
    UPDATE journal_entries
    SET
        total_debit = l_debit_sum,
        total_credit = l_credit_sum
    WHERE id = l_je_id;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Pemicu untuk memanggil fungsi update_journal_entry_header_totals
CREATE TRIGGER trigger_update_journal_entry_header_totals
AFTER INSERT OR UPDATE OR DELETE ON journal_entry_lines
FOR EACH ROW EXECUTE FUNCTION update_journal_entry_header_totals();

-- Function untuk memastikan saldo debit dan kredit entri jurnal seimbang saat status diatur ke 'posted'
CREATE OR REPLACE FUNCTION validate_journal_entry_on_post()
RETURNS TRIGGER AS $$
BEGIN
    -- Hanya periksa saldo ketika status diatur ke 'posted'
    -- atau jika operasi adalah INSERT dan status awalnya sudah 'posted'
    IF NEW.status = 'posted' AND (OLD.status IS DISTINCT FROM NEW.status OR TG_OP = 'INSERT') THEN
        -- total_debit dan total_credit di NEW sudah diperbarui oleh trigger sebelumnya (AFTER INSERT/UPDATE/DELETE on journal_entry_lines)
        IF NEW.total_debit IS DISTINCT FROM NEW.total_credit THEN
            RAISE EXCEPTION 'Journal entry must balance before posting (Debit: %, Credit: %)', NEW.total_debit, NEW.total_credit;
        END IF;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Pemicu untuk memanggil fungsi validate_journal_entry_on_post
CREATE TRIGGER trigger_validate_journal_entry_on_post
BEFORE INSERT OR UPDATE ON journal_entries
FOR EACH ROW
WHEN (NEW.status = 'posted') -- Hanya picu saat status menjadi 'posted'
EXECUTE FUNCTION validate_journal_entry_on_post();


-- Function for Audit Logging (Generic)
CREATE OR REPLACE FUNCTION log_audit_change()
RETURNS TRIGGER AS $$
DECLARE
    l_old_data JSONB;
    l_new_data JSONB;
    l_changed_fields TEXT[];
    l_user_id UUID;
    l_acting_tenant_id UUID; -- Tenant ID of the user performing the action
    l_affected_tenant_id UUID; -- Tenant ID related to the data being audited (can be NULL if global)
    v_table_has_tenant_id BOOLEAN;
    SYSTEM_TENANT_ID CONSTANT UUID := '00000000-0000-0000-0000-000000000000'; -- Placeholder for system/global actions
BEGIN
    -- Dapatkan ID pengguna saat ini dari konteks Supabase Auth
    -- auth.uid() mengembalikan UUID dari pengguna yang diautentikasi di Supabase.
    SELECT auth.uid() INTO l_user_id;

    -- Dapatkan tenant_id dari pengguna yang melakukan tindakan, jika pengguna terhubung dengan tenant melalui app_users.
    IF l_user_id IS NOT NULL THEN
        SELECT tenant_id INTO l_acting_tenant_id FROM app_users WHERE id = l_user_id;
    END IF;

    -- Periksa apakah tabel yang memicu trigger memiliki kolom 'tenant_id'.
    -- Ini memungkinkan fungsi untuk menangani tabel global (tanpa tenant_id) dan tabel tenant-spesifik.
    SELECT EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_schema = TG_TABLE_SCHEMA
          AND table_name = TG_RELNAME -- TG_RELNAME adalah nama tabel yang lebih aman daripada TG_TABLE_NAME untuk kasus tertentu
          AND column_name = 'tenant_id'
    ) INTO v_table_has_tenant_id;

    IF v_table_has_tenant_id THEN
        -- Jika tabel memiliki kolom 'tenant_id', gunakan nilai dari record yang berubah (NEW/OLD).
        IF TG_OP = 'DELETE' THEN
            l_affected_tenant_id := OLD.tenant_id;
        ELSE
            l_affected_tenant_id := NEW.tenant_id;
        END IF;
    ELSE
        -- Jika tabel tidak memiliki kolom 'tenant_id' (tabel global),
        -- gunakan tenant_id dari pengguna yang melakukan tindakan.
        -- Jika tidak ada pengguna yang login (l_acting_tenant_id NULL), gunakan NULL.
        l_affected_tenant_id := COALESCE(l_acting_tenant_id, NULL);
    END IF;

    -- Tangani INSERT
    IF TG_OP = 'INSERT' THEN
        l_old_data := NULL;
        l_new_data := to_jsonb(NEW);
        l_changed_fields := ARRAY(SELECT jsonb_object_keys(l_new_data));
        INSERT INTO audit_logs (tenant_id, user_id, action_type, entity_type, entity_id, old_value, new_value, changed_fields)
        VALUES (l_affected_tenant_id, l_user_id, 'CREATE', TG_RELNAME, NEW.id, l_old_data, l_new_data, l_changed_fields);

    -- Tangani UPDATE
    ELSIF TG_OP = 'UPDATE' THEN
        l_old_data := to_jsonb(OLD);
        l_new_data := to_jsonb(NEW);

        -- Mengidentifikasi kolom yang berubah
        SELECT ARRAY_AGG(key)
        INTO l_changed_fields
        FROM (
            -- Keys present in NEW and either not in OLD or have different values
            SELECT new_kv.key
            FROM jsonb_each_text(l_new_data) AS new_kv(key, value)
            WHERE (l_old_data->>new_kv.key IS DISTINCT FROM new_kv.value)
            UNION
            -- Keys present in OLD but not in NEW (deleted keys)
            SELECT old_kv.key
            FROM jsonb_each_text(l_old_data) AS old_kv(key, value)
            WHERE NOT (l_new_data ? old_kv.key)
        ) AS changed_keys_subquery;

        -- Hanya log jika ada perubahan yang sebenarnya
        IF l_changed_fields IS NOT NULL AND array_length(l_changed_fields, 1) > 0 THEN
            INSERT INTO audit_logs (tenant_id, user_id, action_type, entity_type, entity_id, old_value, new_value, changed_fields)
            VALUES (l_affected_tenant_id, l_user_id, 'UPDATE', TG_RELNAME, NEW.id, l_old_data, l_new_data, l_changed_fields);
        END IF;

    -- Tangani DELETE
    ELSIF TG_OP = 'DELETE' THEN
        l_old_data := to_jsonb(OLD);
        l_new_data := NULL;
        l_changed_fields := ARRAY(SELECT jsonb_object_keys(l_old_data));
        INSERT INTO audit_logs (tenant_id, user_id, action_type, entity_type, entity_id, old_value, new_value, changed_fields)
        VALUES (l_affected_tenant_id, l_user_id, 'DELETE', TG_RELNAME, OLD.id, l_old_data, l_new_data, l_changed_fields);
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER; -- SECURITY DEFINER memungkinkan pemicu untuk menulis ke audit_logs bahkan jika pengguna tidak memiliki izin langsung.

-- Audit Triggers (diterapkan pada tabel-tabel sensitif/penting)
CREATE TRIGGER audit_tenants AFTER INSERT OR UPDATE OR DELETE ON tenants FOR EACH ROW EXECUTE FUNCTION log_audit_change();
CREATE TRIGGER audit_app_users AFTER INSERT OR UPDATE OR DELETE ON app_users FOR EACH ROW EXECUTE FUNCTION log_audit_change();
CREATE TRIGGER audit_customers AFTER INSERT OR UPDATE OR DELETE ON customers FOR EACH ROW EXECUTE FUNCTION log_audit_change();
CREATE TRIGGER audit_suppliers AFTER INSERT OR UPDATE OR DELETE ON suppliers FOR EACH ROW EXECUTE FUNCTION log_audit_change();
CREATE TRIGGER audit_product_categories AFTER INSERT OR UPDATE OR DELETE ON product_categories FOR EACH ROW EXECUTE FUNCTION log_audit_change(); -- Added for completeness
CREATE TRIGGER audit_unit_of_measures AFTER INSERT OR UPDATE OR DELETE ON unit_of_measures FOR EACH ROW EXECUTE FUNCTION log_audit_change(); -- Added for new table
CREATE TRIGGER audit_products AFTER INSERT OR UPDATE OR DELETE ON products FOR EACH ROW EXECUTE FUNCTION log_audit_change();
CREATE TRIGGER audit_warehouses AFTER INSERT OR UPDATE OR DELETE ON warehouses FOR EACH ROW EXECUTE FUNCTION log_audit_change();
CREATE TRIGGER audit_inventory AFTER INSERT OR UPDATE OR DELETE ON inventory FOR EACH ROW EXECUTE FUNCTION log_audit_change();
CREATE TRIGGER audit_stock_movements AFTER INSERT OR UPDATE OR DELETE ON stock_movements FOR EACH ROW EXECUTE FUNCTION log_audit_change(); -- Added for completeness
CREATE TRIGGER audit_purchase_orders AFTER INSERT OR UPDATE OR DELETE ON purchase_orders FOR EACH ROW EXECUTE FUNCTION log_audit_change();
CREATE TRIGGER audit_purchase_order_items AFTER INSERT OR UPDATE OR DELETE ON purchase_order_items FOR EACH ROW EXECUTE FUNCTION log_audit_change(); -- Added for completeness
CREATE TRIGGER audit_goods_receipts AFTER INSERT OR UPDATE OR DELETE ON goods_receipts FOR EACH ROW EXECUTE FUNCTION log_audit_change();
CREATE TRIGGER audit_goods_receipt_items AFTER INSERT OR UPDATE OR DELETE ON goods_receipt_items FOR EACH ROW EXECUTE FUNCTION log_audit_change(); -- Added for completeness
CREATE TRIGGER audit_sales_orders AFTER INSERT OR UPDATE OR DELETE ON sales_orders FOR EACH ROW EXECUTE FUNCTION log_audit_change();
CREATE TRIGGER audit_sales_order_items AFTER INSERT OR UPDATE OR DELETE ON sales_order_items FOR EACH ROW EXECUTE FUNCTION log_audit_change(); -- Added for completeness
CREATE TRIGGER audit_deliveries AFTER INSERT OR UPDATE OR DELETE ON deliveries FOR EACH ROW EXECUTE FUNCTION log_audit_change();
CREATE TRIGGER audit_delivery_items AFTER INSERT OR UPDATE OR DELETE ON delivery_items FOR EACH ROW EXECUTE FUNCTION log_audit_change(); -- Added for completeness
CREATE TRIGGER audit_invoices AFTER INSERT OR UPDATE OR DELETE ON invoices FOR EACH ROW EXECUTE FUNCTION log_audit_change();
CREATE TRIGGER audit_invoice_items AFTER INSERT OR UPDATE OR DELETE ON invoice_items FOR EACH ROW EXECUTE FUNCTION log_audit_change(); -- Added for completeness
CREATE TRIGGER audit_payments AFTER INSERT OR UPDATE OR DELETE ON payments FOR EACH ROW EXECUTE FUNCTION log_audit_change();
CREATE TRIGGER audit_payment_allocations AFTER INSERT OR UPDATE OR DELETE ON payment_allocations FOR EACH ROW EXECUTE FUNCTION log_audit_change(); -- Added for completeness
CREATE TRIGGER audit_journal_entries AFTER INSERT OR UPDATE OR DELETE ON journal_entries FOR EACH ROW EXECUTE FUNCTION log_audit_change();
CREATE TRIGGER audit_journal_entry_lines AFTER INSERT OR UPDATE OR DELETE ON journal_entry_lines FOR EACH ROW EXECUTE FUNCTION log_audit_change(); -- Added for completeness
CREATE TRIGGER audit_bank_accounts AFTER INSERT OR UPDATE OR DELETE ON bank_accounts FOR EACH ROW EXECUTE FUNCTION log_audit_change();
CREATE TRIGGER audit_chart_of_accounts AFTER INSERT OR UPDATE OR DELETE ON chart_of_accounts FOR EACH ROW EXECUTE FUNCTION log_audit_change(); -- Added for completeness
