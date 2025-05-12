'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@repo/ui/components/dropdown-menu';
import { LogOut, Settings, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="ring-offset-background focus-visible:ring-ring flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full outline-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
        <Image src="/placeholder-avatar.svg" alt="User avatar" width={36} height={36} className="h-full w-full" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-60 overflow-hidden rounded-md border border-zinc-200 bg-white p-1 shadow-md dark:border-zinc-700 dark:bg-zinc-800"
      >
        <div className="p-3">
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">John Doe</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">john.doe@example.com</p>
        </div>
        <DropdownMenuSeparator className="mx-1 my-1 h-px bg-zinc-200 dark:bg-zinc-700" />
        <DropdownMenuItem className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700">
          <User className="h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="mx-1 my-1 h-px bg-zinc-200 dark:bg-zinc-700" />
        <Link href="/auth">
          <DropdownMenuItem className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-red-500 hover:bg-zinc-100 dark:hover:bg-zinc-700">
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
