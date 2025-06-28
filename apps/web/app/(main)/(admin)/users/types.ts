export interface User {
  id: string;
  full_name: string;
  email: string;
  tenants: {
    name: string;
  } | null;
  created_at: string;
}
