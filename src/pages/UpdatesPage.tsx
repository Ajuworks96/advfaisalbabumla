import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { SectionHeader } from '../components/ui/SectionHeader';
import { EmptyState } from '../components/ui/EmptyState';
import { Divider } from '../components/ui/Divider';
import { ResponsiveGrid } from '../components/layout/ResponsiveGrid';

export const UpdatesPage: React.FC = () => {
  return (
    <Section padding="lg">
      <Container>
        <Breadcrumb items={[{ label: 'Updates & Press' }]} />

        <SectionHeader
          eyebrow="Official Dispatches & Media Room"
          title="Press Statements & Official Updates"
          description="Authoritative announcements, press releases, policy stances, and official commentary from the office of Adv. Fysal Babu MLA."
        />

        <Divider />

        <ResponsiveGrid columns={12} gap="lg">
          <div className="col-12">
            <EmptyState
              title="Official Press Feed Pending Ingestion"
              message="Press releases, gazette notices, and official media statements will synchronize automatically via the WordPress REST API."
            />
          </div>
        </ResponsiveGrid>
      </Container>
    </Section>
  );
};
