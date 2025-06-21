// /apps/web/app/(main)/products/page.tsx

// This is a Server Component, which is the default in the Next.js App Router.
// Server Components are great for fetching data because they run on the server and can directly access databases
// or other server-side resources without exposing sensitive information to the client.
// This approach reduces the amount of JavaScript sent to the browser, improving initial page load performance.

import ListPage from '@/components/shared/list-page';
import { createClient } from '@/lib/supabase/server';
import { Product } from '@/types/products';
import { columns } from './columns';

// Force the page to be dynamic and allow streaming
export const dynamic = 'force-dynamic';

interface ProductsPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

// Define a type for the data returned from the Supabase query
type ProductFromDB = {
  product_id: string;
  code: string | null;
  name: string;
  description: string | null;
  category_id: string | null;
  unit_of_measure?: string; // Made optional to handle cases where it might be missing
  is_active: boolean | null;
  is_purchased: boolean | null;
  is_sold: boolean | null;
  purchase_price: number | null;
  selling_price: number | null;
  quantity: number | null;
  reorder_point: number | null;
  reorder_quantity: number | null;
  created_at: string | null;
  updated_at: string | null;
  product_categories: {
    name: string;
  } | null;
};

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
  const supabase = await createClient();
  
  // Access searchParams directly without destructuring in the function parameters
  const page = searchParams?.page ? Number(searchParams.page) : 1;
  const pageSize = searchParams?.pageSize ? Number(searchParams.pageSize) : 10;

  const { data, error, count } = await supabase
    .from('products')
    .select(`
      *,
      product_categories!inner(name)
    `, { 
      count: 'exact' 
    })
    .range((page - 1) * pageSize, page * pageSize - 1);

  if (error) {
    console.error('Error fetching products:', error);
    return <div>Error loading products.</div>;
  }

  // Calculate the total number of pages
  const pageCount = count ? Math.ceil(count / pageSize) : 0;

  // Map the data from the database to the Product type used in the UI
  const products: Product[] = (data || []).map((p: ProductFromDB) => ({
    productId: p.product_id,
    code: p.code || '',
    name: p.name,
    description: p.description || '',
    categoryId: p.category_id || '',
    unitOfMeasure: p.unit_of_measure || 'unit', // Default to 'unit' if not provided
    unitOfMeasureId: p.unit_of_measure || 'unit', // Default to 'unit' if not provided
    unitOfMeasureName: p.unit_of_measure || 'unit', // Default to 'unit' if not provided
    categoryName: p.product_categories?.name || 'N/A',
    isActive: p.is_active ?? true,
    isPurchased: p.is_purchased ?? false,
    isSold: p.is_sold ?? false,
    purchasePrice: p.purchase_price || 0,
    sellingPrice: p.selling_price || 0,
    quantity: p.quantity || 0,
    reorderPoint: p.reorder_point || 0,
    reorderQuantity: p.reorder_quantity || 0,
    // Default values for missing fields
    purchaseAccountId: '',
    purchaseTaxId: '',
    sellingAccountId: '',
    sellingTaxId: '',
    createdAt: p.created_at ? new Date(p.created_at) : new Date(),
    updatedAt: p.updated_at ? new Date(p.updated_at) : new Date(),
  }));

  return (
    <ListPage
      pageTitle="Products"
      addLink="/products/add"
      columns={columns}
      data={products}
      filterColumn="name"
      searchPlaceholder="Search for products..."
      pageCount={pageCount} // Pass pageCount to the ListPage component
    />
  );
};

export default ProductsPage;
