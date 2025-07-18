import { getClient } from '@/lib/apollo-client';
import {
  TenantsCollectionDocument,
  TenantsCollectionQuery
} from '@/lib/graphql/generated/graphql';
import { TenantFormModal } from './_components/tenant.fm';
import { TenantsList } from './_components/tenants.ls';
import { TenantModalProvider } from './_context/tenant-modal-context';
import { PageInfo, Tenant } from './types';

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  params: Promise<{ [key: string]: string | string[] }>;
};

const TenantsPage = async (props: PageProps) => {
  const searchParams = await props.searchParams;
  
  const client = getClient();
  const { data, error } = await client.query<TenantsCollectionQuery>({
    query: TenantsCollectionDocument,
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
