import React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  variant?: 'default' | 'subtle' | 'short';
  className?: string;
}

/**
 * Hairline Divider Component for editorial section separations.
 */
export const Divider: React.FC<DividerProps> = ({
  variant = 'default',
  className = '',
  ...props
}) => {
  const classes = [
    'divider',
    variant !== 'default' && `divider--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <hr className={classes} role="separator" {...props} />;
};
