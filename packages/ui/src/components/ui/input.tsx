import * as React from 'react';

import { cn } from '@repo/ui/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Extended props can be added here if needed
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'border-input bg-background ring-offset-background placeholder:text-muted-foreground fdisabled:cursor-not-allowed flex h-8 w-full cursor-text rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium hover:border-blue-500 focus-visible:border-blue-500 focus-visible:outline-none disabled:opacity-50 dark:bg-neutral-900',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
