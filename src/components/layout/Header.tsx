import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './Container';
import { IconMenu, IconClose } from '../icons/Icons';

export interface HeaderProps {
  className?: string;
}

/**
 * Desktop Navigation items as strictly specified
 */
const DESKTOP_NAV_LINKS = [
  { label: 'About', path: '/about' },
  { label: 'Constituency', path: '/constituency' },
  { label: 'Development', path: '/development' },
  { label: 'Updates', path: '/updates' },
  { label: 'Events', path: '/events' },
  { label: 'Media', path: '/media' },
  { label: 'Contact', path: '/contact' },
];

/**
 * Mobile Navigation items as strictly specified
 * (About, Constituency, Development, Updates, Events, Media, Citizen Services, Raise an Issue, Contact)
 */
const MOBILE_NAV_LINKS = [
  { label: 'About', path: '/about' },
  { label: 'Constituency', path: '/constituency' },
  { label: 'Development', path: '/development' },
  { label: 'Updates', path: '/updates' },
  { label: 'Events', path: '/events' },
  { label: 'Media', path: '/media' },
  { label: 'Citizen Services', path: '/citizen-services' },
  { label: 'Raise an Issue', path: '/raise-an-issue' },
  { label: 'Contact', path: '/contact' },
];

/**
 * Sophisticated Institutional Header & Navigation System
 * Designed for the official public office of Adv. Fysal Babu MLA.
 * Features calm editorial typography, generous spacing, accessible modal navigation,
 * and restrained scroll elevation.
 */
export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  // Close mobile drawer on route transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Subtle scroll listener for sticky elevation border/shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle viewport resize: automatically close mobile drawer on desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Body scroll locking when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Open & Close handlers with focus management
  const openMenu = () => {
    previousActiveElementRef.current = document.activeElement as HTMLElement;
    setMobileMenuOpen(true);
  };

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
    // Restore focus to toggle button
    setTimeout(() => {
      toggleButtonRef.current?.focus();
    }, 50);
  }, []);

  // Set initial focus to close button when drawer opens
  useEffect(() => {
    if (mobileMenuOpen) {
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    }
  }, [mobileMenuOpen]);

  // Keyboard navigation: Escape key & focus trapping within mobile drawer
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Escape key closes menu
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu();
        return;
      }

      // Focus trap within drawer
      if (event.key === 'Tab' && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, closeMenu]);

  // Active route checking helper
  const isRouteActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`site-header ${isScrolled ? 'site-header--scrolled' : ''} ${className}`}
      role="banner"
    >
      <Container>
        <div className="header-inner">
          {/* Left: MLA Name & Official Identity */}
          <Link
            to="/"
            className="brand"
            aria-label="Adv. Fysal Babu, Member of Legislative Assembly — Return to Home"
          >
            <span className="brand__name">Adv. Fysal Babu</span>
            <span className="brand__title">Member of Legislative Assembly</span>
          </Link>

          {/* Center / Right: Desktop Navigation */}
          <nav className="nav-desktop" aria-label="Primary Navigation">
            <div className="nav-links-group">
              {DESKTOP_NAV_LINKS.map((link) => {
                const active = isRouteActive(link.path);

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`nav-link ${active ? 'nav-link--active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Primary Action */}
            <div className="nav-cta">
              <Link
                to="/raise-an-issue"
                className="btn btn--primary btn--sm"
                aria-label="Raise an Issue with the MLA Office"
              >
                Raise an Issue
              </Link>
            </div>
          </nav>

          {/* Mobile: Functional Menu Toggle Icon */}
          <button
            ref={toggleButtonRef}
            type="button"
            className="mobile-toggle"
            onClick={mobileMenuOpen ? closeMenu : openMenu}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? <IconClose size={20} /> : <IconMenu size={20} />}
          </button>
        </div>
      </Container>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="mobile-nav-backdrop"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Sliding Drawer */}
          <div
            id="mobile-navigation-drawer"
            ref={drawerRef}
            className="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
          >
            <div>
              {/* Drawer Header */}
              <div className="mobile-nav-drawer__header">
                <div>
                  <div className="brand__name" style={{ fontSize: '1.125rem' }}>
                    Adv. Fysal Babu
                  </div>
                  <div className="brand__title" style={{ fontSize: '0.7rem' }}>
                    Member of Legislative Assembly
                  </div>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  className="mobile-toggle"
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                >
                  <IconClose size={20} />
                </button>
              </div>

              {/* Navigation List (Strictly NO decorative icons) */}
              <nav aria-label="Mobile Navigation Menu">
                <ul className="mobile-nav-list">
                  {MOBILE_NAV_LINKS.map((link) => {
                    const active = isRouteActive(link.path);

                    return (
                      <li key={link.path} className="mobile-nav-item">
                        <Link
                          to={link.path}
                          className={`mobile-nav-link ${
                            active ? 'mobile-nav-link--active' : ''
                          }`}
                          aria-current={active ? 'page' : undefined}
                          onClick={closeMenu}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Drawer Footer Notice */}
            <div className="mobile-nav-drawer__footer">
              <div className="text-metadata" style={{ color: 'var(--color-text-secondary)', fontSize: '0.75rem' }}>
                Official Public Office & Constituency Portal
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
