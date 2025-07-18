export interface Tenant {
  id: string;
  subdomain: string;
  business_name: string;
  created_at: string | null;
}

export interface PaginatedData<T> {
  data: T[];
  totalCount: number;
}
