import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Image } from '../components/ui/Image';
import { Divider } from '../components/ui/Divider';
import { ResponsiveGrid } from '../components/layout/ResponsiveGrid';

export const GalleryPage: React.FC = () => {
  return (
    <Section padding="lg">
      <Container>
        <Breadcrumb items={[{ label: 'Archival Photography' }]} />

        <SectionHeader
          eyebrow="Visual Record of Public Service"
          title="Official Photo & Media Archive"
          description="Curated high-resolution photography documenting legislative proceedings, public meetings, constituency developments, and civic interactions."
        />

        <Divider />

        <ResponsiveGrid columns={12} gap="lg">
          <div className="col-4 col-md-6">
            <Image
              alt="Assembly Proceedings"
              category="assembly"
              placeholderLabel="Legislative Assembly"
              aspectRatio="4-3"
              caption="Official records from the floor of the Kerala Legislative Assembly."
            />
          </div>
          <div className="col-4 col-md-6">
            <Image
              alt="Constituency Development"
              category="development"
              placeholderLabel="Infrastructure Inspection"
              aspectRatio="4-3"
              caption="On-site review of constituency public infrastructure projects."
            />
          </div>
          <div className="col-4 col-md-12">
            <Image
              alt="Public Gathering"
              category="event"
              placeholderLabel="Public Interaction"
              aspectRatio="4-3"
              caption="Direct dialogue with local citizens and community representatives."
            />
          </div>
        </ResponsiveGrid>
      </Container>
    </Section>
  );
};
