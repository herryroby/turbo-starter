'use client';

import { BackButton } from '@/components/common';
import SalesInvoiceForm from '../components/invoice.fm';

const AddInvoicePage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-medium">Add Invoice</h1>
        </div>
        <BackButton link="/sales/invoices" />
      </div>

      <div className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <SalesInvoiceForm />
      </div>
    </div>
  );
};

export default AddInvoicePage;
