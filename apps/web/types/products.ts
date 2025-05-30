export interface ProductCategory {
  categoryId: string;
  name: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  productId: string;
  name: string;
  description: string;
  unitOfMeasureId: string;
  unitOfMeasureName: string; // temporary, should be removed
  categoryName: string; // temporary, should be removed
  isActive: boolean;
  isPurchased: boolean;
  isSold: boolean;
  purchasePrice: number;
  purchaseAccountId: string;
  purchaseTaxId: string;
  sellingPrice: number;
  sellingAccountId: string;
  sellingTaxId: string;
  quantity: number;
  reorderPoint: number;
  reorderQuantity: number;
  createdAt: Date;
  updatedAt: Date;
}
