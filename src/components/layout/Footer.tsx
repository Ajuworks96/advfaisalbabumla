import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import { IconLocation, IconPhone, IconMail } from '../icons/Icons';

export const Footer: React.FC = () => {
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
            <p style={{ fontSize: 'var(--text-xs)', lineHeight: 'var(--leading-relaxed)', color: '#94A3B8', maxWidth: '340px' }}>
              Official digital communication portal and constituency resource hub dedicated to open governance, democratic accountability, and public welfare in Kerala.
            </p>
          </div>

          {/* Column 2: Legislative & Constituency */}
          <div className="col-3 col-md-4">
            <h4 className="site-footer__heading">Legislative & Office</h4>
            <ul className="site-footer__list">
              <li>
                <Link to="/about">About the MLA</Link>
              </li>
              <li>
                <Link to="/constituency">Constituency Profile</Link>
              </li>
              <li>
                <Link to="/development">Development Projects</Link>
              </li>
              <li>
                <Link to="/assembly">Assembly Interventions</Link>
              </li>
              <li>
                <Link to="/updates">Official Statements & Press</Link>
              </li>
              <li>
                <Link to="/gallery">Archival Photography</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Citizen Services */}
          <div className="col-2 col-md-4">
            <h4 className="site-footer__heading">Citizen Services</h4>
            <ul className="site-footer__list">
              <li>
                <Link to="/raise-an-issue">Raise an Issue</Link>
              </li>
              <li>
                <Link to="/citizen-services">Public Assistance</Link>
              </li>
              <li>
                <Link to="/events">Constituency Visits</Link>
              </li>
              <li>
                <Link to="/contact">Office Appointments</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Constituency Office Contact */}
          <div className="col-3 col-md-4">
            <h4 className="site-footer__heading">Constituency Office</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', fontSize: 'var(--text-xs)', color: '#94A3B8' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                <IconLocation size={16} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--color-accent-green)' }} />
                <span style={{ color: '#CBD5E1' }}>
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
            <Link to="/contact">Public Office Hours: 09:30 – 17:30 IST</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
