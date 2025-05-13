import { Button } from '@repo/ui/components/button';

export default function DashboardPage() {
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
    </div>
  );
}
