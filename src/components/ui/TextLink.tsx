import React from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconExternalLink } from '../icons/Icons';

export interface TextLinkProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: 'arrow' | 'underline' | 'plain';
  isExternal?: boolean;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
}

/**
 * Editorial TextLink component with understated arrow or underline transition.
 */
export const TextLink: React.FC<TextLinkProps> = ({
  to,
  href,
  children,
  variant = 'arrow',
  isExternal = false,
  className = '',
  style,
  ariaLabel,
}) => {
  const isUnderline = variant === 'underline';
  const showArrow = variant === 'arrow' && !isExternal;
  
  const linkClasses = [
    'text-link',
    isUnderline && 'text-link--underline',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span className="text-link__arrow" aria-hidden="true">
          <IconArrowRight size={14} />
        </span>
      )}
      {isExternal && (
        <span className="text-link__external" aria-hidden="true">
          <IconExternalLink size={13} />
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={linkClasses} style={style} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href || '#'}
      className={linkClasses}
      style={style}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
    >
      {content}
    </a>
  );
};
