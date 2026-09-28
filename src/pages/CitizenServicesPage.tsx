import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { TextLink } from '../components/ui/TextLink';
import { Divider } from '../components/ui/Divider';
import { ResponsiveGrid } from '../components/layout/ResponsiveGrid';

export const CitizenServicesPage: React.FC = () => {
  return (
    <Section padding="lg">
      <Container>
        <Breadcrumb items={[{ label: 'Citizen Services' }]} />

        <SectionHeader
          eyebrow="Public Assistance & Citizen Facilitation"
          title="Constituency Citizen Services"
          description="Facilitating citizens with government scheme applications, official letters of recommendation, welfare entitlements, and administrative endorsements."
        />

        <Divider />

        <ResponsiveGrid columns={12} gap="lg">
          <div className="col-4 col-md-6" style={{ backgroundColor: 'var(--color-surface-white)', padding: 'var(--space-6)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xs)' }}>
            <h3 style={{ marginBottom: 'var(--space-2)' }}>MLA Attestations & Letters</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-4)' }}>
              Guidance for obtaining official letters of recommendation, character attestations, and representations for government departments.
            </p>
            <TextLink to="/contact">Office Guidelines</TextLink>
          </div>

          <div className="col-4 col-md-6" style={{ backgroundColor: 'var(--color-surface-white)', padding: 'var(--space-6)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xs)' }}>
            <h3 style={{ marginBottom: 'var(--space-2)' }}>CMDRF Assistance Desk</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-4)' }}>
              Direct assistance with applications and follow-ups for Chief Minister’s Distress Relief Fund (CMDRF) medical and calamity relief.
            </p>
            <TextLink to="/contact">Eligibility Criteria</TextLink>
          </div>

          <div className="col-4 col-md-12" style={{ backgroundColor: 'var(--color-surface-white)', padding: 'var(--space-6)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xs)' }}>
            <h3 style={{ marginBottom: 'var(--space-2)' }}>Public Grievance Submission</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-4)' }}>
              Submit an individual or community petition directly to the MLA office for formal departmental intervention.
            </p>
            <Button variant="primary" size="sm" asLink href="/raise-an-issue">
              Submit Grievance
            </Button>
          </div>
        </ResponsiveGrid>
      </Container>
    </Section>
  );
};
