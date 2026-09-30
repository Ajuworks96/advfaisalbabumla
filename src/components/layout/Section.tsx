import React from 'react';

export type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type SectionBackground =
  | 'default'
  | 'white'
  | 'light'
  | 'subtle'
  | 'dark'
  | 'hero'
  | 'navy'
  | 'sapphire'
  | 'midnight'
  | 'transparent'
  | 'fluid';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  padding?: SectionPadding;
  background?: SectionBackground;
  borderTop?: boolean;
  borderBottom?: boolean;
  className?: string;
  id?: string;
}

/**
 * Reusable Section component enforcing consistent vertical rhythm, background variants,
 * and institutional hairline borders.
 */
export const Section: React.FC<SectionProps> = ({
  children,
  as: Component = 'section',
  padding = 'lg',
  background = 'default',
  borderTop = false,
  borderBottom = false,
  className = '',
  id,
  ...props
}) => {
  const classes = [
    'section',
    padding !== 'none' && `section--pad-${padding}`,
    `section--bg-${background}`,
    borderTop && 'section--border-top',
    borderBottom && 'section--border-bottom',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component id={id} className={classes} {...props}>
      {children}
    </Component>
  );
};
