export interface UnitOfMeasure {
  unitOfMeasureId: string;
  name: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Tax {
  taxId: string;
  name: string;
  rate: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
