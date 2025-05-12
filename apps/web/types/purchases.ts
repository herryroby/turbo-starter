export interface PurchaseInvoice {
  invoiceId: string;
  vendorId: string;
  vendorName: string;
  date: Date;
  dueDate: Date;
  status: 'Paid' | 'Unpaid';
  amount: number;
  totalAmount: number;
}
