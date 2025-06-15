'use client';

import { customers } from '@/data/customers';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Input,
  Label,
  Select,
  Switch
} from '@repo/ui';
import { SaveIcon, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const salesInvoiceFormSchema = z.object({
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

type SalesInvoiceFormValues = z.infer<typeof salesInvoiceFormSchema>;

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
  const form = useForm<SalesInvoiceFormValues>({
    resolver: zodResolver(salesInvoiceFormSchema),
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
  const onSubmit = (data: SalesInvoiceFormValues) => {
    console.log('Form data:', data);
    console.log('Products:', products);

    // Here you would typically send the data to your API
    alert('Invoice saved!');
  };

  // Format number as currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <div>
            <label htmlFor="customerName" className="mb-1 block text-sm">
              <span className="text-red-500">*</span> Customer
            </label>
            <Select
              data={customers}
              value={form.watch('customerName')}
              onChange={(value) => form.setValue('customerName', value)}
              getOptionLabel={(item) => item?.name ?? ''}
              getOptionValue={(item) => item?.customerId ?? ''}
              placeholder="Select customer"
              addButtonLabel="Add customer"
              renderModal={(close) => (
                <div className="p-4">
                  <h3 className="mb-4 text-lg font-medium">Add New Customer</h3>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      // Handle new customer creation here
                      close();
                    }}
                  >
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="newCustomerName" className="mb-1 block text-sm">
                          Customer Name
                        </label>
                        <Input id="newCustomerName" placeholder="Enter customer name" />
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button type="button" variant="outline" onClick={close}>
                          Cancel
                        </Button>
                        <Button type="submit">Save</Button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            />
            {form.formState.errors.customerName && (
              <p className="mt-1 text-xs text-red-500">{form.formState.errors.customerName.message}</p>
            )}
          </div>
        </div>

        <div>
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
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
          <label htmlFor="termOfPayment" className="mb-1 block text-sm">
            Term of Payment
          </label>
          <Select
            data={[
              { termOfPaymentId: '1', name: 'Net 30' },
              { termOfPaymentId: '2', name: 'Net 15' },
              { termOfPaymentId: '3', name: 'Net 7' },
              { termOfPaymentId: '4', name: 'Cash On Delivery' }
            ]}
            value={form.watch('termOfPayment')}
            onChange={(value) => form.setValue('termOfPayment', value)}
            getOptionLabel={(item) => item?.name ?? ''}
            getOptionValue={(item) => item?.termOfPaymentId ?? ''}
            placeholder="Select term of payment"
          />
        </div>

        <div>
          <label htmlFor="warehouse" className="mb-1 block text-sm">
            <span className="text-red-500">*</span> Warehouse
          </label>
          <Select
            data={[
              { warehouseId: '1', name: 'Unassigned' },
              { warehouseId: '2', name: 'Main' },
              { warehouseId: '3', name: 'Sub' }
            ]}
            value={form.watch('warehouse')}
            onChange={(value) => form.setValue('warehouse', value)}
            getOptionLabel={(item) => item?.name ?? ''}
            getOptionValue={(item) => item?.warehouseId ?? ''}
            placeholder="Select warehouse"
          />
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

      <div className="mb-0 border-t border-gray-200">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="sales-person-info">
            <AccordionTrigger className="text-primary cursor-pointer hover:no-underline">
              Sales Person Information
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div>
                  <label htmlFor="salesmanName" className="mb-1 block text-sm">
                    Sales Person
                  </label>
                  <Input
                    id="salesmanName"
                    {...form.register('salesmanName')}
                    placeholder="Select sales person"
                    className="w-full"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="shipping-info">
            <AccordionTrigger className="text-primary cursor-pointer hover:no-underline">
              Shipping Information
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
                  <Input
                    id="trackingNo"
                    {...form.register('trackingNo')}
                    placeholder="Tracking No"
                    className="w-full"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="flex w-full items-center justify-between">
          <div className="max-w-xs flex-1">
            <Input id="barcodeSku" placeholder="Scan Barcode/SKU" className="w-full" />
          </div>
          <div className="ml-4 flex h-10 items-center gap-2">
            <Label htmlFor="priceIncludeTax" className="self-center text-sm font-normal">
              Price include tax
            </Label>
            <Switch id="priceIncludeTax" />
          </div>
        </div>
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

      <div className="border-t border-gray-200 pt-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="message">
                <AccordionTrigger className="text-primary cursor-pointer hover:no-underline">Message</AccordionTrigger>
                <AccordionContent>
                  <div className="mt-4">
                    <textarea
                      className="w-full rounded-md border border-gray-300 p-2"
                      rows={4}
                      placeholder="Enter message..."
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="attachments">
                <AccordionTrigger className="text-primary cursor-pointer hover:no-underline">
                  Attachments
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mt-4">
                    <Input type="file" className="w-full" />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="payment-connect">
                <AccordionTrigger className="text-primary cursor-pointer hover:no-underline">
                  Payment Connect
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mt-4">
                    <textarea
                      className="w-full rounded-md border border-gray-300 p-2"
                      rows={4}
                      placeholder="Payment connect details..."
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            {/* Totals */}
            <div>
              <div className="flex w-full flex-col items-end space-y-2">
                <div className="flex w-full justify-between">
                  <span className="text-sm font-medium">Sub Total</span>
                  <span className="text-sm font-medium">{formatCurrency(calculateSubtotal())}</span>
                </div>

                <div className="flex w-full items-center justify-between">
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

                <div className="flex w-full items-center justify-between">
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
                  </div>
                </div>

                <div className="flex w-full items-center justify-between">
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
                  </div>
                </div>

                <div className="flex w-full justify-between">
                  <span className="text-sm font-medium">Shipping Cost</span>
                  <span className="text-sm font-medium">
                    {formatCurrency(parseFloat(form.watch('shippingCost') || '0'))}
                  </span>
                </div>

                <div className="flex w-full items-center justify-between">
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
                  </div>
                </div>

                <div className="mb-5 flex w-full justify-between border-t border-gray-200 pt-2">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">{formatCurrency(calculateTotal())}</span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex w-full justify-end">
                <Button type="submit" className="w-full">
                  <SaveIcon size={16} /> Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SalesInvoiceForm;
