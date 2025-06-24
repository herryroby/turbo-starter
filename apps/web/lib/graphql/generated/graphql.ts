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
  /** Deletes zero or more records from the `product_categories` collection */
  deleteFromproduct_categoriesCollection: Product_CategoriesDeleteResponse;
  /** Deletes zero or more records from the `products` collection */
  deleteFromproductsCollection: ProductsDeleteResponse;
  /** Deletes zero or more records from the `profiles` collection */
  deleteFromprofilesCollection: ProfilesDeleteResponse;
  /** Deletes zero or more records from the `tenants` collection */
  deleteFromtenantsCollection: TenantsDeleteResponse;
  /** Adds one or more `product_categories` records to the collection */
  insertIntoproduct_categoriesCollection?: Maybe<Product_CategoriesInsertResponse>;
  /** Adds one or more `products` records to the collection */
  insertIntoproductsCollection?: Maybe<ProductsInsertResponse>;
  /** Adds one or more `profiles` records to the collection */
  insertIntoprofilesCollection?: Maybe<ProfilesInsertResponse>;
  /** Adds one or more `tenants` records to the collection */
  insertIntotenantsCollection?: Maybe<TenantsInsertResponse>;
  /** Updates zero or more records in the `product_categories` collection */
  updateproduct_categoriesCollection: Product_CategoriesUpdateResponse;
  /** Updates zero or more records in the `products` collection */
  updateproductsCollection: ProductsUpdateResponse;
  /** Updates zero or more records in the `profiles` collection */
  updateprofilesCollection: ProfilesUpdateResponse;
  /** Updates zero or more records in the `tenants` collection */
  updatetenantsCollection: TenantsUpdateResponse;
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
export type MutationDeleteFromprofilesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProfilesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromtenantsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TenantsFilter>;
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
export type MutationInsertIntoprofilesCollectionArgs = {
  objects: Array<ProfilesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntotenantsCollectionArgs = {
  objects: Array<TenantsInsertInput>;
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
export type MutationUpdateprofilesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProfilesFilter>;
  set: ProfilesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatetenantsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TenantsFilter>;
  set: TenantsUpdateInput;
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
  get_tenant_id?: Maybe<Scalars['UUID']['output']>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `product_categories` */
  product_categoriesCollection?: Maybe<Product_CategoriesConnection>;
  /** A pagable collection of type `products` */
  productsCollection?: Maybe<ProductsConnection>;
  /** A pagable collection of type `profiles` */
  profilesCollection?: Maybe<ProfilesConnection>;
  /** A pagable collection of type `tenants` */
  tenantsCollection?: Maybe<TenantsConnection>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
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
export type QueryProfilesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProfilesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfilesOrderBy>>;
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

export type Product_Categories = Node & {
  __typename?: 'product_categories';
  created_at?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  productsCollection?: Maybe<ProductsConnection>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
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
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  is_active?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Product_CategoriesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Product_CategoriesFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Product_CategoriesInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Product_CategoriesInsertResponse = {
  __typename?: 'product_categoriesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Product_Categories>;
};

export type Product_CategoriesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_active?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Product_CategoriesUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
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
  category_id?: Maybe<Scalars['UUID']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  is_purchased?: Maybe<Scalars['Boolean']['output']>;
  is_sold?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  product_categories?: Maybe<Product_Categories>;
  product_id: Scalars['UUID']['output'];
  purchase_price?: Maybe<Scalars['BigFloat']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  reorder_point?: Maybe<Scalars['Int']['output']>;
  reorder_quantity?: Maybe<Scalars['Int']['output']>;
  selling_price?: Maybe<Scalars['BigFloat']['output']>;
  unit_of_measure: Unit_Of_Measure;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
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
  category_id?: InputMaybe<UuidFilter>;
  code?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  is_active?: InputMaybe<BooleanFilter>;
  is_purchased?: InputMaybe<BooleanFilter>;
  is_sold?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProductsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProductsFilter>>;
  product_id?: InputMaybe<UuidFilter>;
  purchase_price?: InputMaybe<BigFloatFilter>;
  quantity?: InputMaybe<IntFilter>;
  reorder_point?: InputMaybe<IntFilter>;
  reorder_quantity?: InputMaybe<IntFilter>;
  selling_price?: InputMaybe<BigFloatFilter>;
  unit_of_measure?: InputMaybe<Unit_Of_MeasureFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type ProductsInsertInput = {
  category_id?: InputMaybe<Scalars['UUID']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_purchased?: InputMaybe<Scalars['Boolean']['input']>;
  is_sold?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  purchase_price?: InputMaybe<Scalars['BigFloat']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  reorder_point?: InputMaybe<Scalars['Int']['input']>;
  reorder_quantity?: InputMaybe<Scalars['Int']['input']>;
  selling_price?: InputMaybe<Scalars['BigFloat']['input']>;
  unit_of_measure?: InputMaybe<Unit_Of_Measure>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ProductsInsertResponse = {
  __typename?: 'productsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Products>;
};

export type ProductsOrderBy = {
  category_id?: InputMaybe<OrderByDirection>;
  code?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  is_active?: InputMaybe<OrderByDirection>;
  is_purchased?: InputMaybe<OrderByDirection>;
  is_sold?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  product_id?: InputMaybe<OrderByDirection>;
  purchase_price?: InputMaybe<OrderByDirection>;
  quantity?: InputMaybe<OrderByDirection>;
  reorder_point?: InputMaybe<OrderByDirection>;
  reorder_quantity?: InputMaybe<OrderByDirection>;
  selling_price?: InputMaybe<OrderByDirection>;
  unit_of_measure?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type ProductsUpdateInput = {
  category_id?: InputMaybe<Scalars['UUID']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_purchased?: InputMaybe<Scalars['Boolean']['input']>;
  is_sold?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['UUID']['input']>;
  purchase_price?: InputMaybe<Scalars['BigFloat']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  reorder_point?: InputMaybe<Scalars['Int']['input']>;
  reorder_quantity?: InputMaybe<Scalars['Int']['input']>;
  selling_price?: InputMaybe<Scalars['BigFloat']['input']>;
  unit_of_measure?: InputMaybe<Unit_Of_Measure>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ProductsUpdateResponse = {
  __typename?: 'productsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Products>;
};

export type Profiles = Node & {
  __typename?: 'profiles';
  avatar_url?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  tenant_id?: Maybe<Scalars['UUID']['output']>;
  tenants?: Maybe<Tenants>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};

export type ProfilesConnection = {
  __typename?: 'profilesConnection';
  edges: Array<ProfilesEdge>;
  pageInfo: PageInfo;
};

export type ProfilesDeleteResponse = {
  __typename?: 'profilesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesEdge = {
  __typename?: 'profilesEdge';
  cursor: Scalars['String']['output'];
  node: Profiles;
};

export type ProfilesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProfilesFilter>>;
  avatar_url?: InputMaybe<StringFilter>;
  full_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProfilesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProfilesFilter>>;
  tenant_id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type ProfilesInsertInput = {
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ProfilesInsertResponse = {
  __typename?: 'profilesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesOrderBy = {
  avatar_url?: InputMaybe<OrderByDirection>;
  full_name?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  tenant_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type ProfilesUpdateInput = {
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  tenant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type ProfilesUpdateResponse = {
  __typename?: 'profilesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type Tenants = Node & {
  __typename?: 'tenants';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  profilesCollection?: Maybe<ProfilesConnection>;
};


export type TenantsProfilesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProfilesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProfilesOrderBy>>;
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
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<TenantsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<TenantsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<TenantsFilter>>;
};

export type TenantsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TenantsInsertResponse = {
  __typename?: 'tenantsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Tenants>;
};

export type TenantsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type TenantsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
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

export type ProfilesCollectionQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfilesCollectionQuery = { __typename?: 'Query', profilesCollection?: { __typename?: 'profilesConnection', edges: Array<{ __typename?: 'profilesEdge', node: { __typename?: 'profiles', id: any, full_name?: string | null, updated_at?: any | null } }> } | null };


export const ProfilesCollectionDocument = gql`
    query profilesCollection {
  profilesCollection {
    edges {
      node {
        id
        full_name
        updated_at
      }
    }
  }
}
    `;

/**
 * __useProfilesCollectionQuery__
 *
 * To run a query within a React component, call `useProfilesCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfilesCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfilesCollectionQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfilesCollectionQuery(baseOptions?: Apollo.QueryHookOptions<ProfilesCollectionQuery, ProfilesCollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfilesCollectionQuery, ProfilesCollectionQueryVariables>(ProfilesCollectionDocument, options);
      }
export function useProfilesCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfilesCollectionQuery, ProfilesCollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfilesCollectionQuery, ProfilesCollectionQueryVariables>(ProfilesCollectionDocument, options);
        }
export function useProfilesCollectionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProfilesCollectionQuery, ProfilesCollectionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProfilesCollectionQuery, ProfilesCollectionQueryVariables>(ProfilesCollectionDocument, options);
        }
export type ProfilesCollectionQueryHookResult = ReturnType<typeof useProfilesCollectionQuery>;
export type ProfilesCollectionLazyQueryHookResult = ReturnType<typeof useProfilesCollectionLazyQuery>;
export type ProfilesCollectionSuspenseQueryHookResult = ReturnType<typeof useProfilesCollectionSuspenseQuery>;
export type ProfilesCollectionQueryResult = Apollo.QueryResult<ProfilesCollectionQuery, ProfilesCollectionQueryVariables>;