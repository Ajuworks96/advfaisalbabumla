import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

/**
 * Primary Institutional Layout
 * Provides semantic document structure, accessible skip link, sticky header,
 * and persistent footer.
 */
export const Layout: React.FC = () => {
  return (
    <div className="site-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Accessible skip link for keyboard navigation */}
      <a
        href="#main-content"
        className="skip-link"
        style={{
          position: 'absolute',
          top: '-100px',
          left: 'var(--space-4)',
          background: 'var(--color-text-primary)',
          color: 'var(--color-surface-white)',
          padding: 'var(--space-2) var(--space-4)',
          zIndex: 1000,
          fontFamily: 'var(--font-heading)',
          fontSize: 'var(--text-xs)',
          borderRadius: 'var(--radius-xs)',
          textDecoration: 'none',
          transition: 'top 0.2s',
        }}
        onFocus={(e) => {
          e.currentTarget.style.top = 'var(--space-2)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.top = '-100px';
        }}
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" style={{ flex: '1 0 auto' }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
