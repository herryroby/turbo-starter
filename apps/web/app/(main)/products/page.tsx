'use client';

import ListPage from '@/components/common/list-page/list-page';
import { products } from '@/data/products';
import type { Product } from '@/types/products';
import type { ColumnDef, Row } from '@tanstack/react-table';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ProductsPage = () => {
  const router = useRouter();
  const [data] = useState<Product[]>(products);

  const redirectToEdit = (row: Product): void => {
    router.push(`/products/add?productId=${row.productId}`);
  };

  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: 'name',
      header: 'Product Name',
      cell: ({ row }: { row: Row<Product> }) => (
        <button
          type="button"
          className="text-primary m-0 cursor-pointer border-none bg-transparent p-0"
          onClick={() => redirectToEdit(row.original)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              redirectToEdit(row.original);
            }
          }}
          tabIndex={0}
          aria-label={`Edit Product ${row.getValue('name')}`}
          style={{ background: 'none', border: 'none' }}
        >
          {row.getValue('name')}
        </button>
      )
    },
    {
      accessorKey: 'productId',
      header: 'Code/SKU',
      cell: ({ row }) => <div className="max-w-[200px] truncate">{row.getValue('productId')}</div>
    },
    {
      accessorKey: 'categoryName',
      header: 'Category',
      cell: ({ row }: { row: Row<Product> }) => {
        const categoryName = row.getValue('categoryName') as string;
        return <div>{categoryName}</div>;
      }
    },
    {
      accessorKey: 'unitOfMeasureName',
      header: 'Unit',
      cell: ({ row }: { row: Row<Product> }) => {
        const unitOfMeasureName = row.getValue('unitOfMeasureName') as string;
        return <div>{unitOfMeasureName}</div>;
      }
    },
    {
      accessorKey: 'purchasePrice',
      header: () => <div className="text-right">Purchase Price</div>,
      cell: ({ row }: { row: Row<Product> }) => {
        const amount = parseFloat(row.getValue('purchasePrice'));
        const formatted = new Intl.NumberFormat('id-ID').format(amount);
        return <div className="text-right">{formatted}</div>;
      }
    },
    {
      accessorKey: 'sellingPrice',
      header: () => <div className="text-right">Selling Price</div>,
      cell: ({ row }: { row: Row<Product> }) => {
        const amount = parseFloat(row.getValue('sellingPrice'));
        const formatted = new Intl.NumberFormat('id-ID').format(amount);
        return <div className="text-right font-medium">{formatted}</div>;
      }
    },
    {
      accessorKey: 'quantity',
      header: () => <div className="text-right">Quantity</div>,
      cell: ({ row }: { row: Row<Product> }) => {
        const quantity = row.getValue('quantity') as number;
        return <div className="text-right">{quantity}</div>;
      }
    },
    {
      accessorKey: 'isActive',
      header: () => <div className="text-center">Status</div>,
      cell: ({ row }: { row: Row<Product> }) => {
        const isActive = row.getValue('isActive') as boolean;
        return (
          <div className="text-center">
            <div
              className={`inline-flex rounded-md px-2 py-1 text-center text-xs font-medium ${
                isActive
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
              }`}
            >
              {isActive ? 'Active' : 'Inactive'}
            </div>
          </div>
        );
      }
    }
  ];

  return (
    <ListPage
      pageTitle="Products"
      subPageTitle="Manage all products"
      columns={columns}
      filterColumn="name"
      searchPlaceholder="Search product..."
      data={data}
      addLink="/products/add"
      defaultSortableColumns={[
        'productId',
        'name',
        'categoryName',
        'unitOfMeasureName',
        'purchasePrice',
        'sellingPrice',
        'quantity',
        'isActive'
      ]}
    />
  );
};

export default ProductsPage;
