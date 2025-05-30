'use client';

import { BackButton } from '@/components/common';
import ProductForm from '../components/product.fm';

const AddProductPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-medium">Add Product</h1>
        </div>
        <BackButton link="/products" />
      </div>

      <div className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <ProductForm />
      </div>
    </div>
  );
};

export default AddProductPage;
