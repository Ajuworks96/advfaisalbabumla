import React from 'react';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  level?: 'h1' | 'h2' | 'h3';
  align?: 'left' | 'center';
  className?: string;
}

/**
 * Editorial SectionHeader with clear institutional hierarchy:
 * Eyebrow kicker, strong Poppins heading, contextual Raleway lead paragraph, and optional action.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  action,
  level = 'h2',
  align = 'left',
  className = '',
}) => {
  const HeadingTag = level;

  return (
    <div
      className={`section-header ${action ? 'section-header--with-action' : ''} ${className}`}
      style={{ textAlign: align }}
    >
      <div className="section-header__text">
        {eyebrow && <div className="text-eyebrow section-header__eyebrow">{eyebrow}</div>}
        <HeadingTag className={`section-header__title ${level === 'h1' ? 'text-h1' : level === 'h3' ? 'text-h3' : 'text-h2'}`}>
          {title}
        </HeadingTag>
        {description && <p className="section-header__description text-lead">{description}</p>}
      </div>

      {action && <div className="section-header__action">{action}</div>}
    </div>
  );
};
