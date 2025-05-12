export interface PurchaseInvoice {
  invoiceId: string;
  supplierId: string;
  supplierName: string;
  date: Date;
  dueDate: Date;
  status: 'Paid' | 'Unpaid';
  amount: number;
  totalAmount: number;
}
