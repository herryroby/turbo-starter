'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ListPage from '@/components/shared/list-page';
import { Product } from '@/types/products';
import { columns } from './columns';

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const page = searchParams?.get('page') ? Number(searchParams.get('page')) : 1;
        const pageSize = searchParams?.get('pageSize') ? Number(searchParams.get('pageSize')) : 10;
        
        const response = await fetch(`/api/products?page=${page}&pageSize=${pageSize}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const { data, count } = await response.json();
        setProducts(data);
        setPageCount(Math.ceil(count / pageSize));
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [searchParams]);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ListPage
      pageTitle="Products"
      addLink="/products/add"
      columns={columns}
      data={products}
      filterColumn="name"
      searchPlaceholder="Search for products..."
      pageCount={pageCount}
    />
  );
}
