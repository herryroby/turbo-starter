'use client';

import ListPage from '@/components/shared/list-page';
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
import { useRouter } from 'next/navigation';
import { Product } from './products.ls';

interface ProductClientProps {
  data: Product[];
  columns: CustomColumnDef<Product, unknown>[];
  pageCount: number;
  pageTitle: string;
  filterColumn: string;
  searchPlaceholder: string;
  addLink: string;
}

export const ProductClient = ({ 
  data, 
  columns, 
  pageCount, 
  pageTitle, 
  filterColumn, 
  searchPlaceholder, 
  addLink 
}: ProductClientProps) => {
  const router = useRouter();

  const actionColumn: CustomColumnDef<Product, unknown> = {
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
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(product.id)}>
                Copy product ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push(`/products/${product.id}/edit`)}>
                Edit product
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false
  };

  const allColumns = [actionColumn, ...columns];

  return (
    <ListPage
      pageTitle={pageTitle}
      addLink={addLink}
      columns={allColumns}
      data={data}
      filterColumn={filterColumn}
      searchPlaceholder={searchPlaceholder}
      pageCount={pageCount}
    />
  );
};
