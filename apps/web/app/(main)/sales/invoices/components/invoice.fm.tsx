'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@repo/ui/components/button';
import { Input } from '@repo/ui/components/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@repo/ui/components/select';
import { ChevronDown, ChevronUp, Trash2 } from 'lucide-react';

// Create schema for form validation
const invoiceFormSchema = z.object({
  // Customer information
  pelanggan: z.string().min(1, { message: "Pelanggan wajib diisi" }),
  nomor: z.string().min(1, { message: "Nomor wajib diisi" }),
  
  // Transaction details
  tanggalTransaksi: z.string().min(1, { message: "Tanggal transaksi wajib diisi" }),
  tanggalJatuhTempo: z.string().min(1, { message: "Tanggal jatuh tempo wajib diisi" }),
  termin: z.string().optional(),
  gudang: z.string().optional(),
  referensi: z.string().optional(),
  tag: z.string().optional(),
  
  // Sales person
  salesPerson: z.string().optional(),
  
  // Payment information
  nomorPengiriman: z.string().optional(),
  hargaPajak: z.string().optional(),
  biayaPengiriman: z.string().optional(),
  diskonPembayaran: z.string().optional(),
  uangMuka: z.string().optional(),
  
  // Products will be handled separately
});

type InvoiceFormValues = z.infer<typeof invoiceFormSchema>;

// Product type
type Product = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  discount: number;
  tax: number;
  total: number;
};

export function InvoiceForm() {
  // Initialize form with default values
  const form = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceFormSchema),
    defaultValues: {
      pelanggan: '',
      nomor: '',
      tanggalTransaksi: new Date().toISOString().split('T')[0],
      tanggalJatuhTempo: '',
      termin: 'Net 30',
      gudang: '',
      referensi: '',
      tag: '',
      salesPerson: '',
      nomorPengiriman: '',
      hargaPajak: '0',
      biayaPengiriman: '0',
      diskonPembayaran: '0',
      uangMuka: '0',
    },
  });
  
  // State for products
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: '',
      quantity: 1,
      price: 0,
      discount: 0,
      tax: 0,
      total: 0,
    },
  ]);
  
  // State for collapsible sections
  const [isInfoPengirimanOpen, setIsInfoPengirimanOpen] = useState(false);
  const [isAttachmentOpen, setIsAttachmentOpen] = useState(false);
  const [isPaymentContractOpen, setIsPaymentContractOpen] = useState(false);
  
  // Calculate subtotal, tax, and total
  const calculateSubtotal = () => {
    return products.reduce((sum, product) => sum + (product.price * product.quantity * (1 - product.discount / 100)), 0);
  };
  
  const calculateTax = () => {
    const taxRate = parseFloat(form.watch('hargaPajak') || '0') / 100;
    return calculateSubtotal() * taxRate;
  };
  
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const tax = calculateTax();
    const shipping = parseFloat(form.watch('biayaPengiriman') || '0');
    const discount = parseFloat(form.watch('diskonPembayaran') || '0');
    const advance = parseFloat(form.watch('uangMuka') || '0');
    
    return subtotal + tax + shipping - discount - advance;
  };
  
  // Add a new product row
  const addProduct = () => {
    setProducts([
      ...products,
      {
        id: (products.length + 1).toString(),
        name: '',
        quantity: 1,
        price: 0,
        discount: 0,
        tax: 0,
        total: 0,
      },
    ]);
  };
  
  // Remove a product row
  const removeProduct = (id: string) => {
    setProducts(products.filter(product => product.id !== id));
  };
  
  // Update product values
  const updateProduct = (id: string, field: keyof Product, value: string | number) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        const updatedProduct = { ...product, [field]: value };
        
        // Recalculate total
        const quantity = updatedProduct.quantity;
        const price = updatedProduct.price;
        const discount = updatedProduct.discount;
        updatedProduct.total = quantity * price * (1 - discount / 100);
        
        return updatedProduct;
      }
      return product;
    }));
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
      {/* Customer and Invoice Information */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label htmlFor="pelanggan" className="mb-1 block text-sm font-medium text-red-500">* Pelanggan</label>
            <Input
              id="pelanggan"
              {...form.register('pelanggan')}
              placeholder="Pilih pelanggan"
              className="w-full"
            />
            {form.formState.errors.pelanggan && (
              <p className="mt-1 text-xs text-red-500">{form.formState.errors.pelanggan.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="tanggalTransaksi" className="mb-1 block text-sm font-medium text-red-500">* Tgl Transaksi</label>
            <Input
              id="tanggalTransaksi"
              type="date"
              {...form.register('tanggalTransaksi')}
              className="w-full"
            />
            {form.formState.errors.tanggalTransaksi && (
              <p className="mt-1 text-xs text-red-500">{form.formState.errors.tanggalTransaksi.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="tanggalJatuhTempo" className="mb-1 block text-sm font-medium text-red-500">* Tanggal Jatuh Tempo</label>
            <Input
              id="tanggalJatuhTempo"
              type="date"
              {...form.register('tanggalJatuhTempo')}
              className="w-full"
            />
            {form.formState.errors.tanggalJatuhTempo && (
              <p className="mt-1 text-xs text-red-500">{form.formState.errors.tanggalJatuhTempo.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="gudang" className="mb-1 block text-sm font-medium">Gudang</label>
            <Input
              id="gudang"
              {...form.register('gudang')}
              placeholder="Pilih gudang"
              className="w-full"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="nomor" className="mb-1 block text-sm font-medium text-red-500">* Nomor</label>
            <Input
              id="nomor"
              {...form.register('nomor')}
              placeholder="INV/00046"
              className="w-full"
            />
            {form.formState.errors.nomor && (
              <p className="mt-1 text-xs text-red-500">{form.formState.errors.nomor.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="termin" className="mb-1 block text-sm font-medium">Termin</label>
            <Select onValueChange={(value) => form.setValue('termin', value)} defaultValue={form.watch('termin')}>              
              <SelectTrigger id="termin" className="w-full">
                <SelectValue placeholder="Pilih termin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Net 30">Net 30</SelectItem>
                <SelectItem value="Net 15">Net 15</SelectItem>
                <SelectItem value="Net 7">Net 7</SelectItem>
                <SelectItem value="COD">COD</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label htmlFor="referensi" className="mb-1 block text-sm font-medium">Referensi</label>
            <Input
              id="referensi"
              {...form.register('referensi')}
              placeholder="Referensi"
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="tag" className="mb-1 block text-sm font-medium">Tag</label>
            <Input
              id="tag"
              {...form.register('tag')}
              placeholder="Pilih Tag"
              className="w-full"
            />
          </div>
        </div>
      </div>
      
      {/* Sales Person */}
      <div className="border-t border-gray-200 pt-4">
        <h3 className="mb-4 text-sm font-medium">Sambungkan Sales Person</h3>
        <div className="mb-4">
          <label htmlFor="salesPerson" className="mb-1 block text-sm font-medium">Sales Person</label>
          <Input
            id="salesPerson"
            {...form.register('salesPerson')}
            placeholder="Pilih sales person"
            className="w-full md:w-1/2"
          />
        </div>
      </div>
      
      {/* Shipping Information */}
      <div className="border-t border-gray-200 pt-4">
        <button
          type="button"
          className="flex w-full items-center justify-between text-sm font-medium"
          onClick={() => setIsInfoPengirimanOpen(!isInfoPengirimanOpen)}
        >
          <span>Sambungkan Informasi Pengiriman</span>
          {isInfoPengirimanOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {isInfoPengirimanOpen && (
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <label htmlFor="tanggalPengiriman" className="mb-1 block text-sm font-medium">Tanggal Pengiriman</label>
              <Input
                id="tanggalPengiriman"
                type="date"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="metodePengiriman" className="mb-1 block text-sm font-medium">Metode Pengiriman</label>
              <Input
                id="metodePengiriman"
                placeholder="Pilih metode"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="nomorResi" className="mb-1 block text-sm font-medium">No. Resi</label>
              <Input
                id="nomorResi"
                placeholder="No. Resi"
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>
      
      {/* Products Table */}
      <div className="border-t border-gray-200 pt-4">
        <h3 className="mb-4 text-sm font-medium">Produk</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b text-xs">
                <th className="px-2 py-2 text-left font-medium">Produk</th>
                <th className="px-2 py-2 text-left font-medium">Deskripsi</th>
                <th className="px-2 py-2 text-center font-medium">Kuantitas</th>
                <th className="px-2 py-2 text-center font-medium">Satuan</th>
                <th className="px-2 py-2 text-center font-medium">Discount</th>
                <th className="px-2 py-2 text-center font-medium">Harga</th>
                <th className="px-2 py-2 text-center font-medium">Pajak</th>
                <th className="px-2 py-2 text-right font-medium">Jumlah</th>
                <th className="px-2 py-2 w-8"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="px-2 py-2">
                    <Input
                      placeholder="Pilih Produk"
                      value={product.name}
                      onChange={(e) => updateProduct(product.id, 'name', e.target.value)}
                      className="w-full"
                    />
                  </td>
                  <td className="px-2 py-2">
                    <Input
                      placeholder="Deskripsi"
                      className="w-full"
                    />
                  </td>
                  <td className="px-2 py-2">
                    <Input
                      type="number"
                      min="1"
                      value={product.quantity}
                      onChange={(e) => updateProduct(product.id, 'quantity', parseInt(e.target.value))}
                      className="w-full text-center"
                    />
                  </td>
                  <td className="px-2 py-2">
                    <Input
                      placeholder="pcs"
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
                        onChange={(e) => updateProduct(product.id, 'discount', parseInt(e.target.value))}
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
                      onChange={(e) => updateProduct(product.id, 'price', parseInt(e.target.value))}
                      className="w-full text-right"
                    />
                  </td>
                  <td className="px-2 py-2">
                    <Input
                      placeholder="Pajak"
                      className="w-full text-center"
                    />
                  </td>
                  <td className="px-2 py-2 text-right">
                    {formatCurrency(product.quantity * product.price * (1 - product.discount / 100))}
                  </td>
                  <td className="px-2 py-2">
                    {products.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeProduct(product.id)}
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
        
        <Button
          type="button"
          variant="outline"
          className="mt-4"
          onClick={addProduct}
        >
          + tambah baris
        </Button>
      </div>
      
      {/* Attachment Section */}
      <div className="border-t border-gray-200 pt-4">
        <button
          type="button"
          className="flex w-full items-center justify-between text-sm font-medium"
          onClick={() => setIsAttachmentOpen(!isAttachmentOpen)}
        >
          <span>Attachment</span>
          {isAttachmentOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {isAttachmentOpen && (
          <div className="mt-4">
            <Input
              type="file"
              className="w-full"
            />
          </div>
        )}
      </div>
      
      {/* Payment Contract */}
      <div className="border-t border-gray-200 pt-4">
        <button
          type="button"
          className="flex w-full items-center justify-between text-sm font-medium"
          onClick={() => setIsPaymentContractOpen(!isPaymentContractOpen)}
        >
          <span>Payment Contract</span>
          {isPaymentContractOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {isPaymentContractOpen && (
          <div className="mt-4">
            <textarea
              className="w-full rounded-md border border-gray-300 p-2"
              rows={4}
              placeholder="Payment contract details..."
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
            <label htmlFor="hargaPajak" className="text-sm">Pajak</label>
            <div className="flex items-center">
              <Input
                id="hargaPajak"
                type="number"
                min="0"
                max="100"
                {...form.register('hargaPajak')}
                className="w-20 text-right"
              />
              <span className="ml-1">%</span>
              <span className="ml-2 w-24 text-right">{formatCurrency(calculateTax())}</span>
            </div>
          </div>
          
          <div className="flex w-full items-center justify-between md:w-1/3">
            <label htmlFor="biayaPengiriman" className="text-sm">Biaya pengiriman</label>
            <div className="flex items-center">
              <Input
                id="biayaPengiriman"
                type="number"
                min="0"
                {...form.register('biayaPengiriman')}
                className="w-32 text-right"
              />
              <span className="ml-1">Rp</span>
            </div>
          </div>
          
          <div className="flex w-full items-center justify-between md:w-1/3">
            <label htmlFor="diskonPembayaran" className="text-sm">Diskon pembayaran</label>
            <div className="flex items-center">
              <Input
                id="diskonPembayaran"
                type="number"
                min="0"
                {...form.register('diskonPembayaran')}
                className="w-32 text-right"
              />
              <span className="ml-1">Rp</span>
            </div>
          </div>
          
          <div className="flex w-full justify-between md:w-1/3">
            <span className="text-sm">Biaya pengiriman</span>
            <span>{formatCurrency(parseFloat(form.watch('biayaPengiriman') || '0'))}</span>
          </div>
          
          <div className="flex w-full items-center justify-between md:w-1/3">
            <label htmlFor="uangMuka" className="text-sm">Uang muka</label>
            <div className="flex items-center">
              <Input
                id="uangMuka"
                type="number"
                min="0"
                {...form.register('uangMuka')}
                className="w-32 text-right"
              />
              <span className="ml-1">Rp</span>
            </div>
          </div>
          
          <div className="flex w-full justify-between border-t border-gray-200 pt-2 md:w-1/3">
            <span className="font-medium">Total</span>
            <span className="font-medium">{formatCurrency(calculateTotal())}</span>
          </div>
        </div>
      </div>
      
      {/* Submit Button */}
      <div className="flex justify-end">
        <Button
          type="submit"
          className="bg-blue-600 text-white hover:bg-blue-700"
        >
          Simpan
        </Button>
      </div>
    </form>
  );
}
