import { getTenants } from './actions';
import { TenantFormModal } from './_components/tenant.fm';
import { TenantsList } from './_components/tenants.ls';
import { TenantModalProvider } from './_context/tenant-modal-context';
import { PageInfo, Tenant } from './types';

const TenantsPage = async () => {
    const tenants: Tenant[] = await getTenants();
  const pageInfo: PageInfo | undefined = undefined; // TODO: Implement pagination for REST API

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
