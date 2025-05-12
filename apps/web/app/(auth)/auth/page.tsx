'use client';

import AuthTabs from '@/app/(auth)/auth/components/auth-tabs';
import Image from 'next/image';

const AuthPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="mb-6 flex justify-center">
        <div className="size-50 relative">
          <div className="dark:hidden">
            <Image src="/logo.webp" alt="Qubix Logo" fill className="rounded-sm object-contain" priority />
          </div>
          <div className="hidden dark:block">
            <Image src="/logo-dark.png" alt="Qubix Logo" fill className="rounded-sm object-contain" priority />
          </div>
        </div>
      </div>
      <AuthTabs />
    </div>
  );
};

export default AuthPage;
