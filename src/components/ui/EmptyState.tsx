import React from 'react';

export interface EmptyStateProps {
  title: string;
  message: string;
  action?: React.ReactNode;
  className?: string;
}

/**
 * Institutional EmptyState component
 * Displays dignified notice when archival documentation or official records are pending publication.
 */
export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  message,
  action,
  className = '',
}) => {
  return (
    <div className={`empty-state ${className}`}>
      <h3 className="empty-state__title text-h3">{title}</h3>
      <p className="empty-state__message">{message}</p>
      {action && <div className="empty-state__action">{action}</div>}
    </div>
  );
};
