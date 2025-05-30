import type { PurchaseInvoice } from '@/types/purchases';
import { faker } from '@faker-js/faker';

const createPurchaseInvoice = (numInvoices: number) => {
  const purchaseInvoice: PurchaseInvoice[] = [];

  for (let i = 0; i < numInvoices; i++) {
    purchaseInvoice.push({
      invoiceId: `PI/00000${i + 1}`,
      supplierId: `S000${i + 1}`,
      supplierName: faker.company.name(),
      dueDate: faker.date.past(),
      status: faker.helpers.arrayElement(['Unpaid', 'Paid']) as 'Unpaid' | 'Paid',
      amount: faker.number.int({ min: 100000, max: 5000000 }),
      totalAmount: faker.number.int({ min: 100000, max: 10000000 }),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent()
    });
  }
  return purchaseInvoice;
};

export const purchaseInvoices: PurchaseInvoice[] = createPurchaseInvoice(100);
