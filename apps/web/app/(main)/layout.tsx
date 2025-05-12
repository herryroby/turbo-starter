'use client';

import { Header } from '@/components/header/header';
import { Sidebar } from '@/components/sidebar/sidebar';
import { Card, CardContent } from '@repo/ui/components/card';
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header />
        <main className="p-6" style={{ padding: '2.3rem', maxWidth: '120rem', margin: '0 auto' }}>
          <Card className="rounded-lg p-6">
            <CardContent className="p-0">{children}</CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
