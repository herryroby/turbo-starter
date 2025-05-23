'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@repo/ui/components/button';
import { Input } from '@repo/ui/components/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@repo/ui/components/select';
import { ChevronDown, ChevronUp, SaveIcon, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const invoiceFormSchema = z.object({
  customerName: z.string().min(1, { message: 'Customer is required' }),
  salesInvoiceId: z.string().min(1, { message: 'Invoice No is required' }),
  transactionDate: z.string().min(1, { message: 'Transaction Date is required' }),
  dueDate: z.string().min(1, { message: 'Due Date is required' }),
  termOfPayment: z.string().optional(),
  warehouse: z.string().optional(),
  reference: z.string().optional(),
  tag: z.string().optional(),
  salesmanName: z.string().optional(),
  shippingDate: z.string().optional(),
  expedition: z.string().optional(),
  trackingNo: z.string().optional(),
  taxAmount: z.string().optional(),
  shippingCost: z.string().optional(),
  paymentDiscount: z.string().optional(),
  advancePayment: z.string().optional()
});

type InvoiceFormValues = z.infer<typeof invoiceFormSchema>;

type Product = {
  productId: string;
  name: string;
  description: string;
  quantity: number;
  unit: string;
  price: number;
  discount: number;
  taxRate: number;
  total: number;
};

const SalesInvoiceForm = () => {
  const form = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceFormSchema),
    defaultValues: {
      customerName: '',
      salesInvoiceId: '',
      transactionDate: new Date().toISOString().split('T')[0],
      dueDate: '',
      termOfPayment: 'Net 30',
      warehouse: '',
      reference: '',
      tag: '',
      salesmanName: '',
      shippingDate: '',
      expedition: '',
      trackingNo: '',
      taxAmount: '0',
      shippingCost: '0',
      paymentDiscount: '0',
      advancePayment: '0'
    }
  });

  const [products, setProducts] = useState<Product[]>([
    {
      productId: '1',
      name: '',
      description: '',
      quantity: 1,
      unit: '',
      price: 0,
      discount: 0,
      taxRate: 0,
      total: 0
    }
  ]);

  // State for collapsible sections
  const [isInfoPengirimanOpen, setIsInfoPengirimanOpen] = useState(false);
  const [isAttachmentOpen, setIsAttachmentOpen] = useState(false);
  const [isPaymentConnectOpen, setIsPaymentConnectOpen] = useState(false);

  // Calculate subtotal, tax, and total
  const calculateSubtotal = () => {
    return products.reduce((sum, product) => sum + product.price * product.quantity * (1 - product.discount / 100), 0);
  };

  const calculateTax = () => {
    const taxRate = parseFloat(form.watch('taxAmount') || '0') / 100;
    return calculateSubtotal() * taxRate;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const tax = calculateTax();
    const shipping = parseFloat(form.watch('shippingCost') || '0');
    const discount = parseFloat(form.watch('paymentDiscount') || '0');
    const advance = parseFloat(form.watch('advancePayment') || '0');

    return subtotal + tax + shipping - discount - advance;
  };

  // Add a new product row
  const addProduct = () => {
    setProducts([
      ...products,
      {
        productId: (products.length + 1).toString(),
        name: '',
        description: '',
        quantity: 1,
        unit: '',
        price: 0,
        discount: 0,
        taxRate: 0,
        total: 0
      }
    ]);
  };

  // Remove a product row
  const removeProduct = (id: string) => {
    setProducts(products.filter((product) => product.productId !== id));
  };

  // Update product values
  const updateProduct = (id: string, field: keyof Product, value: string | number) => {
    setProducts(
      products.map((product) => {
        if (product.productId === id) {
          const updatedProduct = { ...product, [field]: value };

          // Recalculate total
          const quantity = updatedProduct.quantity;
          const price = updatedProduct.price;
          const discount = updatedProduct.discount;
          updatedProduct.total = quantity * price * (1 - discount / 100);

          return updatedProduct;
        }
        return product;
      })
    );
  };

  // Form submission
  const onSubmit = (data: InvoiceFormValues) => {
    console.log('Form data:', data);
    console.log('Products:', products);

    // Here you would typically send the data to your API
    alert('Tagihan berhasil disimpan!');
  };

  // Format number as currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID').format(value);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label htmlFor="customerName" className="mb-1 block text-sm">
              <span className="text-red-500">*</span> Customer
            </label>
            <Select
              onValueChange={(value) => form.setValue('customerName', value)}
              defaultValue={form.watch('customerName')}
            >
              <SelectTrigger id="customerName" className="w-full">
                <SelectValue placeholder="Select customer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Konopelski Inc">Konopelski Inc</SelectItem>
                <SelectItem value="Bashirian - Homenick">Bashirian - Homenick</SelectItem>
                <SelectItem value="Kuhic - Kuhic">Kuhic - Kuhic</SelectItem>
                <SelectItem value="Dickens, Wiza and Beatty">Dickens, Wiza and Beatty</SelectItem>
                <SelectItem value="Treutel Inc">Treutel Inc</SelectItem>
                <SelectItem value="Lynch Group">Lynch Group</SelectItem>
                <SelectItem value="Denesik - Yost">Denesik - Yost</SelectItem>
                <SelectItem value="Hoppe Group">Hoppe Group</SelectItem>
                <SelectItem value="Gerlach, Kreiger and Russel">Gerlach, Kreiger and Russel</SelectItem>
                <SelectItem value="Smitham, Hane and Hickle">Smitham, Hane and Hickle</SelectItem>
              </SelectContent>
            </Select>
            {form.formState.errors.customerName && (
              <p className="mt-1 text-xs text-red-500">{form.formState.errors.customerName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="transactionDate" className="mb-1 block text-sm">
              <span className="text-red-500">*</span> Transaction Date
            </label>
            <Input id="transactionDate" type="date" {...form.register('transactionDate')} className="w-full" />
            {form.formState.errors.transactionDate && (
              <p className="mt-1 text-xs text-red-500">{form.formState.errors.transactionDate.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="dueDate" className="mb-1 block text-sm">
              <span className="text-red-500">*</span> Due Date
            </label>
            <Input id="dueDate" type="date" {...form.register('dueDate')} className="w-full" />
            {form.formState.errors.dueDate && (
              <p className="mt-1 text-xs text-red-500">{form.formState.errors.dueDate.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="warehouse" className="mb-1 block text-sm">
              Warehouse
            </label>
            <Select onValueChange={(value) => form.setValue('warehouse', value)} defaultValue={form.watch('warehouse')}>
              <SelectTrigger id="warehouse" className="w-full">
                <SelectValue placeholder="Select warehouse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Unassigned">Unassigned</SelectItem>
                <SelectItem value="Main">Main</SelectItem>
                <SelectItem value="Sub">Sub</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="salesInvoiceId" className="mb-1 block text-sm">
              <span className="text-red-500">*</span> Invoice No
            </label>
            <Input
              id="salesInvoiceId"
              {...form.register('salesInvoiceId')}
              placeholder="INV/00046"
              className="w-full"
            />
            {form.formState.errors.salesInvoiceId && (
              <p className="mt-1 text-xs text-red-500">{form.formState.errors.salesInvoiceId.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="termOfPayment" className="mb-1 block text-sm">
              Term of Payment
            </label>
            <Select
              onValueChange={(value) => form.setValue('termOfPayment', value)}
              defaultValue={form.watch('termOfPayment')}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select term of payment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Net30">Net 30</SelectItem>
                <SelectItem value="Net15">Net 15</SelectItem>
                <SelectItem value="Net7">Net 7</SelectItem>
                <SelectItem value="COD">Cash On Delivery</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="reference" className="mb-1 block text-sm">
              Reference
            </label>
            <Input id="reference" {...form.register('reference')} placeholder="Reference" className="w-full" />
          </div>

          <div>
            <label htmlFor="tag" className="mb-1 block text-sm">
              Tag
            </label>
            <Input id="tag" {...form.register('tag')} placeholder="Tag" className="w-full" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <h3 className="mb-4 text-sm font-medium">Sales Person</h3>
        <div className="mb-4">
          <label htmlFor="salesmanName" className="mb-1 block text-sm">
            Sales Person
          </label>
          <Input
            id="salesmanName"
            {...form.register('salesmanName')}
            placeholder="Select sales person"
            className="w-full md:w-1/2"
          />
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <button
          type="button"
          className="flex w-full items-center justify-between text-sm font-medium"
          onClick={() => setIsInfoPengirimanOpen(!isInfoPengirimanOpen)}
        >
          <span>Shipping Information</span>
          {isInfoPengirimanOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {isInfoPengirimanOpen && (
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <label htmlFor="shippingDate" className="mb-1 block text-sm">
                Shipping Date
              </label>
              <Input id="shippingDate" type="date" {...form.register('shippingDate')} className="w-full" />
            </div>
            <div>
              <label htmlFor="expedition" className="mb-1 block text-sm">
                Expedition
              </label>
              <Input id="expedition" {...form.register('expedition')} placeholder="Expedition" className="w-full" />
            </div>
            <div>
              <label htmlFor="trackingNo" className="mb-1 block text-sm">
                Tracking No
              </label>
              <Input id="trackingNo" {...form.register('trackingNo')} placeholder="Tracking No" className="w-full" />
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 pt-4">
        <h3 className="mb-4 text-sm font-medium">Products</h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b text-xs">
                <th className="px-2 py-2 text-left font-medium">Product</th>
                <th className="px-2 py-2 text-left font-medium">Description</th>
                <th className="px-2 py-2 text-center font-medium">Quantity</th>
                <th className="px-2 py-2 text-center font-medium">Unit</th>
                <th className="px-2 py-2 text-center font-medium">Discount</th>
                <th className="px-2 py-2 text-center font-medium">Price</th>
                <th className="px-2 py-2 text-center font-medium">Tax</th>
                <th className="px-2 py-2 text-right font-medium">Amount</th>
                <th className="w-8 px-2 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.productId} className="border-b">
                  <td className="px-2 py-2">
                    <Input
                      placeholder="Product"
                      value={product.name}
                      onChange={(e) => updateProduct(product.productId, 'name', e.target.value)}
                      className="w-full"
                    />
                  </td>
                  <td className="px-2 py-2">
                    <Input
                      placeholder="Description"
                      value={product.description}
                      onChange={(e) => updateProduct(product.productId, 'description', e.target.value)}
                      className="w-full"
                    />
                  </td>
                  <td className="px-2 py-2">
                    <Input
                      type="number"
                      min="1"
                      value={product.quantity}
                      onChange={(e) => updateProduct(product.productId, 'quantity', parseInt(e.target.value))}
                      className="w-full text-center"
                    />
                  </td>
                  <td className="px-2 py-2">
                    <Input
                      placeholder="pcs"
                      value={product.unit}
                      onChange={(e) => updateProduct(product.productId, 'unit', e.target.value)}
                      className="w-full text-center"
                    />
                  </td>
                  <td className="px-2 py-2">
                    <div className="flex items-center">
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        value={product.discount}
                        onChange={(e) => updateProduct(product.productId, 'discount', parseInt(e.target.value))}
                        className="w-full text-center"
                      />
                      <span className="ml-1">%</span>
                    </div>
                  </td>
                  <td className="px-2 py-2">
                    <Input
                      type="number"
                      min="0"
                      value={product.price}
                      onChange={(e) => updateProduct(product.productId, 'price', parseInt(e.target.value))}
                      className="w-full text-right"
                    />
                  </td>
                  <td className="px-2 py-2">
                    <Input placeholder="Tax" {...form.register('taxAmount')} className="w-full text-center" />
                  </td>
                  <td className="px-2 py-2 text-right">
                    {formatCurrency(product.quantity * product.price * (1 - product.discount / 100))}
                  </td>
                  <td className="px-2 py-2">
                    {products.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeProduct(product.productId)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Button type="button" variant="outline" className="mt-4" onClick={addProduct}>
          + Add Row
        </Button>
      </div>

      {/* Attachment Section */}
      <div className="border-t border-gray-200 pt-4">
        <button
          type="button"
          className="flex w-full items-center justify-between text-sm font-medium"
          onClick={() => setIsAttachmentOpen(!isAttachmentOpen)}
        >
          <span>Attachments</span>
          {isAttachmentOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {isAttachmentOpen && (
          <div className="mt-4">
            <Input type="file" className="w-full" />
          </div>
        )}
      </div>

      {/* Payment Connect */}
      <div className="border-t border-gray-200 pt-4">
        <button
          type="button"
          className="flex w-full items-center justify-between text-sm font-medium"
          onClick={() => setIsPaymentConnectOpen(!isPaymentConnectOpen)}
        >
          <span>Payment Connect</span>
          {isPaymentConnectOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {isPaymentConnectOpen && (
          <div className="mt-4">
            <textarea
              className="w-full rounded-md border border-gray-300 p-2"
              rows={4}
              placeholder="Payment connect details..."
            />
          </div>
        )}
      </div>

      {/* Totals */}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex flex-col items-end space-y-2">
          <div className="flex w-full justify-between md:w-1/3">
            <span className="text-sm">Sub Total</span>
            <span>{formatCurrency(calculateSubtotal())}</span>
          </div>

          <div className="flex w-full items-center justify-between md:w-1/3">
            <label htmlFor="taxAmount" className="text-sm">
              Tax
            </label>
            <div className="flex items-center">
              <Input
                id="taxAmount"
                type="number"
                min="0"
                max="100"
                {...form.register('taxAmount')}
                className="w-20 text-right"
              />
              <span className="ml-1">%</span>
              <span className="ml-2 w-24 text-right">{formatCurrency(calculateTax())}</span>
            </div>
          </div>

          <div className="flex w-full items-center justify-between md:w-1/3">
            <label htmlFor="shippingCost" className="text-sm">
              Shipping Cost
            </label>
            <div className="flex items-center">
              <Input
                id="shippingCost"
                type="number"
                min="0"
                {...form.register('shippingCost')}
                className="w-32 text-right"
              />
              <span className="ml-1">Rp</span>
            </div>
          </div>

          <div className="flex w-full items-center justify-between md:w-1/3">
            <label htmlFor="paymentDiscount" className="text-sm">
              Payment Discount
            </label>
            <div className="flex items-center">
              <Input
                id="paymentDiscount"
                type="number"
                min="0"
                {...form.register('paymentDiscount')}
                className="w-32 text-right"
              />
              <span className="ml-1">Rp</span>
            </div>
          </div>

          <div className="flex w-full justify-between md:w-1/3">
            <span className="text-sm">Shipping Cost</span>
            <span>{formatCurrency(parseFloat(form.watch('shippingCost') || '0'))}</span>
          </div>

          <div className="flex w-full items-center justify-between md:w-1/3">
            <label htmlFor="advancePayment" className="text-sm">
              Advance Payment
            </label>
            <div className="flex items-center">
              <Input
                id="advancePayment"
                type="number"
                min="0"
                {...form.register('advancePayment')}
                className="w-32 text-right"
              />
              <span className="ml-1">Rp</span>
            </div>
          </div>

          <div className="mb-5 flex w-full justify-between border-t border-gray-200 pt-2 md:w-1/3">
            <span className="font-medium">Total</span>
            <span className="font-medium">{formatCurrency(calculateTotal())}</span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 md:w-1/3">
            <SaveIcon size={16} /> Save
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SalesInvoiceForm;
