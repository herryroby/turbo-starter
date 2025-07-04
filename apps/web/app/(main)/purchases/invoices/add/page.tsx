'use client';

import { BackButton } from '@/components/composite/back-button';
import PurchaseInvoiceForm from '../_components/purchase-invoice.fm';

const AddPurchaseInvoicePage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-medium">Add Purchase Invoice</h1>
        </div>
        <BackButton link="/purchases/invoices" />
      </div>

      <div className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <PurchaseInvoiceForm />
      </div>
    </div>
  );
};

export default AddPurchaseInvoicePage;
