'use client';

import { UserDropdown } from '@/components/header/user-dropdown';
import { ThemeToggle } from '@repo/ui/components/theme-toggle';
import { Bell, MessageCircle, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-200 px-6 dark:border-zinc-800">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            placeholder="Search..."
            className="h-10 w-64 rounded-md border border-zinc-200 bg-zinc-50 pl-10 pr-4 text-sm outline-none focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="cursor-pointer rounded-full bg-zinc-100 p-2 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
          <Bell className="h-5 w-5" />
        </button>
        <button className="cursor-pointer rounded-full bg-zinc-100 p-2 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
          <MessageCircle className="h-5 w-5" />
        </button>
        <ThemeToggle />
        <UserDropdown />
      </div>
    </header>
  );
}
