import React from 'react';
import {
  Menu as MenuIcon,
  X as XIcon,
  Search as SearchIcon,
  ArrowRight as ArrowRightIcon,
  ArrowUpRight as ArrowUpRightIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Calendar as CalendarIcon,
  ExternalLink as ExternalLinkIcon,
  Check as CheckIcon,
} from 'lucide-react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  'aria-label'?: string;
}

/**
 * STRICTLY REGULATED FUNCTIONAL ICONS
 * As per design system guidelines, icons are permitted ONLY for functional clarity:
 * Menu, Close, Search, Arrow, Phone, Email, Location, Calendar, External link.
 */

export const IconMenu: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <MenuIcon size={size} strokeWidth={1.75} className={className} aria-hidden="true" {...props} />
);

export const IconClose: React.FC<IconProps> = ({ size = 20, className = '', ...props }) => (
  <XIcon size={size} strokeWidth={1.75} className={className} aria-hidden="true" {...props} />
);

export const IconSearch: React.FC<IconProps> = ({ size = 18, className = '', ...props }) => (
  <SearchIcon size={size} strokeWidth={1.75} className={className} aria-hidden="true" {...props} />
);

export const IconArrowRight: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <ArrowRightIcon size={size} strokeWidth={2} className={className} aria-hidden="true" {...props} />
);

export const IconArrowUpRight: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <ArrowUpRightIcon size={size} strokeWidth={2} className={className} aria-hidden="true" {...props} />
);

export const IconPhone: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <PhoneIcon size={size} strokeWidth={1.75} className={className} aria-hidden="true" {...props} />
);

export const IconMail: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <MailIcon size={size} strokeWidth={1.75} className={className} aria-hidden="true" {...props} />
);

export const IconLocation: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <MapPinIcon size={size} strokeWidth={1.75} className={className} aria-hidden="true" {...props} />
);

export const IconCalendar: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <CalendarIcon size={size} strokeWidth={1.75} className={className} aria-hidden="true" {...props} />
);

export const IconExternalLink: React.FC<IconProps> = ({ size = 14, className = '', ...props }) => (
  <ExternalLinkIcon size={size} strokeWidth={1.75} className={className} aria-hidden="true" {...props} />
);

export const IconCheck: React.FC<IconProps> = ({ size = 16, className = '', ...props }) => (
  <CheckIcon size={size} strokeWidth={2} className={className} aria-hidden="true" {...props} />
);

