import { ClientProvider } from '@/components/providers/client-provider';
import '@repo/ui/globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans'
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: 'Qubix',
  description: 'Modern Financial Management Platform'
};

const RootLayout = ({
  children
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} overflow-hidden`}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
