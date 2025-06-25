export interface Unit {
  id: string;
  name: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Tax {
  id: string;
  name: string;
  rate: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
