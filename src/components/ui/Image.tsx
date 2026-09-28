import React, { useState } from 'react';

export type ImageCategory =
  | 'portrait'
  | 'constituency'
  | 'development'
  | 'assembly'
  | 'event'
  | 'news'
  | 'archive';

export type AspectRatio = '16-9' | '4-3' | '3-2' | '1-1' | 'portrait';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  category?: ImageCategory;
  placeholderLabel?: string;
  aspectRatio?: AspectRatio;
  caption?: string;
  zoomable?: boolean;
  className?: string;
}

const CATEGORY_LABELS: Record<ImageCategory, string> = {
  portrait: 'Official Portrait Archive',
  constituency: 'Constituency Photography',
  development: 'Public Infrastructure & Works',
  assembly: 'Kerala Legislative Assembly Record',
  event: 'Public Interaction & Assembly',
  news: 'Official Press & Media Record',
  archive: 'Institutional Documentation',
};

/**
 * Editorial Image Component
 * Designed specifically for public office documentation with authentic photography.
 * When real imagery is pending, renders a structured, dignified architectural placeholder
 * indicating category and context without fake AI graphics or stock visuals.
 */
export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  category = 'constituency',
  placeholderLabel,
  aspectRatio = '16-9',
  caption,
  zoomable = false,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const showPlaceholder = !src || hasError;

  return (
    <figure className={`editorial-figure ${className}`}>
      <div
        className={`editorial-image-frame aspect-${aspectRatio} ${
          zoomable ? 'editorial-image-frame--zoomable' : ''
        }`}
      >
        {showPlaceholder ? (
          <div className="editorial-placeholder" role="img" aria-label={alt || 'Official image archive'}>
            <span className="editorial-placeholder__tag">
              {placeholderLabel || CATEGORY_LABELS[category]}
            </span>
            <span className="editorial-placeholder__sub">
              Official photographic documentation awaiting archival ingestion
            </span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
            {...props}
          />
        )}
      </div>

      {caption && <figcaption className="editorial-caption">{caption}</figcaption>}
    </figure>
  );
};
