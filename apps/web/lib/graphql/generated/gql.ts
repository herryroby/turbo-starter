/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query profilesCollection {\n  profilesCollection {\n    edges {\n      node {\n        id\n        full_name\n        updated_at\n      }\n    }\n  }\n}": typeof types.ProfilesCollectionDocument,
};
const documents: Documents = {
    "query profilesCollection {\n  profilesCollection {\n    edges {\n      node {\n        id\n        full_name\n        updated_at\n      }\n    }\n  }\n}": types.ProfilesCollectionDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query profilesCollection {\n  profilesCollection {\n    edges {\n      node {\n        id\n        full_name\n        updated_at\n      }\n    }\n  }\n}"): (typeof documents)["query profilesCollection {\n  profilesCollection {\n    edges {\n      node {\n        id\n        full_name\n        updated_at\n      }\n    }\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;