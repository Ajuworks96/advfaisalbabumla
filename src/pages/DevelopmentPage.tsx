import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { EmptyState } from '../components/ui/EmptyState';
import { Divider } from '../components/ui/Divider';
import { ResponsiveGrid } from '../components/layout/ResponsiveGrid';

export const DevelopmentPage: React.FC = () => {
  return (
    <Section padding="lg">
      <Container>
        <Breadcrumb items={[{ label: 'Development Projects' }]} />

        <SectionHeader
          eyebrow="Public Infrastructure & Asset Creation"
          title="Constituency Development Record"
          description="A comprehensive, transparent ledger of public works, MLA Asset Development Scheme (MLA-ADS) sanctions, Special Development Fund allocations, and state-sponsored infrastructure projects."
        />

        <Divider />

        <div style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
          <Badge variant="neutral">All Projects</Badge>
          <Badge variant="active">Under Execution</Badge>
          <Badge variant="neutral">Completed</Badge>
          <Badge variant="notice">Sanctioned</Badge>
        </div>

        <ResponsiveGrid columns={12} gap="lg">
          <div className="col-12">
            <EmptyState
              title="Development Project Ledger"
              message="The detailed public works registry with budget allocations, executing agencies, completion timelines, and geo-tagged project documentation is being integrated with the CMS."
            />
          </div>
        </ResponsiveGrid>
      </Container>
    </Section>
  );
};
