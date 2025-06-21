'use client';

import { CustomColumnDef } from '@repo/ui';
import { MoreVertical } from 'lucide-react';
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@repo/ui';
import { Product } from '@/types/products';

// This is the definition for the columns in the product data table.
// It's a client component because it contains interactive elements like dropdowns.

export const columns: CustomColumnDef<Product, unknown>[] = [
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
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(product.productId)}
              >
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
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'categoryName',
    header: 'Category',
  },
  {
    accessorKey: 'sellingPrice',
    header: 'Price',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('sellingPrice'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity',
  },
  {
    accessorKey: 'isActive',
    header: 'Status',
  },
];
