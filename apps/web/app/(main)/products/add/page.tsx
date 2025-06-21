import { BackButton } from '@/components/composite/back-button';
import { createClient } from '@/lib/supabase/server';
import { ProductCategory } from '@/types/products';
import ProductForm from '../_components/product.fm';

// This is a Server Component responsible for fetching initial data needed by the form.
const AddProductPage = async () => {
  const supabase = await createClient();

  // Fetch product categories to be used in the form's select input.
  const { data: categories, error } = await supabase.from('product_categories').select('*');

  if (error) {
    console.error('Database Error:', error);
    // You might want to render a more user-friendly error page here.
    return <div>Failed to load data for the form.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-medium">Add Product</h1>
        </div>
        <BackButton link="/products" />
      </div>

      <div className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
        {/* Pass the fetched categories to the Client Component form */}
        <ProductForm categories={categories as ProductCategory[]} />
      </div>
    </div>
  );
};

export default AddProductPage;
