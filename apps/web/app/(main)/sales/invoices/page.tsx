'use client';

import { Suspense } from 'react';
import InvoicesClient from './invoices-client';

export const dynamic = 'force-dynamic';

export default function SalesInvoicesPage() {
  return (
    <Suspense fallback={
      <div className="p-6">
        <div className="h-10 w-64 bg-gray-200 rounded mb-6 animate-pulse"></div>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-16 w-full bg-gray-100 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    }>
      <InvoicesClient />
    </Suspense>
  );
}
