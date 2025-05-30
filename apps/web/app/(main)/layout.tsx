'use client';

import { Header } from '@/components/header/header';
import { SidebarProvider, useSidebar } from '@/components/providers/sidebar-provider';
import { Sidebar } from '@/components/sidebar/sidebar';
import { Card, CardContent } from '@repo/ui/components/card';
import { Toaster } from '@repo/ui/components/sonner';
import { cn } from '@repo/ui/lib/utils';
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <SidebarProvider>
      <MainLayoutContent>{children}</MainLayoutContent>
    </SidebarProvider>
  );
};

const MainLayoutContent = ({ children }: { children: ReactNode }) => {
  const { isOpen } = useSidebar();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Sidebar />
      <div
        className={cn(
          'absolute inset-0 flex flex-col transition-all duration-300 ease-in-out',
          isOpen ? 'left-60' : 'left-0'
        )}
      >
        <Header />
        <main className="h-full overflow-auto bg-neutral-50 dark:bg-neutral-900">
          <div className="mx-auto max-w-[1560px] p-6">
            <Card className="rounded-lg p-6">
              <CardContent className="h-full p-0">{children}</CardContent>
            </Card>
          </div>
        </main>
        <Toaster />
      </div>
    </div>
  );
};

export default MainLayout;
