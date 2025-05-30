import type { Product, ProductCategory } from '@/types/products';
import { faker } from '@faker-js/faker';

const createProduct = (nums: number) => {
  const product: Product[] = [];

  for (let i = 0; i < nums; i++) {
    product.push({
      productId: `P000${i + 1}`,
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      unitOfMeasureId: `UOM000${i + 1}`,
      unitOfMeasureName: faker.helpers.arrayElement(['pcs', 'kg', 'g', 'l', 'ml']),
      categoryName: faker.commerce.productMaterial(),
      isActive: faker.datatype.boolean(),
      isPurchased: faker.datatype.boolean(),
      isSold: faker.datatype.boolean(),
      purchasePrice: faker.number.int({ min: 100000, max: 5000000 }),
      purchaseAccountId: `A000${i + 1}`,
      purchaseTaxId: `T000${i + 1}`,
      sellingPrice: faker.number.int({ min: 100000, max: 5000000 }),
      sellingAccountId: `A000${i + 1}`,
      sellingTaxId: `T000${i + 1}`,
      quantity: faker.number.int({ min: 1, max: 1000 }),
      reorderPoint: faker.number.int({ min: 1, max: 1000 }),
      reorderQuantity: faker.number.int({ min: 1, max: 1000 }),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent()
    });
  }
  return product;
};

export const products: Product[] = createProduct(100);

export const productCategory: ProductCategory[] = [
  {
    categoryId: '1',
    name: 'Electronics',
    isActive: true,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    categoryId: '2',
    name: 'Food',
    isActive: true,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    categoryId: '3',
    name: 'Clothing',
    isActive: true,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    categoryId: '4',
    name: 'Furniture',
    isActive: true,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  },
  {
    categoryId: '5',
    name: 'Other',
    isActive: true,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }
];
