export interface SalesInvoice {
  invoiceId: string;
  customerId: string;
  customerName: string;
  dueDate: Date;
  status: 'Paid' | 'Unpaid';
  amount: number;
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
}
