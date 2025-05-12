import { SalesInvoice } from '@/types/sales';
import { faker } from '@faker-js/faker';

const createSalesInvoice = (numInvoices: number) => {
  const salesInvoice: SalesInvoice[] = [];

  for (let i = 0; i < numInvoices; i++) {
    salesInvoice.push({
      invoiceId: `CI/00000${i + 1}`,
      customerId: `C000${i + 1}`,
      customerName: faker.company.name(),
      date: faker.date.past(),
      dueDate: faker.date.past(),
      status: faker.helpers.arrayElement(['Unpaid', 'Paid']) as 'Unpaid' | 'Paid',
      amount: faker.number.int({ min: 100000, max: 1000000 }),
      totalAmount: faker.number.int({ min: 100000, max: 1000000 })
    });
  }
  return salesInvoice;
};

export const salesInvoices: SalesInvoice[] = createSalesInvoice(100);
