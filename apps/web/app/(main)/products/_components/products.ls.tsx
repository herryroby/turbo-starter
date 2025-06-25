'use client';

import ListPage from '@/components/shared/list-page';
import { Product } from '@/types/products';
import {
  Button,
  CustomColumnDef,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@repo/ui';
import { MoreVertical } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const columns: CustomColumnDef<Product, unknown>[] = [
  {
    id: 'actions',
    cell: ({ row }) => {
      const product = row.original;

      return (
        <div className="w-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <MoreVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(product.productId)}>
                Copy product ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View details</DropdownMenuItem>
              <DropdownMenuItem>Edit product</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'categoryName',
    header: 'Category'
  },
  {
    accessorKey: 'sellingPrice',
    header: 'Price',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('sellingPrice'));
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
    accessorKey: 'isActive',
    header: 'Status'
  }
];

export default function ProductsList() {
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
