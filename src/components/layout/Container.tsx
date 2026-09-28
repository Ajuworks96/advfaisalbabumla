import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  narrow?: boolean;
  className?: string;
}

/**
 * Reusable Container component adhering to the ~1200-1280px editorial max-width
 * with comfortable responsive padding.
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  as: Component = 'div',
  narrow = false,
  className = '',
  ...props
}) => {
  const containerClass = narrow ? 'container-narrow' : 'container';
  const combinedClass = [containerClass, className].filter(Boolean).join(' ');

  return (
    <Component className={combinedClass} {...props}>
      {children}
    </Component>
  );
};
