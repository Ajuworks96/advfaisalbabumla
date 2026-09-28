import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { SectionHeader } from '../components/ui/SectionHeader';
import { EmptyState } from '../components/ui/EmptyState';
import { Divider } from '../components/ui/Divider';
import { ResponsiveGrid } from '../components/layout/ResponsiveGrid';

export const EventsPage: React.FC = () => {
  return (
    <Section padding="lg">
      <Container>
        <Breadcrumb items={[{ label: 'Events & Engagements' }]} />

        <SectionHeader
          eyebrow="Public Diary & Schedule"
          title="Constituency Engagements & Public Calendar"
          description="Public office hours, ward consultations, inauguration events, and community meetings attended by the MLA."
        />

        <Divider />

        <ResponsiveGrid columns={12} gap="lg">
          <div className="col-12">
            <EmptyState
              title="Calendar Integration Scheduled"
              message="Upcoming public programs, official constituency tours, and assembly session calendar will appear here."
            />
          </div>
        </ResponsiveGrid>
      </Container>
    </Section>
  );
};
