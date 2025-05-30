export interface PurchaseInvoice {
  invoiceId: string;
  supplierId: string;
  supplierName: string;
  dueDate: Date;
  status: 'Paid' | 'Unpaid';
  amount: number;
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
}
