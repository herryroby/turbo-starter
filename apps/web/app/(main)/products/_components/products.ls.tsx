import { getClient } from '@/lib/apollo-client';
import {
  ProductsCollectionDocument,
  ProductsCollectionQuery,
  ProductsCollectionQueryVariables
} from '@/lib/graphql/generated/graphql';
import { CustomColumnDef } from '@repo/ui';
import { ProductClient } from './product-client';

export type Product = NonNullable<ProductsCollectionQuery['productsCollection']>['edges'][0]['node'];

const columns: CustomColumnDef<Product, unknown>[] = [
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'product_categories.name',
    header: 'Category',
    cell: ({ row }) => row.original.product_categories?.name
  },
  {
    accessorKey: 'selling_price',
    header: 'Price',
    cell: ({ row }) => {
      const amount = row.original.selling_price ?? 0;
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    }
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity'
  },
  {
    accessorKey: 'is_active',
    header: 'Status',
    cell: ({ row }) => (row.original.is_active ? 'Active' : 'Inactive')
  }
];

const ProductsList = async ({ searchParams }: { searchParams: Record<string, string> | null | undefined }) => {
  const page = searchParams?.page ? Number(searchParams.page) : 1;
  const pageSize = searchParams?.pageSize ? Number(searchParams.pageSize) : 10;

  const client = getClient();
  const { data, error } = await client.query<ProductsCollectionQuery, ProductsCollectionQueryVariables>({
    query: ProductsCollectionDocument,
    variables: {
      first: pageSize
    },
    fetchPolicy: 'no-cache'
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const products = data.productsCollection?.edges.map((edge) => edge.node) || [];
  const pageCount = data.productsCollection?.pageInfo
    ? Math.ceil((data.productsCollection.edges.length || 0) / pageSize)
    : 0;

  return (
    <ProductClient
      columns={columns}
      data={products}
      pageCount={pageCount}
      pageTitle="Products"
      filterColumn="name"
      searchPlaceholder="Search for products..."
      addLink="/products/add"
    />
  );
};

export default ProductsList;
