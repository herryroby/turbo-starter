import type { Invoice } from '@/types/sales';

const invoices: Invoice[] = [
  {
    id: 'INV/000001',
    invoiceNo: 'INV/000001',
    company: 'Harapindo Multipro E-Bisnis (Harapindo)',
    dueDate: '01/05/2023',
    status: 'Unpaid',
    amount: 1497000,
    total: 1497000
  },
  {
    id: 'INV/000002',
    invoiceNo: 'INV/000002',
    company: 'Mitra Berjangka Pekanbaru',
    dueDate: '15/05/2023',
    status: 'Unpaid',
    amount: 1396000,
    total: 1396000
  },
  {
    id: 'INV/000003',
    invoiceNo: 'INV/000003',
    company: 'Sabatino Italian Steakhouse',
    dueDate: '20/04/2023',
    status: 'Unpaid',
    amount: 9980000,
    total: 9980000
  },
  {
    id: 'INV/000004',
    invoiceNo: 'INV/000004',
    company: 'Amani Haluan Maju Jaya Wijayanti',
    dueDate: '25/04/2023',
    status: 'Unpaid',
    amount: 198000,
    total: 198000
  },
  {
    id: 'INV/000005',
    invoiceNo: 'INV/000005',
    company: 'Paris Suasana Megastore',
    dueDate: '04/05/2023',
    status: 'Paid',
    amount: 11970000,
    total: 11970000
  },
  {
    id: 'INV/000006',
    invoiceNo: 'INV/000006',
    company: 'POS Customer',
    dueDate: '08/05/2023',
    status: 'Unpaid',
    amount: 842760,
    total: 842760
  },
  {
    id: 'INV/000007',
    invoiceNo: 'INV/000007',
    company: 'Mitra Berjangka Pekanbaru',
    dueDate: '11/05/2023',
    status: 'Paid',
    amount: 8403000,
    total: 8403000
  },
  {
    id: 'INV/000008',
    invoiceNo: 'INV/000008',
    company: 'Kahyun Taeri Adisti Alam Shamshung',
    dueDate: '28/04/2023',
    status: 'Paid',
    amount: 300000,
    total: 300000
  },
  {
    id: 'INV/000009',
    invoiceNo: 'INV/000009',
    company: 'Mahkota Mandiri & CV Perkasa',
    dueDate: '22/04/2023',
    status: 'Unpaid',
    amount: 2957290,
    total: 2957290
  },
  {
    id: 'INV/000010',
    invoiceNo: 'INV/000010',
    company: 'Gajah Gilda Puspita Tersulam',
    dueDate: '15/04/2023',
    status: 'Paid',
    amount: 802780,
    total: 802780
  }
];

export default invoices;
