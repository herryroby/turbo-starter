import { Suspense } from 'react';
import ProductsList from './_components/products.ls';

export const dynamic = 'force-dynamic';

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
  params: Promise<{ [key: string]: string | string[] }>;
}

export default async function ProductsPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  return (
    <Suspense
      fallback={
        <div className="p-6">
          <div className="mb-6 h-10 w-64 animate-pulse rounded bg-gray-200"></div>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 w-full animate-pulse rounded bg-gray-100"></div>
            ))}
          </div>
        </div>
      }
    >
      <ProductsList searchParams={resolvedSearchParams} />
    </Suspense>
  );
}
