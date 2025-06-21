'use client';

import { Suspense } from 'react';
import PurchaseInvoicesClient from './invoices-client';

const PurchaseInvoicesPage = () => {
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
      <PurchaseInvoicesClient />
    </Suspense>
  );
};

export default PurchaseInvoicesPage;
