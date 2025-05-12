export interface SalesInvoice {
  invoiceId: string;
  customerId: string;
  customerName: string;
  date: Date;
  dueDate: Date;
  status: 'Paid' | 'Unpaid';
  amount: number;
  totalAmount: number;
}
