'use client';

import { FormState, saveProduct } from '@/app/(main)/products/actions';
import { ProductCategory } from '@/types/products';
import { Button, Input, Select, Textarea } from '@repo/ui';
import { SaveIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { toast } from 'sonner';

interface ProductFormProps {
  categories: ProductCategory[];
}

// The SubmitButton component is a helper to manage the pending state of the form submission.
const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      <SaveIcon size={16} /> {pending ? 'Saving...' : 'Save'}
    </Button>
  );
};

const ProductForm = ({ categories }: ProductFormProps) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedUnit, setSelectedUnit] = useState<string>('');

  // useActionState is a React Hook that provides state management for Server Actions.
  // It returns the current state of the form and a dispatch function to call the action.
  const initialState: FormState = { message: '', errors: {}, success: false };
  const [state, dispatch] = useFormState(saveProduct, initialState);

  // Handle form submission
  const handleSubmit = (formData: FormData) => {
    // Add hidden inputs for category and unit
    if (selectedCategory) {
      formData.append('categoryId', selectedCategory);
    }
    if (selectedUnit) {
      formData.append('unitOfMeasureId', selectedUnit);
    }
    // Add isActive as true by default
    formData.append('isActive', 'true');
    return dispatch(formData);
  };

  // useEffect hook to show a toast notification when the form submission is successful.
  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
      router.push('/products'); // Redirect to the product list page on success.
    }
    if (!state.success && state.message) {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Category Selection */}
        <div>
          <label htmlFor="categoryId" className="mb-1 block text-sm">
            <span className="text-red-500">*</span> Category
          </label>
          <Select
            data={categories}
            value={selectedCategory}
            onChange={(value) => {
              setSelectedCategory(value);
            }}
            getOptionLabel={(item) => item?.name ?? ''}
            getOptionValue={(item) => item?.id ?? ''}
            placeholder="Select category"
          />
          {state.errors?.category_id && (
            <p className="mt-1 text-xs text-red-500">{state.errors.category_id[0]}</p>
          )}
        </div>

        {/* Unit of Measure Selection */}
        <div>
          <label htmlFor="unitOfMeasureId" className="mb-1 block text-sm">
            <span className="text-red-500">*</span> Unit
          </label>
          <Select
            data={[
              { id: 'unit', name: 'Unit' },
              { id: 'kg', name: 'Kilogram' },
              { id: 'gram', name: 'Gram' },
              { id: 'liter', name: 'Liter' },
              { id: 'ml', name: 'Mililiter' }
            ]}
            value={selectedUnit}
            onChange={(value) => {
              setSelectedUnit(value);
            }}
            getOptionLabel={(item) => item?.name ?? ''}
            getOptionValue={(item) => item?.id ?? ''}
            placeholder="Select unit of measure"
          />
          {state.errors?.unit_of_measure_id && (
            <p className="mt-1 text-xs text-red-500">{state.errors.unit_of_measure_id[0]}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Product Name Input */}
        <div>
          <label htmlFor="name" className="mb-1 block text-sm">
            <span className="text-red-500">*</span> Product Name
          </label>
          <Input name="name" id="name" placeholder="Enter product name" />
          {state.errors?.name && <p className="mt-1 text-xs text-red-500">{state.errors.name[0]}</p>}
        </div>

        {/* Product Code/SKU Input */}
        <div>
          <label htmlFor="code" className="mb-1 block text-sm">
            <span className="text-red-500">*</span> Code/SKU
          </label>
          <Input name="code" id="code" placeholder="Enter product code or SKU" />
          {state.errors?.code && <p className="mt-1 text-xs text-red-500">{state.errors.code[0]}</p>}
        </div>
      </div>

      {/* Description Textarea */}
      <div>
        <label htmlFor="description" className="mb-1 block text-sm">
          Description
        </label>
        <Textarea name="description" id="description" placeholder="Enter product description" className="h-16" />
        {state.errors?.description && (
          <p className="mt-1 text-xs text-red-500">{state.errors.description[0]}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Quantity Input */}
        <div>
          <label htmlFor="quantity" className="mb-1 block text-sm">
            <span className="text-red-500">*</span> Quantity
          </label>
          <Input name="quantity" id="quantity" type="number" min="0" placeholder="0" />
          {state.errors?.quantity && <p className="mt-1 text-xs text-red-500">{state.errors.quantity[0]}</p>}
        </div>

        {/* Purchase Price Input */}
        <div>
          <label htmlFor="purchasePrice" className="mb-1 block text-sm">
            <span className="text-red-500">*</span> Purchase Price
          </label>
          <Input name="purchase_price" id="purchasePrice" type="number" step="0.01" placeholder="0.00" />
          {state.errors?.purchase_price && (
            <p className="mt-1 text-xs text-red-500">{state.errors.purchase_price[0]}</p>
          )}
        </div>

        {/* Selling Price Input */}
        <div>
          <label htmlFor="sellingPrice" className="mb-1 block text-sm">
            <span className="text-red-500">*</span> Selling Price
          </label>
          <Input name="selling_price" id="sellingPrice" type="number" step="0.01" placeholder="0.00" />
          {state.errors?.selling_price && (
            <p className="mt-1 text-xs text-red-500">{state.errors.selling_price[0]}</p>
          )}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-end">
          <SubmitButton />
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
