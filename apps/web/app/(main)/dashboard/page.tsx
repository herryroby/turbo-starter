import {
  AccountWatchlistCard,
  BankAccountCard,
  BillsToPayCard,
  CashCard,
  ExpensesDonutCard,
  FixedAssetCard,
  GiroCard,
  InvoicesOwedCard,
  ProfitLossCard,
  ReceivablePayableCard,
  SalesCard,
  TotalCashInOutCard
} from '@/components/dashboard';
import { Button } from '@repo/ui/components/button';

const DashboardPage = (): React.ReactElement => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Welcome to Qubix</h1>
        <p className="text-neutral-500 dark:text-neutral-400">Your modern financial management platform</p>
      </div>
      <div className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="mb-4 text-xl font-semibold">Getting Started</h2>
        <p className="mb-4 text-neutral-600 dark:text-neutral-300">
          Qubix helps you manage your finances efficiently. Use the sidebar to navigate through different sections.
        </p>
        <div className="flex gap-3">
          <Button>Explore Dashboard</Button>
          <Button variant="outline">View Documentation</Button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {/* Top row: Cash, Bank Account, Giro */}
        <div className="col-span-12 md:col-span-4">
          <CashCard />
        </div>
        <div className="col-span-12 md:col-span-4">
          <BankAccountCard />
        </div>
        <div className="col-span-12 md:col-span-4">
          <GiroCard />
        </div>
        {/* Bills to Pay, Expenses Donut */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <BillsToPayCard />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <ExpensesDonutCard />
        </div>
        {/* Total Cash In/Out, Profit & Loss, Sales */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <TotalCashInOutCard />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <ProfitLossCard />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <SalesCard />
        </div>
        {/* Account Watchlist, Invoices Owed, Receivable & Payable, Fixed Asset */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <AccountWatchlistCard />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <InvoicesOwedCard />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <ReceivablePayableCard />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <FixedAssetCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
