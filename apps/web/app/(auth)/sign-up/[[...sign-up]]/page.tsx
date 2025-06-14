'use client';

import { SignUp } from '@clerk/nextjs';
import { Card, CardContent } from '@repo/ui/components/card';
import Image from 'next/image';

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-neutral-200">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-2xl bg-white/90 shadow-xl">
        {/* Left: Welcome Section */}
        <div className="relative flex w-1/2 flex-col justify-center bg-gradient-to-br from-blue-800 to-blue-400 p-10 text-white">
          <div className="flex flex-col items-center justify-center"></div>
          <div className="dark:hidden">
            <Image src="/logo-dark.webp" alt="Qubix Logo" fill className="rounded-sm object-contain" priority />
          </div>
          <div className="hidden dark:block">
            <Image src="/logo-dark.webp" alt="Qubix Logo" fill className="rounded-sm object-contain" priority />
          </div>
        </div>
        {/* Right: Sign In Form */}
        <div className="flex w-3/5 flex-col items-center justify-center p-9 pl-10">
          <Card className="w-full border-none bg-transparent p-0 shadow-none">
            <CardContent className="p-0">
              <h2 className="mb-2 text-2xl font-bold text-neutral-900">Create your account</h2>
              <p className="mb-6 text-sm text-neutral-500">Please fill in the details to get started</p>
              <SignUp
                appearance={{
                  elements: {
                    rootBox: 'w-full',
                    card: 'bg-transparent shadow-none border-none p-0',
                    headerTitle: 'hidden',
                    headerSubtitle: 'hidden',
                    socialButtonsBlockButton: 'w-full mb-2 bg-white text-neutral-900 border border-neutral-200',
                    formButtonPrimary: 'w-full bg-blue-700 text-white hover:bg-blue-800',
                    footerActionLink: 'text-blue-700 hover:text-blue-800'
                  }
                }}
                signInUrl="/sign-in"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
