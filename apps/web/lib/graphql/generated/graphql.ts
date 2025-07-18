import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigFloat: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  Date: { input: any; output: any; }
  Datetime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Opaque: { input: any; output: any; }
  Time: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eq?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Date']['input']>>;
  contains?: InputMaybe<Array<Scalars['Date']['input']>>;
  eq?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  contains?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  eq?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Float']['input']>>;
  contains?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Int']['input']>>;
  contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `add_ons` collection */
  deleteFromadd_onsCollection: Add_OnsDeleteResponse;
  /** Deletes zero or more records from the `app_users` collection */
  deleteFromapp_usersCollection: App_UsersDeleteResponse;
  /** Deletes zero or more records from the `audit_logs` collection */
  deleteFromaudit_logsCollection: Audit_LogsDeleteResponse;
  /** Deletes zero or more records from the `bank_accounts` collection */
  deleteFrombank_accountsCollection: Bank_AccountsDeleteResponse;
  /** Deletes zero or more records from the `chart_of_accounts` collection */
  deleteFromchart_of_accountsCollection: Chart_Of_AccountsDeleteResponse;
  /** Deletes zero or more records from the `customers` collection */
  deleteFromcustomersCollection: CustomersDeleteResponse;
  /** Deletes zero or more records from the `deliveries` collection */
  deleteFromdeliveriesCollection: DeliveriesDeleteResponse;
  /** Deletes zero or more records from the `delivery_items` collection */
  deleteFromdelivery_itemsCollection: Delivery_ItemsDeleteResponse;
  /** Deletes zero or more records from the `goods_receipt_items` collection */
  deleteFromgoods_receipt_itemsCollection: Goods_Receipt_ItemsDeleteResponse;
  /** Deletes zero or more records from the `goods_receipts` collection */
  deleteFromgoods_receiptsCollection: Goods_ReceiptsDeleteResponse;
  /** Deletes zero or more records from the `inventory` collection */
  deleteFrominventoryCollection: InventoryDeleteResponse;
  /** Deletes zero or more records from the `invoice_items` collection */
  deleteFrominvoice_itemsCollection: Invoice_ItemsDeleteResponse;
  /** Deletes zero or more records from the `invoices` collection */
  deleteFrominvoicesCollection: InvoicesDeleteResponse;
  /** Deletes zero or more records from the `journal_entries` collection */
  deleteFromjournal_entriesCollection: Journal_EntriesDeleteResponse;
  /** Deletes zero or more records from the `journal_entry_lines` collection */
  deleteFromjournal_entry_linesCollection: Journal_Entry_LinesDeleteResponse;
  /** Deletes zero or more records from the `payment_allocations` collection */
  deleteFrompayment_allocationsCollection: Payment_AllocationsDeleteResponse;
  /** Deletes zero or more records from the `payments` collection */
  deleteFrompaymentsCollection: PaymentsDeleteResponse;
  /** Deletes zero or more records from the `permissions` collection */
  deleteFrompermissionsCollection: PermissionsDeleteResponse;
  /** Deletes zero or more records from the `product_categories` collection */
  deleteFromproduct_categoriesCollection: Product_CategoriesDeleteResponse;
  /** Deletes zero or more records from the `products` collection */
  deleteFromproductsCollection: ProductsDeleteResponse;
  /** Deletes zero or more records from the `purchase_order_items` collection */
  deleteFrompurchase_order_itemsCollection: Purchase_Order_ItemsDeleteResponse;
  /** Deletes zero or more records from the `purchase_orders` collection */
  deleteFrompurchase_ordersCollection: Purchase_OrdersDeleteResponse;
  /** Deletes zero or more records from the `role_permissions` collection */
  deleteFromrole_permissionsCollection: Role_PermissionsDeleteResponse;
  /** Deletes zero or more records from the `roles` collection */
  deleteFromrolesCollection: RolesDeleteResponse;
  /** Deletes zero or more records from the `sales_order_items` collection */
  deleteFromsales_order_itemsCollection: Sales_Order_ItemsDeleteResponse;
  /** Deletes zero or more records from the `sales_orders` collection */
  deleteFromsales_ordersCollection: Sales_OrdersDeleteResponse;
  /** Deletes zero or more records from the `stock_movements` collection */
  deleteFromstock_movementsCollection: Stock_MovementsDeleteResponse;
  /** Deletes zero or more records from the `subscription_plans` collection */
  deleteFromsubscription_plansCollection: Subscription_PlansDeleteResponse;
  /** Deletes zero or more records from the `suppliers` collection */
  deleteFromsuppliersCollection: SuppliersDeleteResponse;
  /** Deletes zero or more records from the `tenant_subscription_add_ons` collection */
  deleteFromtenant_subscription_add_onsCollection: Tenant_Subscription_Add_OnsDeleteResponse;
  /** Deletes zero or more records from the `tenants` collection */
  deleteFromtenantsCollection: TenantsDeleteResponse;
  /** Deletes zero or more records from the `unit_of_measures` collection */
  deleteFromunit_of_measuresCollection: Unit_Of_MeasuresDeleteResponse;
  /** Deletes zero or more records from the `warehouses` collection */
  deleteFromwarehousesCollection: WarehousesDeleteResponse;
  get_current_tenant_id?: Maybe<Scalars['UUID']['output']>;
  /** Adds one or more `add_ons` records to the collection */
  insertIntoadd_onsCollection?: Maybe<Add_OnsInsertResponse>;
  /** Adds one or more `app_users` records to the collection */
  insertIntoapp_usersCollection?: Maybe<App_UsersInsertResponse>;
  /** Adds one or more `audit_logs` records to the collection */
  insertIntoaudit_logsCollection?: Maybe<Audit_LogsInsertResponse>;
  /** Adds one or more `bank_accounts` records to the collection */
  insertIntobank_accountsCollection?: Maybe<Bank_AccountsInsertResponse>;
  /** Adds one or more `chart_of_accounts` records to the collection */
  insertIntochart_of_accountsCollection?: Maybe<Chart_Of_AccountsInsertResponse>;
  /** Adds one or more `customers` records to the collection */
  insertIntocustomersCollection?: Maybe<CustomersInsertResponse>;
  /** Adds one or more `deliveries` records to the collection */
  insertIntodeliveriesCollection?: Maybe<DeliveriesInsertResponse>;
  /** Adds one or more `delivery_items` records to the collection */
  insertIntodelivery_itemsCollection?: Maybe<Delivery_ItemsInsertResponse>;
  /** Adds one or more `goods_receipt_items` records to the collection */
  insertIntogoods_receipt_itemsCollection?: Maybe<Goods_Receipt_ItemsInsertResponse>;
  /** Adds one or more `goods_receipts` records to the collection */
  insertIntogoods_receiptsCollection?: Maybe<Goods_ReceiptsInsertResponse>;
  /** Adds one or more `inventory` records to the collection */
  insertIntoinventoryCollection?: Maybe<InventoryInsertResponse>;
  /** Adds one or more `invoice_items` records to the collection */
  insertIntoinvoice_itemsCollection?: Maybe<Invoice_ItemsInsertResponse>;
  /** Adds one or more `invoices` records to the collection */
  insertIntoinvoicesCollection?: Maybe<InvoicesInsertResponse>;
  /** Adds one or more `journal_entries` records to the collection */
  insertIntojournal_entriesCollection?: Maybe<Journal_EntriesInsertResponse>;
  /** Adds one or more `journal_entry_lines` records to the collection */
  insertIntojournal_entry_linesCollection?: Maybe<Journal_Entry_LinesInsertResponse>;
  /** Adds one or more `payment_allocations` records to the collection */
  insertIntopayment_allocationsCollection?: Maybe<Payment_AllocationsInsertResponse>;
  /** Adds one or more `payments` records to the collection */
  insertIntopaymentsCollection?: Maybe<PaymentsInsertResponse>;
  /** Adds one or more `permissions` records to the collection */
  insertIntopermissionsCollection?: Maybe<PermissionsInsertResponse>;
  /** Adds one or more `product_categories` records to the collection */
  insertIntoproduct_categoriesCollection?: Maybe<Product_CategoriesInsertResponse>;
  /** Adds one or more `products` records to the collection */
  insertIntoproductsCollection?: Maybe<ProductsInsertResponse>;
  /** Adds one or more `purchase_order_items` records to the collection */
  insertIntopurchase_order_itemsCollection?: Maybe<Purchase_Order_ItemsInsertResponse>;
  /** Adds one or more `purchase_orders` records to the collection */
  insertIntopurchase_ordersCollection?: Maybe<Purchase_OrdersInsertResponse>;
  /** Adds one or more `role_permissions` records to the collection */
  insertIntorole_permissionsCollection?: Maybe<Role_PermissionsInsertResponse>;
  /** Adds one or more `roles` records to the collection */
  insertIntorolesCollection?: Maybe<RolesInsertResponse>;
  /** Adds one or more `sales_order_items` records to the collection */
  insertIntosales_order_itemsCollection?: Maybe<Sales_Order_ItemsInsertResponse>;
  /** Adds one or more `sales_orders` records to the collection */
  insertIntosales_ordersCollection?: Maybe<Sales_OrdersInsertResponse>;
  /** Adds one or more `stock_movements` records to the collection */
  insertIntostock_movementsCollection?: Maybe<Stock_MovementsInsertResponse>;
  /** Adds one or more `subscription_plans` records to the collection */
  insertIntosubscription_plansCollection?: Maybe<Subscription_PlansInsertResponse>;
  /** Adds one or more `suppliers` records to the collection */
  insertIntosuppliersCollection?: Maybe<SuppliersInsertResponse>;
  /** Adds one or more `tenant_subscription_add_ons` records to the collection */
  insertIntotenant_subscription_add_onsCollection?: Maybe<Tenant_Subscription_Add_OnsInsertResponse>;
  /** Adds one or more `tenants` records to the collection */
  insertIntotenantsCollection?: Maybe<TenantsInsertResponse>;
  /** Adds one or more `unit_of_measures` records to the collection */
  insertIntounit_of_measuresCollection?: Maybe<Unit_Of_MeasuresInsertResponse>;
  /** Adds one or more `warehouses` records to the collection */
  insertIntowarehousesCollection?: Maybe<WarehousesInsertResponse>;
  is_current_user_super_admin?: Maybe<Scalars['Boolean']['output']>;
  /** Updates zero or more records in the `add_ons` collection */
  updateadd_onsCollection: Add_OnsUpdateResponse;
  /** Updates zero or more records in the `app_users` collection */
  updateapp_usersCollection: App_UsersUpdateResponse;
  /** Updates zero or more records in the `audit_logs` collection */
  updateaudit_logsCollection: Audit_LogsUpdateResponse;
  /** Updates zero or more records in the `bank_accounts` collection */
  updatebank_accountsCollection: Bank_AccountsUpdateResponse;
  /** Updates zero or more records in the `chart_of_accounts` collection */
  updatechart_of_accountsCollection: Chart_Of_AccountsUpdateResponse;
  /** Updates zero or more records in the `customers` collection */
  updatecustomersCollection: CustomersUpdateResponse;
  /** Updates zero or more records in the `deliveries` collection */
  updatedeliveriesCollection: DeliveriesUpdateResponse;
  /** Updates zero or more records in the `delivery_items` collection */
  updatedelivery_itemsCollection: Delivery_ItemsUpdateResponse;
  /** Updates zero or more records in the `goods_receipt_items` collection */
  updategoods_receipt_itemsCollection: Goods_Receipt_ItemsUpdateResponse;
  /** Updates zero or more records in the `goods_receipts` collection */
  updategoods_receiptsCollection: Goods_ReceiptsUpdateResponse;
  /** Updates zero or more records in the `inventory` collection */
  updateinventoryCollection: InventoryUpdateResponse;
  /** Updates zero or more records in the `invoice_items` collection */
  updateinvoice_itemsCollection: Invoice_ItemsUpdateResponse;
  /** Updates zero or more records in the `invoices` collection */
  updateinvoicesCollection: InvoicesUpdateResponse;
  /** Updates zero or more records in the `journal_entries` collection */
  updatejournal_entriesCollection: Journal_EntriesUpdateResponse;
  /** Updates zero or more records in the `journal_entry_lines` collection */
  updatejournal_entry_linesCollection: Journal_Entry_LinesUpdateResponse;
  /** Updates zero or more records in the `payment_allocations` collection */
  updatepayment_allocationsCollection: Payment_AllocationsUpdateResponse;
  /** Updates zero or more records in the `payments` collection */
  updatepaymentsCollection: PaymentsUpdateResponse;
  /** Updates zero or more records in the `permissions` collection */
  updatepermissionsCollection: PermissionsUpdateResponse;
  /** Updates zero or more records in the `product_categories` collection */
  updateproduct_categoriesCollection: Product_CategoriesUpdateResponse;
  /** Updates zero or more records in the `products` collection */
  updateproductsCollection: ProductsUpdateResponse;
  /** Updates zero or more records in the `purchase_order_items` collection */
  updatepurchase_order_itemsCollection: Purchase_Order_ItemsUpdateResponse;
  /** Updates zero or more records in the `purchase_orders` collection */
  updatepurchase_ordersCollection: Purchase_OrdersUpdateResponse;
  /** Updates zero or more records in the `role_permissions` collection */
  updaterole_permissionsCollection: Role_PermissionsUpdateResponse;
  /** Updates zero or more records in the `roles` collection */
  updaterolesCollection: RolesUpdateResponse;
  /** Updates zero or more records in the `sales_order_items` collection */
  updatesales_order_itemsCollection: Sales_Order_ItemsUpdateResponse;
  /** Updates zero or more records in the `sales_orders` collection */
  updatesales_ordersCollection: Sales_OrdersUpdateResponse;
  /** Updates zero or more records in the `stock_movements` collection */
  updatestock_movementsCollection: Stock_MovementsUpdateResponse;
  /** Updates zero or more records in the `subscription_plans` collection */
  updatesubscription_plansCollection: Subscription_PlansUpdateResponse;
  /** Updates zero or more records in the `suppliers` collection */
  updatesuppliersCollection: SuppliersUpdateResponse;
  /** Updates zero or more records in the `tenant_subscription_add_ons` collection */
  updatetenant_subscription_add_onsCollection: Tenant_Subscription_Add_OnsUpdateResponse;
  /** Updates zero or more records in the `tenants` collection */
  updatetenantsCollection: TenantsUpdateResponse;
  /** Updates zero or more records in the `unit_of_measures` collection */
  updateunit_of_measuresCollection: Unit_Of_MeasuresUpdateResponse;
  /** Updates zero or more records in the `warehouses` collection */
  updatewarehousesCollection: WarehousesUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromadd_OnsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Add_OnsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromapp_UsersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<App_UsersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromaudit_LogsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Audit_LogsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrombank_AccountsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Bank_AccountsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromchart_Of_AccountsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Chart_Of_AccountsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcustomersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CustomersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromdeliveriesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<DeliveriesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromdelivery_ItemsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Delivery_ItemsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromgoods_Receipt_ItemsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Goods_Receipt_ItemsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromgoods_ReceiptsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Goods_ReceiptsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrominventoryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<InventoryFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrominvoice_ItemsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Invoice_ItemsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrominvoicesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<InvoicesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromjournal_EntriesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Journal_EntriesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromjournal_Entry_LinesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Journal_Entry_LinesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompayment_AllocationsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Payment_AllocationsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompaymentsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PaymentsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompermissionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PermissionsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromproduct_CategoriesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Product_CategoriesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromproductsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProductsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompurchase_Order_ItemsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Purchase_Order_ItemsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompurchase_OrdersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Purchase_OrdersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromrole_PermissionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Role_PermissionsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromrolesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RolesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromsales_Order_ItemsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Sales_Order_ItemsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromsales_OrdersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Sales_OrdersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromstock_MovementsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Stock_MovementsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromsubscription_PlansCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Subscription_PlansFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromsuppliersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<SuppliersFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromtenant_Subscription_Add_OnsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Tenant_Subscription_Add_OnsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromtenantsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TenantsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromunit_Of_MeasuresCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Unit_Of_MeasuresFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromwarehousesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<WarehousesFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoadd_OnsCollectionArgs = {
  objects: Array<Add_OnsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoapp_UsersCollectionArgs = {
  objects: Array<App_UsersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoaudit_LogsCollectionArgs = {
  objects: Array<Audit_LogsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntobank_AccountsCollectionArgs = {
  objects: Array<Bank_AccountsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntochart_Of_AccountsCollectionArgs = {
  objects: Array<Chart_Of_AccountsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocustomersCollectionArgs = {
  objects: Array<CustomersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntodeliveriesCollectionArgs = {
  objects: Array<DeliveriesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntodelivery_ItemsCollectionArgs = {
  objects: Array<Delivery_ItemsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntogoods_Receipt_ItemsCollectionArgs = {
  objects: Array<Goods_Receipt_ItemsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntogoods_ReceiptsCollectionArgs = {
  objects: Array<Goods_ReceiptsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoinventoryCollectionArgs = {
  objects: Array<InventoryInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoinvoice_ItemsCollectionArgs = {
  objects: Array<Invoice_ItemsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoinvoicesCollectionArgs = {
  objects: Array<InvoicesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntojournal_EntriesCollectionArgs = {
  objects: Array<Journal_EntriesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntojournal_Entry_LinesCollectionArgs = {
  objects: Array<Journal_Entry_LinesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopayment_AllocationsCollectionArgs = {
  objects: Array<Payment_AllocationsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopaymentsCollectionArgs = {
  objects: Array<PaymentsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopermissionsCollectionArgs = {
  objects: Array<PermissionsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoproduct_CategoriesCollectionArgs = {
  objects: Array<Product_CategoriesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoproductsCollectionArgs = {
  objects: Array<ProductsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopurchase_Order_ItemsCollectionArgs = {
  objects: Array<Purchase_Order_ItemsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopurchase_OrdersCollectionArgs = {
  objects: Array<Purchase_OrdersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntorole_PermissionsCollectionArgs = {
  objects: Array<Role_PermissionsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntorolesCollectionArgs = {
  objects: Array<RolesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntosales_Order_ItemsCollectionArgs = {
  objects: Array<Sales_Order_ItemsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntosales_OrdersCollectionArgs = {
  objects: Array<Sales_OrdersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntostock_MovementsCollectionArgs = {
  objects: Array<Stock_MovementsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntosubscription_PlansCollectionArgs = {
  objects: Array<Subscription_PlansInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntosuppliersCollectionArgs = {
  objects: Array<SuppliersInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntotenant_Subscription_Add_OnsCollectionArgs = {
  objects: Array<Tenant_Subscription_Add_OnsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntotenantsCollectionArgs = {
  objects: Array<TenantsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntounit_Of_MeasuresCollectionArgs = {
  objects: Array<Unit_Of_MeasuresInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntowarehousesCollectionArgs = {
  objects: Array<WarehousesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateadd_OnsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Add_OnsFilter>;
  set: Add_OnsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateapp_UsersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<App_UsersFilter>;
  set: App_UsersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateaudit_LogsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Audit_LogsFilter>;
  set: Audit_LogsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatebank_AccountsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Bank_AccountsFilter>;
  set: Bank_AccountsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatechart_Of_AccountsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Chart_Of_AccountsFilter>;
  set: Chart_Of_AccountsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecustomersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CustomersFilter>;
  set: CustomersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatedeliveriesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<DeliveriesFilter>;
  set: DeliveriesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatedelivery_ItemsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Delivery_ItemsFilter>;
  set: Delivery_ItemsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdategoods_Receipt_ItemsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Goods_Receipt_ItemsFilter>;
  set: Goods_Receipt_ItemsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdategoods_ReceiptsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Goods_ReceiptsFilter>;
  set: Goods_ReceiptsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateinventoryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<InventoryFilter>;
  set: InventoryUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateinvoice_ItemsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Invoice_ItemsFilter>;
  set: Invoice_ItemsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateinvoicesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<InvoicesFilter>;
  set: InvoicesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatejournal_EntriesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Journal_EntriesFilter>;
  set: Journal_EntriesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatejournal_Entry_LinesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Journal_Entry_LinesFilter>;
  set: Journal_Entry_LinesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatepayment_AllocationsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Payment_AllocationsFilter>;
  set: Payment_AllocationsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatepaymentsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PaymentsFilter>;
  set: PaymentsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatepermissionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PermissionsFilter>;
  set: PermissionsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateproduct_CategoriesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Product_CategoriesFilter>;
  set: Product_CategoriesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateproductsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProductsFilter>;
  set: ProductsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatepurchase_Order_ItemsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Purchase_Order_ItemsFilter>;
  set: Purchase_Order_ItemsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatepurchase_OrdersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Purchase_OrdersFilter>;
  set: Purchase_OrdersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdaterole_PermissionsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Role_PermissionsFilter>;
  set: Role_PermissionsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdaterolesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RolesFilter>;
  set: RolesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatesales_Order_ItemsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Sales_Order_ItemsFilter>;
  set: Sales_Order_ItemsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatesales_OrdersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Sales_OrdersFilter>;
  set: Sales_OrdersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatestock_MovementsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Stock_MovementsFilter>;
  set: Stock_MovementsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatesubscription_PlansCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Subscription_PlansFilter>;
  set: Subscription_PlansUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatesuppliersCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<SuppliersFilter>;
  set: SuppliersUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatetenant_Subscription_Add_OnsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Tenant_Subscription_Add_OnsFilter>;
  set: Tenant_Subscription_Add_OnsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatetenantsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TenantsFilter>;
  set: TenantsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateunit_Of_MeasuresCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Unit_Of_MeasuresFilter>;
  set: Unit_Of_MeasuresUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatewarehousesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<WarehousesFilter>;
  set: WarehousesUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `add_ons` */
  add_onsCollection?: Maybe<Add_OnsConnection>;
  /** A pagable collection of type `app_users` */
  app_usersCollection?: Maybe<App_UsersConnection>;
  /** A pagable collection of type `audit_logs` */
  audit_logsCollection?: Maybe<Audit_LogsConnection>;
  /** A pagable collection of type `bank_accounts` */
  bank_accountsCollection?: Maybe<Bank_AccountsConnection>;
  /** A pagable collection of type `chart_of_accounts` */
  chart_of_accountsCollection?: Maybe<Chart_Of_AccountsConnection>;
  /** A pagable collection of type `customers` */
  customersCollection?: Maybe<CustomersConnection>;
  /** A pagable collection of type `deliveries` */
  deliveriesCollection?: Maybe<DeliveriesConnection>;
  /** A pagable collection of type `delivery_items` */
  delivery_itemsCollection?: Maybe<Delivery_ItemsConnection>;
  get_tenant_id?: Maybe<Scalars['UUID']['output']>;
  /** A pagable collection of type `goods_receipt_items` */
  goods_receipt_itemsCollection?: Maybe<Goods_Receipt_ItemsConnection>;
  /** A pagable collection of type `goods_receipts` */
  goods_receiptsCollection?: Maybe<Goods_ReceiptsConnection>;
  /** A pagable collection of type `inventory` */
  inventoryCollection?: Maybe<InventoryConnection>;
  /** A pagable collection of type `invoice_items` */
  invoice_itemsCollection?: Maybe<Invoice_ItemsConnection>;
  /** A pagable collection of type `invoices` */
  invoicesCollection?: Maybe<InvoicesConnection>;
  /** A pagable collection of type `journal_entries` */
  journal_entriesCollection?: Maybe<Journal_EntriesConnection>;
  /** A pagable collection of type `journal_entry_lines` */
  journal_entry_linesCollection?: Maybe<Journal_Entry_LinesConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `payment_allocations` */
  payment_allocationsCollection?: Maybe<Payment_AllocationsConnection>;
  /** A pagable collection of type `payments` */
  paymentsCollection?: Maybe<PaymentsConnection>;
  /** A pagable collection of type `permissions` */
  permissionsCollection?: Maybe<PermissionsConnection>;
  /** A pagable collection of type `product_categories` */
  product_categoriesCollection?: Maybe<Product_CategoriesConnection>;
  /** A pagable collection of type `products` */
  productsCollection?: Maybe<ProductsConnection>;
  /** A pagable collection of type `purchase_order_items` */
  purchase_order_itemsCollection?: Maybe<Purchase_Order_ItemsConnection>;
  /** A pagable collection of type `purchase_orders` */
  purchase_ordersCollection?: Maybe<Purchase_OrdersConnection>;
  /** A pagable collection of type `role_permissions` */
  role_permissionsCollection?: Maybe<Role_PermissionsConnection>;
  /** A pagable collection of type `roles` */
  rolesCollection?: Maybe<RolesConnection>;
  /** A pagable collection of type `sales_order_items` */
  sales_order_itemsCollection?: Maybe<Sales_Order_ItemsConnection>;
  /** A pagable collection of type `sales_orders` */
  sales_ordersCollection?: Maybe<Sales_OrdersConnection>;
  /** A pagable collection of type `stock_movements` */
  stock_movementsCollection?: Maybe<Stock_MovementsConnection>;
  /** A pagable collection of type `subscription_plans` */
  subscription_plansCollection?: Maybe<Subscription_PlansConnection>;
  /** A pagable collection of type `suppliers` */
  suppliersCollection?: Maybe<SuppliersConnection>;
  /** A pagable collection of type `tenant_subscription_add_ons` */
  tenant_subscription_add_onsCollection?: Maybe<Tenant_Subscription_Add_OnsConnection>;
  /** A pagable collection of type `tenants` */
  tenantsCollection?: Maybe<TenantsConnection>;
  /** A pagable collection of type `unit_of_measures` */
  unit_of_measuresCollection?: Maybe<Unit_Of_MeasuresConnection>;
  /** A pagable collection of type `warehouses` */
  warehousesCollection?: Maybe<WarehousesConnection>;
};


/** The root type for querying data */
export type QueryAdd_OnsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Add_OnsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Add_OnsOrderBy>>;
};


/** The root type for querying data */
export type QueryApp_UsersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<App_UsersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<App_UsersOrderBy>>;
};


/** The root type for querying data */
export type QueryAudit_LogsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Audit_LogsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Audit_LogsOrderBy>>;
};


/** The root type for querying data */
export type QueryBank_AccountsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Bank_AccountsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Bank_AccountsOrderBy>>;
};


/** The root type for querying data */
export type QueryChart_Of_AccountsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Chart_Of_AccountsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Chart_Of_AccountsOrderBy>>;
};


/** The root type for querying data */
export type QueryCustomersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CustomersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CustomersOrderBy>>;
};


/** The root type for querying data */
export type QueryDeliveriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<DeliveriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DeliveriesOrderBy>>;
};


/** The root type for querying data */
export type QueryDelivery_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Delivery_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Delivery_ItemsOrderBy>>;
};


/** The root type for querying data */
export type QueryGoods_Receipt_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Goods_Receipt_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Goods_Receipt_ItemsOrderBy>>;
};


/** The root type for querying data */
export type QueryGoods_ReceiptsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Goods_ReceiptsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Goods_ReceiptsOrderBy>>;
};


/** The root type for querying data */
export type QueryInventoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<InventoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InventoryOrderBy>>;
};


/** The root type for querying data */
export type QueryInvoice_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Invoice_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Invoice_ItemsOrderBy>>;
};


/** The root type for querying data */
export type QueryInvoicesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<InvoicesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InvoicesOrderBy>>;
};


/** The root type for querying data */
export type QueryJournal_EntriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Journal_EntriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Journal_EntriesOrderBy>>;
};


/** The root type for querying data */
export type QueryJournal_Entry_LinesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Journal_Entry_LinesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Journal_Entry_LinesOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryPayment_AllocationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Payment_AllocationsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Payment_AllocationsOrderBy>>;
};


/** The root type for querying data */
export type QueryPaymentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PaymentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
};


/** The root type for querying data */
export type QueryPermissionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PermissionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PermissionsOrderBy>>;
};


/** The root type for querying data */
export type QueryProduct_CategoriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Product_CategoriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Product_CategoriesOrderBy>>;
};


/** The root type for querying data */
export type QueryProductsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};


/** The root type for querying data */
export type QueryPurchase_Order_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Purchase_Order_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Purchase_Order_ItemsOrderBy>>;
};


/** The root type for querying data */
export type QueryPurchase_OrdersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Purchase_OrdersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Purchase_OrdersOrderBy>>;
};


/** The root type for querying data */
export type QueryRole_PermissionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Role_PermissionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Role_PermissionsOrderBy>>;
};


/** The root type for querying data */
export type QueryRolesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<RolesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};


/** The root type for querying data */
export type QuerySales_Order_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Sales_Order_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Sales_Order_ItemsOrderBy>>;
};


/** The root type for querying data */
export type QuerySales_OrdersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Sales_OrdersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Sales_OrdersOrderBy>>;
};


/** The root type for querying data */
export type QueryStock_MovementsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Stock_MovementsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Stock_MovementsOrderBy>>;
};


/** The root type for querying data */
export type QuerySubscription_PlansCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Subscription_PlansFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Subscription_PlansOrderBy>>;
};


/** The root type for querying data */
export type QuerySuppliersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<SuppliersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SuppliersOrderBy>>;
};


/** The root type for querying data */
export type QueryTenant_Subscription_Add_OnsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Tenant_Subscription_Add_OnsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Tenant_Subscription_Add_OnsOrderBy>>;
};


/** The root type for querying data */
export type QueryTenantsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TenantsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TenantsOrderBy>>;
};


/** The root type for querying data */
export type QueryUnit_Of_MeasuresCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Unit_Of_MeasuresFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Unit_Of_MeasuresOrderBy>>;
};


/** The root type for querying data */
export type QueryWarehousesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<WarehousesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WarehousesOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Time']['input']>>;
  contains?: InputMaybe<Array<Scalars['Time']['input']>>;
  eq?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Time']['input']>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
  containedBy?: InputMaybe<Array<Scalars['UUID']['input']>>;
  contains?: InputMaybe<Array<Scalars['UUID']['input']>>;
  eq?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type Add_Ons = Node & {
  __typename?: 'add_ons';
  created_at?: Maybe<Scalars['Datetime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  price_monthly: Scalars['BigFloat']['output'];
  tenant_subscription_add_onsCollection?: Maybe<Tenant_Subscription_Add_OnsConnection>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type Add_OnsTenant_Subscription_Add_OnsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Tenant_Subscription_Add_OnsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Tenant_Subscription_Add_OnsOrderBy>>;
};

export type Add_OnsConnection = {
  __typename?: 'add_onsConnection';
  edges: Array<Add_OnsEdge>;
  pageInfo: PageInfo;
};

export type Add_OnsDeleteResponse = {
  __typename?: 'add_onsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Add_Ons>;
};

export type Add_OnsEdge = {
  __typename?: 'add_onsEdge';
  cursor: Scalars['String']['output'];
  node: Add_Ons;
};

export type Add_OnsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Add_OnsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  is_active?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Add_OnsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Add_OnsFilter>>;
  price_monthly?: InputMaybe<BigFloatFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Add_OnsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price_monthly?: InputMaybe<Scalars['BigFloat']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Add_OnsInsertResponse = {
  __typename?: 'add_onsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Add_Ons>;
};

export type Add_OnsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_active?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  price_monthly?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Add_OnsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price_monthly?: InputMaybe<Scalars['BigFloat']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Add_OnsUpdateResponse = {
  __typename?: 'add_onsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Add_Ons>;
};

export type App_Users = Node & {
  __typename?: 'app_users';
  audit_logsCollection?: Maybe<Audit_LogsConnection>;
  avatar_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  deliveriesCollection?: Maybe<DeliveriesConnection>;
  department?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  employee_id?: Maybe<Scalars['String']['output']>;
  full_name: Scalars['String']['output'];
  goods_receiptsCollection?: Maybe<Goods_ReceiptsConnection>;
  id: Scalars['UUID']['output'];
  invoicesCollection?: Maybe<InvoicesConnection>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_super_admin?: Maybe<Scalars['Boolean']['output']>;
  journal_entriesCollection?: Maybe<Journal_EntriesConnection>;
  last_login_at?: Maybe<Scalars['Datetime']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  paymentsCollection?: Maybe<PaymentsConnection>;
  permissions?: Maybe<Scalars['JSON']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  purchase_ordersCollection?: Maybe<Purchase_OrdersConnection>;
  role_id: Scalars['UUID']['output'];
  roles: Roles;
  sales_ordersCollection?: Maybe<Sales_OrdersConnection>;
  stock_movementsCollection?: Maybe<Stock_MovementsConnection>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
  user_settings?: Maybe<Scalars['JSON']['output']>;
};


export type App_UsersAudit_LogsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Audit_LogsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Audit_LogsOrderBy>>;
};


export type App_UsersDeliveriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<DeliveriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DeliveriesOrderBy>>;
};


export type App_UsersGoods_ReceiptsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Goods_ReceiptsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Goods_ReceiptsOrderBy>>;
};


export type App_UsersInvoicesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<InvoicesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InvoicesOrderBy>>;
};


export type App_UsersJournal_EntriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Journal_EntriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Journal_EntriesOrderBy>>;
};


export type App_UsersPaymentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PaymentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
};


export type App_UsersPurchase_OrdersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Purchase_OrdersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Purchase_OrdersOrderBy>>;
};


export type App_UsersSales_OrdersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Sales_OrdersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Sales_OrdersOrderBy>>;
};


export type App_UsersStock_MovementsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Stock_MovementsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Stock_MovementsOrderBy>>;
};

export type App_UsersConnection = {
  __typename?: 'app_usersConnection';
  edges: Array<App_UsersEdge>;
  pageInfo: PageInfo;
};

export type App_UsersDeleteResponse = {
  __typename?: 'app_usersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<App_Users>;
};

export type App_UsersEdge = {
  __typename?: 'app_usersEdge';
  cursor: Scalars['String']['output'];
  node: App_Users;
};

export type App_UsersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<App_UsersFilter>>;
  avatar_url?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  department?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  employee_id?: InputMaybe<StringFilter>;
  full_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  is_active?: InputMaybe<BooleanFilter>;
  is_super_admin?: InputMaybe<BooleanFilter>;
  last_login_at?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<App_UsersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<App_UsersFilter>>;
  phone?: InputMaybe<StringFilter>;
  position?: InputMaybe<StringFilter>;
  role_id?: InputMaybe<UuidFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type App_UsersInsertInput = {
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  employee_id?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_super_admin?: InputMaybe<Scalars['Boolean']['input']>;
  last_login_at?: InputMaybe<Scalars['Datetime']['input']>;
  permissions?: InputMaybe<Scalars['JSON']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  role_id?: InputMaybe<Scalars['UUID']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_settings?: InputMaybe<Scalars['JSON']['input']>;
};

export type App_UsersInsertResponse = {
  __typename?: 'app_usersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<App_Users>;
};

export type App_UsersOrderBy = {
  avatar_url?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  department?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  employee_id?: InputMaybe<OrderByDirection>;
  full_name?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_active?: InputMaybe<OrderByDirection>;
  is_super_admin?: InputMaybe<OrderByDirection>;
  last_login_at?: InputMaybe<OrderByDirection>;
  phone?: InputMaybe<OrderByDirection>;
  position?: InputMaybe<OrderByDirection>;
  role_id?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type App_UsersUpdateInput = {
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  employee_id?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_super_admin?: InputMaybe<Scalars['Boolean']['input']>;
  last_login_at?: InputMaybe<Scalars['Datetime']['input']>;
  permissions?: InputMaybe<Scalars['JSON']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  role_id?: InputMaybe<Scalars['UUID']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_settings?: InputMaybe<Scalars['JSON']['input']>;
};

export type App_UsersUpdateResponse = {
  __typename?: 'app_usersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<App_Users>;
};

export type Audit_Logs = Node & {
  __typename?: 'audit_logs';
  action_type: Scalars['String']['output'];
  app_users?: Maybe<App_Users>;
  changed_fields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  details?: Maybe<Scalars['String']['output']>;
  entity_id?: Maybe<Scalars['UUID']['output']>;
  entity_type: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  ip_address?: Maybe<Scalars['String']['output']>;
  new_value?: Maybe<Scalars['JSON']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  old_value?: Maybe<Scalars['JSON']['output']>;
  tenant_id?: Maybe<Scalars['UUID']['output']>;
  timestamp?: Maybe<Scalars['Datetime']['output']>;
  user_agent?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['UUID']['output']>;
};

export type Audit_LogsConnection = {
  __typename?: 'audit_logsConnection';
  edges: Array<Audit_LogsEdge>;
  pageInfo: PageInfo;
};

export type Audit_LogsDeleteResponse = {
  __typename?: 'audit_logsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Audit_Logs>;
};

export type Audit_LogsEdge = {
  __typename?: 'audit_logsEdge';
  cursor: Scalars['String']['output'];
  node: Audit_Logs;
};

export type Audit_LogsFilter = {
  action_type?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Audit_LogsFilter>>;
  changed_fields?: InputMaybe<StringListFilter>;
  details?: InputMaybe<StringFilter>;
  entity_id?: InputMaybe<UuidFilter>;
  entity_type?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  ip_address?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Audit_LogsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Audit_LogsFilter>>;
  tenant_id?: InputMaybe<UuidFilter>;
  timestamp?: InputMaybe<DatetimeFilter>;
  user_agent?: InputMaybe<StringFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type Audit_LogsInsertInput = {
  action_type?: InputMaybe<Scalars['String']['input']>;
  changed_fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  details?: InputMaybe<Scalars['String']['input']>;
  entity_id?: InputMaybe<Scalars['UUID']['input']>;
  entity_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  new_value?: InputMaybe<Scalars['JSON']['input']>;
  old_value?: InputMaybe<Scalars['JSON']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  timestamp?: InputMaybe<Scalars['Datetime']['input']>;
  user_agent?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Audit_LogsInsertResponse = {
  __typename?: 'audit_logsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Audit_Logs>;
};

export type Audit_LogsOrderBy = {
  action_type?: InputMaybe<OrderByDirection>;
  details?: InputMaybe<OrderByDirection>;
  entity_id?: InputMaybe<OrderByDirection>;
  entity_type?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  ip_address?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  timestamp?: InputMaybe<OrderByDirection>;
  user_agent?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type Audit_LogsUpdateInput = {
  action_type?: InputMaybe<Scalars['String']['input']>;
  changed_fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  details?: InputMaybe<Scalars['String']['input']>;
  entity_id?: InputMaybe<Scalars['UUID']['input']>;
  entity_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  new_value?: InputMaybe<Scalars['JSON']['input']>;
  old_value?: InputMaybe<Scalars['JSON']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  timestamp?: InputMaybe<Scalars['Datetime']['input']>;
  user_agent?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Audit_LogsUpdateResponse = {
  __typename?: 'audit_logsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Audit_Logs>;
};

export type Bank_Accounts = Node & {
  __typename?: 'bank_accounts';
  account_name: Scalars['String']['output'];
  account_number: Scalars['String']['output'];
  account_type?: Maybe<Scalars['String']['output']>;
  balance?: Maybe<Scalars['BigFloat']['output']>;
  bank_name: Scalars['String']['output'];
  chart_of_account_id?: Maybe<Scalars['UUID']['output']>;
  chart_of_accounts?: Maybe<Chart_Of_Accounts>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  paymentsCollection?: Maybe<PaymentsConnection>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type Bank_AccountsPaymentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PaymentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
};

export type Bank_AccountsConnection = {
  __typename?: 'bank_accountsConnection';
  edges: Array<Bank_AccountsEdge>;
  pageInfo: PageInfo;
};

export type Bank_AccountsDeleteResponse = {
  __typename?: 'bank_accountsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Bank_Accounts>;
};

export type Bank_AccountsEdge = {
  __typename?: 'bank_accountsEdge';
  cursor: Scalars['String']['output'];
  node: Bank_Accounts;
};

export type Bank_AccountsFilter = {
  account_name?: InputMaybe<StringFilter>;
  account_number?: InputMaybe<StringFilter>;
  account_type?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Bank_AccountsFilter>>;
  balance?: InputMaybe<BigFloatFilter>;
  bank_name?: InputMaybe<StringFilter>;
  chart_of_account_id?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  currency?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  is_active?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Bank_AccountsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Bank_AccountsFilter>>;
  tenant_id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Bank_AccountsInsertInput = {
  account_name?: InputMaybe<Scalars['String']['input']>;
  account_number?: InputMaybe<Scalars['String']['input']>;
  account_type?: InputMaybe<Scalars['String']['input']>;
  balance?: InputMaybe<Scalars['BigFloat']['input']>;
  bank_name?: InputMaybe<Scalars['String']['input']>;
  chart_of_account_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Bank_AccountsInsertResponse = {
  __typename?: 'bank_accountsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Bank_Accounts>;
};

export type Bank_AccountsOrderBy = {
  account_name?: InputMaybe<OrderByDirection>;
  account_number?: InputMaybe<OrderByDirection>;
  account_type?: InputMaybe<OrderByDirection>;
  balance?: InputMaybe<OrderByDirection>;
  bank_name?: InputMaybe<OrderByDirection>;
  chart_of_account_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  currency?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_active?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Bank_AccountsUpdateInput = {
  account_name?: InputMaybe<Scalars['String']['input']>;
  account_number?: InputMaybe<Scalars['String']['input']>;
  account_type?: InputMaybe<Scalars['String']['input']>;
  balance?: InputMaybe<Scalars['BigFloat']['input']>;
  bank_name?: InputMaybe<Scalars['String']['input']>;
  chart_of_account_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Bank_AccountsUpdateResponse = {
  __typename?: 'bank_accountsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Bank_Accounts>;
};

export type Chart_Of_Accounts = Node & {
  __typename?: 'chart_of_accounts';
  account_subtype?: Maybe<Scalars['String']['output']>;
  account_type: Scalars['String']['output'];
  bank_accountsCollection?: Maybe<Bank_AccountsConnection>;
  chart_of_accounts?: Maybe<Chart_Of_Accounts>;
  chart_of_accountsCollection?: Maybe<Chart_Of_AccountsConnection>;
  code: Scalars['String']['output'];
  created_at?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  invoice_itemsCollection?: Maybe<Invoice_ItemsConnection>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  journal_entry_linesCollection?: Maybe<Journal_Entry_LinesConnection>;
  level?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  parent_id?: Maybe<Scalars['UUID']['output']>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
};


export type Chart_Of_AccountsBank_AccountsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Bank_AccountsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Bank_AccountsOrderBy>>;
};


export type Chart_Of_AccountsChart_Of_AccountsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Chart_Of_AccountsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Chart_Of_AccountsOrderBy>>;
};


export type Chart_Of_AccountsInvoice_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Invoice_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Invoice_ItemsOrderBy>>;
};


export type Chart_Of_AccountsJournal_Entry_LinesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Journal_Entry_LinesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Journal_Entry_LinesOrderBy>>;
};

export type Chart_Of_AccountsConnection = {
  __typename?: 'chart_of_accountsConnection';
  edges: Array<Chart_Of_AccountsEdge>;
  pageInfo: PageInfo;
};

export type Chart_Of_AccountsDeleteResponse = {
  __typename?: 'chart_of_accountsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Chart_Of_Accounts>;
};

export type Chart_Of_AccountsEdge = {
  __typename?: 'chart_of_accountsEdge';
  cursor: Scalars['String']['output'];
  node: Chart_Of_Accounts;
};

export type Chart_Of_AccountsFilter = {
  account_subtype?: InputMaybe<StringFilter>;
  account_type?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Chart_Of_AccountsFilter>>;
  code?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  is_active?: InputMaybe<BooleanFilter>;
  level?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Chart_Of_AccountsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Chart_Of_AccountsFilter>>;
  parent_id?: InputMaybe<UuidFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
};

export type Chart_Of_AccountsInsertInput = {
  account_subtype?: InputMaybe<Scalars['String']['input']>;
  account_type?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['UUID']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Chart_Of_AccountsInsertResponse = {
  __typename?: 'chart_of_accountsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Chart_Of_Accounts>;
};

export type Chart_Of_AccountsOrderBy = {
  account_subtype?: InputMaybe<OrderByDirection>;
  account_type?: InputMaybe<OrderByDirection>;
  code?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_active?: InputMaybe<OrderByDirection>;
  level?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  parent_id?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
};

export type Chart_Of_AccountsUpdateInput = {
  account_subtype?: InputMaybe<Scalars['String']['input']>;
  account_type?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['UUID']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Chart_Of_AccountsUpdateResponse = {
  __typename?: 'chart_of_accountsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Chart_Of_Accounts>;
};

export type Customers = Node & {
  __typename?: 'customers';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  credit_limit?: Maybe<Scalars['BigFloat']['output']>;
  customer_code: Scalars['String']['output'];
  customer_group?: Maybe<Scalars['String']['output']>;
  customer_type?: Maybe<Scalars['String']['output']>;
  deliveriesCollection?: Maybe<DeliveriesConnection>;
  discount_percent?: Maybe<Scalars['BigFloat']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  invoicesCollection?: Maybe<InvoicesConnection>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  payment_terms?: Maybe<Scalars['Int']['output']>;
  paymentsCollection?: Maybe<PaymentsConnection>;
  phone?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  sales_ordersCollection?: Maybe<Sales_OrdersConnection>;
  tax_id?: Maybe<Scalars['String']['output']>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type CustomersDeliveriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<DeliveriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DeliveriesOrderBy>>;
};


export type CustomersInvoicesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<InvoicesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InvoicesOrderBy>>;
};


export type CustomersPaymentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PaymentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
};


export type CustomersSales_OrdersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Sales_OrdersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Sales_OrdersOrderBy>>;
};

export type CustomersConnection = {
  __typename?: 'customersConnection';
  edges: Array<CustomersEdge>;
  pageInfo: PageInfo;
};

export type CustomersDeleteResponse = {
  __typename?: 'customersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Customers>;
};

export type CustomersEdge = {
  __typename?: 'customersEdge';
  cursor: Scalars['String']['output'];
  node: Customers;
};

export type CustomersFilter = {
  address?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CustomersFilter>>;
  city?: InputMaybe<StringFilter>;
  company_name?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  credit_limit?: InputMaybe<BigFloatFilter>;
  customer_code?: InputMaybe<StringFilter>;
  customer_group?: InputMaybe<StringFilter>;
  customer_type?: InputMaybe<StringFilter>;
  discount_percent?: InputMaybe<BigFloatFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  is_active?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CustomersFilter>;
  notes?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CustomersFilter>>;
  payment_terms?: InputMaybe<IntFilter>;
  phone?: InputMaybe<StringFilter>;
  postal_code?: InputMaybe<StringFilter>;
  province?: InputMaybe<StringFilter>;
  tax_id?: InputMaybe<StringFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type CustomersInsertInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  credit_limit?: InputMaybe<Scalars['BigFloat']['input']>;
  customer_code?: InputMaybe<Scalars['String']['input']>;
  customer_group?: InputMaybe<Scalars['String']['input']>;
  customer_type?: InputMaybe<Scalars['String']['input']>;
  discount_percent?: InputMaybe<Scalars['BigFloat']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  payment_terms?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  tax_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type CustomersInsertResponse = {
  __typename?: 'customersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Customers>;
};

export type CustomersOrderBy = {
  address?: InputMaybe<OrderByDirection>;
  city?: InputMaybe<OrderByDirection>;
  company_name?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  credit_limit?: InputMaybe<OrderByDirection>;
  customer_code?: InputMaybe<OrderByDirection>;
  customer_group?: InputMaybe<OrderByDirection>;
  customer_type?: InputMaybe<OrderByDirection>;
  discount_percent?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_active?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  notes?: InputMaybe<OrderByDirection>;
  payment_terms?: InputMaybe<OrderByDirection>;
  phone?: InputMaybe<OrderByDirection>;
  postal_code?: InputMaybe<OrderByDirection>;
  province?: InputMaybe<OrderByDirection>;
  tax_id?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type CustomersUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  credit_limit?: InputMaybe<Scalars['BigFloat']['input']>;
  customer_code?: InputMaybe<Scalars['String']['input']>;
  customer_group?: InputMaybe<Scalars['String']['input']>;
  customer_type?: InputMaybe<Scalars['String']['input']>;
  discount_percent?: InputMaybe<Scalars['BigFloat']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  payment_terms?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  tax_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type CustomersUpdateResponse = {
  __typename?: 'customersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Customers>;
};

export type Deliveries = Node & {
  __typename?: 'deliveries';
  app_users?: Maybe<App_Users>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  customer_id: Scalars['UUID']['output'];
  customers?: Maybe<Customers>;
  delivered_at?: Maybe<Scalars['Datetime']['output']>;
  delivered_by?: Maybe<Scalars['UUID']['output']>;
  delivery_address?: Maybe<Scalars['String']['output']>;
  delivery_date: Scalars['Datetime']['output'];
  delivery_itemsCollection?: Maybe<Delivery_ItemsConnection>;
  delivery_number: Scalars['String']['output'];
  driver_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  sales_order_id?: Maybe<Scalars['UUID']['output']>;
  sales_orders?: Maybe<Sales_Orders>;
  shipping_cost?: Maybe<Scalars['BigFloat']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
  vehicle_number?: Maybe<Scalars['String']['output']>;
  warehouse_id: Scalars['UUID']['output'];
  warehouses?: Maybe<Warehouses>;
};


export type DeliveriesDelivery_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Delivery_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Delivery_ItemsOrderBy>>;
};

export type DeliveriesConnection = {
  __typename?: 'deliveriesConnection';
  edges: Array<DeliveriesEdge>;
  pageInfo: PageInfo;
};

export type DeliveriesDeleteResponse = {
  __typename?: 'deliveriesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Deliveries>;
};

export type DeliveriesEdge = {
  __typename?: 'deliveriesEdge';
  cursor: Scalars['String']['output'];
  node: Deliveries;
};

export type DeliveriesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<DeliveriesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  customer_id?: InputMaybe<UuidFilter>;
  delivered_at?: InputMaybe<DatetimeFilter>;
  delivered_by?: InputMaybe<UuidFilter>;
  delivery_address?: InputMaybe<StringFilter>;
  delivery_date?: InputMaybe<DatetimeFilter>;
  delivery_number?: InputMaybe<StringFilter>;
  driver_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<DeliveriesFilter>;
  notes?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<DeliveriesFilter>>;
  sales_order_id?: InputMaybe<UuidFilter>;
  shipping_cost?: InputMaybe<BigFloatFilter>;
  status?: InputMaybe<StringFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  vehicle_number?: InputMaybe<StringFilter>;
  warehouse_id?: InputMaybe<UuidFilter>;
};

export type DeliveriesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  customer_id?: InputMaybe<Scalars['UUID']['input']>;
  delivered_at?: InputMaybe<Scalars['Datetime']['input']>;
  delivered_by?: InputMaybe<Scalars['UUID']['input']>;
  delivery_address?: InputMaybe<Scalars['String']['input']>;
  delivery_date?: InputMaybe<Scalars['Datetime']['input']>;
  delivery_number?: InputMaybe<Scalars['String']['input']>;
  driver_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  sales_order_id?: InputMaybe<Scalars['UUID']['input']>;
  shipping_cost?: InputMaybe<Scalars['BigFloat']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  vehicle_number?: InputMaybe<Scalars['String']['input']>;
  warehouse_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type DeliveriesInsertResponse = {
  __typename?: 'deliveriesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Deliveries>;
};

export type DeliveriesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  customer_id?: InputMaybe<OrderByDirection>;
  delivered_at?: InputMaybe<OrderByDirection>;
  delivered_by?: InputMaybe<OrderByDirection>;
  delivery_address?: InputMaybe<OrderByDirection>;
  delivery_date?: InputMaybe<OrderByDirection>;
  delivery_number?: InputMaybe<OrderByDirection>;
  driver_name?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  notes?: InputMaybe<OrderByDirection>;
  sales_order_id?: InputMaybe<OrderByDirection>;
  shipping_cost?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  vehicle_number?: InputMaybe<OrderByDirection>;
  warehouse_id?: InputMaybe<OrderByDirection>;
};

export type DeliveriesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  customer_id?: InputMaybe<Scalars['UUID']['input']>;
  delivered_at?: InputMaybe<Scalars['Datetime']['input']>;
  delivered_by?: InputMaybe<Scalars['UUID']['input']>;
  delivery_address?: InputMaybe<Scalars['String']['input']>;
  delivery_date?: InputMaybe<Scalars['Datetime']['input']>;
  delivery_number?: InputMaybe<Scalars['String']['input']>;
  driver_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  sales_order_id?: InputMaybe<Scalars['UUID']['input']>;
  shipping_cost?: InputMaybe<Scalars['BigFloat']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  vehicle_number?: InputMaybe<Scalars['String']['input']>;
  warehouse_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type DeliveriesUpdateResponse = {
  __typename?: 'deliveriesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Deliveries>;
};

export type Delivery_Items = Node & {
  __typename?: 'delivery_items';
  batch_number?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  deliveries?: Maybe<Deliveries>;
  delivery_id: Scalars['UUID']['output'];
  expiry_date?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  product_id: Scalars['UUID']['output'];
  products?: Maybe<Products>;
  quantity_delivered: Scalars['BigFloat']['output'];
  sales_order_item_id?: Maybe<Scalars['UUID']['output']>;
  sales_order_items?: Maybe<Sales_Order_Items>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
  total_amount: Scalars['BigFloat']['output'];
  unit_price: Scalars['BigFloat']['output'];
};

export type Delivery_ItemsConnection = {
  __typename?: 'delivery_itemsConnection';
  edges: Array<Delivery_ItemsEdge>;
  pageInfo: PageInfo;
};

export type Delivery_ItemsDeleteResponse = {
  __typename?: 'delivery_itemsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Delivery_Items>;
};

export type Delivery_ItemsEdge = {
  __typename?: 'delivery_itemsEdge';
  cursor: Scalars['String']['output'];
  node: Delivery_Items;
};

export type Delivery_ItemsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Delivery_ItemsFilter>>;
  batch_number?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  delivery_id?: InputMaybe<UuidFilter>;
  expiry_date?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Delivery_ItemsFilter>;
  notes?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Delivery_ItemsFilter>>;
  product_id?: InputMaybe<UuidFilter>;
  quantity_delivered?: InputMaybe<BigFloatFilter>;
  sales_order_item_id?: InputMaybe<UuidFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
  total_amount?: InputMaybe<BigFloatFilter>;
  unit_price?: InputMaybe<BigFloatFilter>;
};

export type Delivery_ItemsInsertInput = {
  batch_number?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  delivery_id?: InputMaybe<Scalars['UUID']['input']>;
  expiry_date?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  quantity_delivered?: InputMaybe<Scalars['BigFloat']['input']>;
  sales_order_item_id?: InputMaybe<Scalars['UUID']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  unit_price?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type Delivery_ItemsInsertResponse = {
  __typename?: 'delivery_itemsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Delivery_Items>;
};

export type Delivery_ItemsOrderBy = {
  batch_number?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  delivery_id?: InputMaybe<OrderByDirection>;
  expiry_date?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  notes?: InputMaybe<OrderByDirection>;
  product_id?: InputMaybe<OrderByDirection>;
  quantity_delivered?: InputMaybe<OrderByDirection>;
  sales_order_item_id?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  total_amount?: InputMaybe<OrderByDirection>;
  unit_price?: InputMaybe<OrderByDirection>;
};

export type Delivery_ItemsUpdateInput = {
  batch_number?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  delivery_id?: InputMaybe<Scalars['UUID']['input']>;
  expiry_date?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  quantity_delivered?: InputMaybe<Scalars['BigFloat']['input']>;
  sales_order_item_id?: InputMaybe<Scalars['UUID']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  unit_price?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type Delivery_ItemsUpdateResponse = {
  __typename?: 'delivery_itemsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Delivery_Items>;
};

export type Goods_Receipt_Items = Node & {
  __typename?: 'goods_receipt_items';
  batch_number?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  expiry_date?: Maybe<Scalars['Datetime']['output']>;
  goods_receipt_id: Scalars['UUID']['output'];
  goods_receipts?: Maybe<Goods_Receipts>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  product_id: Scalars['UUID']['output'];
  products?: Maybe<Products>;
  purchase_order_item_id?: Maybe<Scalars['UUID']['output']>;
  purchase_order_items?: Maybe<Purchase_Order_Items>;
  quantity_received: Scalars['BigFloat']['output'];
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
  total_cost: Scalars['BigFloat']['output'];
  unit_cost: Scalars['BigFloat']['output'];
};

export type Goods_Receipt_ItemsConnection = {
  __typename?: 'goods_receipt_itemsConnection';
  edges: Array<Goods_Receipt_ItemsEdge>;
  pageInfo: PageInfo;
};

export type Goods_Receipt_ItemsDeleteResponse = {
  __typename?: 'goods_receipt_itemsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Goods_Receipt_Items>;
};

export type Goods_Receipt_ItemsEdge = {
  __typename?: 'goods_receipt_itemsEdge';
  cursor: Scalars['String']['output'];
  node: Goods_Receipt_Items;
};

export type Goods_Receipt_ItemsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Goods_Receipt_ItemsFilter>>;
  batch_number?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  expiry_date?: InputMaybe<DatetimeFilter>;
  goods_receipt_id?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Goods_Receipt_ItemsFilter>;
  notes?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Goods_Receipt_ItemsFilter>>;
  product_id?: InputMaybe<UuidFilter>;
  purchase_order_item_id?: InputMaybe<UuidFilter>;
  quantity_received?: InputMaybe<BigFloatFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
  total_cost?: InputMaybe<BigFloatFilter>;
  unit_cost?: InputMaybe<BigFloatFilter>;
};

export type Goods_Receipt_ItemsInsertInput = {
  batch_number?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  expiry_date?: InputMaybe<Scalars['Datetime']['input']>;
  goods_receipt_id?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  purchase_order_item_id?: InputMaybe<Scalars['UUID']['input']>;
  quantity_received?: InputMaybe<Scalars['BigFloat']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_cost?: InputMaybe<Scalars['BigFloat']['input']>;
  unit_cost?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type Goods_Receipt_ItemsInsertResponse = {
  __typename?: 'goods_receipt_itemsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Goods_Receipt_Items>;
};

export type Goods_Receipt_ItemsOrderBy = {
  batch_number?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  expiry_date?: InputMaybe<OrderByDirection>;
  goods_receipt_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  notes?: InputMaybe<OrderByDirection>;
  product_id?: InputMaybe<OrderByDirection>;
  purchase_order_item_id?: InputMaybe<OrderByDirection>;
  quantity_received?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  total_cost?: InputMaybe<OrderByDirection>;
  unit_cost?: InputMaybe<OrderByDirection>;
};

export type Goods_Receipt_ItemsUpdateInput = {
  batch_number?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  expiry_date?: InputMaybe<Scalars['Datetime']['input']>;
  goods_receipt_id?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  purchase_order_item_id?: InputMaybe<Scalars['UUID']['input']>;
  quantity_received?: InputMaybe<Scalars['BigFloat']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_cost?: InputMaybe<Scalars['BigFloat']['input']>;
  unit_cost?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type Goods_Receipt_ItemsUpdateResponse = {
  __typename?: 'goods_receipt_itemsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Goods_Receipt_Items>;
};

export type Goods_Receipts = Node & {
  __typename?: 'goods_receipts';
  app_users?: Maybe<App_Users>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  goods_receipt_itemsCollection?: Maybe<Goods_Receipt_ItemsConnection>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  purchase_order_id?: Maybe<Scalars['UUID']['output']>;
  purchase_orders?: Maybe<Purchase_Orders>;
  receipt_date: Scalars['Datetime']['output'];
  receipt_number: Scalars['String']['output'];
  received_by?: Maybe<Scalars['UUID']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  supplier_id: Scalars['UUID']['output'];
  suppliers?: Maybe<Suppliers>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
  total_amount?: Maybe<Scalars['BigFloat']['output']>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
  warehouse_id: Scalars['UUID']['output'];
  warehouses?: Maybe<Warehouses>;
};


export type Goods_ReceiptsGoods_Receipt_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Goods_Receipt_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Goods_Receipt_ItemsOrderBy>>;
};

export type Goods_ReceiptsConnection = {
  __typename?: 'goods_receiptsConnection';
  edges: Array<Goods_ReceiptsEdge>;
  pageInfo: PageInfo;
};

export type Goods_ReceiptsDeleteResponse = {
  __typename?: 'goods_receiptsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Goods_Receipts>;
};

export type Goods_ReceiptsEdge = {
  __typename?: 'goods_receiptsEdge';
  cursor: Scalars['String']['output'];
  node: Goods_Receipts;
};

export type Goods_ReceiptsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Goods_ReceiptsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Goods_ReceiptsFilter>;
  notes?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Goods_ReceiptsFilter>>;
  purchase_order_id?: InputMaybe<UuidFilter>;
  receipt_date?: InputMaybe<DatetimeFilter>;
  receipt_number?: InputMaybe<StringFilter>;
  received_by?: InputMaybe<UuidFilter>;
  status?: InputMaybe<StringFilter>;
  supplier_id?: InputMaybe<UuidFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
  total_amount?: InputMaybe<BigFloatFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  warehouse_id?: InputMaybe<UuidFilter>;
};

export type Goods_ReceiptsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  purchase_order_id?: InputMaybe<Scalars['UUID']['input']>;
  receipt_date?: InputMaybe<Scalars['Datetime']['input']>;
  receipt_number?: InputMaybe<Scalars['String']['input']>;
  received_by?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  supplier_id?: InputMaybe<Scalars['UUID']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  warehouse_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Goods_ReceiptsInsertResponse = {
  __typename?: 'goods_receiptsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Goods_Receipts>;
};

export type Goods_ReceiptsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  notes?: InputMaybe<OrderByDirection>;
  purchase_order_id?: InputMaybe<OrderByDirection>;
  receipt_date?: InputMaybe<OrderByDirection>;
  receipt_number?: InputMaybe<OrderByDirection>;
  received_by?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  supplier_id?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  total_amount?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  warehouse_id?: InputMaybe<OrderByDirection>;
};

export type Goods_ReceiptsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  purchase_order_id?: InputMaybe<Scalars['UUID']['input']>;
  receipt_date?: InputMaybe<Scalars['Datetime']['input']>;
  receipt_number?: InputMaybe<Scalars['String']['input']>;
  received_by?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  supplier_id?: InputMaybe<Scalars['UUID']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  warehouse_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Goods_ReceiptsUpdateResponse = {
  __typename?: 'goods_receiptsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Goods_Receipts>;
};

export type Inventory = Node & {
  __typename?: 'inventory';
  average_cost?: Maybe<Scalars['BigFloat']['output']>;
  id: Scalars['UUID']['output'];
  last_transaction_at?: Maybe<Scalars['Datetime']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  product_id: Scalars['UUID']['output'];
  products?: Maybe<Products>;
  quantity_available?: Maybe<Scalars['BigFloat']['output']>;
  quantity_on_hand?: Maybe<Scalars['BigFloat']['output']>;
  quantity_reserved?: Maybe<Scalars['BigFloat']['output']>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
  warehouse_id: Scalars['UUID']['output'];
  warehouses?: Maybe<Warehouses>;
};

export type InventoryConnection = {
  __typename?: 'inventoryConnection';
  edges: Array<InventoryEdge>;
  pageInfo: PageInfo;
};

export type InventoryDeleteResponse = {
  __typename?: 'inventoryDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Inventory>;
};

export type InventoryEdge = {
  __typename?: 'inventoryEdge';
  cursor: Scalars['String']['output'];
  node: Inventory;
};

export type InventoryFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<InventoryFilter>>;
  average_cost?: InputMaybe<BigFloatFilter>;
  id?: InputMaybe<UuidFilter>;
  last_transaction_at?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<InventoryFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<InventoryFilter>>;
  product_id?: InputMaybe<UuidFilter>;
  quantity_available?: InputMaybe<BigFloatFilter>;
  quantity_on_hand?: InputMaybe<BigFloatFilter>;
  quantity_reserved?: InputMaybe<BigFloatFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  warehouse_id?: InputMaybe<UuidFilter>;
};

export type InventoryInsertInput = {
  average_cost?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  last_transaction_at?: InputMaybe<Scalars['Datetime']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  quantity_on_hand?: InputMaybe<Scalars['BigFloat']['input']>;
  quantity_reserved?: InputMaybe<Scalars['BigFloat']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  warehouse_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type InventoryInsertResponse = {
  __typename?: 'inventoryInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Inventory>;
};

export type InventoryOrderBy = {
  average_cost?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  last_transaction_at?: InputMaybe<OrderByDirection>;
  product_id?: InputMaybe<OrderByDirection>;
  quantity_available?: InputMaybe<OrderByDirection>;
  quantity_on_hand?: InputMaybe<OrderByDirection>;
  quantity_reserved?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  warehouse_id?: InputMaybe<OrderByDirection>;
};

export type InventoryUpdateInput = {
  average_cost?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  last_transaction_at?: InputMaybe<Scalars['Datetime']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  quantity_on_hand?: InputMaybe<Scalars['BigFloat']['input']>;
  quantity_reserved?: InputMaybe<Scalars['BigFloat']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  warehouse_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type InventoryUpdateResponse = {
  __typename?: 'inventoryUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Inventory>;
};

export type Invoice_Items = Node & {
  __typename?: 'invoice_items';
  account_id: Scalars['UUID']['output'];
  chart_of_accounts?: Maybe<Chart_Of_Accounts>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  description: Scalars['String']['output'];
  discount_amount?: Maybe<Scalars['BigFloat']['output']>;
  discount_percent?: Maybe<Scalars['BigFloat']['output']>;
  id: Scalars['UUID']['output'];
  invoice_id: Scalars['UUID']['output'];
  invoices?: Maybe<Invoices>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  product_id?: Maybe<Scalars['UUID']['output']>;
  products?: Maybe<Products>;
  quantity?: Maybe<Scalars['BigFloat']['output']>;
  tax_amount?: Maybe<Scalars['BigFloat']['output']>;
  tax_percent?: Maybe<Scalars['BigFloat']['output']>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
  total_amount: Scalars['BigFloat']['output'];
  unit_price: Scalars['BigFloat']['output'];
};

export type Invoice_ItemsConnection = {
  __typename?: 'invoice_itemsConnection';
  edges: Array<Invoice_ItemsEdge>;
  pageInfo: PageInfo;
};

export type Invoice_ItemsDeleteResponse = {
  __typename?: 'invoice_itemsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Invoice_Items>;
};

export type Invoice_ItemsEdge = {
  __typename?: 'invoice_itemsEdge';
  cursor: Scalars['String']['output'];
  node: Invoice_Items;
};

export type Invoice_ItemsFilter = {
  account_id?: InputMaybe<UuidFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Invoice_ItemsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  discount_amount?: InputMaybe<BigFloatFilter>;
  discount_percent?: InputMaybe<BigFloatFilter>;
  id?: InputMaybe<UuidFilter>;
  invoice_id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Invoice_ItemsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Invoice_ItemsFilter>>;
  product_id?: InputMaybe<UuidFilter>;
  quantity?: InputMaybe<BigFloatFilter>;
  tax_amount?: InputMaybe<BigFloatFilter>;
  tax_percent?: InputMaybe<BigFloatFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
  total_amount?: InputMaybe<BigFloatFilter>;
  unit_price?: InputMaybe<BigFloatFilter>;
};

export type Invoice_ItemsInsertInput = {
  account_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  discount_percent?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  invoice_id?: InputMaybe<Scalars['UUID']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  quantity?: InputMaybe<Scalars['BigFloat']['input']>;
  tax_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  tax_percent?: InputMaybe<Scalars['BigFloat']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  unit_price?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type Invoice_ItemsInsertResponse = {
  __typename?: 'invoice_itemsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Invoice_Items>;
};

export type Invoice_ItemsOrderBy = {
  account_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  discount_amount?: InputMaybe<OrderByDirection>;
  discount_percent?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  invoice_id?: InputMaybe<OrderByDirection>;
  product_id?: InputMaybe<OrderByDirection>;
  quantity?: InputMaybe<OrderByDirection>;
  tax_amount?: InputMaybe<OrderByDirection>;
  tax_percent?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  total_amount?: InputMaybe<OrderByDirection>;
  unit_price?: InputMaybe<OrderByDirection>;
};

export type Invoice_ItemsUpdateInput = {
  account_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  discount_percent?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  invoice_id?: InputMaybe<Scalars['UUID']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  quantity?: InputMaybe<Scalars['BigFloat']['input']>;
  tax_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  tax_percent?: InputMaybe<Scalars['BigFloat']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  unit_price?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type Invoice_ItemsUpdateResponse = {
  __typename?: 'invoice_itemsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Invoice_Items>;
};

export type Invoices = Node & {
  __typename?: 'invoices';
  app_users?: Maybe<App_Users>;
  approved_at?: Maybe<Scalars['Datetime']['output']>;
  approved_by?: Maybe<Scalars['UUID']['output']>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  created_by?: Maybe<Scalars['UUID']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  customer_id?: Maybe<Scalars['UUID']['output']>;
  customers?: Maybe<Customers>;
  discount_amount?: Maybe<Scalars['BigFloat']['output']>;
  due_date?: Maybe<Scalars['Datetime']['output']>;
  exchange_rate?: Maybe<Scalars['BigFloat']['output']>;
  id: Scalars['UUID']['output'];
  invoice_date: Scalars['Datetime']['output'];
  invoice_itemsCollection?: Maybe<Invoice_ItemsConnection>;
  invoice_number: Scalars['String']['output'];
  invoice_type: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  outstanding_amount?: Maybe<Scalars['BigFloat']['output']>;
  paid_amount?: Maybe<Scalars['BigFloat']['output']>;
  payment_allocationsCollection?: Maybe<Payment_AllocationsConnection>;
  payment_terms?: Maybe<Scalars['Int']['output']>;
  reference_id?: Maybe<Scalars['UUID']['output']>;
  reference_type?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subtotal?: Maybe<Scalars['BigFloat']['output']>;
  supplier_id?: Maybe<Scalars['UUID']['output']>;
  suppliers?: Maybe<Suppliers>;
  tax_amount?: Maybe<Scalars['BigFloat']['output']>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
  total_amount?: Maybe<Scalars['BigFloat']['output']>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type InvoicesInvoice_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Invoice_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Invoice_ItemsOrderBy>>;
};


export type InvoicesPayment_AllocationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Payment_AllocationsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Payment_AllocationsOrderBy>>;
};

export type InvoicesConnection = {
  __typename?: 'invoicesConnection';
  edges: Array<InvoicesEdge>;
  pageInfo: PageInfo;
};

export type InvoicesDeleteResponse = {
  __typename?: 'invoicesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Invoices>;
};

export type InvoicesEdge = {
  __typename?: 'invoicesEdge';
  cursor: Scalars['String']['output'];
  node: Invoices;
};

export type InvoicesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<InvoicesFilter>>;
  approved_at?: InputMaybe<DatetimeFilter>;
  approved_by?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  created_by?: InputMaybe<UuidFilter>;
  currency?: InputMaybe<StringFilter>;
  customer_id?: InputMaybe<UuidFilter>;
  discount_amount?: InputMaybe<BigFloatFilter>;
  due_date?: InputMaybe<DatetimeFilter>;
  exchange_rate?: InputMaybe<BigFloatFilter>;
  id?: InputMaybe<UuidFilter>;
  invoice_date?: InputMaybe<DatetimeFilter>;
  invoice_number?: InputMaybe<StringFilter>;
  invoice_type?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<InvoicesFilter>;
  notes?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<InvoicesFilter>>;
  outstanding_amount?: InputMaybe<BigFloatFilter>;
  paid_amount?: InputMaybe<BigFloatFilter>;
  payment_terms?: InputMaybe<IntFilter>;
  reference_id?: InputMaybe<UuidFilter>;
  reference_type?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  subtotal?: InputMaybe<BigFloatFilter>;
  supplier_id?: InputMaybe<UuidFilter>;
  tax_amount?: InputMaybe<BigFloatFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
  total_amount?: InputMaybe<BigFloatFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type InvoicesInsertInput = {
  approved_at?: InputMaybe<Scalars['Datetime']['input']>;
  approved_by?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  created_by?: InputMaybe<Scalars['UUID']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  customer_id?: InputMaybe<Scalars['UUID']['input']>;
  discount_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  due_date?: InputMaybe<Scalars['Datetime']['input']>;
  exchange_rate?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  invoice_date?: InputMaybe<Scalars['Datetime']['input']>;
  invoice_number?: InputMaybe<Scalars['String']['input']>;
  invoice_type?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  paid_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  payment_terms?: InputMaybe<Scalars['Int']['input']>;
  reference_id?: InputMaybe<Scalars['UUID']['input']>;
  reference_type?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subtotal?: InputMaybe<Scalars['BigFloat']['input']>;
  supplier_id?: InputMaybe<Scalars['UUID']['input']>;
  tax_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type InvoicesInsertResponse = {
  __typename?: 'invoicesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Invoices>;
};

export type InvoicesOrderBy = {
  approved_at?: InputMaybe<OrderByDirection>;
  approved_by?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  created_by?: InputMaybe<OrderByDirection>;
  currency?: InputMaybe<OrderByDirection>;
  customer_id?: InputMaybe<OrderByDirection>;
  discount_amount?: InputMaybe<OrderByDirection>;
  due_date?: InputMaybe<OrderByDirection>;
  exchange_rate?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  invoice_date?: InputMaybe<OrderByDirection>;
  invoice_number?: InputMaybe<OrderByDirection>;
  invoice_type?: InputMaybe<OrderByDirection>;
  notes?: InputMaybe<OrderByDirection>;
  outstanding_amount?: InputMaybe<OrderByDirection>;
  paid_amount?: InputMaybe<OrderByDirection>;
  payment_terms?: InputMaybe<OrderByDirection>;
  reference_id?: InputMaybe<OrderByDirection>;
  reference_type?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  subtotal?: InputMaybe<OrderByDirection>;
  supplier_id?: InputMaybe<OrderByDirection>;
  tax_amount?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  total_amount?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type InvoicesUpdateInput = {
  approved_at?: InputMaybe<Scalars['Datetime']['input']>;
  approved_by?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  created_by?: InputMaybe<Scalars['UUID']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  customer_id?: InputMaybe<Scalars['UUID']['input']>;
  discount_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  due_date?: InputMaybe<Scalars['Datetime']['input']>;
  exchange_rate?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  invoice_date?: InputMaybe<Scalars['Datetime']['input']>;
  invoice_number?: InputMaybe<Scalars['String']['input']>;
  invoice_type?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  paid_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  payment_terms?: InputMaybe<Scalars['Int']['input']>;
  reference_id?: InputMaybe<Scalars['UUID']['input']>;
  reference_type?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subtotal?: InputMaybe<Scalars['BigFloat']['input']>;
  supplier_id?: InputMaybe<Scalars['UUID']['input']>;
  tax_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type InvoicesUpdateResponse = {
  __typename?: 'invoicesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Invoices>;
};

export type Journal_Entries = Node & {
  __typename?: 'journal_entries';
  app_users?: Maybe<App_Users>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  created_by?: Maybe<Scalars['UUID']['output']>;
  description: Scalars['String']['output'];
  entry_date: Scalars['Datetime']['output'];
  entry_number: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  journal_entry_linesCollection?: Maybe<Journal_Entry_LinesConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  posted_at?: Maybe<Scalars['Datetime']['output']>;
  posted_by?: Maybe<Scalars['UUID']['output']>;
  reference_id?: Maybe<Scalars['UUID']['output']>;
  reference_type?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
  total_credit?: Maybe<Scalars['BigFloat']['output']>;
  total_debit?: Maybe<Scalars['BigFloat']['output']>;
};


export type Journal_EntriesJournal_Entry_LinesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Journal_Entry_LinesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Journal_Entry_LinesOrderBy>>;
};

export type Journal_EntriesConnection = {
  __typename?: 'journal_entriesConnection';
  edges: Array<Journal_EntriesEdge>;
  pageInfo: PageInfo;
};

export type Journal_EntriesDeleteResponse = {
  __typename?: 'journal_entriesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Journal_Entries>;
};

export type Journal_EntriesEdge = {
  __typename?: 'journal_entriesEdge';
  cursor: Scalars['String']['output'];
  node: Journal_Entries;
};

export type Journal_EntriesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Journal_EntriesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  created_by?: InputMaybe<UuidFilter>;
  description?: InputMaybe<StringFilter>;
  entry_date?: InputMaybe<DatetimeFilter>;
  entry_number?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Journal_EntriesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Journal_EntriesFilter>>;
  posted_at?: InputMaybe<DatetimeFilter>;
  posted_by?: InputMaybe<UuidFilter>;
  reference_id?: InputMaybe<UuidFilter>;
  reference_type?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
  total_credit?: InputMaybe<BigFloatFilter>;
  total_debit?: InputMaybe<BigFloatFilter>;
};

export type Journal_EntriesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  created_by?: InputMaybe<Scalars['UUID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  entry_date?: InputMaybe<Scalars['Datetime']['input']>;
  entry_number?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  posted_at?: InputMaybe<Scalars['Datetime']['input']>;
  posted_by?: InputMaybe<Scalars['UUID']['input']>;
  reference_id?: InputMaybe<Scalars['UUID']['input']>;
  reference_type?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_credit?: InputMaybe<Scalars['BigFloat']['input']>;
  total_debit?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type Journal_EntriesInsertResponse = {
  __typename?: 'journal_entriesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Journal_Entries>;
};

export type Journal_EntriesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  created_by?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  entry_date?: InputMaybe<OrderByDirection>;
  entry_number?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  posted_at?: InputMaybe<OrderByDirection>;
  posted_by?: InputMaybe<OrderByDirection>;
  reference_id?: InputMaybe<OrderByDirection>;
  reference_type?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  total_credit?: InputMaybe<OrderByDirection>;
  total_debit?: InputMaybe<OrderByDirection>;
};

export type Journal_EntriesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  created_by?: InputMaybe<Scalars['UUID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  entry_date?: InputMaybe<Scalars['Datetime']['input']>;
  entry_number?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  posted_at?: InputMaybe<Scalars['Datetime']['input']>;
  posted_by?: InputMaybe<Scalars['UUID']['input']>;
  reference_id?: InputMaybe<Scalars['UUID']['input']>;
  reference_type?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_credit?: InputMaybe<Scalars['BigFloat']['input']>;
  total_debit?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type Journal_EntriesUpdateResponse = {
  __typename?: 'journal_entriesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Journal_Entries>;
};

export type Journal_Entry_Lines = Node & {
  __typename?: 'journal_entry_lines';
  account_id: Scalars['UUID']['output'];
  chart_of_accounts?: Maybe<Chart_Of_Accounts>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  credit_amount?: Maybe<Scalars['BigFloat']['output']>;
  debit_amount?: Maybe<Scalars['BigFloat']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  journal_entries?: Maybe<Journal_Entries>;
  journal_entry_id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
};

export type Journal_Entry_LinesConnection = {
  __typename?: 'journal_entry_linesConnection';
  edges: Array<Journal_Entry_LinesEdge>;
  pageInfo: PageInfo;
};

export type Journal_Entry_LinesDeleteResponse = {
  __typename?: 'journal_entry_linesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Journal_Entry_Lines>;
};

export type Journal_Entry_LinesEdge = {
  __typename?: 'journal_entry_linesEdge';
  cursor: Scalars['String']['output'];
  node: Journal_Entry_Lines;
};

export type Journal_Entry_LinesFilter = {
  account_id?: InputMaybe<UuidFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Journal_Entry_LinesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  credit_amount?: InputMaybe<BigFloatFilter>;
  debit_amount?: InputMaybe<BigFloatFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  journal_entry_id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Journal_Entry_LinesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Journal_Entry_LinesFilter>>;
  tenant_id?: InputMaybe<UuidFilter>;
};

export type Journal_Entry_LinesInsertInput = {
  account_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  credit_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  debit_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  journal_entry_id?: InputMaybe<Scalars['UUID']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Journal_Entry_LinesInsertResponse = {
  __typename?: 'journal_entry_linesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Journal_Entry_Lines>;
};

export type Journal_Entry_LinesOrderBy = {
  account_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  credit_amount?: InputMaybe<OrderByDirection>;
  debit_amount?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  journal_entry_id?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
};

export type Journal_Entry_LinesUpdateInput = {
  account_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  credit_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  debit_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  journal_entry_id?: InputMaybe<Scalars['UUID']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Journal_Entry_LinesUpdateResponse = {
  __typename?: 'journal_entry_linesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Journal_Entry_Lines>;
};

export type Payment_Allocations = Node & {
  __typename?: 'payment_allocations';
  allocated_amount: Scalars['BigFloat']['output'];
  created_at?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  invoice_id: Scalars['UUID']['output'];
  invoices?: Maybe<Invoices>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  payment_id: Scalars['UUID']['output'];
  payments?: Maybe<Payments>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
};

export type Payment_AllocationsConnection = {
  __typename?: 'payment_allocationsConnection';
  edges: Array<Payment_AllocationsEdge>;
  pageInfo: PageInfo;
};

export type Payment_AllocationsDeleteResponse = {
  __typename?: 'payment_allocationsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Payment_Allocations>;
};

export type Payment_AllocationsEdge = {
  __typename?: 'payment_allocationsEdge';
  cursor: Scalars['String']['output'];
  node: Payment_Allocations;
};

export type Payment_AllocationsFilter = {
  allocated_amount?: InputMaybe<BigFloatFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Payment_AllocationsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  invoice_id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Payment_AllocationsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Payment_AllocationsFilter>>;
  payment_id?: InputMaybe<UuidFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
};

export type Payment_AllocationsInsertInput = {
  allocated_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  invoice_id?: InputMaybe<Scalars['UUID']['input']>;
  payment_id?: InputMaybe<Scalars['UUID']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Payment_AllocationsInsertResponse = {
  __typename?: 'payment_allocationsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Payment_Allocations>;
};

export type Payment_AllocationsOrderBy = {
  allocated_amount?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  invoice_id?: InputMaybe<OrderByDirection>;
  payment_id?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
};

export type Payment_AllocationsUpdateInput = {
  allocated_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  invoice_id?: InputMaybe<Scalars['UUID']['input']>;
  payment_id?: InputMaybe<Scalars['UUID']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Payment_AllocationsUpdateResponse = {
  __typename?: 'payment_allocationsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Payment_Allocations>;
};

export type Payments = Node & {
  __typename?: 'payments';
  amount: Scalars['BigFloat']['output'];
  app_users?: Maybe<App_Users>;
  approved_at?: Maybe<Scalars['Datetime']['output']>;
  approved_by?: Maybe<Scalars['UUID']['output']>;
  bank_account_id?: Maybe<Scalars['UUID']['output']>;
  bank_accounts?: Maybe<Bank_Accounts>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  created_by?: Maybe<Scalars['UUID']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  customer_id?: Maybe<Scalars['UUID']['output']>;
  customers?: Maybe<Customers>;
  exchange_rate?: Maybe<Scalars['BigFloat']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  payment_allocationsCollection?: Maybe<Payment_AllocationsConnection>;
  payment_date: Scalars['Datetime']['output'];
  payment_method: Scalars['String']['output'];
  payment_number: Scalars['String']['output'];
  payment_type: Scalars['String']['output'];
  reference_number?: Maybe<Scalars['String']['output']>;
  supplier_id?: Maybe<Scalars['UUID']['output']>;
  suppliers?: Maybe<Suppliers>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type PaymentsPayment_AllocationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Payment_AllocationsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Payment_AllocationsOrderBy>>;
};

export type PaymentsConnection = {
  __typename?: 'paymentsConnection';
  edges: Array<PaymentsEdge>;
  pageInfo: PageInfo;
};

export type PaymentsDeleteResponse = {
  __typename?: 'paymentsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Payments>;
};

export type PaymentsEdge = {
  __typename?: 'paymentsEdge';
  cursor: Scalars['String']['output'];
  node: Payments;
};

export type PaymentsFilter = {
  amount?: InputMaybe<BigFloatFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<PaymentsFilter>>;
  approved_at?: InputMaybe<DatetimeFilter>;
  approved_by?: InputMaybe<UuidFilter>;
  bank_account_id?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  created_by?: InputMaybe<UuidFilter>;
  currency?: InputMaybe<StringFilter>;
  customer_id?: InputMaybe<UuidFilter>;
  exchange_rate?: InputMaybe<BigFloatFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<PaymentsFilter>;
  notes?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<PaymentsFilter>>;
  payment_date?: InputMaybe<DatetimeFilter>;
  payment_method?: InputMaybe<StringFilter>;
  payment_number?: InputMaybe<StringFilter>;
  payment_type?: InputMaybe<StringFilter>;
  reference_number?: InputMaybe<StringFilter>;
  supplier_id?: InputMaybe<UuidFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type PaymentsInsertInput = {
  amount?: InputMaybe<Scalars['BigFloat']['input']>;
  approved_at?: InputMaybe<Scalars['Datetime']['input']>;
  approved_by?: InputMaybe<Scalars['UUID']['input']>;
  bank_account_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  created_by?: InputMaybe<Scalars['UUID']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  customer_id?: InputMaybe<Scalars['UUID']['input']>;
  exchange_rate?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  payment_date?: InputMaybe<Scalars['Datetime']['input']>;
  payment_method?: InputMaybe<Scalars['String']['input']>;
  payment_number?: InputMaybe<Scalars['String']['input']>;
  payment_type?: InputMaybe<Scalars['String']['input']>;
  reference_number?: InputMaybe<Scalars['String']['input']>;
  supplier_id?: InputMaybe<Scalars['UUID']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PaymentsInsertResponse = {
  __typename?: 'paymentsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Payments>;
};

export type PaymentsOrderBy = {
  amount?: InputMaybe<OrderByDirection>;
  approved_at?: InputMaybe<OrderByDirection>;
  approved_by?: InputMaybe<OrderByDirection>;
  bank_account_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  created_by?: InputMaybe<OrderByDirection>;
  currency?: InputMaybe<OrderByDirection>;
  customer_id?: InputMaybe<OrderByDirection>;
  exchange_rate?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  notes?: InputMaybe<OrderByDirection>;
  payment_date?: InputMaybe<OrderByDirection>;
  payment_method?: InputMaybe<OrderByDirection>;
  payment_number?: InputMaybe<OrderByDirection>;
  payment_type?: InputMaybe<OrderByDirection>;
  reference_number?: InputMaybe<OrderByDirection>;
  supplier_id?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type PaymentsUpdateInput = {
  amount?: InputMaybe<Scalars['BigFloat']['input']>;
  approved_at?: InputMaybe<Scalars['Datetime']['input']>;
  approved_by?: InputMaybe<Scalars['UUID']['input']>;
  bank_account_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  created_by?: InputMaybe<Scalars['UUID']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  customer_id?: InputMaybe<Scalars['UUID']['input']>;
  exchange_rate?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  payment_date?: InputMaybe<Scalars['Datetime']['input']>;
  payment_method?: InputMaybe<Scalars['String']['input']>;
  payment_number?: InputMaybe<Scalars['String']['input']>;
  payment_type?: InputMaybe<Scalars['String']['input']>;
  reference_number?: InputMaybe<Scalars['String']['input']>;
  supplier_id?: InputMaybe<Scalars['UUID']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PaymentsUpdateResponse = {
  __typename?: 'paymentsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Payments>;
};

export type Permissions = Node & {
  __typename?: 'permissions';
  created_at?: Maybe<Scalars['Datetime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  role_permissionsCollection?: Maybe<Role_PermissionsConnection>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type PermissionsRole_PermissionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Role_PermissionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Role_PermissionsOrderBy>>;
};

export type PermissionsConnection = {
  __typename?: 'permissionsConnection';
  edges: Array<PermissionsEdge>;
  pageInfo: PageInfo;
};

export type PermissionsDeleteResponse = {
  __typename?: 'permissionsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Permissions>;
};

export type PermissionsEdge = {
  __typename?: 'permissionsEdge';
  cursor: Scalars['String']['output'];
  node: Permissions;
};

export type PermissionsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<PermissionsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<PermissionsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<PermissionsFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type PermissionsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PermissionsInsertResponse = {
  __typename?: 'permissionsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Permissions>;
};

export type PermissionsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type PermissionsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PermissionsUpdateResponse = {
  __typename?: 'permissionsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Permissions>;
};

export type Product_Categories = Node & {
  __typename?: 'product_categories';
  code: Scalars['String']['output'];
  created_at?: Maybe<Scalars['Datetime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  parent_id?: Maybe<Scalars['UUID']['output']>;
  product_categories?: Maybe<Product_Categories>;
  product_categoriesCollection?: Maybe<Product_CategoriesConnection>;
  productsCollection?: Maybe<ProductsConnection>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
};


export type Product_CategoriesProduct_CategoriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Product_CategoriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Product_CategoriesOrderBy>>;
};


export type Product_CategoriesProductsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

export type Product_CategoriesConnection = {
  __typename?: 'product_categoriesConnection';
  edges: Array<Product_CategoriesEdge>;
  pageInfo: PageInfo;
};

export type Product_CategoriesDeleteResponse = {
  __typename?: 'product_categoriesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Product_Categories>;
};

export type Product_CategoriesEdge = {
  __typename?: 'product_categoriesEdge';
  cursor: Scalars['String']['output'];
  node: Product_Categories;
};

export type Product_CategoriesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Product_CategoriesFilter>>;
  code?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  is_active?: InputMaybe<BooleanFilter>;
  level?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Product_CategoriesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Product_CategoriesFilter>>;
  parent_id?: InputMaybe<UuidFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
};

export type Product_CategoriesInsertInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['UUID']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Product_CategoriesInsertResponse = {
  __typename?: 'product_categoriesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Product_Categories>;
};

export type Product_CategoriesOrderBy = {
  code?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_active?: InputMaybe<OrderByDirection>;
  level?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  parent_id?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
};

export type Product_CategoriesUpdateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['UUID']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Product_CategoriesUpdateResponse = {
  __typename?: 'product_categoriesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Product_Categories>;
};

export type Products = Node & {
  __typename?: 'products';
  barcode?: Maybe<Scalars['String']['output']>;
  brand?: Maybe<Scalars['String']['output']>;
  category_id?: Maybe<Scalars['UUID']['output']>;
  cost_price?: Maybe<Scalars['BigFloat']['output']>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  delivery_itemsCollection?: Maybe<Delivery_ItemsConnection>;
  description?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<Scalars['String']['output']>;
  goods_receipt_itemsCollection?: Maybe<Goods_Receipt_ItemsConnection>;
  id: Scalars['UUID']['output'];
  image_url?: Maybe<Scalars['String']['output']>;
  inventoryCollection?: Maybe<InventoryConnection>;
  invoice_itemsCollection?: Maybe<Invoice_ItemsConnection>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  maximum_stock?: Maybe<Scalars['BigFloat']['output']>;
  minimum_stock?: Maybe<Scalars['BigFloat']['output']>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  product_categories?: Maybe<Product_Categories>;
  product_type?: Maybe<Scalars['String']['output']>;
  purchase_order_itemsCollection?: Maybe<Purchase_Order_ItemsConnection>;
  reorder_point?: Maybe<Scalars['BigFloat']['output']>;
  sales_order_itemsCollection?: Maybe<Sales_Order_ItemsConnection>;
  selling_price?: Maybe<Scalars['BigFloat']['output']>;
  sku: Scalars['String']['output'];
  stock_movementsCollection?: Maybe<Stock_MovementsConnection>;
  tax_rate?: Maybe<Scalars['BigFloat']['output']>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
  unit_of_measure_id: Scalars['UUID']['output'];
  unit_of_measures?: Maybe<Unit_Of_Measures>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
  warranty_period?: Maybe<Scalars['Int']['output']>;
  weight?: Maybe<Scalars['BigFloat']['output']>;
};


export type ProductsDelivery_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Delivery_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Delivery_ItemsOrderBy>>;
};


export type ProductsGoods_Receipt_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Goods_Receipt_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Goods_Receipt_ItemsOrderBy>>;
};


export type ProductsInventoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<InventoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InventoryOrderBy>>;
};


export type ProductsInvoice_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Invoice_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Invoice_ItemsOrderBy>>;
};


export type ProductsPurchase_Order_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Purchase_Order_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Purchase_Order_ItemsOrderBy>>;
};


export type ProductsSales_Order_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Sales_Order_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Sales_Order_ItemsOrderBy>>;
};


export type ProductsStock_MovementsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Stock_MovementsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Stock_MovementsOrderBy>>;
};

export type ProductsConnection = {
  __typename?: 'productsConnection';
  edges: Array<ProductsEdge>;
  pageInfo: PageInfo;
};

export type ProductsDeleteResponse = {
  __typename?: 'productsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Products>;
};

export type ProductsEdge = {
  __typename?: 'productsEdge';
  cursor: Scalars['String']['output'];
  node: Products;
};

export type ProductsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProductsFilter>>;
  barcode?: InputMaybe<StringFilter>;
  brand?: InputMaybe<StringFilter>;
  category_id?: InputMaybe<UuidFilter>;
  cost_price?: InputMaybe<BigFloatFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  dimensions?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  image_url?: InputMaybe<StringFilter>;
  is_active?: InputMaybe<BooleanFilter>;
  maximum_stock?: InputMaybe<BigFloatFilter>;
  minimum_stock?: InputMaybe<BigFloatFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProductsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProductsFilter>>;
  product_type?: InputMaybe<StringFilter>;
  reorder_point?: InputMaybe<BigFloatFilter>;
  selling_price?: InputMaybe<BigFloatFilter>;
  sku?: InputMaybe<StringFilter>;
  tax_rate?: InputMaybe<BigFloatFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
  unit_of_measure_id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  warranty_period?: InputMaybe<IntFilter>;
  weight?: InputMaybe<BigFloatFilter>;
};

export type ProductsInsertInput = {
  barcode?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<Scalars['UUID']['input']>;
  cost_price?: InputMaybe<Scalars['BigFloat']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dimensions?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  maximum_stock?: InputMaybe<Scalars['BigFloat']['input']>;
  minimum_stock?: InputMaybe<Scalars['BigFloat']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product_type?: InputMaybe<Scalars['String']['input']>;
  reorder_point?: InputMaybe<Scalars['BigFloat']['input']>;
  selling_price?: InputMaybe<Scalars['BigFloat']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  tax_rate?: InputMaybe<Scalars['BigFloat']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  unit_of_measure_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  warranty_period?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type ProductsInsertResponse = {
  __typename?: 'productsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Products>;
};

export type ProductsOrderBy = {
  barcode?: InputMaybe<OrderByDirection>;
  brand?: InputMaybe<OrderByDirection>;
  category_id?: InputMaybe<OrderByDirection>;
  cost_price?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  dimensions?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  image_url?: InputMaybe<OrderByDirection>;
  is_active?: InputMaybe<OrderByDirection>;
  maximum_stock?: InputMaybe<OrderByDirection>;
  minimum_stock?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  product_type?: InputMaybe<OrderByDirection>;
  reorder_point?: InputMaybe<OrderByDirection>;
  selling_price?: InputMaybe<OrderByDirection>;
  sku?: InputMaybe<OrderByDirection>;
  tax_rate?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  unit_of_measure_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  warranty_period?: InputMaybe<OrderByDirection>;
  weight?: InputMaybe<OrderByDirection>;
};

export type ProductsUpdateInput = {
  barcode?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<Scalars['UUID']['input']>;
  cost_price?: InputMaybe<Scalars['BigFloat']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dimensions?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  maximum_stock?: InputMaybe<Scalars['BigFloat']['input']>;
  minimum_stock?: InputMaybe<Scalars['BigFloat']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product_type?: InputMaybe<Scalars['String']['input']>;
  reorder_point?: InputMaybe<Scalars['BigFloat']['input']>;
  selling_price?: InputMaybe<Scalars['BigFloat']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  tax_rate?: InputMaybe<Scalars['BigFloat']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  unit_of_measure_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  warranty_period?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type ProductsUpdateResponse = {
  __typename?: 'productsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Products>;
};

export type Purchase_Order_Items = Node & {
  __typename?: 'purchase_order_items';
  created_at?: Maybe<Scalars['Datetime']['output']>;
  discount_amount?: Maybe<Scalars['BigFloat']['output']>;
  discount_percent?: Maybe<Scalars['BigFloat']['output']>;
  goods_receipt_itemsCollection?: Maybe<Goods_Receipt_ItemsConnection>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  product_id: Scalars['UUID']['output'];
  products?: Maybe<Products>;
  purchase_order_id: Scalars['UUID']['output'];
  purchase_orders?: Maybe<Purchase_Orders>;
  quantity: Scalars['BigFloat']['output'];
  quantity_received?: Maybe<Scalars['BigFloat']['output']>;
  tax_amount?: Maybe<Scalars['BigFloat']['output']>;
  tax_percent?: Maybe<Scalars['BigFloat']['output']>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
  total_amount: Scalars['BigFloat']['output'];
  unit_price: Scalars['BigFloat']['output'];
};


export type Purchase_Order_ItemsGoods_Receipt_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Goods_Receipt_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Goods_Receipt_ItemsOrderBy>>;
};

export type Purchase_Order_ItemsConnection = {
  __typename?: 'purchase_order_itemsConnection';
  edges: Array<Purchase_Order_ItemsEdge>;
  pageInfo: PageInfo;
};

export type Purchase_Order_ItemsDeleteResponse = {
  __typename?: 'purchase_order_itemsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Purchase_Order_Items>;
};

export type Purchase_Order_ItemsEdge = {
  __typename?: 'purchase_order_itemsEdge';
  cursor: Scalars['String']['output'];
  node: Purchase_Order_Items;
};

export type Purchase_Order_ItemsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Purchase_Order_ItemsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  discount_amount?: InputMaybe<BigFloatFilter>;
  discount_percent?: InputMaybe<BigFloatFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Purchase_Order_ItemsFilter>;
  notes?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Purchase_Order_ItemsFilter>>;
  product_id?: InputMaybe<UuidFilter>;
  purchase_order_id?: InputMaybe<UuidFilter>;
  quantity?: InputMaybe<BigFloatFilter>;
  quantity_received?: InputMaybe<BigFloatFilter>;
  tax_amount?: InputMaybe<BigFloatFilter>;
  tax_percent?: InputMaybe<BigFloatFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
  total_amount?: InputMaybe<BigFloatFilter>;
  unit_price?: InputMaybe<BigFloatFilter>;
};

export type Purchase_Order_ItemsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  discount_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  discount_percent?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  purchase_order_id?: InputMaybe<Scalars['UUID']['input']>;
  quantity?: InputMaybe<Scalars['BigFloat']['input']>;
  quantity_received?: InputMaybe<Scalars['BigFloat']['input']>;
  tax_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  tax_percent?: InputMaybe<Scalars['BigFloat']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  unit_price?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type Purchase_Order_ItemsInsertResponse = {
  __typename?: 'purchase_order_itemsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Purchase_Order_Items>;
};

export type Purchase_Order_ItemsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  discount_amount?: InputMaybe<OrderByDirection>;
  discount_percent?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  notes?: InputMaybe<OrderByDirection>;
  product_id?: InputMaybe<OrderByDirection>;
  purchase_order_id?: InputMaybe<OrderByDirection>;
  quantity?: InputMaybe<OrderByDirection>;
  quantity_received?: InputMaybe<OrderByDirection>;
  tax_amount?: InputMaybe<OrderByDirection>;
  tax_percent?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  total_amount?: InputMaybe<OrderByDirection>;
  unit_price?: InputMaybe<OrderByDirection>;
};

export type Purchase_Order_ItemsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  discount_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  discount_percent?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  purchase_order_id?: InputMaybe<Scalars['UUID']['input']>;
  quantity?: InputMaybe<Scalars['BigFloat']['input']>;
  quantity_received?: InputMaybe<Scalars['BigFloat']['input']>;
  tax_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  tax_percent?: InputMaybe<Scalars['BigFloat']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  unit_price?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type Purchase_Order_ItemsUpdateResponse = {
  __typename?: 'purchase_order_itemsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Purchase_Order_Items>;
};

export type Purchase_Orders = Node & {
  __typename?: 'purchase_orders';
  app_users?: Maybe<App_Users>;
  approved_at?: Maybe<Scalars['Datetime']['output']>;
  approved_by?: Maybe<Scalars['UUID']['output']>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  created_by?: Maybe<Scalars['UUID']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  discount_amount?: Maybe<Scalars['BigFloat']['output']>;
  exchange_rate?: Maybe<Scalars['BigFloat']['output']>;
  expected_date?: Maybe<Scalars['Datetime']['output']>;
  goods_receiptsCollection?: Maybe<Goods_ReceiptsConnection>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  order_date: Scalars['Datetime']['output'];
  payment_terms?: Maybe<Scalars['Int']['output']>;
  po_number: Scalars['String']['output'];
  purchase_order_itemsCollection?: Maybe<Purchase_Order_ItemsConnection>;
  status?: Maybe<Scalars['String']['output']>;
  subtotal?: Maybe<Scalars['BigFloat']['output']>;
  supplier_id: Scalars['UUID']['output'];
  suppliers?: Maybe<Suppliers>;
  tax_amount?: Maybe<Scalars['BigFloat']['output']>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
  total_amount?: Maybe<Scalars['BigFloat']['output']>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
  warehouse_id?: Maybe<Scalars['UUID']['output']>;
  warehouses?: Maybe<Warehouses>;
};


export type Purchase_OrdersGoods_ReceiptsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Goods_ReceiptsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Goods_ReceiptsOrderBy>>;
};


export type Purchase_OrdersPurchase_Order_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Purchase_Order_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Purchase_Order_ItemsOrderBy>>;
};

export type Purchase_OrdersConnection = {
  __typename?: 'purchase_ordersConnection';
  edges: Array<Purchase_OrdersEdge>;
  pageInfo: PageInfo;
};

export type Purchase_OrdersDeleteResponse = {
  __typename?: 'purchase_ordersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Purchase_Orders>;
};

export type Purchase_OrdersEdge = {
  __typename?: 'purchase_ordersEdge';
  cursor: Scalars['String']['output'];
  node: Purchase_Orders;
};

export type Purchase_OrdersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Purchase_OrdersFilter>>;
  approved_at?: InputMaybe<DatetimeFilter>;
  approved_by?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  created_by?: InputMaybe<UuidFilter>;
  currency?: InputMaybe<StringFilter>;
  discount_amount?: InputMaybe<BigFloatFilter>;
  exchange_rate?: InputMaybe<BigFloatFilter>;
  expected_date?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Purchase_OrdersFilter>;
  notes?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Purchase_OrdersFilter>>;
  order_date?: InputMaybe<DatetimeFilter>;
  payment_terms?: InputMaybe<IntFilter>;
  po_number?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  subtotal?: InputMaybe<BigFloatFilter>;
  supplier_id?: InputMaybe<UuidFilter>;
  tax_amount?: InputMaybe<BigFloatFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
  total_amount?: InputMaybe<BigFloatFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  warehouse_id?: InputMaybe<UuidFilter>;
};

export type Purchase_OrdersInsertInput = {
  approved_at?: InputMaybe<Scalars['Datetime']['input']>;
  approved_by?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  created_by?: InputMaybe<Scalars['UUID']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  discount_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  exchange_rate?: InputMaybe<Scalars['BigFloat']['input']>;
  expected_date?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  order_date?: InputMaybe<Scalars['Datetime']['input']>;
  payment_terms?: InputMaybe<Scalars['Int']['input']>;
  po_number?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subtotal?: InputMaybe<Scalars['BigFloat']['input']>;
  supplier_id?: InputMaybe<Scalars['UUID']['input']>;
  tax_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  warehouse_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Purchase_OrdersInsertResponse = {
  __typename?: 'purchase_ordersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Purchase_Orders>;
};

export type Purchase_OrdersOrderBy = {
  approved_at?: InputMaybe<OrderByDirection>;
  approved_by?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  created_by?: InputMaybe<OrderByDirection>;
  currency?: InputMaybe<OrderByDirection>;
  discount_amount?: InputMaybe<OrderByDirection>;
  exchange_rate?: InputMaybe<OrderByDirection>;
  expected_date?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  notes?: InputMaybe<OrderByDirection>;
  order_date?: InputMaybe<OrderByDirection>;
  payment_terms?: InputMaybe<OrderByDirection>;
  po_number?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  subtotal?: InputMaybe<OrderByDirection>;
  supplier_id?: InputMaybe<OrderByDirection>;
  tax_amount?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  total_amount?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  warehouse_id?: InputMaybe<OrderByDirection>;
};

export type Purchase_OrdersUpdateInput = {
  approved_at?: InputMaybe<Scalars['Datetime']['input']>;
  approved_by?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  created_by?: InputMaybe<Scalars['UUID']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  discount_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  exchange_rate?: InputMaybe<Scalars['BigFloat']['input']>;
  expected_date?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  order_date?: InputMaybe<Scalars['Datetime']['input']>;
  payment_terms?: InputMaybe<Scalars['Int']['input']>;
  po_number?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subtotal?: InputMaybe<Scalars['BigFloat']['input']>;
  supplier_id?: InputMaybe<Scalars['UUID']['input']>;
  tax_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  warehouse_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Purchase_OrdersUpdateResponse = {
  __typename?: 'purchase_ordersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Purchase_Orders>;
};

export type Role_Permissions = Node & {
  __typename?: 'role_permissions';
  created_at?: Maybe<Scalars['Datetime']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  permission_id: Scalars['UUID']['output'];
  permissions: Permissions;
  role_id: Scalars['UUID']['output'];
  roles: Roles;
};

export type Role_PermissionsConnection = {
  __typename?: 'role_permissionsConnection';
  edges: Array<Role_PermissionsEdge>;
  pageInfo: PageInfo;
};

export type Role_PermissionsDeleteResponse = {
  __typename?: 'role_permissionsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Role_Permissions>;
};

export type Role_PermissionsEdge = {
  __typename?: 'role_permissionsEdge';
  cursor: Scalars['String']['output'];
  node: Role_Permissions;
};

export type Role_PermissionsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Role_PermissionsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Role_PermissionsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Role_PermissionsFilter>>;
  permission_id?: InputMaybe<UuidFilter>;
  role_id?: InputMaybe<UuidFilter>;
};

export type Role_PermissionsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  permission_id?: InputMaybe<Scalars['UUID']['input']>;
  role_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Role_PermissionsInsertResponse = {
  __typename?: 'role_permissionsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Role_Permissions>;
};

export type Role_PermissionsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  permission_id?: InputMaybe<OrderByDirection>;
  role_id?: InputMaybe<OrderByDirection>;
};

export type Role_PermissionsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  permission_id?: InputMaybe<Scalars['UUID']['input']>;
  role_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Role_PermissionsUpdateResponse = {
  __typename?: 'role_permissionsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Role_Permissions>;
};

export type Roles = Node & {
  __typename?: 'roles';
  app_usersCollection?: Maybe<App_UsersConnection>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  role_permissionsCollection?: Maybe<Role_PermissionsConnection>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type RolesApp_UsersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<App_UsersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<App_UsersOrderBy>>;
};


export type RolesRole_PermissionsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Role_PermissionsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Role_PermissionsOrderBy>>;
};

export type RolesConnection = {
  __typename?: 'rolesConnection';
  edges: Array<RolesEdge>;
  pageInfo: PageInfo;
};

export type RolesDeleteResponse = {
  __typename?: 'rolesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Roles>;
};

export type RolesEdge = {
  __typename?: 'rolesEdge';
  cursor: Scalars['String']['output'];
  node: Roles;
};

export type RolesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<RolesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<RolesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<RolesFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type RolesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type RolesInsertResponse = {
  __typename?: 'rolesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Roles>;
};

export type RolesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type RolesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type RolesUpdateResponse = {
  __typename?: 'rolesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Roles>;
};

export type Sales_Order_Items = Node & {
  __typename?: 'sales_order_items';
  created_at?: Maybe<Scalars['Datetime']['output']>;
  delivery_itemsCollection?: Maybe<Delivery_ItemsConnection>;
  discount_amount?: Maybe<Scalars['BigFloat']['output']>;
  discount_percent?: Maybe<Scalars['BigFloat']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  product_id: Scalars['UUID']['output'];
  products?: Maybe<Products>;
  quantity: Scalars['BigFloat']['output'];
  quantity_delivered?: Maybe<Scalars['BigFloat']['output']>;
  sales_order_id: Scalars['UUID']['output'];
  sales_orders?: Maybe<Sales_Orders>;
  tax_amount?: Maybe<Scalars['BigFloat']['output']>;
  tax_percent?: Maybe<Scalars['BigFloat']['output']>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
  total_amount: Scalars['BigFloat']['output'];
  unit_price: Scalars['BigFloat']['output'];
};


export type Sales_Order_ItemsDelivery_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Delivery_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Delivery_ItemsOrderBy>>;
};

export type Sales_Order_ItemsConnection = {
  __typename?: 'sales_order_itemsConnection';
  edges: Array<Sales_Order_ItemsEdge>;
  pageInfo: PageInfo;
};

export type Sales_Order_ItemsDeleteResponse = {
  __typename?: 'sales_order_itemsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Sales_Order_Items>;
};

export type Sales_Order_ItemsEdge = {
  __typename?: 'sales_order_itemsEdge';
  cursor: Scalars['String']['output'];
  node: Sales_Order_Items;
};

export type Sales_Order_ItemsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Sales_Order_ItemsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  discount_amount?: InputMaybe<BigFloatFilter>;
  discount_percent?: InputMaybe<BigFloatFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Sales_Order_ItemsFilter>;
  notes?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Sales_Order_ItemsFilter>>;
  product_id?: InputMaybe<UuidFilter>;
  quantity?: InputMaybe<BigFloatFilter>;
  quantity_delivered?: InputMaybe<BigFloatFilter>;
  sales_order_id?: InputMaybe<UuidFilter>;
  tax_amount?: InputMaybe<BigFloatFilter>;
  tax_percent?: InputMaybe<BigFloatFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
  total_amount?: InputMaybe<BigFloatFilter>;
  unit_price?: InputMaybe<BigFloatFilter>;
};

export type Sales_Order_ItemsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  discount_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  discount_percent?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  quantity?: InputMaybe<Scalars['BigFloat']['input']>;
  quantity_delivered?: InputMaybe<Scalars['BigFloat']['input']>;
  sales_order_id?: InputMaybe<Scalars['UUID']['input']>;
  tax_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  tax_percent?: InputMaybe<Scalars['BigFloat']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  unit_price?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type Sales_Order_ItemsInsertResponse = {
  __typename?: 'sales_order_itemsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Sales_Order_Items>;
};

export type Sales_Order_ItemsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  discount_amount?: InputMaybe<OrderByDirection>;
  discount_percent?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  notes?: InputMaybe<OrderByDirection>;
  product_id?: InputMaybe<OrderByDirection>;
  quantity?: InputMaybe<OrderByDirection>;
  quantity_delivered?: InputMaybe<OrderByDirection>;
  sales_order_id?: InputMaybe<OrderByDirection>;
  tax_amount?: InputMaybe<OrderByDirection>;
  tax_percent?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  total_amount?: InputMaybe<OrderByDirection>;
  unit_price?: InputMaybe<OrderByDirection>;
};

export type Sales_Order_ItemsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  discount_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  discount_percent?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  quantity?: InputMaybe<Scalars['BigFloat']['input']>;
  quantity_delivered?: InputMaybe<Scalars['BigFloat']['input']>;
  sales_order_id?: InputMaybe<Scalars['UUID']['input']>;
  tax_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  tax_percent?: InputMaybe<Scalars['BigFloat']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  unit_price?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type Sales_Order_ItemsUpdateResponse = {
  __typename?: 'sales_order_itemsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Sales_Order_Items>;
};

export type Sales_Orders = Node & {
  __typename?: 'sales_orders';
  app_users?: Maybe<App_Users>;
  approved_at?: Maybe<Scalars['Datetime']['output']>;
  approved_by?: Maybe<Scalars['UUID']['output']>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  created_by?: Maybe<Scalars['UUID']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  customer_id: Scalars['UUID']['output'];
  customers?: Maybe<Customers>;
  deliveriesCollection?: Maybe<DeliveriesConnection>;
  delivery_date?: Maybe<Scalars['Datetime']['output']>;
  discount_amount?: Maybe<Scalars['BigFloat']['output']>;
  grand_total?: Maybe<Scalars['BigFloat']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  order_date: Scalars['Datetime']['output'];
  order_number: Scalars['String']['output'];
  payment_terms?: Maybe<Scalars['Int']['output']>;
  sales_order_itemsCollection?: Maybe<Sales_Order_ItemsConnection>;
  sales_person?: Maybe<Scalars['UUID']['output']>;
  shipping_address?: Maybe<Scalars['String']['output']>;
  shipping_cost?: Maybe<Scalars['BigFloat']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subtotal?: Maybe<Scalars['BigFloat']['output']>;
  tax_amount?: Maybe<Scalars['BigFloat']['output']>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
  total_amount?: Maybe<Scalars['BigFloat']['output']>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
  warehouse_id?: Maybe<Scalars['UUID']['output']>;
  warehouses?: Maybe<Warehouses>;
};


export type Sales_OrdersDeliveriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<DeliveriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DeliveriesOrderBy>>;
};


export type Sales_OrdersSales_Order_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Sales_Order_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Sales_Order_ItemsOrderBy>>;
};

export type Sales_OrdersConnection = {
  __typename?: 'sales_ordersConnection';
  edges: Array<Sales_OrdersEdge>;
  pageInfo: PageInfo;
};

export type Sales_OrdersDeleteResponse = {
  __typename?: 'sales_ordersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Sales_Orders>;
};

export type Sales_OrdersEdge = {
  __typename?: 'sales_ordersEdge';
  cursor: Scalars['String']['output'];
  node: Sales_Orders;
};

export type Sales_OrdersFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Sales_OrdersFilter>>;
  approved_at?: InputMaybe<DatetimeFilter>;
  approved_by?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  created_by?: InputMaybe<UuidFilter>;
  currency?: InputMaybe<StringFilter>;
  customer_id?: InputMaybe<UuidFilter>;
  delivery_date?: InputMaybe<DatetimeFilter>;
  discount_amount?: InputMaybe<BigFloatFilter>;
  grand_total?: InputMaybe<BigFloatFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Sales_OrdersFilter>;
  notes?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Sales_OrdersFilter>>;
  order_date?: InputMaybe<DatetimeFilter>;
  order_number?: InputMaybe<StringFilter>;
  payment_terms?: InputMaybe<IntFilter>;
  sales_person?: InputMaybe<UuidFilter>;
  shipping_address?: InputMaybe<StringFilter>;
  shipping_cost?: InputMaybe<BigFloatFilter>;
  status?: InputMaybe<StringFilter>;
  subtotal?: InputMaybe<BigFloatFilter>;
  tax_amount?: InputMaybe<BigFloatFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
  total_amount?: InputMaybe<BigFloatFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  warehouse_id?: InputMaybe<UuidFilter>;
};

export type Sales_OrdersInsertInput = {
  approved_at?: InputMaybe<Scalars['Datetime']['input']>;
  approved_by?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  created_by?: InputMaybe<Scalars['UUID']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  customer_id?: InputMaybe<Scalars['UUID']['input']>;
  delivery_date?: InputMaybe<Scalars['Datetime']['input']>;
  discount_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  grand_total?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  order_date?: InputMaybe<Scalars['Datetime']['input']>;
  order_number?: InputMaybe<Scalars['String']['input']>;
  payment_terms?: InputMaybe<Scalars['Int']['input']>;
  sales_person?: InputMaybe<Scalars['UUID']['input']>;
  shipping_address?: InputMaybe<Scalars['String']['input']>;
  shipping_cost?: InputMaybe<Scalars['BigFloat']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subtotal?: InputMaybe<Scalars['BigFloat']['input']>;
  tax_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  warehouse_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Sales_OrdersInsertResponse = {
  __typename?: 'sales_ordersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Sales_Orders>;
};

export type Sales_OrdersOrderBy = {
  approved_at?: InputMaybe<OrderByDirection>;
  approved_by?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  created_by?: InputMaybe<OrderByDirection>;
  currency?: InputMaybe<OrderByDirection>;
  customer_id?: InputMaybe<OrderByDirection>;
  delivery_date?: InputMaybe<OrderByDirection>;
  discount_amount?: InputMaybe<OrderByDirection>;
  grand_total?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  notes?: InputMaybe<OrderByDirection>;
  order_date?: InputMaybe<OrderByDirection>;
  order_number?: InputMaybe<OrderByDirection>;
  payment_terms?: InputMaybe<OrderByDirection>;
  sales_person?: InputMaybe<OrderByDirection>;
  shipping_address?: InputMaybe<OrderByDirection>;
  shipping_cost?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  subtotal?: InputMaybe<OrderByDirection>;
  tax_amount?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  total_amount?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  warehouse_id?: InputMaybe<OrderByDirection>;
};

export type Sales_OrdersUpdateInput = {
  approved_at?: InputMaybe<Scalars['Datetime']['input']>;
  approved_by?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  created_by?: InputMaybe<Scalars['UUID']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  customer_id?: InputMaybe<Scalars['UUID']['input']>;
  delivery_date?: InputMaybe<Scalars['Datetime']['input']>;
  discount_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  grand_total?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  order_date?: InputMaybe<Scalars['Datetime']['input']>;
  order_number?: InputMaybe<Scalars['String']['input']>;
  payment_terms?: InputMaybe<Scalars['Int']['input']>;
  sales_person?: InputMaybe<Scalars['UUID']['input']>;
  shipping_address?: InputMaybe<Scalars['String']['input']>;
  shipping_cost?: InputMaybe<Scalars['BigFloat']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subtotal?: InputMaybe<Scalars['BigFloat']['input']>;
  tax_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_amount?: InputMaybe<Scalars['BigFloat']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  warehouse_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Sales_OrdersUpdateResponse = {
  __typename?: 'sales_ordersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Sales_Orders>;
};

export type Stock_Movements = Node & {
  __typename?: 'stock_movements';
  app_users?: Maybe<App_Users>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  created_by?: Maybe<Scalars['UUID']['output']>;
  id: Scalars['UUID']['output'];
  movement_type: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  product_id: Scalars['UUID']['output'];
  products?: Maybe<Products>;
  quantity: Scalars['BigFloat']['output'];
  reference_id?: Maybe<Scalars['UUID']['output']>;
  reference_type?: Maybe<Scalars['String']['output']>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
  total_cost?: Maybe<Scalars['BigFloat']['output']>;
  transaction_date?: Maybe<Scalars['Datetime']['output']>;
  transaction_type?: Maybe<Scalars['String']['output']>;
  unit_cost?: Maybe<Scalars['BigFloat']['output']>;
  warehouse_id: Scalars['UUID']['output'];
  warehouses?: Maybe<Warehouses>;
};

export type Stock_MovementsConnection = {
  __typename?: 'stock_movementsConnection';
  edges: Array<Stock_MovementsEdge>;
  pageInfo: PageInfo;
};

export type Stock_MovementsDeleteResponse = {
  __typename?: 'stock_movementsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Stock_Movements>;
};

export type Stock_MovementsEdge = {
  __typename?: 'stock_movementsEdge';
  cursor: Scalars['String']['output'];
  node: Stock_Movements;
};

export type Stock_MovementsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Stock_MovementsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  created_by?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  movement_type?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Stock_MovementsFilter>;
  notes?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Stock_MovementsFilter>>;
  product_id?: InputMaybe<UuidFilter>;
  quantity?: InputMaybe<BigFloatFilter>;
  reference_id?: InputMaybe<UuidFilter>;
  reference_type?: InputMaybe<StringFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
  total_cost?: InputMaybe<BigFloatFilter>;
  transaction_date?: InputMaybe<DatetimeFilter>;
  transaction_type?: InputMaybe<StringFilter>;
  unit_cost?: InputMaybe<BigFloatFilter>;
  warehouse_id?: InputMaybe<UuidFilter>;
};

export type Stock_MovementsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  created_by?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  movement_type?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  quantity?: InputMaybe<Scalars['BigFloat']['input']>;
  reference_id?: InputMaybe<Scalars['UUID']['input']>;
  reference_type?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_cost?: InputMaybe<Scalars['BigFloat']['input']>;
  transaction_date?: InputMaybe<Scalars['Datetime']['input']>;
  transaction_type?: InputMaybe<Scalars['String']['input']>;
  unit_cost?: InputMaybe<Scalars['BigFloat']['input']>;
  warehouse_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Stock_MovementsInsertResponse = {
  __typename?: 'stock_movementsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Stock_Movements>;
};

export type Stock_MovementsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  created_by?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  movement_type?: InputMaybe<OrderByDirection>;
  notes?: InputMaybe<OrderByDirection>;
  product_id?: InputMaybe<OrderByDirection>;
  quantity?: InputMaybe<OrderByDirection>;
  reference_id?: InputMaybe<OrderByDirection>;
  reference_type?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  total_cost?: InputMaybe<OrderByDirection>;
  transaction_date?: InputMaybe<OrderByDirection>;
  transaction_type?: InputMaybe<OrderByDirection>;
  unit_cost?: InputMaybe<OrderByDirection>;
  warehouse_id?: InputMaybe<OrderByDirection>;
};

export type Stock_MovementsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  created_by?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  movement_type?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  quantity?: InputMaybe<Scalars['BigFloat']['input']>;
  reference_id?: InputMaybe<Scalars['UUID']['input']>;
  reference_type?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  total_cost?: InputMaybe<Scalars['BigFloat']['input']>;
  transaction_date?: InputMaybe<Scalars['Datetime']['input']>;
  transaction_type?: InputMaybe<Scalars['String']['input']>;
  unit_cost?: InputMaybe<Scalars['BigFloat']['input']>;
  warehouse_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Stock_MovementsUpdateResponse = {
  __typename?: 'stock_movementsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Stock_Movements>;
};

export type Subscription_Plans = Node & {
  __typename?: 'subscription_plans';
  base_price_annually?: Maybe<Scalars['BigFloat']['output']>;
  base_price_monthly: Scalars['BigFloat']['output'];
  created_at?: Maybe<Scalars['Datetime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  features?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['UUID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  max_users?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  storage_gb?: Maybe<Scalars['Int']['output']>;
  tenantsCollection?: Maybe<TenantsConnection>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type Subscription_PlansTenantsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TenantsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TenantsOrderBy>>;
};

export type Subscription_PlansConnection = {
  __typename?: 'subscription_plansConnection';
  edges: Array<Subscription_PlansEdge>;
  pageInfo: PageInfo;
};

export type Subscription_PlansDeleteResponse = {
  __typename?: 'subscription_plansDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Subscription_Plans>;
};

export type Subscription_PlansEdge = {
  __typename?: 'subscription_plansEdge';
  cursor: Scalars['String']['output'];
  node: Subscription_Plans;
};

export type Subscription_PlansFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Subscription_PlansFilter>>;
  base_price_annually?: InputMaybe<BigFloatFilter>;
  base_price_monthly?: InputMaybe<BigFloatFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  is_active?: InputMaybe<BooleanFilter>;
  max_users?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Subscription_PlansFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Subscription_PlansFilter>>;
  storage_gb?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Subscription_PlansInsertInput = {
  base_price_annually?: InputMaybe<Scalars['BigFloat']['input']>;
  base_price_monthly?: InputMaybe<Scalars['BigFloat']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  features?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  max_users?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  storage_gb?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Subscription_PlansInsertResponse = {
  __typename?: 'subscription_plansInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Subscription_Plans>;
};

export type Subscription_PlansOrderBy = {
  base_price_annually?: InputMaybe<OrderByDirection>;
  base_price_monthly?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_active?: InputMaybe<OrderByDirection>;
  max_users?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  storage_gb?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Subscription_PlansUpdateInput = {
  base_price_annually?: InputMaybe<Scalars['BigFloat']['input']>;
  base_price_monthly?: InputMaybe<Scalars['BigFloat']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  features?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  max_users?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  storage_gb?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Subscription_PlansUpdateResponse = {
  __typename?: 'subscription_plansUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Subscription_Plans>;
};

export type Suppliers = Node & {
  __typename?: 'suppliers';
  address?: Maybe<Scalars['String']['output']>;
  bank_account?: Maybe<Scalars['String']['output']>;
  bank_name?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  goods_receiptsCollection?: Maybe<Goods_ReceiptsConnection>;
  id: Scalars['UUID']['output'];
  invoicesCollection?: Maybe<InvoicesConnection>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  payment_terms?: Maybe<Scalars['Int']['output']>;
  paymentsCollection?: Maybe<PaymentsConnection>;
  phone?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  purchase_ordersCollection?: Maybe<Purchase_OrdersConnection>;
  supplier_code: Scalars['String']['output'];
  supplier_type?: Maybe<Scalars['String']['output']>;
  tax_id?: Maybe<Scalars['String']['output']>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type SuppliersGoods_ReceiptsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Goods_ReceiptsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Goods_ReceiptsOrderBy>>;
};


export type SuppliersInvoicesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<InvoicesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InvoicesOrderBy>>;
};


export type SuppliersPaymentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PaymentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
};


export type SuppliersPurchase_OrdersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Purchase_OrdersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Purchase_OrdersOrderBy>>;
};

export type SuppliersConnection = {
  __typename?: 'suppliersConnection';
  edges: Array<SuppliersEdge>;
  pageInfo: PageInfo;
};

export type SuppliersDeleteResponse = {
  __typename?: 'suppliersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Suppliers>;
};

export type SuppliersEdge = {
  __typename?: 'suppliersEdge';
  cursor: Scalars['String']['output'];
  node: Suppliers;
};

export type SuppliersFilter = {
  address?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<SuppliersFilter>>;
  bank_account?: InputMaybe<StringFilter>;
  bank_name?: InputMaybe<StringFilter>;
  city?: InputMaybe<StringFilter>;
  company_name?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  currency?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  is_active?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<SuppliersFilter>;
  notes?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<SuppliersFilter>>;
  payment_terms?: InputMaybe<IntFilter>;
  phone?: InputMaybe<StringFilter>;
  postal_code?: InputMaybe<StringFilter>;
  province?: InputMaybe<StringFilter>;
  supplier_code?: InputMaybe<StringFilter>;
  supplier_type?: InputMaybe<StringFilter>;
  tax_id?: InputMaybe<StringFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type SuppliersInsertInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bank_account?: InputMaybe<Scalars['String']['input']>;
  bank_name?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  payment_terms?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  supplier_code?: InputMaybe<Scalars['String']['input']>;
  supplier_type?: InputMaybe<Scalars['String']['input']>;
  tax_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type SuppliersInsertResponse = {
  __typename?: 'suppliersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Suppliers>;
};

export type SuppliersOrderBy = {
  address?: InputMaybe<OrderByDirection>;
  bank_account?: InputMaybe<OrderByDirection>;
  bank_name?: InputMaybe<OrderByDirection>;
  city?: InputMaybe<OrderByDirection>;
  company_name?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  currency?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_active?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  notes?: InputMaybe<OrderByDirection>;
  payment_terms?: InputMaybe<OrderByDirection>;
  phone?: InputMaybe<OrderByDirection>;
  postal_code?: InputMaybe<OrderByDirection>;
  province?: InputMaybe<OrderByDirection>;
  supplier_code?: InputMaybe<OrderByDirection>;
  supplier_type?: InputMaybe<OrderByDirection>;
  tax_id?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type SuppliersUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bank_account?: InputMaybe<Scalars['String']['input']>;
  bank_name?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  payment_terms?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  supplier_code?: InputMaybe<Scalars['String']['input']>;
  supplier_type?: InputMaybe<Scalars['String']['input']>;
  tax_id?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type SuppliersUpdateResponse = {
  __typename?: 'suppliersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Suppliers>;
};

export type Tenant_Subscription_Add_Ons = Node & {
  __typename?: 'tenant_subscription_add_ons';
  activated_at?: Maybe<Scalars['Datetime']['output']>;
  add_on_id: Scalars['UUID']['output'];
  add_ons: Add_Ons;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  expires_at?: Maybe<Scalars['Datetime']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
};

export type Tenant_Subscription_Add_OnsConnection = {
  __typename?: 'tenant_subscription_add_onsConnection';
  edges: Array<Tenant_Subscription_Add_OnsEdge>;
  pageInfo: PageInfo;
};

export type Tenant_Subscription_Add_OnsDeleteResponse = {
  __typename?: 'tenant_subscription_add_onsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Tenant_Subscription_Add_Ons>;
};

export type Tenant_Subscription_Add_OnsEdge = {
  __typename?: 'tenant_subscription_add_onsEdge';
  cursor: Scalars['String']['output'];
  node: Tenant_Subscription_Add_Ons;
};

export type Tenant_Subscription_Add_OnsFilter = {
  activated_at?: InputMaybe<DatetimeFilter>;
  add_on_id?: InputMaybe<UuidFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Tenant_Subscription_Add_OnsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  expires_at?: InputMaybe<DatetimeFilter>;
  is_active?: InputMaybe<BooleanFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Tenant_Subscription_Add_OnsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Tenant_Subscription_Add_OnsFilter>>;
  tenant_id?: InputMaybe<UuidFilter>;
};

export type Tenant_Subscription_Add_OnsInsertInput = {
  activated_at?: InputMaybe<Scalars['Datetime']['input']>;
  add_on_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  expires_at?: InputMaybe<Scalars['Datetime']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Tenant_Subscription_Add_OnsInsertResponse = {
  __typename?: 'tenant_subscription_add_onsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Tenant_Subscription_Add_Ons>;
};

export type Tenant_Subscription_Add_OnsOrderBy = {
  activated_at?: InputMaybe<OrderByDirection>;
  add_on_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  expires_at?: InputMaybe<OrderByDirection>;
  is_active?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
};

export type Tenant_Subscription_Add_OnsUpdateInput = {
  activated_at?: InputMaybe<Scalars['Datetime']['input']>;
  add_on_id?: InputMaybe<Scalars['UUID']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  expires_at?: InputMaybe<Scalars['Datetime']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Tenant_Subscription_Add_OnsUpdateResponse = {
  __typename?: 'tenant_subscription_add_onsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Tenant_Subscription_Add_Ons>;
};

export type Tenants = Node & {
  __typename?: 'tenants';
  address?: Maybe<Scalars['String']['output']>;
  app_usersCollection?: Maybe<App_UsersConnection>;
  bank_accountsCollection?: Maybe<Bank_AccountsConnection>;
  business_name: Scalars['String']['output'];
  business_type: Scalars['String']['output'];
  chart_of_accountsCollection?: Maybe<Chart_Of_AccountsConnection>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  customersCollection?: Maybe<CustomersConnection>;
  deliveriesCollection?: Maybe<DeliveriesConnection>;
  delivery_itemsCollection?: Maybe<Delivery_ItemsConnection>;
  display_name: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  goods_receipt_itemsCollection?: Maybe<Goods_Receipt_ItemsConnection>;
  goods_receiptsCollection?: Maybe<Goods_ReceiptsConnection>;
  id: Scalars['UUID']['output'];
  industry?: Maybe<Scalars['String']['output']>;
  inventoryCollection?: Maybe<InventoryConnection>;
  invoice_itemsCollection?: Maybe<Invoice_ItemsConnection>;
  invoicesCollection?: Maybe<InvoicesConnection>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_trial?: Maybe<Scalars['Boolean']['output']>;
  journal_entriesCollection?: Maybe<Journal_EntriesConnection>;
  journal_entry_linesCollection?: Maybe<Journal_Entry_LinesConnection>;
  last_billed_at?: Maybe<Scalars['Datetime']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  payment_allocationsCollection?: Maybe<Payment_AllocationsConnection>;
  paymentsCollection?: Maybe<PaymentsConnection>;
  phone?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  product_categoriesCollection?: Maybe<Product_CategoriesConnection>;
  productsCollection?: Maybe<ProductsConnection>;
  province?: Maybe<Scalars['String']['output']>;
  purchase_order_itemsCollection?: Maybe<Purchase_Order_ItemsConnection>;
  purchase_ordersCollection?: Maybe<Purchase_OrdersConnection>;
  sales_order_itemsCollection?: Maybe<Sales_Order_ItemsConnection>;
  sales_ordersCollection?: Maybe<Sales_OrdersConnection>;
  settings?: Maybe<Scalars['JSON']['output']>;
  stock_movementsCollection?: Maybe<Stock_MovementsConnection>;
  subdomain: Scalars['String']['output'];
  subscription_ends_at?: Maybe<Scalars['Datetime']['output']>;
  subscription_plan_id?: Maybe<Scalars['UUID']['output']>;
  subscription_plans?: Maybe<Subscription_Plans>;
  subscription_start_at?: Maybe<Scalars['Datetime']['output']>;
  subscription_status?: Maybe<Scalars['String']['output']>;
  suppliersCollection?: Maybe<SuppliersConnection>;
  tax_id?: Maybe<Scalars['String']['output']>;
  tenant_subscription_add_onsCollection?: Maybe<Tenant_Subscription_Add_OnsConnection>;
  timezone?: Maybe<Scalars['String']['output']>;
  trial_ends_at?: Maybe<Scalars['Datetime']['output']>;
  unit_of_measuresCollection?: Maybe<Unit_Of_MeasuresConnection>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
  warehousesCollection?: Maybe<WarehousesConnection>;
};


export type TenantsApp_UsersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<App_UsersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<App_UsersOrderBy>>;
};


export type TenantsBank_AccountsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Bank_AccountsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Bank_AccountsOrderBy>>;
};


export type TenantsChart_Of_AccountsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Chart_Of_AccountsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Chart_Of_AccountsOrderBy>>;
};


export type TenantsCustomersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CustomersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CustomersOrderBy>>;
};


export type TenantsDeliveriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<DeliveriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DeliveriesOrderBy>>;
};


export type TenantsDelivery_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Delivery_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Delivery_ItemsOrderBy>>;
};


export type TenantsGoods_Receipt_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Goods_Receipt_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Goods_Receipt_ItemsOrderBy>>;
};


export type TenantsGoods_ReceiptsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Goods_ReceiptsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Goods_ReceiptsOrderBy>>;
};


export type TenantsInventoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<InventoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InventoryOrderBy>>;
};


export type TenantsInvoice_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Invoice_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Invoice_ItemsOrderBy>>;
};


export type TenantsInvoicesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<InvoicesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InvoicesOrderBy>>;
};


export type TenantsJournal_EntriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Journal_EntriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Journal_EntriesOrderBy>>;
};


export type TenantsJournal_Entry_LinesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Journal_Entry_LinesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Journal_Entry_LinesOrderBy>>;
};


export type TenantsPayment_AllocationsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Payment_AllocationsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Payment_AllocationsOrderBy>>;
};


export type TenantsPaymentsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PaymentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>;
};


export type TenantsProduct_CategoriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Product_CategoriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Product_CategoriesOrderBy>>;
};


export type TenantsProductsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};


export type TenantsPurchase_Order_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Purchase_Order_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Purchase_Order_ItemsOrderBy>>;
};


export type TenantsPurchase_OrdersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Purchase_OrdersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Purchase_OrdersOrderBy>>;
};


export type TenantsSales_Order_ItemsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Sales_Order_ItemsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Sales_Order_ItemsOrderBy>>;
};


export type TenantsSales_OrdersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Sales_OrdersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Sales_OrdersOrderBy>>;
};


export type TenantsStock_MovementsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Stock_MovementsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Stock_MovementsOrderBy>>;
};


export type TenantsSuppliersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<SuppliersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SuppliersOrderBy>>;
};


export type TenantsTenant_Subscription_Add_OnsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Tenant_Subscription_Add_OnsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Tenant_Subscription_Add_OnsOrderBy>>;
};


export type TenantsUnit_Of_MeasuresCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Unit_Of_MeasuresFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Unit_Of_MeasuresOrderBy>>;
};


export type TenantsWarehousesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<WarehousesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WarehousesOrderBy>>;
};

export type TenantsConnection = {
  __typename?: 'tenantsConnection';
  edges: Array<TenantsEdge>;
  pageInfo: PageInfo;
};

export type TenantsDeleteResponse = {
  __typename?: 'tenantsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Tenants>;
};

export type TenantsEdge = {
  __typename?: 'tenantsEdge';
  cursor: Scalars['String']['output'];
  node: Tenants;
};

export type TenantsFilter = {
  address?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<TenantsFilter>>;
  business_name?: InputMaybe<StringFilter>;
  business_type?: InputMaybe<StringFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  currency?: InputMaybe<StringFilter>;
  display_name?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  industry?: InputMaybe<StringFilter>;
  is_active?: InputMaybe<BooleanFilter>;
  is_trial?: InputMaybe<BooleanFilter>;
  last_billed_at?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<TenantsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<TenantsFilter>>;
  phone?: InputMaybe<StringFilter>;
  postal_code?: InputMaybe<StringFilter>;
  province?: InputMaybe<StringFilter>;
  subdomain?: InputMaybe<StringFilter>;
  subscription_ends_at?: InputMaybe<DatetimeFilter>;
  subscription_plan_id?: InputMaybe<UuidFilter>;
  subscription_start_at?: InputMaybe<DatetimeFilter>;
  subscription_status?: InputMaybe<StringFilter>;
  tax_id?: InputMaybe<StringFilter>;
  timezone?: InputMaybe<StringFilter>;
  trial_ends_at?: InputMaybe<DatetimeFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type TenantsInsertInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  business_name?: InputMaybe<Scalars['String']['input']>;
  business_type?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_trial?: InputMaybe<Scalars['Boolean']['input']>;
  last_billed_at?: InputMaybe<Scalars['Datetime']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  settings?: InputMaybe<Scalars['JSON']['input']>;
  subdomain?: InputMaybe<Scalars['String']['input']>;
  subscription_ends_at?: InputMaybe<Scalars['Datetime']['input']>;
  subscription_plan_id?: InputMaybe<Scalars['UUID']['input']>;
  subscription_start_at?: InputMaybe<Scalars['Datetime']['input']>;
  subscription_status?: InputMaybe<Scalars['String']['input']>;
  tax_id?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  trial_ends_at?: InputMaybe<Scalars['Datetime']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type TenantsInsertResponse = {
  __typename?: 'tenantsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Tenants>;
};

export type TenantsOrderBy = {
  address?: InputMaybe<OrderByDirection>;
  business_name?: InputMaybe<OrderByDirection>;
  business_type?: InputMaybe<OrderByDirection>;
  city?: InputMaybe<OrderByDirection>;
  country?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  currency?: InputMaybe<OrderByDirection>;
  display_name?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  industry?: InputMaybe<OrderByDirection>;
  is_active?: InputMaybe<OrderByDirection>;
  is_trial?: InputMaybe<OrderByDirection>;
  last_billed_at?: InputMaybe<OrderByDirection>;
  phone?: InputMaybe<OrderByDirection>;
  postal_code?: InputMaybe<OrderByDirection>;
  province?: InputMaybe<OrderByDirection>;
  subdomain?: InputMaybe<OrderByDirection>;
  subscription_ends_at?: InputMaybe<OrderByDirection>;
  subscription_plan_id?: InputMaybe<OrderByDirection>;
  subscription_start_at?: InputMaybe<OrderByDirection>;
  subscription_status?: InputMaybe<OrderByDirection>;
  tax_id?: InputMaybe<OrderByDirection>;
  timezone?: InputMaybe<OrderByDirection>;
  trial_ends_at?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type TenantsUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  business_name?: InputMaybe<Scalars['String']['input']>;
  business_type?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_trial?: InputMaybe<Scalars['Boolean']['input']>;
  last_billed_at?: InputMaybe<Scalars['Datetime']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  settings?: InputMaybe<Scalars['JSON']['input']>;
  subdomain?: InputMaybe<Scalars['String']['input']>;
  subscription_ends_at?: InputMaybe<Scalars['Datetime']['input']>;
  subscription_plan_id?: InputMaybe<Scalars['UUID']['input']>;
  subscription_start_at?: InputMaybe<Scalars['Datetime']['input']>;
  subscription_status?: InputMaybe<Scalars['String']['input']>;
  tax_id?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  trial_ends_at?: InputMaybe<Scalars['Datetime']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type TenantsUpdateResponse = {
  __typename?: 'tenantsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Tenants>;
};

export enum Unit_Of_Measure {
  Gram = 'gram',
  Kg = 'kg',
  Liter = 'liter',
  Ml = 'ml',
  Unit = 'unit'
}

/** Boolean expression comparing fields on type "unit_of_measure" */
export type Unit_Of_MeasureFilter = {
  eq?: InputMaybe<Unit_Of_Measure>;
  in?: InputMaybe<Array<Unit_Of_Measure>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Unit_Of_Measure>;
};

export type Unit_Of_Measures = Node & {
  __typename?: 'unit_of_measures';
  abbreviation: Scalars['String']['output'];
  created_at?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  productsCollection?: Maybe<ProductsConnection>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type Unit_Of_MeasuresProductsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProductsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

export type Unit_Of_MeasuresConnection = {
  __typename?: 'unit_of_measuresConnection';
  edges: Array<Unit_Of_MeasuresEdge>;
  pageInfo: PageInfo;
};

export type Unit_Of_MeasuresDeleteResponse = {
  __typename?: 'unit_of_measuresDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Unit_Of_Measures>;
};

export type Unit_Of_MeasuresEdge = {
  __typename?: 'unit_of_measuresEdge';
  cursor: Scalars['String']['output'];
  node: Unit_Of_Measures;
};

export type Unit_Of_MeasuresFilter = {
  abbreviation?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Unit_Of_MeasuresFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  is_active?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Unit_Of_MeasuresFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Unit_Of_MeasuresFilter>>;
  tenant_id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Unit_Of_MeasuresInsertInput = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Unit_Of_MeasuresInsertResponse = {
  __typename?: 'unit_of_measuresInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Unit_Of_Measures>;
};

export type Unit_Of_MeasuresOrderBy = {
  abbreviation?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_active?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Unit_Of_MeasuresUpdateInput = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Unit_Of_MeasuresUpdateResponse = {
  __typename?: 'unit_of_measuresUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Unit_Of_Measures>;
};

export type Warehouses = Node & {
  __typename?: 'warehouses';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  created_at?: Maybe<Scalars['Datetime']['output']>;
  deliveriesCollection?: Maybe<DeliveriesConnection>;
  goods_receiptsCollection?: Maybe<Goods_ReceiptsConnection>;
  id: Scalars['UUID']['output'];
  inventoryCollection?: Maybe<InventoryConnection>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  manager_name?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  purchase_ordersCollection?: Maybe<Purchase_OrdersConnection>;
  sales_ordersCollection?: Maybe<Sales_OrdersConnection>;
  stock_movementsCollection?: Maybe<Stock_MovementsConnection>;
  tenant_id: Scalars['UUID']['output'];
  tenants?: Maybe<Tenants>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type WarehousesDeliveriesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<DeliveriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DeliveriesOrderBy>>;
};


export type WarehousesGoods_ReceiptsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Goods_ReceiptsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Goods_ReceiptsOrderBy>>;
};


export type WarehousesInventoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<InventoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InventoryOrderBy>>;
};


export type WarehousesPurchase_OrdersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Purchase_OrdersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Purchase_OrdersOrderBy>>;
};


export type WarehousesSales_OrdersCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Sales_OrdersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Sales_OrdersOrderBy>>;
};


export type WarehousesStock_MovementsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Stock_MovementsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Stock_MovementsOrderBy>>;
};

export type WarehousesConnection = {
  __typename?: 'warehousesConnection';
  edges: Array<WarehousesEdge>;
  pageInfo: PageInfo;
};

export type WarehousesDeleteResponse = {
  __typename?: 'warehousesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Warehouses>;
};

export type WarehousesEdge = {
  __typename?: 'warehousesEdge';
  cursor: Scalars['String']['output'];
  node: Warehouses;
};

export type WarehousesFilter = {
  address?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<WarehousesFilter>>;
  city?: InputMaybe<StringFilter>;
  code?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  is_active?: InputMaybe<BooleanFilter>;
  manager_name?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<WarehousesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<WarehousesFilter>>;
  phone?: InputMaybe<StringFilter>;
  province?: InputMaybe<StringFilter>;
  tenant_id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type WarehousesInsertInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  manager_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type WarehousesInsertResponse = {
  __typename?: 'warehousesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Warehouses>;
};

export type WarehousesOrderBy = {
  address?: InputMaybe<OrderByDirection>;
  city?: InputMaybe<OrderByDirection>;
  code?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_active?: InputMaybe<OrderByDirection>;
  manager_name?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  phone?: InputMaybe<OrderByDirection>;
  province?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type WarehousesUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  manager_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type WarehousesUpdateResponse = {
  __typename?: 'warehousesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Warehouses>;
};

export type ProductsCollectionQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type ProductsCollectionQuery = { __typename?: 'Query', productsCollection?: { __typename?: 'productsConnection', edges: Array<{ __typename?: 'productsEdge', cursor: string, node: { __typename?: 'products', id: any, name: string, selling_price?: any | null, is_active?: boolean | null, product_categories?: { __typename?: 'product_categories', name: string } | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } | null };

export type TenantsCollectionQueryVariables = Exact<{ [key: string]: never; }>;


export type TenantsCollectionQuery = { __typename?: 'Query', tenantsCollection?: { __typename?: 'tenantsConnection', edges: Array<{ __typename?: 'tenantsEdge', cursor: string, node: { __typename?: 'tenants', id: any, business_name: string, display_name: string, subdomain: string, business_type: string, industry?: string | null, tax_id?: string | null, phone?: string | null, email?: string | null, address?: string | null, city?: string | null, province?: string | null, postal_code?: string | null, country?: string | null, currency?: string | null, timezone?: string | null, subscription_plan_id?: any | null, subscription_status?: string | null, subscription_start_at?: any | null, subscription_ends_at?: any | null, last_billed_at?: any | null, is_trial?: boolean | null, trial_ends_at?: any | null, settings?: any | null, is_active?: boolean | null, created_at?: any | null, updated_at?: any | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } | null };


export const ProductsCollectionDocument = gql`
    query ProductsCollection($first: Int, $after: Cursor) {
  productsCollection(first: $first, after: $after) {
    edges {
      cursor
      node {
        id
        name
        selling_price
        is_active
        product_categories {
          name
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;

/**
 * __useProductsCollectionQuery__
 *
 * To run a query within a React component, call `useProductsCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsCollectionQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useProductsCollectionQuery(baseOptions?: Apollo.QueryHookOptions<ProductsCollectionQuery, ProductsCollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsCollectionQuery, ProductsCollectionQueryVariables>(ProductsCollectionDocument, options);
      }
export function useProductsCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsCollectionQuery, ProductsCollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsCollectionQuery, ProductsCollectionQueryVariables>(ProductsCollectionDocument, options);
        }
export function useProductsCollectionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductsCollectionQuery, ProductsCollectionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductsCollectionQuery, ProductsCollectionQueryVariables>(ProductsCollectionDocument, options);
        }
export type ProductsCollectionQueryHookResult = ReturnType<typeof useProductsCollectionQuery>;
export type ProductsCollectionLazyQueryHookResult = ReturnType<typeof useProductsCollectionLazyQuery>;
export type ProductsCollectionSuspenseQueryHookResult = ReturnType<typeof useProductsCollectionSuspenseQuery>;
export type ProductsCollectionQueryResult = Apollo.QueryResult<ProductsCollectionQuery, ProductsCollectionQueryVariables>;
export const TenantsCollectionDocument = gql`
    query TenantsCollection {
  tenantsCollection {
    edges {
      cursor
      node {
        id
        business_name
        display_name
        subdomain
        business_type
        industry
        tax_id
        phone
        email
        address
        city
        province
        postal_code
        country
        currency
        timezone
        subscription_plan_id
        subscription_status
        subscription_start_at
        subscription_ends_at
        last_billed_at
        is_trial
        trial_ends_at
        settings
        is_active
        created_at
        updated_at
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    `;

/**
 * __useTenantsCollectionQuery__
 *
 * To run a query within a React component, call `useTenantsCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useTenantsCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTenantsCollectionQuery({
 *   variables: {
 *   },
 * });
 */
export function useTenantsCollectionQuery(baseOptions?: Apollo.QueryHookOptions<TenantsCollectionQuery, TenantsCollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TenantsCollectionQuery, TenantsCollectionQueryVariables>(TenantsCollectionDocument, options);
      }
export function useTenantsCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TenantsCollectionQuery, TenantsCollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TenantsCollectionQuery, TenantsCollectionQueryVariables>(TenantsCollectionDocument, options);
        }
export function useTenantsCollectionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TenantsCollectionQuery, TenantsCollectionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TenantsCollectionQuery, TenantsCollectionQueryVariables>(TenantsCollectionDocument, options);
        }
export type TenantsCollectionQueryHookResult = ReturnType<typeof useTenantsCollectionQuery>;
export type TenantsCollectionLazyQueryHookResult = ReturnType<typeof useTenantsCollectionLazyQuery>;
export type TenantsCollectionSuspenseQueryHookResult = ReturnType<typeof useTenantsCollectionSuspenseQuery>;
export type TenantsCollectionQueryResult = Apollo.QueryResult<TenantsCollectionQuery, TenantsCollectionQueryVariables>;