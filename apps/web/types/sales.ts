export interface Invoice {
  id: string;
  invoiceNo: string;
  company: string;
  dueDate: string;
  status: 'Paid' | 'Unpaid';
  amount: number;
  total: number;
}
