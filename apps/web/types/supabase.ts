export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      add_ons: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          name: string
          price_monthly: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          price_monthly: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          price_monthly?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      app_users: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          department: string | null
          email: string
          employee_id: string | null
          full_name: string
          id: string
          is_active: boolean | null
          is_super_admin: boolean | null
          last_login_at: string | null
          permissions: Json | null
          phone: string | null
          position: string | null
          role_id: string
          tenant_id: string
          updated_at: string | null
          user_settings: Json | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          department?: string | null
          email: string
          employee_id?: string | null
          full_name: string
          id: string
          is_active?: boolean | null
          is_super_admin?: boolean | null
          last_login_at?: string | null
          permissions?: Json | null
          phone?: string | null
          position?: string | null
          role_id: string
          tenant_id: string
          updated_at?: string | null
          user_settings?: Json | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          department?: string | null
          email?: string
          employee_id?: string | null
          full_name?: string
          id?: string
          is_active?: boolean | null
          is_super_admin?: boolean | null
          last_login_at?: string | null
          permissions?: Json | null
          phone?: string | null
          position?: string | null
          role_id?: string
          tenant_id?: string
          updated_at?: string | null
          user_settings?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "app_users_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "app_users_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          action_type: string
          changed_fields: string[] | null
          details: string | null
          entity_id: string | null
          entity_type: string
          id: string
          ip_address: string | null
          new_value: Json | null
          old_value: Json | null
          tenant_id: string | null
          timestamp: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action_type: string
          changed_fields?: string[] | null
          details?: string | null
          entity_id?: string | null
          entity_type: string
          id?: string
          ip_address?: string | null
          new_value?: Json | null
          old_value?: Json | null
          tenant_id?: string | null
          timestamp?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action_type?: string
          changed_fields?: string[] | null
          details?: string | null
          entity_id?: string | null
          entity_type?: string
          id?: string
          ip_address?: string | null
          new_value?: Json | null
          old_value?: Json | null
          tenant_id?: string | null
          timestamp?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "app_users"
            referencedColumns: ["id"]
          },
        ]
      }
      bank_accounts: {
        Row: {
          account_name: string
          account_number: string
          account_type: string | null
          balance: number | null
          bank_name: string
          chart_of_account_id: string | null
          created_at: string | null
          currency: string | null
          id: string
          is_active: boolean | null
          tenant_id: string
          updated_at: string | null
        }
        Insert: {
          account_name: string
          account_number: string
          account_type?: string | null
          balance?: number | null
          bank_name: string
          chart_of_account_id?: string | null
          created_at?: string | null
          currency?: string | null
          id?: string
          is_active?: boolean | null
          tenant_id: string
          updated_at?: string | null
        }
        Update: {
          account_name?: string
          account_number?: string
          account_type?: string | null
          balance?: number | null
          bank_name?: string
          chart_of_account_id?: string | null
          created_at?: string | null
          currency?: string | null
          id?: string
          is_active?: boolean | null
          tenant_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bank_accounts_chart_of_account_id_fkey"
            columns: ["chart_of_account_id"]
            isOneToOne: false
            referencedRelation: "chart_of_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bank_accounts_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      chart_of_accounts: {
        Row: {
          account_subtype: string | null
          account_type: string
          code: string
          created_at: string | null
          id: string
          is_active: boolean | null
          level: number | null
          name: string
          parent_id: string | null
          tenant_id: string
        }
        Insert: {
          account_subtype?: string | null
          account_type: string
          code: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          level?: number | null
          name: string
          parent_id?: string | null
          tenant_id: string
        }
        Update: {
          account_subtype?: string | null
          account_type?: string
          code?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          level?: number | null
          name?: string
          parent_id?: string | null
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chart_of_accounts_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "chart_of_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chart_of_accounts_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      customers: {
        Row: {
          address: string | null
          city: string | null
          company_name: string | null
          created_at: string | null
          credit_limit: number | null
          customer_code: string
          customer_group: string | null
          customer_type: string | null
          discount_percent: number | null
          email: string | null
          id: string
          is_active: boolean | null
          name: string
          notes: string | null
          payment_terms: number | null
          phone: string | null
          postal_code: string | null
          province: string | null
          tax_id: string | null
          tenant_id: string
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          company_name?: string | null
          created_at?: string | null
          credit_limit?: number | null
          customer_code: string
          customer_group?: string | null
          customer_type?: string | null
          discount_percent?: number | null
          email?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          notes?: string | null
          payment_terms?: number | null
          phone?: string | null
          postal_code?: string | null
          province?: string | null
          tax_id?: string | null
          tenant_id: string
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          company_name?: string | null
          created_at?: string | null
          credit_limit?: number | null
          customer_code?: string
          customer_group?: string | null
          customer_type?: string | null
          discount_percent?: number | null
          email?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          notes?: string | null
          payment_terms?: number | null
          phone?: string | null
          postal_code?: string | null
          province?: string | null
          tax_id?: string | null
          tenant_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      deliveries: {
        Row: {
          created_at: string | null
          customer_id: string
          delivered_at: string | null
          delivered_by: string | null
          delivery_address: string | null
          delivery_date: string
          delivery_number: string
          driver_name: string | null
          id: string
          notes: string | null
          sales_order_id: string | null
          shipping_cost: number | null
          status: string | null
          tenant_id: string
          updated_at: string | null
          vehicle_number: string | null
          warehouse_id: string
        }
        Insert: {
          created_at?: string | null
          customer_id: string
          delivered_at?: string | null
          delivered_by?: string | null
          delivery_address?: string | null
          delivery_date: string
          delivery_number: string
          driver_name?: string | null
          id?: string
          notes?: string | null
          sales_order_id?: string | null
          shipping_cost?: number | null
          status?: string | null
          tenant_id: string
          updated_at?: string | null
          vehicle_number?: string | null
          warehouse_id: string
        }
        Update: {
          created_at?: string | null
          customer_id?: string
          delivered_at?: string | null
          delivered_by?: string | null
          delivery_address?: string | null
          delivery_date?: string
          delivery_number?: string
          driver_name?: string | null
          id?: string
          notes?: string | null
          sales_order_id?: string | null
          shipping_cost?: number | null
          status?: string | null
          tenant_id?: string
          updated_at?: string | null
          vehicle_number?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "deliveries_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deliveries_delivered_by_fkey"
            columns: ["delivered_by"]
            isOneToOne: false
            referencedRelation: "app_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deliveries_sales_order_id_fkey"
            columns: ["sales_order_id"]
            isOneToOne: false
            referencedRelation: "sales_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deliveries_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deliveries_warehouse_id_fkey"
            columns: ["warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["id"]
          },
        ]
      }
      delivery_items: {
        Row: {
          batch_number: string | null
          created_at: string | null
          delivery_id: string
          expiry_date: string | null
          id: string
          notes: string | null
          product_id: string
          quantity_delivered: number
          sales_order_item_id: string | null
          tenant_id: string
          total_amount: number
          unit_price: number
        }
        Insert: {
          batch_number?: string | null
          created_at?: string | null
          delivery_id: string
          expiry_date?: string | null
          id?: string
          notes?: string | null
          product_id: string
          quantity_delivered: number
          sales_order_item_id?: string | null
          tenant_id: string
          total_amount: number
          unit_price: number
        }
        Update: {
          batch_number?: string | null
          created_at?: string | null
          delivery_id?: string
          expiry_date?: string | null
          id?: string
          notes?: string | null
          product_id?: string
          quantity_delivered?: number
          sales_order_item_id?: string | null
          tenant_id?: string
          total_amount?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "delivery_items_delivery_id_fkey"
            columns: ["delivery_id"]
            isOneToOne: false
            referencedRelation: "deliveries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "delivery_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "delivery_items_sales_order_item_id_fkey"
            columns: ["sales_order_item_id"]
            isOneToOne: false
            referencedRelation: "sales_order_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "delivery_items_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      goods_receipt_items: {
        Row: {
          batch_number: string | null
          created_at: string | null
          expiry_date: string | null
          goods_receipt_id: string
          id: string
          notes: string | null
          product_id: string
          purchase_order_item_id: string | null
          quantity_received: number
          tenant_id: string
          total_cost: number
          unit_cost: number
        }
        Insert: {
          batch_number?: string | null
          created_at?: string | null
          expiry_date?: string | null
          goods_receipt_id: string
          id?: string
          notes?: string | null
          product_id: string
          purchase_order_item_id?: string | null
          quantity_received: number
          tenant_id: string
          total_cost: number
          unit_cost: number
        }
        Update: {
          batch_number?: string | null
          created_at?: string | null
          expiry_date?: string | null
          goods_receipt_id?: string
          id?: string
          notes?: string | null
          product_id?: string
          purchase_order_item_id?: string | null
          quantity_received?: number
          tenant_id?: string
          total_cost?: number
          unit_cost?: number
        }
        Relationships: [
          {
            foreignKeyName: "goods_receipt_items_goods_receipt_id_fkey"
            columns: ["goods_receipt_id"]
            isOneToOne: false
            referencedRelation: "goods_receipts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "goods_receipt_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "goods_receipt_items_purchase_order_item_id_fkey"
            columns: ["purchase_order_item_id"]
            isOneToOne: false
            referencedRelation: "purchase_order_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "goods_receipt_items_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      goods_receipts: {
        Row: {
          created_at: string | null
          id: string
          notes: string | null
          purchase_order_id: string | null
          receipt_date: string
          receipt_number: string
          received_by: string | null
          status: string | null
          supplier_id: string
          tenant_id: string
          total_amount: number | null
          updated_at: string | null
          warehouse_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          notes?: string | null
          purchase_order_id?: string | null
          receipt_date: string
          receipt_number: string
          received_by?: string | null
          status?: string | null
          supplier_id: string
          tenant_id: string
          total_amount?: number | null
          updated_at?: string | null
          warehouse_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          notes?: string | null
          purchase_order_id?: string | null
          receipt_date?: string
          receipt_number?: string
          received_by?: string | null
          status?: string | null
          supplier_id?: string
          tenant_id?: string
          total_amount?: number | null
          updated_at?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "goods_receipts_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "goods_receipts_received_by_fkey"
            columns: ["received_by"]
            isOneToOne: false
            referencedRelation: "app_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "goods_receipts_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "goods_receipts_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "goods_receipts_warehouse_id_fkey"
            columns: ["warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory: {
        Row: {
          average_cost: number | null
          id: string
          last_transaction_at: string | null
          product_id: string
          quantity_available: number | null
          quantity_on_hand: number | null
          quantity_reserved: number | null
          tenant_id: string
          updated_at: string | null
          warehouse_id: string
        }
        Insert: {
          average_cost?: number | null
          id?: string
          last_transaction_at?: string | null
          product_id: string
          quantity_available?: number | null
          quantity_on_hand?: number | null
          quantity_reserved?: number | null
          tenant_id: string
          updated_at?: string | null
          warehouse_id: string
        }
        Update: {
          average_cost?: number | null
          id?: string
          last_transaction_at?: string | null
          product_id?: string
          quantity_available?: number | null
          quantity_on_hand?: number | null
          quantity_reserved?: number | null
          tenant_id?: string
          updated_at?: string | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_warehouse_id_fkey"
            columns: ["warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["id"]
          },
        ]
      }
      invoice_items: {
        Row: {
          account_id: string
          created_at: string | null
          description: string
          discount_amount: number | null
          discount_percent: number | null
          id: string
          invoice_id: string
          product_id: string | null
          quantity: number | null
          tax_amount: number | null
          tax_percent: number | null
          tenant_id: string
          total_amount: number
          unit_price: number
        }
        Insert: {
          account_id: string
          created_at?: string | null
          description: string
          discount_amount?: number | null
          discount_percent?: number | null
          id?: string
          invoice_id: string
          product_id?: string | null
          quantity?: number | null
          tax_amount?: number | null
          tax_percent?: number | null
          tenant_id: string
          total_amount: number
          unit_price: number
        }
        Update: {
          account_id?: string
          created_at?: string | null
          description?: string
          discount_amount?: number | null
          discount_percent?: number | null
          id?: string
          invoice_id?: string
          product_id?: string | null
          quantity?: number | null
          tax_amount?: number | null
          tax_percent?: number | null
          tenant_id?: string
          total_amount?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "invoice_items_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "chart_of_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoice_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoice_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoice_items_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          created_at: string | null
          created_by: string | null
          currency: string | null
          customer_id: string | null
          discount_amount: number | null
          due_date: string | null
          exchange_rate: number | null
          id: string
          invoice_date: string
          invoice_number: string
          invoice_type: string
          notes: string | null
          outstanding_amount: number | null
          paid_amount: number | null
          payment_terms: number | null
          reference_id: string | null
          reference_type: string | null
          status: string | null
          subtotal: number | null
          supplier_id: string | null
          tax_amount: number | null
          tenant_id: string
          total_amount: number | null
          updated_at: string | null
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          customer_id?: string | null
          discount_amount?: number | null
          due_date?: string | null
          exchange_rate?: number | null
          id?: string
          invoice_date: string
          invoice_number: string
          invoice_type: string
          notes?: string | null
          outstanding_amount?: number | null
          paid_amount?: number | null
          payment_terms?: number | null
          reference_id?: string | null
          reference_type?: string | null
          status?: string | null
          subtotal?: number | null
          supplier_id?: string | null
          tax_amount?: number | null
          tenant_id: string
          total_amount?: number | null
          updated_at?: string | null
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          customer_id?: string | null
          discount_amount?: number | null
          due_date?: string | null
          exchange_rate?: number | null
          id?: string
          invoice_date?: string
          invoice_number?: string
          invoice_type?: string
          notes?: string | null
          outstanding_amount?: number | null
          paid_amount?: number | null
          payment_terms?: number | null
          reference_id?: string | null
          reference_type?: string | null
          status?: string | null
          subtotal?: number | null
          supplier_id?: string | null
          tax_amount?: number | null
          tenant_id?: string
          total_amount?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invoices_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "app_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "app_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      journal_entries: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string
          entry_date: string
          entry_number: string
          id: string
          posted_at: string | null
          posted_by: string | null
          reference_id: string | null
          reference_type: string | null
          status: string | null
          tenant_id: string
          total_credit: number | null
          total_debit: number | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description: string
          entry_date: string
          entry_number: string
          id?: string
          posted_at?: string | null
          posted_by?: string | null
          reference_id?: string | null
          reference_type?: string | null
          status?: string | null
          tenant_id: string
          total_credit?: number | null
          total_debit?: number | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string
          entry_date?: string
          entry_number?: string
          id?: string
          posted_at?: string | null
          posted_by?: string | null
          reference_id?: string | null
          reference_type?: string | null
          status?: string | null
          tenant_id?: string
          total_credit?: number | null
          total_debit?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "journal_entries_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "app_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "journal_entries_posted_by_fkey"
            columns: ["posted_by"]
            isOneToOne: false
            referencedRelation: "app_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "journal_entries_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      journal_entry_lines: {
        Row: {
          account_id: string
          created_at: string | null
          credit_amount: number | null
          debit_amount: number | null
          description: string | null
          id: string
          journal_entry_id: string
          tenant_id: string
        }
        Insert: {
          account_id: string
          created_at?: string | null
          credit_amount?: number | null
          debit_amount?: number | null
          description?: string | null
          id?: string
          journal_entry_id: string
          tenant_id: string
        }
        Update: {
          account_id?: string
          created_at?: string | null
          credit_amount?: number | null
          debit_amount?: number | null
          description?: string | null
          id?: string
          journal_entry_id?: string
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "journal_entry_lines_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "chart_of_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "journal_entry_lines_journal_entry_id_fkey"
            columns: ["journal_entry_id"]
            isOneToOne: false
            referencedRelation: "journal_entries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "journal_entry_lines_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_allocations: {
        Row: {
          allocated_amount: number
          created_at: string | null
          id: string
          invoice_id: string
          payment_id: string
          tenant_id: string
        }
        Insert: {
          allocated_amount: number
          created_at?: string | null
          id?: string
          invoice_id: string
          payment_id: string
          tenant_id: string
        }
        Update: {
          allocated_amount?: number
          created_at?: string | null
          id?: string
          invoice_id?: string
          payment_id?: string
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "payment_allocations_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payment_allocations_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payment_allocations_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          approved_at: string | null
          approved_by: string | null
          bank_account_id: string | null
          created_at: string | null
          created_by: string | null
          currency: string | null
          customer_id: string | null
          exchange_rate: number | null
          id: string
          notes: string | null
          payment_date: string
          payment_method: string
          payment_number: string
          payment_type: string
          reference_number: string | null
          supplier_id: string | null
          tenant_id: string
          updated_at: string | null
        }
        Insert: {
          amount: number
          approved_at?: string | null
          approved_by?: string | null
          bank_account_id?: string | null
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          customer_id?: string | null
          exchange_rate?: number | null
          id?: string
          notes?: string | null
          payment_date: string
          payment_method: string
          payment_number: string
          payment_type: string
          reference_number?: string | null
          supplier_id?: string | null
          tenant_id: string
          updated_at?: string | null
        }
        Update: {
          amount?: number
          approved_at?: string | null
          approved_by?: string | null
          bank_account_id?: string | null
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          customer_id?: string | null
          exchange_rate?: number | null
          id?: string
          notes?: string | null
          payment_date?: string
          payment_method?: string
          payment_number?: string
          payment_type?: string
          reference_number?: string | null
          supplier_id?: string | null
          tenant_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "app_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_bank_account_id_fkey"
            columns: ["bank_account_id"]
            isOneToOne: false
            referencedRelation: "bank_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "app_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      permissions: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      product_categories: {
        Row: {
          code: string
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          level: number | null
          name: string
          parent_id: string | null
          tenant_id: string
        }
        Insert: {
          code: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          level?: number | null
          name: string
          parent_id?: string | null
          tenant_id: string
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          level?: number | null
          name?: string
          parent_id?: string | null
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "product_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_categories_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          barcode: string | null
          brand: string | null
          category_id: string | null
          cost_price: number | null
          created_at: string | null
          description: string | null
          dimensions: string | null
          id: string
          image_url: string | null
          is_active: boolean | null
          maximum_stock: number | null
          minimum_stock: number | null
          name: string
          product_type: string | null
          reorder_point: number | null
          selling_price: number | null
          sku: string
          tax_rate: number | null
          tenant_id: string
          unit_of_measure_id: string
          updated_at: string | null
          warranty_period: number | null
          weight: number | null
        }
        Insert: {
          barcode?: string | null
          brand?: string | null
          category_id?: string | null
          cost_price?: number | null
          created_at?: string | null
          description?: string | null
          dimensions?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          maximum_stock?: number | null
          minimum_stock?: number | null
          name: string
          product_type?: string | null
          reorder_point?: number | null
          selling_price?: number | null
          sku: string
          tax_rate?: number | null
          tenant_id: string
          unit_of_measure_id: string
          updated_at?: string | null
          warranty_period?: number | null
          weight?: number | null
        }
        Update: {
          barcode?: string | null
          brand?: string | null
          category_id?: string | null
          cost_price?: number | null
          created_at?: string | null
          description?: string | null
          dimensions?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          maximum_stock?: number | null
          minimum_stock?: number | null
          name?: string
          product_type?: string | null
          reorder_point?: number | null
          selling_price?: number | null
          sku?: string
          tax_rate?: number | null
          tenant_id?: string
          unit_of_measure_id?: string
          updated_at?: string | null
          warranty_period?: number | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "product_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_unit_of_measure_id_fkey"
            columns: ["unit_of_measure_id"]
            isOneToOne: false
            referencedRelation: "unit_of_measures"
            referencedColumns: ["id"]
          },
        ]
      }
      purchase_order_items: {
        Row: {
          created_at: string | null
          discount_amount: number | null
          discount_percent: number | null
          id: string
          notes: string | null
          product_id: string
          purchase_order_id: string
          quantity: number
          quantity_received: number | null
          tax_amount: number | null
          tax_percent: number | null
          tenant_id: string
          total_amount: number
          unit_price: number
        }
        Insert: {
          created_at?: string | null
          discount_amount?: number | null
          discount_percent?: number | null
          id?: string
          notes?: string | null
          product_id: string
          purchase_order_id: string
          quantity: number
          quantity_received?: number | null
          tax_amount?: number | null
          tax_percent?: number | null
          tenant_id: string
          total_amount: number
          unit_price: number
        }
        Update: {
          created_at?: string | null
          discount_amount?: number | null
          discount_percent?: number | null
          id?: string
          notes?: string | null
          product_id?: string
          purchase_order_id?: string
          quantity?: number
          quantity_received?: number | null
          tax_amount?: number | null
          tax_percent?: number | null
          tenant_id?: string
          total_amount?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "purchase_order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_order_items_purchase_order_id_fkey"
            columns: ["purchase_order_id"]
            isOneToOne: false
            referencedRelation: "purchase_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_order_items_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      purchase_orders: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          created_at: string | null
          created_by: string | null
          currency: string | null
          discount_amount: number | null
          exchange_rate: number | null
          expected_date: string | null
          id: string
          notes: string | null
          order_date: string
          payment_terms: number | null
          po_number: string
          status: string | null
          subtotal: number | null
          supplier_id: string
          tax_amount: number | null
          tenant_id: string
          total_amount: number | null
          updated_at: string | null
          warehouse_id: string | null
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          discount_amount?: number | null
          exchange_rate?: number | null
          expected_date?: string | null
          id?: string
          notes?: string | null
          order_date: string
          payment_terms?: number | null
          po_number: string
          status?: string | null
          subtotal?: number | null
          supplier_id: string
          tax_amount?: number | null
          tenant_id: string
          total_amount?: number | null
          updated_at?: string | null
          warehouse_id?: string | null
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          discount_amount?: number | null
          exchange_rate?: number | null
          expected_date?: string | null
          id?: string
          notes?: string | null
          order_date?: string
          payment_terms?: number | null
          po_number?: string
          status?: string | null
          subtotal?: number | null
          supplier_id?: string
          tax_amount?: number | null
          tenant_id?: string
          total_amount?: number | null
          updated_at?: string | null
          warehouse_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "purchase_orders_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "app_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_orders_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "app_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_orders_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_orders_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchase_orders_warehouse_id_fkey"
            columns: ["warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["id"]
          },
        ]
      }
      role_permissions: {
        Row: {
          created_at: string | null
          permission_id: string
          role_id: string
        }
        Insert: {
          created_at?: string | null
          permission_id: string
          role_id: string
        }
        Update: {
          created_at?: string | null
          permission_id?: string
          role_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_permissions_permission_id_fkey"
            columns: ["permission_id"]
            isOneToOne: false
            referencedRelation: "permissions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "role_permissions_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      sales_order_items: {
        Row: {
          created_at: string | null
          discount_amount: number | null
          discount_percent: number | null
          id: string
          notes: string | null
          product_id: string
          quantity: number
          quantity_delivered: number | null
          sales_order_id: string
          tax_amount: number | null
          tax_percent: number | null
          tenant_id: string
          total_amount: number
          unit_price: number
        }
        Insert: {
          created_at?: string | null
          discount_amount?: number | null
          discount_percent?: number | null
          id?: string
          notes?: string | null
          product_id: string
          quantity: number
          quantity_delivered?: number | null
          sales_order_id: string
          tax_amount?: number | null
          tax_percent?: number | null
          tenant_id: string
          total_amount: number
          unit_price: number
        }
        Update: {
          created_at?: string | null
          discount_amount?: number | null
          discount_percent?: number | null
          id?: string
          notes?: string | null
          product_id?: string
          quantity?: number
          quantity_delivered?: number | null
          sales_order_id?: string
          tax_amount?: number | null
          tax_percent?: number | null
          tenant_id?: string
          total_amount?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "sales_order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_order_items_sales_order_id_fkey"
            columns: ["sales_order_id"]
            isOneToOne: false
            referencedRelation: "sales_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_order_items_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_orders: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          created_at: string | null
          created_by: string | null
          currency: string | null
          customer_id: string
          delivery_date: string | null
          discount_amount: number | null
          grand_total: number | null
          id: string
          notes: string | null
          order_date: string
          order_number: string
          payment_terms: number | null
          sales_person: string | null
          shipping_address: string | null
          shipping_cost: number | null
          status: string | null
          subtotal: number | null
          tax_amount: number | null
          tenant_id: string
          total_amount: number | null
          updated_at: string | null
          warehouse_id: string | null
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          customer_id: string
          delivery_date?: string | null
          discount_amount?: number | null
          grand_total?: number | null
          id?: string
          notes?: string | null
          order_date: string
          order_number: string
          payment_terms?: number | null
          sales_person?: string | null
          shipping_address?: string | null
          shipping_cost?: number | null
          status?: string | null
          subtotal?: number | null
          tax_amount?: number | null
          tenant_id: string
          total_amount?: number | null
          updated_at?: string | null
          warehouse_id?: string | null
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          customer_id?: string
          delivery_date?: string | null
          discount_amount?: number | null
          grand_total?: number | null
          id?: string
          notes?: string | null
          order_date?: string
          order_number?: string
          payment_terms?: number | null
          sales_person?: string | null
          shipping_address?: string | null
          shipping_cost?: number | null
          status?: string | null
          subtotal?: number | null
          tax_amount?: number | null
          tenant_id?: string
          total_amount?: number | null
          updated_at?: string | null
          warehouse_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_orders_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "app_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_orders_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "app_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_orders_sales_person_fkey"
            columns: ["sales_person"]
            isOneToOne: false
            referencedRelation: "app_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_orders_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_orders_warehouse_id_fkey"
            columns: ["warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["id"]
          },
        ]
      }
      stock_movements: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: string
          movement_type: string
          notes: string | null
          product_id: string
          quantity: number
          reference_id: string | null
          reference_type: string | null
          tenant_id: string
          total_cost: number | null
          transaction_date: string | null
          transaction_type: string | null
          unit_cost: number | null
          warehouse_id: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          movement_type: string
          notes?: string | null
          product_id: string
          quantity: number
          reference_id?: string | null
          reference_type?: string | null
          tenant_id: string
          total_cost?: number | null
          transaction_date?: string | null
          transaction_type?: string | null
          unit_cost?: number | null
          warehouse_id: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          movement_type?: string
          notes?: string | null
          product_id?: string
          quantity?: number
          reference_id?: string | null
          reference_type?: string | null
          tenant_id?: string
          total_cost?: number | null
          transaction_date?: string | null
          transaction_type?: string | null
          unit_cost?: number | null
          warehouse_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "stock_movements_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "app_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "stock_movements_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "stock_movements_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "stock_movements_warehouse_id_fkey"
            columns: ["warehouse_id"]
            isOneToOne: false
            referencedRelation: "warehouses"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_plans: {
        Row: {
          base_price_annually: number | null
          base_price_monthly: number
          created_at: string | null
          description: string | null
          features: Json | null
          id: string
          is_active: boolean | null
          max_users: number | null
          name: string
          storage_gb: number | null
          updated_at: string | null
        }
        Insert: {
          base_price_annually?: number | null
          base_price_monthly: number
          created_at?: string | null
          description?: string | null
          features?: Json | null
          id?: string
          is_active?: boolean | null
          max_users?: number | null
          name: string
          storage_gb?: number | null
          updated_at?: string | null
        }
        Update: {
          base_price_annually?: number | null
          base_price_monthly?: number
          created_at?: string | null
          description?: string | null
          features?: Json | null
          id?: string
          is_active?: boolean | null
          max_users?: number | null
          name?: string
          storage_gb?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      suppliers: {
        Row: {
          address: string | null
          bank_account: string | null
          bank_name: string | null
          city: string | null
          company_name: string | null
          created_at: string | null
          currency: string | null
          email: string | null
          id: string
          is_active: boolean | null
          name: string
          notes: string | null
          payment_terms: number | null
          phone: string | null
          postal_code: string | null
          province: string | null
          supplier_code: string
          supplier_type: string | null
          tax_id: string | null
          tenant_id: string
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          bank_account?: string | null
          bank_name?: string | null
          city?: string | null
          company_name?: string | null
          created_at?: string | null
          currency?: string | null
          email?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          notes?: string | null
          payment_terms?: number | null
          phone?: string | null
          postal_code?: string | null
          province?: string | null
          supplier_code: string
          supplier_type?: string | null
          tax_id?: string | null
          tenant_id: string
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          bank_account?: string | null
          bank_name?: string | null
          city?: string | null
          company_name?: string | null
          created_at?: string | null
          currency?: string | null
          email?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          notes?: string | null
          payment_terms?: number | null
          phone?: string | null
          postal_code?: string | null
          province?: string | null
          supplier_code?: string
          supplier_type?: string | null
          tax_id?: string | null
          tenant_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "suppliers_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenant_subscription_add_ons: {
        Row: {
          activated_at: string | null
          add_on_id: string
          created_at: string | null
          expires_at: string | null
          is_active: boolean | null
          tenant_id: string
        }
        Insert: {
          activated_at?: string | null
          add_on_id: string
          created_at?: string | null
          expires_at?: string | null
          is_active?: boolean | null
          tenant_id: string
        }
        Update: {
          activated_at?: string | null
          add_on_id?: string
          created_at?: string | null
          expires_at?: string | null
          is_active?: boolean | null
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenant_subscription_add_ons_add_on_id_fkey"
            columns: ["add_on_id"]
            isOneToOne: false
            referencedRelation: "add_ons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tenant_subscription_add_ons_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenants: {
        Row: {
          address: string | null
          business_name: string
          business_type: string
          city: string | null
          country: string | null
          created_at: string | null
          currency: string | null
          display_name: string
          email: string | null
          id: string
          industry: string | null
          is_active: boolean | null
          is_trial: boolean | null
          last_billed_at: string | null
          phone: string | null
          postal_code: string | null
          province: string | null
          settings: Json | null
          subdomain: string
          subscription_ends_at: string | null
          subscription_plan_id: string | null
          subscription_start_at: string | null
          subscription_status: string | null
          tax_id: string | null
          timezone: string | null
          trial_ends_at: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          business_name: string
          business_type: string
          city?: string | null
          country?: string | null
          created_at?: string | null
          currency?: string | null
          display_name: string
          email?: string | null
          id?: string
          industry?: string | null
          is_active?: boolean | null
          is_trial?: boolean | null
          last_billed_at?: string | null
          phone?: string | null
          postal_code?: string | null
          province?: string | null
          settings?: Json | null
          subdomain: string
          subscription_ends_at?: string | null
          subscription_plan_id?: string | null
          subscription_start_at?: string | null
          subscription_status?: string | null
          tax_id?: string | null
          timezone?: string | null
          trial_ends_at?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          business_name?: string
          business_type?: string
          city?: string | null
          country?: string | null
          created_at?: string | null
          currency?: string | null
          display_name?: string
          email?: string | null
          id?: string
          industry?: string | null
          is_active?: boolean | null
          is_trial?: boolean | null
          last_billed_at?: string | null
          phone?: string | null
          postal_code?: string | null
          province?: string | null
          settings?: Json | null
          subdomain?: string
          subscription_ends_at?: string | null
          subscription_plan_id?: string | null
          subscription_start_at?: string | null
          subscription_status?: string | null
          tax_id?: string | null
          timezone?: string | null
          trial_ends_at?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tenants_subscription_plan_id_fkey"
            columns: ["subscription_plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      unit_of_measures: {
        Row: {
          abbreviation: string
          created_at: string | null
          id: string
          is_active: boolean | null
          name: string
          tenant_id: string
          updated_at: string | null
        }
        Insert: {
          abbreviation: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          tenant_id: string
          updated_at?: string | null
        }
        Update: {
          abbreviation?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          tenant_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "unit_of_measures_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      warehouses: {
        Row: {
          address: string | null
          city: string | null
          code: string
          created_at: string | null
          id: string
          is_active: boolean | null
          manager_name: string | null
          name: string
          phone: string | null
          province: string | null
          tenant_id: string
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          code: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          manager_name?: string | null
          name: string
          phone?: string | null
          province?: string | null
          tenant_id: string
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          code?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          manager_name?: string | null
          name?: string
          phone?: string | null
          province?: string | null
          tenant_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "warehouses_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_current_tenant_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_tenant_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      is_current_user_super_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      unit_of_measure: "unit" | "kg" | "gram" | "liter" | "ml"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      unit_of_measure: ["unit", "kg", "gram", "liter", "ml"],
    },
  },
} as const
