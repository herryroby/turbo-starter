import { getClient } from '@/lib/apollo-client';
import {
  TenantsCollectionDocument,
  TenantsCollectionQuery,
  TenantsCollectionQueryVariables
} from '@/lib/graphql/generated/graphql';
import { TenantsList } from './_components/tenants.ls';
import { TenantFormModal } from './_components/tenant.fm';
import { TenantModalProvider } from './_context/tenant-modal-context';
import { PageInfo, Tenant } from './types';

const TenantsPage = async ({ searchParams }: { searchParams: Record<string, string> | null | undefined }) => {
  const pageSize = (await searchParams)?.pageSize ? Number((await searchParams)?.pageSize) : 10;
  const after = (await searchParams)?.after;

  const client = getClient();
  const { data, error } = await client.query<TenantsCollectionQuery, TenantsCollectionQueryVariables>({
    query: TenantsCollectionDocument,
    variables: {
      first: pageSize,
      after: after
    },
    fetchPolicy: 'no-cache'
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const tenants: Tenant[] = data.tenantsCollection?.edges.map((edge) => edge.node) || [];
  const pageInfo: PageInfo | undefined = data.tenantsCollection?.pageInfo;

  // Note: Supabase GraphQL does not provide totalCount.
  // We'll rely on hasNextPage for pagination controls.
  // A separate query would be needed for a full page count.
  const pageCount = -1; // Indicate that we don't have a total page count

  return (
    <TenantModalProvider>
      <TenantsList
        data={tenants}
        pageCount={pageCount}
        pageInfo={pageInfo}
        pageTitle="Tenants"
        filterColumn="name"
        searchPlaceholder="Search for tenants..."
      />
      <TenantFormModal />
    </TenantModalProvider>
  );
};

export default TenantsPage;
