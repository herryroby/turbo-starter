import { Button } from '@repo/ui';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

interface BackButtonProps {
  text?: string;
  link: string;
}

export const BackButton = ({ text, link }: BackButtonProps) => {
  return (
    <Link href={link}>
      <Button
        variant="outline"
        className="text-medium bg-amber-500 text-white hover:bg-amber-600 hover:text-white dark:bg-amber-500 hover:dark:bg-amber-600 hover:dark:text-white"
      >
        <ArrowLeftIcon size={18} /> {text || 'Back'}
      </Button>
    </Link>
  );
};
