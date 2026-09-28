import React from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'subtle'
  | 'inverted'
  | 'secondary-light'
  | 'green-outline'
  | 'gold';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  asLink?: boolean;
  href?: string;
}

/**
 * Minimal & Premium Button Component
 * Adheres strictly to the restrained public office design language:
 * Solid dark primary, outlined subtle secondary, moderate radius, Poppins 600 typography.
 * No oversized rounded pills or neon gradients.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  className = '',
  disabled,
  ...props
}) => {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    disabled && 'btn--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} disabled={disabled} {...props}>
      {iconLeft && <span className="btn__icon-left">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="btn__icon-right">{iconRight}</span>}
    </button>
  );
};
