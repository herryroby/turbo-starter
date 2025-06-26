// This is a protected Server Component that performs server-side GraphQL fetching.

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import {
  AccountWatchlistCard,
  BankAccountCard,
  BillsToPayCard,
  CashCard,
  DashboardLayout,
  ExpensesDonutCard,
  FixedAssetCard,
  GiroCard,
  InvoicesOwedCard,
  ProfitLossCard,
  ReceivablePayableCard,
  SalesCard,
  TotalCashInOutCard,
} from './_components';

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/login');
  }

    return (
    <div className="flex flex-1 flex-col gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <DashboardLayout>
        <SalesCard />
        <ProfitLossCard />
        <ReceivablePayableCard />
        <ExpensesDonutCard />
        <BillsToPayCard />
        <InvoicesOwedCard />
        <BankAccountCard />
        <CashCard />
        <GiroCard />
        <FixedAssetCard />
        <AccountWatchlistCard />
        <TotalCashInOutCard />
      </DashboardLayout>
    </div>
  );
}
