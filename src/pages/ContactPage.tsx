import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Divider } from '../components/ui/Divider';
import { ResponsiveGrid } from '../components/layout/ResponsiveGrid';
import { Button } from '../components/ui/Button';
import { IconLocation, IconPhone, IconMail, IconCalendar } from '../components/icons/Icons';

export const ContactPage: React.FC = () => {
  return (
    <Section padding="lg">
      <Container>
        <Breadcrumb items={[{ label: 'Contact & Office' }]} />

        <SectionHeader
          eyebrow="Public Service Directory"
          title="Constituency Office & Contact Information"
          description="Direct points of communication for constituents, civil society delegations, government departments, and media representatives."
        />

        <Divider />

        <ResponsiveGrid columns={12} gap="lg">
          {/* Main Constituency Office */}
          <div
            className="col-6 col-md-12"
            style={{
              backgroundColor: 'var(--color-surface-white)',
              padding: 'var(--space-8)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xs)',
            }}
          >
            <div className="text-eyebrow" style={{ marginBottom: 'var(--space-2)' }}>Primary Office</div>
            <h3 style={{ marginBottom: 'var(--space-4)' }}>MLA Constituency Office</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                <IconLocation size={18} style={{ color: 'var(--color-text-primary)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: 'var(--color-text-primary)' }}>Address:</strong><br />
                  Office of Adv. Fysal Babu MLA<br />
                  Civil Station Road, Constituency Headquarters<br />
                  Kerala, PIN: 676 000
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <IconPhone size={18} style={{ color: 'var(--color-text-primary)', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: 'var(--color-text-primary)' }}>Office Landline:</strong>{' '}
                  <a href="tel:+914830000000" style={{ color: 'var(--color-text-primary)', textDecoration: 'underline' }}>
                    +91 483 0000000
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <IconMail size={18} style={{ color: 'var(--color-text-primary)', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: 'var(--color-text-primary)' }}>Official Email:</strong>{' '}
                  <a href="mailto:office@advfysalbabu.in" style={{ color: 'var(--color-text-primary)', textDecoration: 'underline' }}>
                    office@advfysalbabu.in
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                <IconCalendar size={18} style={{ color: 'var(--color-text-primary)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: 'var(--color-text-primary)' }}>Public Visiting Hours:</strong><br />
                  Monday to Saturday: 09:30 AM – 01:30 PM & 03:00 PM – 05:30 PM<br />
                  (Prior appointment recommended for delegations)
                </div>
              </div>
            </div>
          </div>

          {/* Legislative Assembly Office */}
          <div
            className="col-6 col-md-12"
            style={{
              backgroundColor: 'var(--color-surface-white)',
              padding: 'var(--space-8)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xs)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div className="text-eyebrow" style={{ marginBottom: 'var(--space-2)' }}>State Capital Office</div>
              <h3 style={{ marginBottom: 'var(--space-4)' }}>Legislative Assembly Office (Thiruvananthapuram)</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <IconLocation size={18} style={{ color: 'var(--color-text-primary)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: 'var(--color-text-primary)' }}>Address:</strong><br />
                    Room No. 312, Members' Hostel (Old Block)<br />
                    Legislative Assembly Complex, Vikas Bhavan P.O.<br />
                    Thiruvananthapuram, Kerala – 695 033
                  </div>
                </div>

                <p style={{ lineHeight: 'var(--leading-relaxed)' }}>
                  During active assembly sessions, communications and official state-level representations should be directed to the assembly office.
                </p>
              </div>
            </div>

            <div>
              <Button variant="secondary" size="md" asLink href="/raise-an-issue" style={{ width: '100%', justifyContent: 'center' }}>
                Submit Citizen Grievance Online
              </Button>
            </div>
          </div>
        </ResponsiveGrid>
      </Container>
    </Section>
  );
};
