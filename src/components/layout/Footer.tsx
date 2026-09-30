import React, { useCallback } from 'react';
import { Container } from './Container';
import { IconLocation, IconPhone, IconMail } from '../icons/Icons';

export const Footer: React.FC = () => {
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
    }
  }, []);

  return (
    <footer className="site-footer" role="contentinfo">
      <Container>
        <div className="grid-12">
          {/* Column 1: Institutional Authority */}
          <div className="col-4 col-md-12">
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', color: '#FFFFFF', marginBottom: 'var(--space-1)' }}>
                Adv. Fysal Babu
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: '#CBD5E1' }}>
                Member of the Legislative Assembly (MLA)
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--color-accent-green)', marginTop: '2px', letterSpacing: '0.04em' }}>
                Kerala Legislative Assembly • കേരള നിയമസഭ
              </div>
            </div>
            <p style={{ fontSize: 'var(--text-xs)', lineHeight: 'var(--leading-relaxed)', color: '#CBD5E1', maxWidth: '340px' }}>
              Official digital communication portal and constituency resource hub dedicated to open governance, democratic accountability, and public welfare in Kerala.
            </p>
          </div>

          {/* Column 2: Legislative & Office */}
          <div className="col-3 col-md-4">
            <h4 className="site-footer__heading">Legislative & Office</h4>
            <ul className="site-footer__list">
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                >
                  About the MLA
                </a>
              </li>
              <li>
                <a
                  href="#constituency"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('constituency');
                  }}
                >
                  Constituency Profile
                </a>
              </li>
              <li>
                <a
                  href="#development"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('development');
                  }}
                >
                  Development Projects
                </a>
              </li>
              <li>
                <a
                  href="#assembly"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('assembly');
                  }}
                >
                  Assembly Interventions
                </a>
              </li>
              <li>
                <a
                  href="#updates"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('updates');
                  }}
                >
                  Official Statements & Press
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('gallery');
                  }}
                >
                  Archival Photography
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Citizen Services */}
          <div className="col-2 col-md-4">
            <h4 className="site-footer__heading">Citizen Services</h4>
            <ul className="site-footer__list">
              <li>
                <a
                  href="#citizen-services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('citizen-services');
                  }}
                >
                  Raise an Issue
                </a>
              </li>
              <li>
                <a
                  href="#citizen-services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('citizen-services');
                  }}
                >
                  Public Assistance
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('events');
                  }}
                >
                  Constituency Visits
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  Office Appointments
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Constituency Office Contact */}
          <div className="col-3 col-md-4">
            <h4 className="site-footer__heading">Constituency Office</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', fontSize: 'var(--text-xs)', color: '#CBD5E1' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                <IconLocation size={16} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--color-accent-green)' }} />
                <span style={{ color: '#FFFFFF' }}>
                  Constituency Office, Civil Station Road,<br />
                  Kerala, India
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <IconPhone size={15} style={{ flexShrink: 0, color: 'var(--color-accent-green)' }} />
                <a href="tel:+914830000000" style={{ color: '#FFFFFF' }}>
                  +91 483 0000000
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <IconMail size={15} style={{ flexShrink: 0, color: 'var(--color-accent-green)' }} />
                <a href="mailto:office@advfysalbabu.in" style={{ color: '#FFFFFF' }}>
                  office@advfysalbabu.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Hairline & Legal Credits */}
        <div className="site-footer__bottom">
          <div>
            © {new Date().getFullYear()} Office of Adv. Fysal Babu MLA. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
            <span>Government of Kerala Context</span>
            <span>•</span>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Public Office Hours: 09:30 – 17:30 IST
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
