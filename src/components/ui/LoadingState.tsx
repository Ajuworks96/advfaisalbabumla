import React from 'react';

export interface LoadingStateProps {
  label?: string;
  className?: string;
}

/**
 * Editorial LoadingState component
 * Minimalist horizontal hairline progress indicator with dignified institutional typography.
 */
export const LoadingState: React.FC<LoadingStateProps> = ({
  label = 'Loading institutional records...',
  className = '',
}) => {
  return (
    <div className={`loading-state ${className}`} role="status" aria-live="polite">
      <div className="loading-bar" aria-hidden="true" />
      <span className="text-metadata">{label}</span>
    </div>
  );
};
