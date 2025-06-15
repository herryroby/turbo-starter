'use client';

import { productCategory, products } from '@/data/products';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Select, Textarea } from '@repo/ui';
import { SaveIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const productFormSchema = z.object({
  productId: z.string().min(1, { message: 'Product ID is required' }),
  name: z.string().min(1, { message: 'Product name is required' }),
  description: z.string().optional(),
  categoryId: z.string().min(1, { message: 'Category is required' }),
  unitOfMeasureId: z.string().min(1, { message: 'Unit of measure is required' }),
  purchasePrice: z.string().min(1, { message: 'Purchase price is required' }),
  sellingPrice: z.string().min(1, { message: 'Selling price is required' }),
  quantity: z.string().min(1, { message: 'Quantity is required' }),
  isActive: z.boolean().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional()
});

type ProductFormValues = z.infer<typeof productFormSchema>;

const ProductForm = () => {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      productId: '',
      name: '',
      description: '',
      categoryId: '',
      unitOfMeasureId: '1',
      purchasePrice: '',
      sellingPrice: '',
      quantity: '',
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  });

  // Form submission
  const onSubmit = (data: ProductFormValues) => {
    console.log('Form data:', data);
    console.log('Products:', products);

    // Here you would typically send the data to your API
    toast('Product saved!');
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="categoryId" className="mb-1 block text-sm">
            <span className="text-red-500">*</span> Category
          </label>
          <Select
            data={productCategory}
            value={form.watch('categoryId')}
            onChange={(value) => form.setValue('categoryId', value)}
            getOptionLabel={(item) => item?.name ?? ''}
            getOptionValue={(item) => item?.categoryId ?? ''}
            placeholder="Select category"
            addButtonLabel="Add category"
            renderModal={(close) => (
              <div className="p-4">
                <h3 className="mb-4 text-lg font-medium">Add New Category</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle new customer creation here
                    close();
                  }}
                >
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="newCategoryId" className="mb-1 block text-sm">
                        Category ID
                      </label>
                      <Input id="newCategoryId" placeholder="Enter category ID" />
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
          {form.formState.errors.categoryId && (
            <p className="mt-1 text-xs text-red-500">{form.formState.errors.categoryId.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="unitOfMeasureId" className="mb-1 block text-sm">
            <span className="text-red-500">*</span> Unit
          </label>
          <Select
            data={[
              { unitOfMeasureId: '1', name: 'pcs' },
              { unitOfMeasureId: '2', name: 'kg' },
              { unitOfMeasureId: '3', name: 'g' },
              { unitOfMeasureId: '4', name: 'l' }
            ]}
            value={form.watch('unitOfMeasureId')}
            onChange={(value) => form.setValue('unitOfMeasureId', value)}
            getOptionLabel={(item) => item?.name ?? ''}
            getOptionValue={(item) => item?.unitOfMeasureId ?? ''}
            addButtonLabel="Add unit"
            renderModal={(close) => (
              <div className="p-4">
                <h3 className="mb-4 text-lg font-medium">Add New Unit</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle new customer creation here
                    close();
                  }}
                >
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="newUnitId" className="mb-1 block text-sm">
                        Unit ID
                      </label>
                      <Input id="newUnitId" placeholder="Enter unit ID" />
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
          {form.formState.errors.unitOfMeasureId && (
            <p className="mt-1 text-xs text-red-500">{form.formState.errors.unitOfMeasureId.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="productName" className="mb-1 block text-sm">
            <span className="text-red-500">*</span> Product Name
          </label>
          <Select
            data={products}
            value={form.watch('name')}
            onChange={(value) => form.setValue('name', value)}
            getOptionLabel={(item) => item?.name ?? ''}
            getOptionValue={(item) => item?.productId ?? ''}
            placeholder="Select product"
            addButtonLabel="Add product"
            renderModal={(close) => (
              <div className="p-4">
                <h3 className="mb-4 text-lg font-medium">Add New Product</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle new customer creation here
                    close();
                  }}
                >
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="newProductName" className="mb-1 block text-sm">
                        Product Name
                      </label>
                      <Input id="newProductName" placeholder="Enter product name" />
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
          {form.formState.errors.name && (
            <p className="mt-1 text-xs text-red-500">{form.formState.errors.name.message}</p>
          )}
        </div>

        <div>
          <div>
            <label htmlFor="productId" className="mb-1 block text-sm">
              <span className="text-red-500">*</span> Code/SKU
            </label>
            <Input id="productId" {...form.register('productId')} placeholder="Enter product ID" className="w-full" />
            {form.formState.errors.productId && (
              <p className="mt-1 text-xs text-red-500">{form.formState.errors.productId.message}</p>
            )}
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="description" className="mb-1 block text-sm">
          <span className="text-red-500">*</span> Description
        </label>
        <Textarea id="description" {...form.register('description')} placeholder="Description" className="h-16" />
        {form.formState.errors.description && (
          <p className="mt-1 text-xs text-red-500">{form.formState.errors.description.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <label htmlFor="quantity" className="mb-1 block text-sm">
            <span className="text-red-500">*</span> Quantity
          </label>
          <Input id="quantity" {...form.register('quantity')} placeholder="Quantity" className="w-full" />
        </div>

        <div>
          <label htmlFor="purchasePrice" className="mb-1 block text-sm">
            <span className="text-red-500">*</span> Purchase Price
          </label>
          <Select
            data={[
              { purchasePriceId: '1', name: '1000' },
              { purchasePriceId: '2', name: '2000' },
              { purchasePriceId: '3', name: '3000' },
              { purchasePriceId: '4', name: '4000' },
              { purchasePriceId: '5', name: '5000' },
              { purchasePriceId: '6', name: '6000' },
              { purchasePriceId: '7', name: '7000' },
              { purchasePriceId: '8', name: '8000' },
              { purchasePriceId: '9', name: '9000' },
              { purchasePriceId: '10', name: '10000' }
            ]}
            value={form.watch('purchasePrice')}
            onChange={(value) => form.setValue('purchasePrice', value)}
            getOptionLabel={(item) => item?.name ?? ''}
            getOptionValue={(item) => item?.purchasePriceId ?? ''}
            placeholder="Select purchase price"
          />
        </div>

        <div>
          <label htmlFor="sellingPrice" className="mb-1 block text-sm">
            <span className="text-red-500">*</span> Selling Price
          </label>
          <Input id="sellingPrice" {...form.register('sellingPrice')} placeholder="Selling Price" className="w-full" />
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div></div>
          <div className="flex justify-end">
            {/* Submit Button */}
            <div className="flex w-full justify-end">
              <Button type="submit" className="w-full">
                <SaveIcon size={16} /> Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
