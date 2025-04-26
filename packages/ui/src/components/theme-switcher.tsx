'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from './button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by mounting after client-side render
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="hover:bg-accent/50 rounded-md border-none bg-transparent">
        <span className="size-5" />
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="hover:bg-accent/50 2 rounded-md border-[1px] border-zinc-800 bg-transparent dark:text-white"
        >
          {theme === 'dark' ? <Moon className="size-5" /> : <Sun className="size-5" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[120px] overflow-hidden rounded-md border-[1px] border-zinc-800 bg-black p-0 text-white"
      >
        <div className="flex flex-col">
          <DropdownMenuItem
            onClick={() => setTheme('light')}
            className="cursor-pointer rounded-none px-4 py-2 hover:bg-zinc-800 focus:bg-zinc-800"
          >
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme('dark')}
            className="cursor-pointer rounded-none px-4 py-2 hover:bg-zinc-800 focus:bg-zinc-800"
          >
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme('system')}
            className="cursor-pointer rounded-none px-4 py-2 hover:bg-zinc-800 focus:bg-zinc-800"
          >
            System
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
