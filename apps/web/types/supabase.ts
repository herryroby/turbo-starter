export type Json = | string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      product_categories: {
        Row: {
          created_at: string;
          id: string;
          is_active: boolean | null;
          name: string;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          is_active?: boolean | null;
          name: string;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          is_active?: boolean | null;
          name?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      products: {
        Row: {
          category_id: string | null;
          code: string | null;
          created_at: string;
          description: string | null;
          is_active: boolean | null;
          is_purchased: boolean | null;
          is_sold: boolean | null;
          product_id: string;
          purchase_account_id: string | null;
          purchase_price: number | null;
          purchase_tax_id: string | null;
          quantity: number | null;
          reorder_point: number | null;
          reorder_quantity: number | null;
          selling_account_id: string | null;
          selling_price: number | null;
          selling_tax_id: string | null;
          unit_of_measure_id: string | null;
          updated_at: string | null;
          name: string;
        };
        Insert: {
          category_id?: string | null;
          code?: string | null;
          created_at?: string;
          description?: string | null;
          is_active?: boolean | null;
          is_purchased?: boolean | null;
          is_sold?: boolean | null;
          product_id?: string;
          purchase_account_id?: string | null;
          purchase_price?: number | null;
          purchase_tax_id?: string | null;
          quantity?: number | null;
          reorder_point?: number | null;
          reorder_quantity?: number | null;
          selling_account_id?: string | null;
          selling_price?: number | null;
          selling_tax_id?: string | null;
          unit_of_measure_id?: string | null;
          updated_at?: string | null;
          name: string;
        };
        Update: {
          category_id?: string | null;
          code?: string | null;
          created_at?: string;
          description?: string | null;
          is_active?: boolean | null;
          is_purchased?: boolean | null;
          is_sold?: boolean | null;
          product_id?: string;
          purchase_account_id?: string | null;
          purchase_price?: number | null;
          purchase_tax_id?: string | null;
          quantity?: number | null;
          reorder_point?: number | null;
          reorder_quantity?: number | null;
          selling_account_id?: string | null;
          selling_price?: number | null;
          selling_tax_id?: string | null;
          unit_of_measure_id?: string | null;
          updated_at?: string | null;
          name?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'products_category_id_fkey';
            columns: ['category_id'];
            isOneToOne: false;
            referencedRelation: 'product_categories';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};