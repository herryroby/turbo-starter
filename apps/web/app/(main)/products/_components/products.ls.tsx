import { getClient } from '@/lib/apollo-client';
import {
  ProductsCollectionDocument,
  ProductsCollectionQuery,
  ProductsCollectionQueryVariables
} from '@/lib/graphql/generated/graphql';
import { ProductClient } from './product-client';

export type Product = NonNullable<ProductsCollectionQuery['productsCollection']>['edges'][0]['node'];

const ProductsList = async ({ searchParams }: { searchParams: Record<string, string> | null | undefined }) => {
  const pageSize = searchParams?.pageSize ? Number(searchParams.pageSize) : 10;
  const after = searchParams?.after as string | undefined;

  const client = getClient();
  const { data, error } = await client.query<ProductsCollectionQuery, ProductsCollectionQueryVariables>({ 
    query: ProductsCollectionDocument,
    variables: {
      first: pageSize,
      after: after
    },
    fetchPolicy: 'no-cache' 
  });

  console.log('--- Product List Data Fetch ---');
  console.log('GraphQL Error:', JSON.stringify(error, null, 2));
  console.log('GraphQL Data:', JSON.stringify(data, null, 2));

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const products = data.productsCollection?.edges.map((edge) => edge.node) || [];
  console.log('Processed Products:', products);
  const pageInfo = data.productsCollection?.pageInfo;

  // Note: Supabase GraphQL does not provide totalCount. 
  // We'll rely on hasNextPage for pagination controls.
  // A separate query would be needed for a full page count.
  const pageCount = -1; // Indicate that we don't have a total page count

  return (
    <ProductClient
      data={products}
      pageCount={pageCount}
      pageInfo={pageInfo}
      pageTitle="Products"
      filterColumn="name"
      searchPlaceholder="Search for products..."
      addLink="/products/add"
    />
  );
};

export default ProductsList;
