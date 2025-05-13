'use client';

import { Button } from '@repo/ui/components/button';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

interface BackButtonProps {
  text?: string;
  link: string;
}

export const BackButton = ({ text, link }: BackButtonProps) => {
  return (
    <Link href={link}>
      <Button variant="outline">
        <ArrowLeftIcon size={18} /> {text || 'Back'}
      </Button>
    </Link>
  );
};
