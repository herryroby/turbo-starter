import { QueryProvider } from '@/components/providers/query-provider';
import '@repo/ui/globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Toaster } from '@repo/ui/components/ui/sonner';
import { ReactNode } from 'react';
import './globals.css';

const geistSans = localFont({
  src: '../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans'
});
const geistMono = localFont({
  src: '../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: 'Qonsula - Enterprise SaaS',
  description: 'Next-gen enterprise resource planning.',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body className={`${geistSans.variable} ${geistMono.variable} overflow-hidden`}>
        <QueryProvider>
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
