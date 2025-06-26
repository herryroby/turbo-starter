-- =========================================================================================
-- SKRIP UPDATE ID PENGGUNA APLIKASI
-- Memperbarui ID pengguna di tabel app_users dan semua referensi foreign key yang ada
--
-- PENDEKATAN:
-- 1. DROP foreign key constraints yang mereferensikan app_users.id
-- 2. UPDATE app_users.id
-- 3. UPDATE semua kolom di tabel lain yang mereferensikan old_app_user_uuid
-- 4. RE-ADD foreign key constraints
--
-- CATATAN PENTING: Jalankan skrip ini dengan hak akses SUPERUSER atau service_role key
-- Cadangkan database Anda sebelum menjalankan skrip ini!
-- =========================================================================================

DO $$
DECLARE
    -- Ganti ini dengan ID pengguna sampel LAMA dari tabel `app_users` Anda
    old_app_user_uuid UUID := 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'; -- Contoh: ID admin@berkahjaya.co.id

    -- Ganti ini dengan ID pengguna AKTUAL dari tabel `auth.users` Supabase Anda
    new_auth_user_uuid UUID := '00000000-0000-0000-0000-000000000000'; -- Ganti dengan auth.users.id Anda yang sebenarnya

    -- Jika perlu, dapatkan tenant_id yang sesuai dengan old_app_user_uuid
    associated_tenant_id UUID;
BEGIN
    RAISE NOTICE 'Memulai proses pembaruan ID pengguna dari % menjadi %', old_app_user_uuid, new_auth_user_uuid;

    -- Ambil tenant_id yang terkait dengan pengguna lama
    SELECT tenant_id INTO associated_tenant_id
    FROM app_users
    WHERE id = old_app_user_uuid;

    IF associated_tenant_id IS NULL THEN
        RAISE EXCEPTION 'ID pengguna lama (%) tidak ditemukan di tabel app_users atau tidak memiliki tenant_id.', old_app_user_uuid;
    END IF;

    -- NONAKTIFKAN RLS SEMENTARA (jika perlu dan memiliki izin)
    -- Jika Anda menjalankan sebagai service_role, ini mungkin tidak diperlukan
    -- SET session_replication_role = replica; -- Dapat membantu menghindari trigger tertentu
    -- SET row_level_security = off; -- Nonaktifkan RLS untuk sesi ini jika service_role tidak cukup

    -- ==================================================================
    -- 0. DROP FOREIGN KEY CONSTRAINTS SEMENTARA
    -- Ini diperlukan karena kita akan mengubah primary key di app_users.
    -- ==================================================================
    RAISE NOTICE 'Menjatuhkan foreign key constraints sementara...';

    ALTER TABLE audit_logs DROP CONSTRAINT IF EXISTS audit_logs_user_id_fkey;
    ALTER TABLE stock_movements DROP CONSTRAINT IF EXISTS stock_movements_created_by_fkey;
    ALTER TABLE purchase_orders DROP CONSTRAINT IF EXISTS purchase_orders_created_by_fkey;
    ALTER TABLE purchase_orders DROP CONSTRAINT IF EXISTS purchase_orders_approved_by_fkey;
    ALTER TABLE goods_receipts DROP CONSTRAINT IF EXISTS goods_receipts_received_by_fkey;
    ALTER TABLE sales_orders DROP CONSTRAINT IF EXISTS sales_orders_sales_person_fkey;
    ALTER TABLE sales_orders DROP CONSTRAINT IF EXISTS sales_orders_created_by_fkey;
    ALTER TABLE sales_orders DROP CONSTRAINT IF EXISTS sales_orders_approved_by_fkey;
    ALTER TABLE deliveries DROP CONSTRAINT IF EXISTS deliveries_delivered_by_fkey;
    ALTER TABLE invoices DROP CONSTRAINT IF EXISTS invoices_created_by_fkey;
    ALTER TABLE invoices DROP CONSTRAINT IF EXISTS invoices_approved_by_fkey;
    ALTER TABLE payments DROP CONSTRAINT IF EXISTS payments_created_by_fkey;
    ALTER TABLE payments DROP CONSTRAINT IF EXISTS payments_approved_by_fkey;
    ALTER TABLE journal_entries DROP CONSTRAINT IF EXISTS journal_entries_created_by_fkey;
    ALTER TABLE journal_entries DROP CONSTRAINT IF EXISTS journal_entries_posted_by_fkey;

    RAISE NOTICE 'Foreign key constraints dijatuhkan.';

    -- ==================================================================
    -- 1. PERBARUI ID DI TABEL app_users PERTAMA
    -- ==================================================================
    RAISE NOTICE 'Memperbarui ID di tabel app_users...';

    -- Pastikan tidak ada duplikat ID baru yang sudah ada
    IF EXISTS (SELECT 1 FROM app_users WHERE id = new_auth_user_uuid) THEN
        RAISE EXCEPTION 'ID baru (%) sudah ada di tabel app_users. Pilih ID baru yang unik atau hapus entri duplikat terlebih dahulu.', new_auth_user_uuid;
    END IF;

    UPDATE app_users
    SET id = new_auth_user_uuid
    WHERE id = old_app_user_uuid;
    RAISE NOTICE 'app_users ID diperbarui ke %.', new_auth_user_uuid;

    -- ==================================================================
    -- 2. PERBARUI SEMUA REFERENSI FOREIGN KEY DI TABEL LAIN
    -- Sekarang new_auth_user_uuid sudah ada di app_users, update ini akan berhasil.
    -- ==================================================================
    RAISE NOTICE 'Memperbarui referensi di tabel lain...';

    UPDATE audit_logs
    SET user_id = new_auth_user_uuid
    WHERE user_id = old_app_user_uuid;
    RAISE NOTICE 'audit_logs diperbarui.';

    UPDATE stock_movements
    SET created_by = new_auth_user_uuid
    WHERE created_by = old_app_user_uuid;
    RAISE NOTICE 'stock_movements diperbarui.';

    UPDATE purchase_orders
    SET
        created_by = new_auth_user_uuid,
        approved_by = CASE WHEN approved_by = old_app_user_uuid THEN new_auth_user_uuid ELSE approved_by END
    WHERE created_by = old_app_user_uuid OR approved_by = old_app_user_uuid;
    RAISE NOTICE 'purchase_orders diperbarui.';

    UPDATE goods_receipts
    SET received_by = new_auth_user_uuid
    WHERE received_by = old_app_user_uuid;
    RAISE NOTICE 'goods_receipts diperbarui.';

    UPDATE sales_orders
    SET
        sales_person = new_auth_user_uuid,
        created_by = new_auth_user_uuid,
        approved_by = CASE WHEN approved_by = old_app_user_uuid THEN new_auth_user_uuid ELSE approved_by END
    WHERE sales_person = old_app_user_uuid OR created_by = old_app_user_uuid OR approved_by = old_app_user_uuid;
    RAISE NOTICE 'sales_orders diperbarui.';

    UPDATE deliveries
    SET delivered_by = new_auth_user_uuid
    WHERE delivered_by = old_app_user_uuid;
    RAISE NOTICE 'deliveries diperbarui.';

    UPDATE invoices
    SET
        created_by = new_auth_user_uuid,
        approved_by = CASE WHEN approved_by = old_app_user_uuid THEN new_auth_user_uuid ELSE approved_by END
    WHERE created_by = old_app_user_uuid OR approved_by = old_app_user_uuid;
    RAISE NOTICE 'invoices diperbarui.';

    UPDATE payments
    SET
        created_by = new_auth_user_uuid,
        approved_by = CASE WHEN approved_by = old_app_user_uuid THEN new_auth_user_uuid ELSE approved_by END
    WHERE created_by = old_app_user_uuid OR approved_by = old_app_user_uuid;
    RAISE NOTICE 'payments diperbarui.';

    UPDATE journal_entries
    SET
        created_by = new_auth_user_uuid,
        posted_by = CASE WHEN posted_by = old_app_user_uuid THEN new_auth_user_uuid ELSE posted_by END
    WHERE created_by = old_app_user_uuid OR posted_by = old_app_user_uuid;
    RAISE NOTICE 'journal_entries diperbarui.';

    -- ==================================================================
    -- 3. RE-ADD FOREIGN KEY CONSTRAINTS
    -- ==================================================================
    RAISE NOTICE 'Menambahkan kembali foreign key constraints...';

    ALTER TABLE audit_logs ADD CONSTRAINT audit_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES app_users(id);
    ALTER TABLE stock_movements ADD CONSTRAINT stock_movements_created_by_fkey FOREIGN KEY (created_by) REFERENCES app_users(id);
    ALTER TABLE purchase_orders ADD CONSTRAINT purchase_orders_created_by_fkey FOREIGN KEY (created_by) REFERENCES app_users(id);
    ALTER TABLE purchase_orders ADD CONSTRAINT purchase_orders_approved_by_fkey FOREIGN KEY (approved_by) REFERENCES app_users(id);
    ALTER TABLE goods_receipts ADD CONSTRAINT goods_receipts_received_by_fkey FOREIGN KEY (received_by) REFERENCES app_users(id);
    ALTER TABLE sales_orders ADD CONSTRAINT sales_orders_sales_person_fkey FOREIGN KEY (sales_person) REFERENCES app_users(id);
    ALTER TABLE sales_orders ADD CONSTRAINT sales_orders_created_by_fkey FOREIGN KEY (created_by) REFERENCES app_users(id);
    ALTER TABLE sales_orders ADD CONSTRAINT sales_orders_approved_by_fkey FOREIGN KEY (approved_by) REFERENCES app_users(id);
    ALTER TABLE deliveries ADD CONSTRAINT deliveries_delivered_by_fkey FOREIGN KEY (delivered_by) REFERENCES app_users(id);
    ALTER TABLE invoices ADD CONSTRAINT invoices_created_by_fkey FOREIGN KEY (created_by) REFERENCES app_users(id);
    ALTER TABLE invoices ADD CONSTRAINT invoices_approved_by_fkey FOREIGN KEY (approved_by) REFERENCES app_users(id);
    ALTER TABLE payments ADD CONSTRAINT payments_created_by_fkey FOREIGN KEY (created_by) REFERENCES app_users(id);
    ALTER TABLE payments ADD CONSTRAINT payments_approved_by_fkey FOREIGN KEY (approved_by) REFERENCES app_users(id);
    ALTER TABLE journal_entries ADD CONSTRAINT journal_entries_created_by_fkey FOREIGN KEY (created_by) REFERENCES app_users(id);
    ALTER TABLE journal_entries ADD CONSTRAINT journal_entries_posted_by_fkey FOREIGN KEY (posted_by) REFERENCES app_users(id);

    RAISE NOTICE 'Foreign key constraints ditambahkan kembali.';


    -- ==================================================================
    -- 4. Opsional: PERBARUI FOREIGN KEY REFERENCES auth.users(id)
    -- Jika Anda ingin app_users.id merujuk langsung ke auth.users.id
    -- Pastikan Anda sudah login ke database sebagai peran yang memiliki akses ke skema auth.
    -- ==================================================================
    -- ALTER TABLE app_users ADD CONSTRAINT app_users_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE;
    -- RAISE NOTICE 'Foreign key ke auth.users ditambahkan kembali (jika diperlukan).';


    RAISE NOTICE 'Proses pembaruan ID pengguna selesai. Verifikasi data Anda.';

    -- AKTIFKAN KEMBALI RLS (jika sebelumnya dinonaktifkan)
    -- SET row_level_security = on;
    -- SET session_replication_role = origin;
END $$;
