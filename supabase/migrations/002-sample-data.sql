-- ==============================================================================
-- SAAS ERP SYSTEM FOR UMKM INDONESIA
-- ==============================================================================
-- Modules: Financial, Accounting, Sales, Procurement, Inventory
-- Database: PostgreSQL (Supabase Cloud)
-- Target: Multi-industry UMKM Indonesia
--
-- Run this entire script once in the Supabase SQL Editor.
-- PENTING: Skrip ini harus dijalankan SETELAH "ERP SaaS Database Schema" berhasil dijalankan.
-- ==============================================================================

-- Insert global roles
INSERT INTO roles (id, name, description) VALUES
('00000000-0000-0000-0000-000000000001', 'Owner', 'Full access, manage members, billing.'),
('00000000-0000-0000-0000-000000000002', 'Manager', 'Manage products, orders, reports.'),
('00000000-0000-0000-0000-000000000003', 'Staff', 'Input sales and purchase data.'),
('00000000-0000-0000-0000-000000000004', 'Accountant', 'View financial reports, journals, invoices.'),
('00000000-0000-0000-0000-000000000005', 'Super Admin', 'Full control over all tenants and system settings.')
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, description = EXCLUDED.description;

-- Insert global permissions
INSERT INTO permissions (id, name, description) VALUES
('10000000-0000-0000-0000-000000000001', 'can_manage_members', 'Can add, edit, delete users and assign roles.'),
('10000000-0000-0000-0000-000000000002', 'can_manage_billing', 'Can view and manage subscription, invoices, and payment methods.'),
('10000000-0000-0000-0000-000000000003', 'can_manage_products', 'Can create, edit, delete products.'),
('10000000-0000-0000-0000-000000000004', 'can_manage_orders', 'Can view, process, and manage customer orders.'),
('10000000-0000-0000-0000-000000000005', 'can_view_financial_reports', 'Can access all financial statements and analytics.'),
('10000000-0000-0000-0000-000000000006', 'can_view_audit_logs', 'Can access comprehensive audit trails.'),
('10000000-0000-0000-0000-000000000007', 'can_configure_system_settings', 'Can modify global system settings.'),
('10000000-0000-0000-0000-000000000008', 'can_input_sales_data', 'Can record sales transactions.'),
('10000000-0000-0000-0000-000000000009', 'can_input_purchase_data', 'Can record purchase transactions.'),
('10000000-0000-0000-0000-000000000010', 'can_view_basic_product_info', 'Can view product details necessary for data entry.'),
('10000000-0000-0000-0000-000000000011', 'can_view_sales_reports', 'Can access sales-specific reports.'),
('10000000-0000-0000-0000-000000000012', 'can_view_inventory_reports', 'Can access inventory-specific reports.'),
('10000000-0000-0000-0000-000000000013', 'can_manage_employees', 'Can manage staff accounts.'),
('10000000-0000-0000-0000-000000000014', 'can_view_journals', 'Can access all accounting journal entries.'),
('10000000-0000-0000-0000-000000000015', 'can_view_invoices', 'Can view and manage customer and vendor invoices.'),
('10000000-0000-0000-0000-000000000016', 'can_reconcile_accounts', 'Can perform account reconciliation tasks.')
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, description = EXCLUDED.description;

-- Assign permissions to roles
DO $$
DECLARE
    l_owner_role_id UUID := '00000000-0000-0000-0000-000000000001';
    l_manager_role_id UUID := '00000000-0000-0000-0000-000000000002';
    l_staff_role_id UUID := '00000000-0000-0000-0000-000000000003';
    l_accountant_role_id UUID := '00000000-0000-0000-0000-000000000004';
    l_super_admin_role_id UUID := '00000000-0000-0000-0000-000000000005'; -- New super admin role

    l_can_manage_members_perm_id UUID := '10000000-0000-0000-0000-000000000001';
    l_can_manage_billing_perm_id UUID := '10000000-0000-0000-0000-000000000002';
    l_can_manage_products_perm_id UUID := '10000000-0000-0000-0000-000000000003';
    l_can_manage_orders_perm_id UUID := '10000000-0000-0000-0000-000000000004';
    l_can_view_financial_reports_perm_id UUID := '10000000-0000-0000-0000-000000000005';
    l_can_view_audit_logs_perm_id UUID := '10000000-0000-0000-0000-000000000006';
    l_can_configure_system_settings_perm_id UUID := '10000000-0000-0000-0000-000000000007';
    l_can_input_sales_data_perm_id UUID := '10000000-0000-0000-0000-000000000008';
    l_can_input_purchase_data_perm_id UUID := '10000000-0000-0000-0000-000000000009';
    l_can_view_basic_product_info_perm_id UUID := '10000000-0000-0000-0000-000000000010';
    l_can_view_sales_reports_perm_id UUID := '10000000-0000-0000-0000-000000000011';
    l_can_view_inventory_reports_perm_id UUID := '10000000-0000-0000-0000-000000000012';
    l_can_manage_employees_perm_id UUID := '10000000-0000-0000-0000-000000000013';
    l_can_view_journals_perm_id UUID := '10000000-0000-0000-0000-000000000014';
    l_can_view_invoices_perm_id UUID := '10000000-0000-0000-0000-000000000015';
    l_can_reconcile_accounts_perm_id UUID := '10000000-0000-0000-0000-000000000016';

BEGIN
    -- Owner permissions
    INSERT INTO role_permissions (role_id, permission_id) VALUES
    (l_owner_role_id, l_can_manage_members_perm_id),
    (l_owner_role_id, l_can_manage_billing_perm_id),
    (l_owner_role_id, l_can_manage_products_perm_id),
    (l_owner_role_id, l_can_manage_orders_perm_id),
    (l_owner_role_id, l_can_view_financial_reports_perm_id),
    (l_owner_role_id, l_can_view_audit_logs_perm_id),
    (l_owner_role_id, l_can_configure_system_settings_perm_id),
    (l_owner_role_id, l_can_input_sales_data_perm_id),
    (l_owner_role_id, l_can_input_purchase_data_perm_id),
    (l_owner_role_id, l_can_view_basic_product_info_perm_id),
    (l_owner_role_id, l_can_view_sales_reports_perm_id),
    (l_owner_role_id, l_can_view_inventory_reports_perm_id),
    (l_owner_role_id, l_can_manage_employees_perm_id),
    (l_owner_role_id, l_can_view_journals_perm_id),
    (l_owner_role_id, l_can_view_invoices_perm_id),
    (l_owner_role_id, l_can_reconcile_accounts_perm_id)
    ON CONFLICT (role_id, permission_id) DO NOTHING;

    -- Manager permissions
    INSERT INTO role_permissions (role_id, permission_id) VALUES
    (l_manager_role_id, l_can_manage_products_perm_id),
    (l_manager_role_id, l_can_manage_orders_perm_id),
    (l_manager_role_id, l_can_view_sales_reports_perm_id),
    (l_manager_role_id, l_can_view_inventory_reports_perm_id),
    (l_manager_role_id, l_can_manage_employees_perm_id),
    (l_manager_role_id, l_can_view_basic_product_info_perm_id)
    ON CONFLICT (role_id, permission_id) DO NOTHING;

    -- Staff permissions
    INSERT INTO role_permissions (role_id, permission_id) VALUES
    (l_staff_role_id, l_can_input_sales_data_perm_id),
    (l_staff_role_id, l_can_input_purchase_data_perm_id),
    (l_staff_role_id, l_can_view_basic_product_info_perm_id)
    ON CONFLICT (role_id, permission_id) DO NOTHING;

    -- Accountant permissions
    INSERT INTO role_permissions (role_id, permission_id) VALUES
    (l_accountant_role_id, l_can_view_financial_reports_perm_id),
    (l_accountant_role_id, l_can_view_journals_perm_id),
    (l_accountant_role_id, l_can_view_invoices_perm_id),
    (l_accountant_role_id, l_can_reconcile_accounts_perm_id)
    ON CONFLICT (role_id, permission_id) DO NOTHING;

    -- Super Admin permissions (All permissions)
    INSERT INTO role_permissions (role_id, permission_id)
    SELECT l_super_admin_role_id, id FROM permissions
    ON CONFLICT (role_id, permission_id) DO NOTHING;

END $$;

-- Insert Subscription Plans (based on the image provided)
INSERT INTO subscription_plans (id, name, base_price_monthly, max_users, storage_gb, features) VALUES
('00000000-0000-0000-0000-000000000010', 'Starter Pack', 100000.00, 3, 5, '{
    "modules": ["Manajemen Produk / Jasa", "Transaksi Penjualan", "Customer Record", "Basic Laporan", "Invoice Generator", "Stok Barang"],
    "ai": ["Ringkasan Mingguan (7 April)", "Catatan", "AI Weekly Insight Lite"]
}'),
('00000000-0000-0000-0000-000000000020', 'Growth Pack', 250000.00, 10, 20, '{
    "modules": ["Semua dari Starter Pack", "Piutang & Hutang Tracker", "Laporan Keuangan Internal", "Dashboard Pro (grafik & KPI)", "Absensi Karyawan", "AI Summary + Alert"],
    "ai": ["Ringkasan Mingguan dan Bulanan", "Rekomendasi", "Alert"]
}'),
('00000000-0000-0000-0000-000000000030', 'Smart Business Pack', 500000.00, 25, 50, '{
    "modules": ["Semua dari Growth Pack"],
    "ai": ["Ringkasan Mingguan dan Bulanan", "Saran Strategis", "Chat AI", "AI Chat Assistant", "AI Weekly Insight Pro"]
}'),
('00000000-0000-0000-0000-000000000040', 'Retail Online Pack', 400000.00, 15, 30, '{
    "modules": ["Marketplace Sync (Shopee/Tokopedia)", "Monitoring Real-Time (Owner Mode)", "Dashboard Produk & Cabang"],
    "ai": ["Ringkasan Mingguan dan Bulanan", "Saran Produk", "Rekomendasi"]
}')
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, base_price_monthly = EXCLUDED.base_price_monthly, features = EXCLUDED.features;

-- Insert Add-Ons
INSERT INTO add_ons (id, name, price_monthly, description) VALUES
('00000000-0000-0000-0000-000000000050', 'AI Product Insight', 75000.00, 'Provides AI-driven insights for product performance.'),
('00000000-0000-0000-0000-000000000060', 'Whatsapp Integration', 50000.00, 'Integrates WhatsApp for customer communication and notifications.')
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, price_monthly = EXCLUDED.price_monthly;


-- Insert sample tenants (UMKM Indonesia)
INSERT INTO tenants (business_name, display_name, subdomain, business_type, industry, tax_id, phone, email, address, city, province, subscription_plan_id, subscription_status, subscription_start_at, subscription_ends_at, is_trial, trial_ends_at) VALUES
(
    'CV Berkah Jaya Mandiri',
    'Berkah Jaya Mandiri',
    'berkah-jaya',
    'trading',
    'elektronik',
    '12.345.678.9-012.000',
    '021-12345678',
    'admin@berkahjaya.co.id',
    'Jl. Sudirman No. 123, Blok A',
    'Jakarta Selatan',
    'DKI Jakarta',
    (SELECT id FROM subscription_plans WHERE name = 'Growth Pack'),
    'active',
    '2025-06-01 00:00:00+07',
    '2026-06-01 00:00:00+07',
    FALSE,
    NULL
),
(
    'UD Sumber Rezeki',
    'Sumber Rezeki',
    'sumber-rezeki',
    'manufacturing',
    'makanan',
    '98.765.432.1-543.000',
    '0274-567890',
    'owner@sumberrezeki.id',
    'Jl. Malioboro No. 45',
    'Yogyakarta',
    'DI Yogyakarta',
    (SELECT id FROM subscription_plans WHERE name = 'Starter Pack'),
    'active',
    '2025-05-15 00:00:00+07',
    '2026-05-15 00:00:00+07',
    FALSE,
    NULL
),
(
    'PT Fashion Store Indonesia',
    'Fashion Store Indonesia',
    'fashion-store',
    'retail',
    'fashion',
    '11.222.333.4-444.000',
    '022-9876543',
    'info@fashionstore.co.id',
    'Jl. Braga No. 67',
    'Bandung',
    'Jawa Barat',
    (SELECT id FROM subscription_plans WHERE name = 'Smart Business Pack'),
    'trial',
    '2025-06-20 00:00:00+07',
    '2025-07-20 00:00:00+07',
    TRUE,
    '2025-07-20 00:00:00+07'
)
ON CONFLICT (subdomain) DO UPDATE SET business_name = EXCLUDED.business_name, subscription_plan_id = EXCLUDED.subscription_plan_id, subscription_status = EXCLUDED.subscription_status;


DO $$
DECLARE
    l_tenant1_id UUID;
    l_tenant2_id UUID;
    l_tenant3_id UUID;

    l_owner_role_id UUID := '00000000-0000-0000-0000-000000000001';
    l_manager_role_id UUID := '00000000-0000-0000-0000-000000000002';
    l_staff_role_id UUID := '00000000-0000-0000-0000-000000000003';
    l_accountant_role_id UUID := '00000000-0000-0000-0000-000000000004';
    l_super_admin_role_id UUID := '00000000-0000-0000-0000-000000000005';

    l_ai_product_insight_addon_id UUID := '00000000-0000-0000-0000-000000000050';
    l_whatsapp_integration_addon_id UUID := '00000000-0000-0000-0000-000000000060';

    -- Gunakan UUID tetap untuk contoh app_users untuk dihubungkan ke Supabase auth.users.
    -- Dalam skenario nyata, ID ini akan berasal dari auth.users.id
    l_user1_id UUID := 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'; -- Contoh untuk admin@berkahjaya.co.id (akan jadi super admin)
    l_user2_id UUID := 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a22'; -- Contoh untuk sales@berkahjaya.co.id
    l_user3_id UUID := 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a33'; -- Contoh untuk owner@sumberrezeki.id
    l_user4_id UUID := 'd0eebc99-9c0b-4ef8-bb6d-6bb9bd380a44'; -- Contoh untuk manager@fashionstore.co.id

    l_cust1_id UUID;
    l_cust2_id UUID;
    l_supp1_id UUID;
    l_supp2_id UUID;
    l_cat1_id UUID;
    l_cat2_id UUID;
    l_prod1_id UUID;
    l_prod2_id UUID;
    l_prod3_id UUID;
    l_wh1_id UUID;
    l_wh2_id UUID;

    -- Declare COA UUIDs based on the new structure
    l_coa_1000_id UUID; -- Kas dan Setara Kas
    l_coa_1110_id UUID; -- Kas
    l_coa_1120_id UUID; -- Bank
    l_coa_1130_id UUID; -- Setara Kas
    l_coa_1200_id UUID; -- Piutang Usaha
    l_coa_1210_id UUID; -- Piutang Belum Ditagih
    l_coa_1220_id UUID; -- Piutang Karyawan
    l_coa_1230_id UUID; -- Piutang Lainnya
    l_coa_1300_id UUID; -- Persediaan Barang Dagangan
    l_coa_1310_id UUID; -- Persediaan Bahan Baku
    l_coa_1400_id UUID; -- Aset Lancar Lainnya
    l_coa_1500_id UUID; -- Aset Tetap
    l_coa_1510_id UUID; -- Tanah
    l_coa_1520_id UUID; -- Bangunan
    l_coa_1530_id UUID; -- Mesin dan Peralatan
    l_coa_1540_id UUID; -- Kendaraan
    l_coa_1550_id UUID; -- Akumulasi Penyusutan
    l_coa_1600_id UUID; -- Investasi
    l_coa_1700_id UUID; -- Aset Tak Berwujud
    l_coa_1800_id UUID; -- Aset Lain-lain

    l_coa_utang_usaha_group_id UUID; -- Level 1 group for Utang Usaha (new variable)
    l_coa_2100_id UUID; -- Utang Usaha (Level 2 specific account)
    l_coa_2000_id UUID; -- Utang Jangka Pendek (Level 1 category)
    l_coa_2200_id UUID; -- Utang Belum Ditagih
    l_coa_2400_id UUID; -- Beban Akrual
    l_coa_2500_id UUID; -- Pendapatan Diterima Dimuka
    l_coa_2600_id UUID; -- Utang Jangka Panjang
    l_coa_2610_id UUID; -- Utang Bank Jangka Panjang

    l_coa_3100_id UUID; -- Modal Disetor
    l_coa_3200_id UUID; -- Laba Ditahan
    l_coa_3300_id UUID; -- Tambahan Modal Disetor
    l_coa_3400_id UUID; -- Dividen
    l_coa_3500_id UUID; -- Pendapatan Komprehensif Lain
    l_coa_3600_id UUID; -- Ekuitas Saldo Awal

    l_coa_4000_id UUID; -- Pendapatan Usaha (Level 1 category)
    l_coa_4100_id UUID; -- Penjualan Barang (Level 2)
    l_coa_4111_id UUID; -- Penjualan Barang - Lokal (Level 3)
    l_coa_4112_id UUID; -- Penjualan Barang - Ekspor (Level 3)
    l_coa_4120_id UUID; -- Pendapatan Jasa (Level 2)
    l_coa_4130_id UUID; -- Pendapatan Lainnya (Level 2)

    l_coa_5000_id UUID; -- Harga Pokok Penjualan

    l_coa_6000_id UUID; -- Beban Gaji dan Upah
    l_coa_6010_id UUID; -- Tunjangan Karyawan
    l_coa_6100_id UUID; -- Beban Umum dan Administrasi
    l_coa_6110_Sewa_id UUID; -- Beban Sewa (Using unique code for sample data to avoid conflict)
    l_coa_6120_id UUID; -- Beban Listrik dan Air
    l_coa_6130_id UUID; -- Beban Transportasi
    l_coa_6140_id UUID; -- Beban Administrasi Bank
    l_coa_6150_id UUID; -- Beban Penyusutan
    l_coa_6160_id UUID; -- Beban Iklan & Promosi
    l_coa_6170_id UUID; -- Beban Perlengkapan Kantor
    l_coa_6180_id UUID; -- Beban Pajak Penghasilan
    l_coa_6200_id UUID; -- Pengobatan
    l_coa_7200_id UUID; -- Beban Lain-lain;

    l_bank_acc_bca_id UUID;
    l_so1_id UUID;
    l_so2_id UUID;
    l_po1_id UUID;
    l_gr1_id UUID;
    l_dl1_id UUID;
    l_inv_sales1_id UUID;
    l_inv_purchase1_id UUID;
    l_payment_rec1_id UUID;
    l_payment_paid1_id UUID;
    l_je_manual1_id UUID;

    -- New UoM UUIDs
    l_uom_pcs_id UUID;
    l_uom_kg_id UUID;
    l_uom_ltr_id UUID;

BEGIN
    -- Dapatkan ID tenant
    SELECT id INTO l_tenant1_id FROM tenants WHERE subdomain = 'berkah-jaya';
    SELECT id INTO l_tenant2_id FROM tenants WHERE subdomain = 'sumber-rezeki';
    SELECT id INTO l_tenant3_id FROM tenants WHERE subdomain = 'fashion-store';

    -- Insert contoh app_users
    -- PENTING: Dalam lingkungan Supabase nyata, app_users.id harus cocok dengan auth.users.id.
    -- INSERT ini mengasumsikan Anda memiliki entri yang sesuai di tabel auth.users terlebih dahulu.
    INSERT INTO app_users (id, tenant_id, email, full_name, employee_id, position, department, role_id, is_super_admin, user_settings) VALUES
    (l_user1_id, l_tenant1_id, 'admin@berkahjaya.co.id', 'Budi Santoso', 'EMP001', 'General Manager', 'Management', l_owner_role_id, TRUE, '{"theme": "dark", "language": "id", "notifications": true}'), -- THIS USER IS NOW SUPER ADMIN
    (l_user2_id, l_tenant1_id, 'sales@berkahjaya.co.id', 'Siti Nurhaliza', 'EMP002', 'Sales Manager', 'Sales', l_manager_role_id, FALSE, '{"theme": "light", "language": "en"}'),
    (l_user3_id, l_tenant2_id, 'owner@sumberrezeki.id', 'Ahmad Wijaya', 'EMP001', 'Owner', 'Management', l_owner_role_id, FALSE, '{}'),
    (l_user4_id, l_tenant3_id, 'manager@fashionstore.co.id', 'Diana Kusuma', 'EMP001', 'Store Manager', 'Retail', l_manager_role_id, FALSE, '{}')
    ON CONFLICT (id) DO UPDATE SET full_name = EXCLUDED.full_name, role_id = EXCLUDED.role_id, is_super_admin = EXCLUDED.is_super_admin, user_settings = EXCLUDED.user_settings, updated_at = CURRENT_TIMESTAMP;


    -- Tetapkan add-on ke tenant
    INSERT INTO tenant_subscription_add_ons (tenant_id, add_on_id, activated_at) VALUES
    (l_tenant1_id, l_ai_product_insight_addon_id, '2025-06-05 00:00:00+07'),
    (l_tenant1_id, l_whatsapp_integration_addon_id, '2025-06-05 00:00:00+07'),
    (l_tenant3_id, l_ai_product_insight_addon_id, '2025-06-25 00:00:00+07')
    ON CONFLICT (tenant_id, add_on_id) DO NOTHING;

    -- Insert Chart of Accounts untuk Tenant 1 (Berkah Jaya) - Updated with full COA data
    -- Level 1 Accounts
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '1-1000', 'Kas dan Setara Kas', 'asset', 'current_asset', NULL, 1) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_1000_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '1-1500', 'Aset Tetap', 'asset', 'fixed_asset', NULL, 1) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_1500_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '1-1600', 'Investasi', 'asset', 'investment', NULL, 1) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_1600_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '1-1700', 'Aset Tak Berwujud', 'asset', 'intangible_asset', NULL, 1) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_1700_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '1-1800', 'Aset Lain-lain', 'asset', 'other_asset', NULL, 1) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_1800_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '2-1000', 'Utang Usaha', 'liability', 'current_liability', NULL, 1) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_utang_usaha_group_id; -- Changed variable name
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '2-2000', 'Utang Jangka Pendek', 'liability', 'current_liability', NULL, 1) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_2000_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '2-2500', 'Pendapatan Diterima Dimuka', 'liability', 'current_liability', NULL, 1) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_2500_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '2-2600', 'Utang Jangka Panjang', 'liability', 'long_term_liability', NULL, 1) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_2600_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '3-1000', 'Modal Disetor', 'equity', 'owner_equity', NULL, 1) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_3100_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '3-3100', 'Laba Ditahan', 'equity', 'retained_earnings', NULL, 1) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_3200_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '3-3200', 'Tambahan Modal Disetor', 'equity', 'owner_equity', NULL, 1) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_3300_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '3-3300', 'Dividen', 'equity', 'owner_equity', NULL, 1) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_3400_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '3-3500', 'Pendapatan Komprehensif Lain', 'equity', 'other_comprehensive_income', NULL, 1) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_3500_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '3-3600', 'Ekuitas Saldo Awal', 'equity', 'opening_equity', NULL, 1) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_3600_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '4-1000', 'Pendapatan Usaha', 'revenue', 'operating_revenue', NULL, 1) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_4000_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '5-1000', 'Harga Pokok Penjualan', 'expense', 'cost_of_goods_sold', NULL, 1) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_5000_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '6-1000', 'Beban Gaji dan Upah', 'expense', 'operating_expense', NULL, 1) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_6000_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '6-6100', 'Beban Umum dan Administrasi', 'expense', 'operating_expense', NULL, 1) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_6100_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '6-6200', 'Perbaikan dan Pemeliharaan', 'expense', 'operating_expense', NULL, 1) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_6200_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '7-7200', 'Beban Lain-lain', 'expense', 'other_expense', NULL, 1) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_7200_id;

    -- Level 2 Accounts (Children of Level 1)
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '1-1110', 'Kas', 'asset', 'current_asset', l_coa_1000_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_1110_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '1-1120', 'Bank', 'asset', 'current_asset', l_coa_1000_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_1120_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '1-1130', 'Setara Kas', 'asset', 'current_asset', l_coa_1000_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_1130_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '1-1200', 'Piutang Usaha', 'asset', 'current_asset', l_coa_1000_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_1200_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '1-1300', 'Persediaan Barang Dagangan', 'asset', 'current_asset', l_coa_1000_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_1300_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '1-1400', 'Aset Lancar Lainnya', 'asset', 'current_asset', l_coa_1000_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_1400_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '1-1510', 'Tanah', 'asset', 'fixed_asset', l_coa_1500_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_1510_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '1-1520', 'Bangunan', 'asset', 'fixed_asset', l_coa_1500_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_1520_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '1-1530', 'Mesin dan Peralatan', 'asset', 'fixed_asset', l_coa_1500_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_1530_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '1-1540', 'Kendaraan', 'asset', 'fixed_asset', l_coa_1500_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_1540_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '1-1550', 'Akumulasi Penyusutan', 'asset', 'fixed_asset', l_coa_1500_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_1550_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '2-2100', 'Utang Usaha', 'liability', 'current_liability', l_coa_utang_usaha_group_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_2100_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '2-2200', 'Utang Belum Ditagih', 'liability', 'current_liability', l_coa_2000_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_2200_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '2-2400', 'Beban Akrual', 'liability', 'current_liability', l_coa_2000_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_2400_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '2-2610', 'Utang Bank Jangka Panjang', 'liability', 'long_term_liability', l_coa_2600_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_2610_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '4-4100', 'Penjualan Barang', 'revenue', 'sales_revenue', l_coa_4000_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_4100_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '4-4120', 'Pendapatan Jasa', 'revenue', 'service_revenue', l_coa_4000_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_4120_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '4-4130', 'Pendapatan Lainnya', 'revenue', 'other_revenue', l_coa_4000_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_4130_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '6-0100', 'Tunjangan Karyawan', 'expense', 'operating_expense', l_coa_6000_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_6010_id; -- Used 6-0100 based on image
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '6-6110_Sewa', 'Beban Sewa', 'expense', 'operating_expense', l_coa_6100_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_6110_Sewa_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '6-6120', 'Beban Listrik dan Air', 'expense', 'operating_expense', l_coa_6100_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_6120_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '6-6130', 'Beban Transportasi', 'expense', 'operating_expense', l_coa_6100_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_6130_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '6-6140', 'Beban Administrasi Bank', 'expense', 'operating_expense', l_coa_6100_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_6140_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '6-6150', 'Beban Penyusutan', 'expense', 'operating_expense', l_coa_6100_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_6150_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '6-6160', 'Beban Iklan & Promosi', 'expense', 'operating_expense', l_coa_6100_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_6160_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '6-6170', 'Beban Perlengkapan Kantor', 'expense', 'operating_expense', l_coa_6100_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_6170_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '6-6180', 'Beban Pajak Penghasilan', 'expense', 'operating_expense', l_coa_6100_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_6180_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '6-6200', 'Pengobatan', 'expense', 'operating_expense', l_coa_6100_id, 2) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_6200_id; -- Note: Code 6-6200 also exists as Level 1 Perbaikan dan Pemeliharaan. Assuming this is a typo and should be child of 6-6100.


    -- Level 3 Accounts (Children of Level 2)
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '1-1210', 'Piutang Belum Ditagih', 'asset', 'current_asset', l_coa_1200_id, 3) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_1210_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '1-1220', 'Piutang Karyawan', 'asset', 'current_asset', l_coa_1200_id, 3) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_1220_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '1-1230', 'Piutang Lainnya', 'asset', 'current_asset', l_coa_1200_id, 3) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_1230_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '1-1310', 'Persediaan Bahan Baku', 'asset', 'current_asset', l_coa_1300_id, 3) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_1310_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '4-4111', 'Penjualan Barang - Lokal', 'revenue', 'sales_revenue', l_coa_4100_id, 3) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_4111_id;
    INSERT INTO chart_of_accounts (tenant_id, code, name, account_type, account_subtype, parent_id, level) VALUES
    (l_tenant1_id, '4-4112', 'Penjualan Barang - Ekspor', 'revenue', 'sales_revenue', l_coa_4100_id, 3) ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_coa_4112_id;


    -- Update COA IDs for sample data referencing
    -- These would ideally map to more specific accounts from the new COA list
    -- For simplicity, let's map them to the highest relevant level for now
    DECLARE
        l_coa_cash_id UUID;
        l_coa_bank_bca_id UUID;
        l_coa_ar_id UUID;
        l_coa_inventory_id UUID;
        l_coa_ap_id UUID;
        l_coa_sales_id UUID;
        l_coa_cogs_id UUID;
        l_coa_expense_id UUID;
    BEGIN -- Added BEGIN for this inner DECLARE block
        SELECT id INTO l_coa_cash_id FROM chart_of_accounts WHERE tenant_id = l_tenant1_id AND code = '1-1110';
        SELECT id INTO l_coa_bank_bca_id FROM chart_of_accounts WHERE tenant_id = l_tenant1_id AND code = '1-1120';
        SELECT id INTO l_coa_ar_id FROM chart_of_accounts WHERE tenant_id = l_tenant1_id AND code = '1-1200';
        SELECT id INTO l_coa_inventory_id FROM chart_of_accounts WHERE tenant_id = l_tenant1_id AND code = '1-1300';
        SELECT id INTO l_coa_ap_id FROM chart_of_accounts WHERE tenant_id = l_tenant1_id AND code = '2-2100';
        SELECT id INTO l_coa_sales_id FROM chart_of_accounts WHERE tenant_id = l_tenant1_id AND code = '4-4100';
        SELECT id INTO l_coa_cogs_id FROM chart_of_accounts WHERE tenant_id = l_tenant1_id AND code = '5-1000';
        SELECT id INTO l_coa_expense_id FROM chart_of_accounts WHERE tenant_id = l_tenant1_id AND code = '6-6100';
    END; -- Added END for this inner DECLARE block

    -- Insert contoh pelanggan untuk Tenant 1
    INSERT INTO customers (tenant_id, customer_code, name, company_name, email, phone, address, city, province) VALUES
    (l_tenant1_id, 'CUST-001', 'Toko Maju Bersama', 'Toko Maju Bersama', 'info@majubersama.com', '08123456789', 'Jl. Kebon Jeruk No. 50', 'Jakarta Barat', 'DKI Jakarta')
    ON CONFLICT (tenant_id, customer_code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_cust1_id;
    INSERT INTO customers (tenant_id, customer_code, name, company_name, email, phone, address, city, province) VALUES
    (l_tenant1_id, 'CUST-002', 'Indo Komputer', 'PT Indo Komputer', 'sales@indokomputer.co.id', '021-98765432', 'Jl. Gatot Subroto No. 10', 'Jakarta Pusat', 'DKI Jakarta')
    ON CONFLICT (tenant_id, customer_code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_cust2_id;

    -- Insert contoh pemasok untuk Tenant 1
    INSERT INTO suppliers (tenant_id, supplier_code, name, company_name, email, phone, address, city, province, payment_terms) VALUES
    (l_tenant1_id, 'SUP-001', 'Distributor Elektronik Jaya', 'PT Elektronik Jaya', 'purchase@ejaya.com', '021-11223344', 'Jl. Merdeka No. 20', 'Bekasi', 'Jawa Barat', 30)
    ON CONFLICT (tenant_id, supplier_code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_supp1_id;
    INSERT INTO suppliers (tenant_id, supplier_code, name, company_name, email, phone, address, city, province, payment_terms) VALUES
    (l_tenant1_id, 'SUP-002', 'Gadget Global', 'CV Gadget Global', 'contact@gadgetglobal.net', '021-55667788', 'Jl. Thamrin No. 5', 'Jakarta Utara', 'DKI Jakarta', 60)
    ON CONFLICT (tenant_id, supplier_code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_supp2_id;

    -- Insert contoh kategori produk untuk Tenant 1
    INSERT INTO product_categories (tenant_id, code, name) VALUES
    (l_tenant1_id, 'ELC', 'Elektronik')
    ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_cat1_id;
    INSERT INTO product_categories (tenant_id, code, name) VALUES
    (l_tenant1_id, 'ACC', 'Aksesoris Elektronik')
    ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_cat2_id;

    -- Insert Unit of Measures for Tenant 1
    INSERT INTO unit_of_measures (tenant_id, name, abbreviation) VALUES
    (l_tenant1_id, 'Pieces', 'Pcs')
    ON CONFLICT (tenant_id, abbreviation) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_uom_pcs_id;
    INSERT INTO unit_of_measures (tenant_id, name, abbreviation) VALUES
    (l_tenant1_id, 'Kilogram', 'Kg')
    ON CONFLICT (tenant_id, abbreviation) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_uom_kg_id;
    INSERT INTO unit_of_measures (tenant_id, name, abbreviation) VALUES
    (l_tenant1_id, 'Liter', 'Ltr')
    ON CONFLICT (tenant_id, abbreviation) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_uom_ltr_id;

    -- Insert contoh produk untuk Tenant 1 (Uses new unit_of_measure_id)
    INSERT INTO products (tenant_id, category_id, unit_of_measure_id, sku, name, cost_price, selling_price, tax_rate) VALUES
    (l_tenant1_id, l_cat1_id, l_uom_pcs_id, 'LAPTOP-001', 'Laptop Gaming X1 Pro', 10000000, 13500000, 0.11)
    ON CONFLICT (tenant_id, sku) DO UPDATE SET name = EXCLUDED.name, unit_of_measure_id = EXCLUDED.unit_of_measure_id RETURNING id INTO l_prod1_id;
    INSERT INTO products (tenant_id, category_id, unit_of_measure_id, sku, name, cost_price, selling_price, tax_rate) VALUES
    (l_tenant1_id, l_cat1_id, l_uom_pcs_id, 'HP-S22', 'Smartphone Galaxy S22', 7500000, 9999000, 0.11)
    ON CONFLICT (tenant_id, sku) DO UPDATE SET name = EXCLUDED.name, unit_of_measure_id = EXCLUDED.unit_of_measure_id RETURNING id INTO l_prod2_id;
    INSERT INTO products (tenant_id, category_id, unit_of_measure_id, sku, name, cost_price, selling_price, tax_rate) VALUES
    (l_tenant1_id, l_cat2_id, l_uom_pcs_id, 'MOUSE-GAMING', 'Mouse Gaming RGB', 150000, 250000, 0.11)
    ON CONFLICT (tenant_id, sku) DO UPDATE SET name = EXCLUDED.name, unit_of_measure_id = EXCLUDED.unit_of_measure_id RETURNING id INTO l_prod3_id;

    -- Insert contoh gudang untuk Tenant 1
    INSERT INTO warehouses (tenant_id, code, name, city) VALUES
    (l_tenant1_id, 'WH-JKT', 'Gudang Utama Jakarta', 'Jakarta Pusat')
    ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_wh1_id;
    INSERT INTO warehouses (tenant_id, code, name, city) VALUES
    (l_tenant1_id, 'WH-BDG', 'Gudang Bandung', 'Bandung')
    ON CONFLICT (tenant_id, code) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO l_wh2_id;

    -- Insert inventaris awal untuk Tenant 1
    INSERT INTO inventory (tenant_id, product_id, warehouse_id, quantity_on_hand, average_cost) VALUES
    (l_tenant1_id, l_prod1_id, l_wh1_id, 10, 10000000)
    ON CONFLICT (tenant_id, product_id, warehouse_id) DO UPDATE SET quantity_on_hand = EXCLUDED.quantity_on_hand, average_cost = EXCLUDED.average_cost;
    INSERT INTO inventory (tenant_id, product_id, warehouse_id, quantity_on_hand, average_cost) VALUES
    (l_tenant1_id, l_prod2_id, l_wh1_id, 15, 7500000)
    ON CONFLICT (tenant_id, product_id, warehouse_id) DO UPDATE SET quantity_on_hand = EXCLUDED.quantity_on_hand, average_cost = EXCLUDED.average_cost;
    INSERT INTO inventory (tenant_id, product_id, warehouse_id, quantity_on_hand, average_cost) VALUES
    (l_tenant1_id, l_prod3_id, l_wh1_id, 50, 150000)
    ON CONFLICT (tenant_id, product_id, warehouse_id) DO UPDATE SET quantity_on_hand = EXCLUDED.quantity_on_hand, average_cost = EXCLUDED.average_cost;

    -- Insert contoh Akun Bank untuk Tenant 1
    INSERT INTO bank_accounts (tenant_id, account_name, bank_name, account_number, currency, balance, chart_of_account_id) VALUES
    (l_tenant1_id, 'Rekening Operasional BCA', 'BCA', '1234567890', 'IDR', 50000000.00, l_coa_1120_id) -- Menggunakan l_coa_1120_id (Bank)
    ON CONFLICT (tenant_id, account_number) DO UPDATE SET balance = EXCLUDED.balance RETURNING id INTO l_bank_acc_bca_id;


    -- Contoh Sales Order untuk Tenant 1
    INSERT INTO sales_orders (tenant_id, order_number, customer_id, warehouse_id, order_date, delivery_date, status, payment_terms, sales_person, shipping_cost, created_by, total_amount) VALUES
    (l_tenant1_id, 'SO-001-202506', l_cust1_id, l_wh1_id, '2025-06-20 10:00:00+07', '2025-06-25 15:00:00+07', 'confirmed', 7, l_user2_id, 50000, l_user2_id, 0)
    ON CONFLICT (tenant_id, order_number) DO UPDATE SET status = EXCLUDED.status RETURNING id INTO l_so1_id;

    INSERT INTO sales_order_items (tenant_id, sales_order_id, product_id, quantity, unit_price, tax_percent, tax_amount, total_amount) VALUES
    (l_tenant1_id, l_so1_id, l_prod1_id, 1, 13500000, 0.11, 1485000, 14985000);
    INSERT INTO sales_order_items (tenant_id, sales_order_id, product_id, quantity, unit_price, tax_percent, tax_amount, total_amount) VALUES
    (l_tenant1_id, l_so1_id, l_prod3_id, 2, 250000, 0.11, 55000, 555000);

    -- Contoh Sales Order 2 (pending)
    INSERT INTO sales_orders (tenant_id, order_number, customer_id, warehouse_id, order_date, status, created_by, total_amount) VALUES
    (l_tenant1_id, 'SO-002-202506', l_cust2_id, l_wh1_id, '2025-06-25 11:30:00+07', 'draft', l_user2_id, 0)
    ON CONFLICT (tenant_id, order_number) DO UPDATE SET status = EXCLUDED.status RETURNING id INTO l_so2_id;

    INSERT INTO sales_order_items (tenant_id, sales_order_id, product_id, quantity, unit_price, tax_percent, tax_amount, total_amount) VALUES
    (l_tenant1_id, l_so2_id, l_prod2_id, 1, 9999000, 0.11, 1099890, 11098890);


    -- Contoh Purchase Order untuk Tenant 1
    INSERT INTO purchase_orders (tenant_id, po_number, supplier_id, warehouse_id, order_date, expected_date, status, payment_terms, created_by, total_amount) VALUES
    (l_tenant1_id, 'PO-001-202506', l_supp1_id, l_wh1_id, '2025-06-15 09:00:00+07', '2025-06-28 17:00:00+07', 'sent', 30, l_user1_id, 0)
    ON CONFLICT (tenant_id, po_number) DO UPDATE SET status = EXCLUDED.status RETURNING id INTO l_po1_id;

    INSERT INTO purchase_order_items (tenant_id, purchase_order_id, product_id, quantity, unit_price, tax_percent, tax_amount, total_amount) VALUES
    (l_tenant1_id, l_po1_id, l_prod1_id, 5, 9500000, 0.11, 5225000, 52725000);
    INSERT INTO purchase_order_items (tenant_id, purchase_order_id, product_id, quantity, unit_price, tax_percent, tax_amount, total_amount) VALUES
    (l_tenant1_id, l_po1_id, l_prod2_id, 10, 7000000, 0.11, 7700000, 77700000);


    -- Contoh Goods Receipt untuk PO-001-202506 (penerimaan sebagian)
    INSERT INTO goods_receipts (tenant_id, receipt_number, purchase_order_id, supplier_id, warehouse_id, receipt_date, status, received_by) VALUES
    (l_tenant1_id, 'GR-001-202506', l_po1_id, l_supp1_id, l_wh1_id, '2025-06-26 14:00:00+07', 'received', l_user1_id)
    ON CONFLICT (tenant_id, receipt_number) DO UPDATE SET status = EXCLUDED.status RETURNING id INTO l_gr1_id;

    INSERT INTO goods_receipt_items (tenant_id, goods_receipt_id, purchase_order_item_id, product_id, quantity_received, unit_cost, total_cost) VALUES
    (l_tenant1_id, l_gr1_id, (SELECT id FROM purchase_order_items WHERE tenant_id = l_tenant1_id AND purchase_order_id = l_po1_id AND product_id = l_prod1_id), l_prod1_id, 3, 9500000, 28500000);
    INSERT INTO goods_receipt_items (tenant_id, goods_receipt_id, purchase_order_item_id, product_id, quantity_received, unit_cost, total_cost) VALUES
    (l_tenant1_id, l_gr1_id, (SELECT id FROM purchase_order_items WHERE tenant_id = l_tenant1_id AND purchase_order_id = l_po1_id AND product_id = l_prod2_id), l_prod2_id, 7, 7000000, 49000000);

    -- Perbarui purchase_order_items.quantity_received (ini akan memicu audit logs untuk pembaruan ini)
    UPDATE purchase_order_items SET quantity_received = 3 WHERE tenant_id = l_tenant1_id AND purchase_order_id = l_po1_id AND product_id = l_prod1_id;
    UPDATE purchase_order_items SET quantity_received = 7 WHERE tenant_id = l_tenant1_id AND purchase_order_id = l_po1_id AND product_id = l_prod2_id;


    -- Contoh Delivery untuk SO-001-202506
    INSERT INTO deliveries (tenant_id, delivery_number, sales_order_id, customer_id, warehouse_id, delivery_date, status, delivered_by) VALUES
    (l_tenant1_id, 'DL-001-202506', l_so1_id, l_cust1_id, l_wh1_id, '2025-06-25 16:00:00+07', 'delivered', l_user2_id)
    ON CONFLICT (tenant_id, delivery_number) DO UPDATE SET status = EXCLUDED.status RETURNING id INTO l_dl1_id;

    INSERT INTO delivery_items (tenant_id, delivery_id, sales_order_item_id, product_id, quantity_delivered, unit_price, total_amount) VALUES
    (l_tenant1_id, l_dl1_id, (SELECT id FROM sales_order_items WHERE tenant_id = l_tenant1_id AND sales_order_id = l_so1_id AND product_id = l_prod1_id), l_prod1_id, 1, 13500000, 14985000);
    INSERT INTO delivery_items (tenant_id, delivery_id, sales_order_item_id, product_id, quantity_delivered, unit_price, total_amount) VALUES
    (l_tenant1_id, l_dl1_id, (SELECT id FROM sales_order_items WHERE tenant_id = l_tenant1_id AND sales_order_id = l_so1_id AND product_id = l_prod3_id), l_prod3_id, 2, 250000, 555000);

    -- Perbarui sales_order_items.quantity_delivered (ini akan memicu audit logs untuk pembaruan ini)
    UPDATE sales_order_items SET quantity_delivered = 1 WHERE tenant_id = l_tenant1_id AND sales_order_id = l_so1_id AND product_id = l_prod1_id;
    UPDATE sales_order_items SET quantity_delivered = 2 WHERE tenant_id = l_tenant1_id AND sales_order_id = l_so1_id AND product_id = l_prod3_id;


    -- Contoh Sales Invoice untuk SO-001-202506
    INSERT INTO invoices (tenant_id, invoice_number, invoice_type, reference_type, reference_id, customer_id, invoice_date, due_date, status, total_amount, created_by) VALUES
    (l_tenant1_id, 'INV-S-001-202506', 'sales', 'sales_order', l_so1_id, l_cust1_id, '2025-06-25 17:00:00+07', '2025-07-02 00:00:00+07', 'sent', 0, l_user2_id)
    ON CONFLICT (tenant_id, invoice_number) DO UPDATE SET status = EXCLUDED.status RETURNING id INTO l_inv_sales1_id;

    INSERT INTO invoice_items (tenant_id, invoice_id, product_id, account_id, description, quantity, unit_price, tax_percent, tax_amount, total_amount) VALUES
    (l_tenant1_id, l_inv_sales1_id, l_prod1_id, l_coa_4100_id, 'Penjualan Laptop Gaming X1 Pro', 1, 13500000, 0.11, 1485000, 14985000); -- Menggunakan l_coa_4100_id (Penjualan Barang)
    INSERT INTO invoice_items (tenant_id, invoice_id, product_id, account_id, description, quantity, unit_price, tax_percent, tax_amount, total_amount) VALUES
    (l_tenant1_id, l_inv_sales1_id, l_prod3_id, l_coa_4100_id, 'Penjualan Mouse Gaming RGB', 2, 250000, 0.11, 55000, 555000);


    -- Contoh Purchase Invoice untuk GR-001-202506
    INSERT INTO invoices (tenant_id, invoice_number, invoice_type, reference_type, reference_id, supplier_id, invoice_date, due_date, status, total_amount, created_by) VALUES
    (l_tenant1_id, 'INV-P-001-202506', 'purchase', 'goods_receipt', l_gr1_id, l_supp1_id, '2025-06-27 10:00:00+07', '2025-07-27 00:00:00+07', 'sent', 0, l_user1_id)
    ON CONFLICT (tenant_id, invoice_number) DO UPDATE SET status = EXCLUDED.status RETURNING id INTO l_inv_purchase1_id;

    INSERT INTO invoice_items (tenant_id, invoice_id, product_id, account_id, description, quantity, unit_price, tax_percent, tax_amount, total_amount) VALUES
    (l_tenant1_id, l_inv_purchase1_id, l_prod1_id, l_coa_5000_id, 'Pembelian Laptop Gaming X1 Pro', 3, 9500000, 0.11, 3135000, 31635000); -- Menggunakan l_coa_5000_id (Harga Pokok Penjualan)
    INSERT INTO invoice_items (tenant_id, invoice_id, product_id, account_id, description, quantity, unit_price, tax_percent, tax_amount, total_amount) VALUES
    (l_tenant1_id, l_inv_purchase1_id, l_prod2_id, l_coa_5000_id, 'Pembelian Smartphone Galaxy S22', 7, 7000000, 0.11, 5390000, 54390000);


    -- Contoh Payment Received (untuk INV-S-001-202506)
    INSERT INTO payments (tenant_id, payment_number, payment_type, customer_id, payment_date, payment_method, bank_account_id, amount, created_by) VALUES
    (l_tenant1_id, 'REC-001-202507', 'received', l_cust1_id, '2025-07-01 09:00:00+07', 'bank_transfer', l_bank_acc_bca_id, 10000000.00, l_user1_id)
    ON CONFLICT (tenant_id, payment_number) DO UPDATE SET amount = EXCLUDED.amount RETURNING id INTO l_payment_rec1_id;

    INSERT INTO payment_allocations (tenant_id, payment_id, invoice_id, allocated_amount) VALUES
    (l_tenant1_id, l_payment_rec1_id, l_inv_sales1_id, 10000000.00);


    -- Contoh Payment Paid (untuk INV-P-001-202506)
    INSERT INTO payments (tenant_id, payment_number, payment_type, supplier_id, payment_date, payment_method, bank_account_id, amount, created_by) VALUES
    (l_tenant1_id, 'PAID-001-202507', 'paid', l_supp1_id, '2025-07-15 10:00:00+07', 'bank_transfer', l_bank_acc_bca_id, 50000000.00, l_user1_id)
    ON CONFLICT (tenant_id, payment_number) DO UPDATE SET amount = EXCLUDED.amount RETURNING id INTO l_payment_paid1_id;

    INSERT INTO payment_allocations (tenant_id, payment_id, invoice_id, allocated_amount) VALUES
    (l_tenant1_id, l_payment_paid1_id, l_inv_purchase1_id, 50000000.00);


    -- Contoh Manual Journal Entry
    -- Insert in 'draft' status first
    INSERT INTO journal_entries (tenant_id, entry_number, entry_date, reference_type, description, created_by, status) VALUES
    (l_tenant1_id, 'JEM-001-202506', '2025-06-30 11:00:00+07', 'manual', 'Koreksi biaya operasional', l_user1_id, 'draft')
    ON CONFLICT (tenant_id, entry_number) DO UPDATE SET status = EXCLUDED.status RETURNING id INTO l_je_manual1_id;

    -- Insert lines
    INSERT INTO journal_entry_lines (tenant_id, journal_entry_id, account_id, description, debit_amount, credit_amount) VALUES
    (l_tenant1_id, l_je_manual1_id, l_coa_6100_id, 'Biaya listrik bulan Juni', 500000, 0); -- Menggunakan l_coa_6100_id (Beban Umum dan Administrasi)
    INSERT INTO journal_entry_lines (tenant_id, journal_entry_id, account_id, description, debit_amount, credit_amount) VALUES
    (l_tenant1_id, l_je_manual1_id, l_coa_1110_id, 'Pembayaran listrik tunai', 0, 500000); -- Menggunakan l_coa_1110_id (Kas)

    -- After all lines are inserted, update status to 'posted' to trigger balance validation
    UPDATE journal_entries
    SET status = 'posted'
    WHERE id = l_je_manual1_id;

END $$;
