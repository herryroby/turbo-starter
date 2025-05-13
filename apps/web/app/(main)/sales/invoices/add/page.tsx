'use client';

import { Button } from '@repo/ui/components/button';
import { useRouter } from 'next/navigation';
import { InvoiceForm } from '../components/invoice.fm';

export default function AddInvoicePage() {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tambah Tagihan</h1>
          <p className="text-neutral-500 dark:text-neutral-400">Buat tagihan baru untuk pelanggan Anda</p>
        </div>
        <Button variant="outline" onClick={() => router.push('/sales/invoices')}>
          Kembali
        </Button>
      </div>

      <div className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <InvoiceForm />
      </div>
    </div>
  );
}
