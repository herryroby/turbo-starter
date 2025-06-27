'use client';

import { ListPage } from '@repo/ui';
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
import { CellContext } from '@tanstack/react-table';
import { MoreVertical } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Product } from './products.ls';

import { PageInfo } from '@/lib/graphql/generated/graphql';

interface ProductClientProps {
  data: Product[];
  pageCount: number;
  pageInfo?: PageInfo | null;
  pageTitle: string;
  filterColumn: string;
  searchPlaceholder: string;
  addLink: string;
}

export const ProductClient = ({ 
  data, 
  pageCount, 
  pageInfo,
  pageTitle, 
  filterColumn, 
  searchPlaceholder, 
  addLink 
}: ProductClientProps) => {
  const router = useRouter();

  const columns: CustomColumnDef<Product, unknown>[] = [
    {
      accessorKey: 'name',
      header: 'Name'
    },
    {
      accessorKey: 'product_categories.name',
      header: 'Category',
      cell: ({ row }: CellContext<Product, unknown>) => row.original.product_categories?.name
    },
    {
      accessorKey: 'selling_price',
      header: 'Price',
      cell: ({ row }: CellContext<Product, unknown>) => {
        const amount = row.original.selling_price ?? 0;
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(amount);
        return <div className="text-right font-medium">{formatted}</div>;
      }
    },
    {
      accessorKey: 'is_active',
      header: 'Status',
      cell: ({ row }: CellContext<Product, unknown>) => (row.original.is_active ? 'Active' : 'Inactive')
    },
    {
      id: 'actions',
      cell: ({ row }: CellContext<Product, unknown>) => {
        const product = row.original;

        return (
          <div className="w-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => navigator.clipboard.writeText(product.id)}>
                  Copy ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push(`/products/${product.id}`)}>
                  View details
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      }
    }
  ];

  return (
    <ListPage
      columns={columns}
      data={data}
      pageCount={pageCount}
      pageInfo={pageInfo}
      pageTitle={pageTitle}
      filterColumn={filterColumn}
      searchPlaceholder={searchPlaceholder}
      addLink={addLink}
    />
  );
};
