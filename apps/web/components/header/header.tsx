'use client';

import { UserDropdown } from '@/components/header/user-dropdown';
import { useSidebar } from '@/components/providers/sidebar-provider';
import { Button } from '@repo/ui/components/button';
import { ThemeToggle } from '@repo/ui/components/theme-toggle';
import { Bell, Menu, MessageCircle } from 'lucide-react';

export function Header() {
  const { toggle } = useSidebar();

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-neutral-200 bg-white px-6 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-center gap-4">
        <Button onClick={toggle} variant="ghost" size="icon" className="mr-2" aria-label="Toggle sidebar">
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="size-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <MessageCircle className="size-5" />
        </Button>
        <ThemeToggle />
        <UserDropdown />
      </div>
    </header>
  );
}
