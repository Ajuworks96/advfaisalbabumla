import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { EmptyState } from '../components/ui/EmptyState';
import { Divider } from '../components/ui/Divider';
import { ResponsiveGrid } from '../components/layout/ResponsiveGrid';

export const AssemblyPage: React.FC = () => {
  return (
    <Section padding="lg">
      <Container>
        <Breadcrumb items={[{ label: 'Kerala Legislative Assembly' }]} />

        <SectionHeader
          eyebrow="Parliamentary Proceedings & Constitutional Record"
          title="Kerala Legislative Assembly"
          description="Documented parliamentary questions, zero-hour submissions, calling attention motions, and committee representations in the Kerala Niyamasabha."
        />

        <Divider />

        <div style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
          <Badge variant="active">15th Kerala Legislative Assembly</Badge>
          <Badge variant="neutral">Official Assembly Transcripts</Badge>
          <Badge variant="neutral">Committee Proceedings</Badge>
        </div>

        <ResponsiveGrid columns={12} gap="lg">
          <div className="col-12">
            <EmptyState
              title="Assembly Interventions Database"
              message="The digitized archive of legislative questions, ministerial replies, and speech transcripts will be accessible here via the CMS API."
            />
          </div>
        </ResponsiveGrid>
      </Container>
    </Section>
  );
};
