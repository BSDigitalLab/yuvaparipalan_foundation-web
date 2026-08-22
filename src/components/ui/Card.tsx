import React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  glow = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl bg-white border border-emerald-900/10 p-6 transition-all duration-300 relative overflow-hidden shadow-sm',
        hoverEffect && 'hover:border-emerald-700/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/10',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
