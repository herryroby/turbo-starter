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
          <p className="text-zinc-500 dark:text-zinc-400">Buat tagihan baru untuk pelanggan Anda</p>
        </div>
        <Button variant="outline" onClick={() => router.push('/sales/invoices')}>
          Kembali
        </Button>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <InvoiceForm />
      </div>
    </div>
  );
}
