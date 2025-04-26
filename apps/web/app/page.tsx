'use client';

import { ThemeSwitcher } from '@repo/ui/components/theme-switcher';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center gap-4">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
