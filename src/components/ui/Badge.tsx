import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'emerald' | 'amber' | 'blue' | 'purple' | 'slate';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'emerald',
  size = 'sm',
  ...props
}) => {
  const variants = {
    emerald: 'bg-emerald-100 text-emerald-900 border-emerald-300 font-semibold',
    amber: 'bg-amber-100 text-amber-900 border-amber-300 font-semibold',
    blue: 'bg-blue-100 text-blue-900 border-blue-300 font-semibold',
    purple: 'bg-purple-100 text-purple-900 border-purple-300 font-semibold',
    slate: 'bg-slate-100 text-slate-800 border-slate-300 font-semibold',
  };

  const sizes = {
    sm: 'text-xs px-2.5 py-0.5 font-medium',
    md: 'text-sm px-3 py-1 font-semibold',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border tracking-wide uppercase font-mono transition-all',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
