import { TenantsCollectionQuery } from '@/lib/graphql/generated/graphql';

export type Tenant = NonNullable<TenantsCollectionQuery['tenantsCollection']>['edges'][0]['node'];

export type PageInfo = NonNullable<TenantsCollectionQuery['tenantsCollection']>['pageInfo'];
