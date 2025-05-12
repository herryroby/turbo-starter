'use client';

import { Header } from '@/components/header/header';
import { Sidebar } from '@/components/sidebar/sidebar';
import { SidebarProvider } from '@/components/sidebar/sidebar-context';
import { Card, CardContent } from '@repo/ui/components/card';
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar />
        <div className="flex flex-1 flex-col transition-all duration-300">
          <Header />
          <main className="flex-1 overflow-auto p-6">
            <Card className="rounded-lg p-6">
              <CardContent className="h-full p-0">{children}</CardContent>
            </Card>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
