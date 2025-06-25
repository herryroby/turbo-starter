export interface ProductCategory {
  id: string;
  name: string;
  is_active: boolean | null;
  created_at: string;
  updated_at: string | null;
}

export interface Product {
  id: string;
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
