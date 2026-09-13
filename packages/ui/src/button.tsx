import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './lib/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-peach-400 disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.02] active:scale-[0.97]',
  {
    variants: {
      variant: {
        primary:
          'relative overflow-hidden bg-gradient-to-r from-peach-500 to-peach-600 text-white shadow-[0_8px_24px_-8px_rgba(229,102,144,0.65)] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 before:ease-[cubic-bezier(0.22,1,0.36,1)] before:content-[\'\'] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-6px_rgba(229,102,144,0.75)] hover:brightness-[1.06] hover:before:translate-x-full',
        secondary:
          'border border-gold-400 text-gold-700 bg-transparent hover:border-gold-500 hover:bg-gold-50 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-10px_rgba(198,154,46,0.5)]',
        ghost: 'bg-transparent text-charcoal-700 hover:bg-ivory-200',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
        whatsapp:
          'relative overflow-hidden bg-gradient-to-r from-whatsapp to-whatsapp-dark text-white shadow-[0_8px_24px_-10px_rgba(37,211,102,0.6)] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:ease-[cubic-bezier(0.22,1,0.36,1)] before:content-[\'\'] hover:-translate-y-0.5 hover:brightness-[1.05] hover:before:translate-x-full',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  ),
);
Button.displayName = 'Button';
