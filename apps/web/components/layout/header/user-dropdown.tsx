'use client';

import { createClient } from '@/lib/supabase/client';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@repo/ui';
import { LogOut, Settings, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function UserDropdown() {
    const router = useRouter();
    const supabase = createClient();

    const handleLogout = async () => {
      await supabase.auth.signOut();
      router.push('/login');
      router.refresh(); // Ensure the session state is cleared on the client
    };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="/placeholder-avatar.svg" alt="User avatar" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-60 overflow-hidden rounded-md border border-neutral-200 bg-white p-1 shadow-md dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="p-3">
          <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">John Doe</p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">john.doe@example.com</p>
        </div>
        <DropdownMenuSeparator className="mx-1 my-1 h-px bg-neutral-200 dark:bg-neutral-700" />
        <DropdownMenuItem className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700">
          <User className="h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="mx-1 my-1 h-px bg-neutral-200 dark:bg-neutral-700" />
        <DropdownMenuItem className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-red-500 hover:bg-neutral-100 dark:hover:bg-neutral-700" onClick={handleLogout}>
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
