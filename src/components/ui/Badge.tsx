import React from 'react';

export type BadgeVariant = 'neutral' | 'active' | 'notice' | 'gold';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

/**
 * Restrained Badge Component
 * Used sparingly for official classifications and legislative notices.
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className = '',
  ...props
}) => {
  const classes = [
    'badge',
    variant !== 'neutral' && `badge--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};
