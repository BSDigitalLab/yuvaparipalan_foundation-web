import React from 'react';
import { cn } from '../../utils/cn';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  const variants = {
    primary:
      'bg-emerald-800 hover:bg-emerald-900 text-white shadow-md shadow-emerald-900/20 hover:shadow-emerald-900/30 border border-emerald-700/50',
    secondary:
      'bg-emerald-50 text-emerald-900 hover:bg-emerald-100 border border-emerald-200/80 shadow-sm',
    outline:
      'bg-white text-emerald-900 border-2 border-emerald-800 hover:bg-emerald-800 hover:text-white shadow-sm',
    ghost: 'text-slate-700 hover:text-emerald-900 hover:bg-emerald-50',
    gold:
      'bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white font-semibold shadow-md shadow-amber-500/25 hover:shadow-amber-500/35 hover:brightness-105 border border-amber-400/40',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5 font-semibold',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        <>
          {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};
