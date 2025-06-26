'use client';

import { CurrentUserAvatar } from '@/components/composite/current-user-avatar';
import { useUser } from '@/hooks/use-user';
import { createClient } from '@/lib/supabase/client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@repo/ui';
import { LogOut, Settings, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { JSX } from 'react';

export const UserButton = (): JSX.Element => {
  const router = useRouter();
  const supabase = createClient();
  const { user } = useUser();

  const handleLogout = async (): Promise<void> => {
    await supabase.auth.signOut();
    router.push('/login');
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <CurrentUserAvatar />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-60 overflow-hidden rounded-md border border-neutral-200 bg-white p-1 shadow-md dark:border-neutral-700 dark:bg-neutral-800"
      >
        {user ? (
          <>
            <div className="p-3">
              <p className="truncate text-sm font-medium text-neutral-900 dark:text-neutral-100">
                {user.name || 'User'}
              </p>
              <p className="truncate text-xs text-neutral-500 dark:text-neutral-400">{user.email}</p>
            </div>
            <DropdownMenuSeparator className="mx-1 my-1 h-px bg-neutral-200 dark:bg-neutral-700" />
            <DropdownMenuItem
              className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700"
              onClick={() => router.push('/profile')}
            >
              <User className="h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700"
              onClick={() => router.push('/settings')}
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="mx-1 my-1 h-px bg-neutral-200 dark:bg-neutral-700" />
            <DropdownMenuItem
              className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-red-500 hover:bg-neutral-100 dark:hover:bg-neutral-700"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </>
        ) : (
          <div className="p-3">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Loading...</p>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
