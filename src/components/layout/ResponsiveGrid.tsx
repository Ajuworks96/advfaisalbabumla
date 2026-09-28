import React from 'react';

export interface ResponsiveGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4 | 12;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * ResponsiveGrid component supporting 12-column editorial layouts
 * as well as common institutional grid divisions.
 */
export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  columns = 12,
  gap = 'md',
  className = '',
  style,
  ...props
}) => {
  if (columns === 12) {
    return (
      <div className={`grid-12 ${className}`} style={style} {...props}>
        {children}
      </div>
    );
  }

  // Pre-configured standard column grids
  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gap: gap === 'sm' ? 'var(--space-4)' : gap === 'lg' ? 'var(--space-8)' : 'var(--space-6)',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    ...style,
  };

  return (
    <div
      className={`editorial-grid editorial-grid--${columns}-col ${className}`}
      style={gridStyle}
      {...props}
    >
      {children}
    </div>
  );
};
