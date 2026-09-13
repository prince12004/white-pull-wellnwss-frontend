import * as React from 'react';
import { cn } from './lib/cn';

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-xl border border-ivory-200 bg-white px-3 text-sm text-charcoal-900 transition-all duration-200',
        'placeholder:text-charcoal-300 focus-visible:border-peach-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach-400/60',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = 'Input';
