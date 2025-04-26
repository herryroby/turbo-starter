import { Button } from '@repo/ui/components/button';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Welcome to Voxy</h1>
        <p className="text-zinc-500 dark:text-zinc-400">Your modern financial management platform</p>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="mb-4 text-xl font-semibold">Getting Started</h2>
        <p className="mb-4 text-zinc-600 dark:text-zinc-300">
          Voxy helps you manage your finances efficiently. Use the sidebar to navigate through different sections.
        </p>
        <div className="flex gap-3">
          <Button>Explore Dashboard</Button>
          <Button variant="outline">View Documentation</Button>
        </div>
      </div>
    </div>
  );
}
