import { TenantFormModal } from './_components/tenant.fm';
import { TenantsList } from './_components/tenants.ls';
import { TenantModalProvider } from './_context/tenant-modal-context';
import { getTenants } from './actions';

interface TenantsPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const TenantsPage = async ({ searchParams }: TenantsPageProps) => {
  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const pageSize = typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 10;

  const { data: tenants, totalCount } = await getTenants({ page, pageSize });

  return (
    <TenantModalProvider>
      <TenantsList data={tenants} totalCount={totalCount} />
      <TenantFormModal />
    </TenantModalProvider>
  );
};

export default TenantsPage;
