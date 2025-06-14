'use client';

import { SignUp } from '@clerk/nextjs';
import Image from 'next/image';

const SignUpPage = () => {
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
      <SignUp
        appearance={{
          elements: {
            rootBox: 'mx-auto',
            card: 'bg-white dark:bg-neutral-900 shadow-none',
            headerTitle: 'text-2xl font-bold text-neutral-900 dark:text-white',
            headerSubtitle: 'text-neutral-500 dark:text-neutral-400',
            socialButtonsBlockButton:
              'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700',
            formButtonPrimary: 'bg-primary text-primary-foreground hover:bg-primary/90',
            footerActionLink: 'text-primary hover:text-primary/90'
          }
        }}
        afterSignUpUrl="/dashboard"
        signInUrl="/sign-in"
      />
    </div>
  );
};

export default SignUpPage;
