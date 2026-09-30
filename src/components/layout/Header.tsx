import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Container } from './Container';
import { IconMenu, IconClose } from '../icons/Icons';

export interface HeaderProps {
  className?: string;
}

/**
 * Desktop Navigation items as strictly specified for single-page scrolling
 */
const DESKTOP_NAV_LINKS = [
  { label: 'Home', hash: 'home' },
  { label: 'About', hash: 'about' },
  { label: 'Constituency', hash: 'constituency' },
  { label: 'Development', hash: 'development' },
  { label: 'Updates', hash: 'updates' },
  { label: 'Events', hash: 'events' },
  { label: 'Gallery', hash: 'gallery' },
  { label: 'Assembly', hash: 'assembly' },
  { label: 'Contact', hash: 'contact' },
];

/**
 * Mobile Navigation items as strictly specified
 */
const MOBILE_NAV_LINKS = [
  { label: 'Home', hash: 'home' },
  { label: 'About the MLA', hash: 'about' },
  { label: 'Constituency', hash: 'constituency' },
  { label: 'Development Projects', hash: 'development' },
  { label: 'Latest Updates', hash: 'updates' },
  { label: 'Events & Sittings', hash: 'events' },
  { label: 'Gallery & Media', hash: 'gallery' },
  { label: 'Assembly Record', hash: 'assembly' },
  { label: 'Citizen Services', hash: 'citizen-services' },
  { label: 'Contact Office', hash: 'contact' },
];

/**
 * Sophisticated Institutional Header & Navigation System
 * Converted to Anchor-based Single Page Architecture with Smooth Scrolling & Active State
 */
export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  /**
   * Smoothly scrolls to section target with header height offset
   */
  const scrollToSection = useCallback((hash: string) => {
    const target = document.getElementById(hash);
    if (target) {
      const headerOffset = 76;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      if (window.history.pushState) {
        window.history.pushState(null, '', `#${hash}`);
      }
      setActiveSection(hash);
    }
  }, []);

  // Subtle scroll listener for sticky elevation and active section detection
  useEffect(() => {
    const sections = [
      'home',
      'about',
      'constituency',
      'development',
      'updates',
      'events',
      'gallery',
      'assembly',
      'citizen-services',
      'contact',
    ];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);

      const headerOffset = 140;
      let currentSection = 'home';

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset && rect.bottom > headerOffset) {
            currentSection = sectionId;
            break;
          }
        }
      }

      // If scrolled near bottom of page, highlight contact
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 80) {
        currentSection = 'contact';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Support URL hashes on initial load & popstate
  useEffect(() => {
    const checkHashAndScroll = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          scrollToSection(hash);
        }, 120);
      }
    };

    checkHashAndScroll();
    window.addEventListener('hashchange', checkHashAndScroll);

    return () => {
      window.removeEventListener('hashchange', checkHashAndScroll);
    };
  }, [scrollToSection]);

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
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key === 'Tab' && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
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

  return (
    <header
      className={`site-header ${isScrolled ? 'site-header--scrolled' : ''} ${className}`}
      role="banner"
    >
      <Container>
        <div className="header-inner">
          {/* Left: MLA Name & Official Identity */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="brand"
            aria-label="Adv. Fysal Babu, Member of Legislative Assembly — Return to Home"
          >
            <span className="brand__name">Adv. Fysal Babu</span>
            <span className="brand__title">Member of Legislative Assembly</span>
          </a>

          {/* Center / Right: Desktop Navigation */}
          <nav className="nav-desktop" aria-label="Primary Navigation">
            <div className="nav-links-group">
              {DESKTOP_NAV_LINKS.map((link) => {
                const active = activeSection === link.hash;

                return (
                  <a
                    key={link.hash}
                    href={`#${link.hash}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.hash);
                    }}
                    className={`nav-link ${active ? 'nav-link--active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Primary Action Button (Smooth scroll to Citizen Grievance) */}
            <div className="nav-cta">
              <a
                href="#citizen-services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('citizen-services');
                }}
                className="btn btn--primary btn--sm"
                aria-label="Raise an Issue with the MLA Office"
              >
                Raise an Issue
              </a>
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

              {/* Navigation List */}
              <nav aria-label="Mobile Navigation Menu">
                <ul className="mobile-nav-list">
                  {MOBILE_NAV_LINKS.map((link) => {
                    const active = activeSection === link.hash;

                    return (
                      <li key={link.hash} className="mobile-nav-item">
                        <a
                          href={`#${link.hash}`}
                          className={`mobile-nav-link ${
                            active ? 'mobile-nav-link--active' : ''
                          }`}
                          aria-current={active ? 'page' : undefined}
                          onClick={(e) => {
                            e.preventDefault();
                            closeMenu();
                            scrollToSection(link.hash);
                          }}
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Mobile CTA */}
              <div style={{ padding: 'var(--space-4) var(--space-6)' }}>
                <a
                  href="#citizen-services"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    scrollToSection('citizen-services');
                  }}
                  className="btn btn--primary btn--lg"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Raise an Issue
                </a>
              </div>
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
