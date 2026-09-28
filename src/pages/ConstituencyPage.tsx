import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Image } from '../components/ui/Image';
import { EmptyState } from '../components/ui/EmptyState';
import { Divider } from '../components/ui/Divider';
import { ResponsiveGrid } from '../components/layout/ResponsiveGrid';

export const ConstituencyPage: React.FC = () => {
  return (
    <Section padding="lg">
      <Container>
        <Breadcrumb items={[{ label: 'Constituency' }]} />

        <SectionHeader
          eyebrow="Regional Demographics & Local Governance"
          title="Constituency Profile"
          description="Geographic overview, local administrative bodies, public institutions, and demographic insights of the constituency."
        />

        <Divider />

        <div className="editorial-split editorial-split--60-40" style={{ marginBottom: 'var(--space-12)' }}>
          <div>
            <h3 style={{ marginBottom: 'var(--space-3)' }}>A Rich Cultural and Developmental Tapestry</h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-4)' }}>
              The constituency encompasses vibrant local self-government institutions, educational centres, agricultural tracts, and growing urban settlements. Detailed ward profiles, panchayat jurisdictions, and public service utilities will be catalogued here.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
              Through participatory planning and public consultation, developmental priorities are directly shaped by the local citizenry.
            </p>
          </div>

          <div>
            <Image
              alt="Constituency Landscape"
              category="constituency"
              placeholderLabel="Constituency Landscape & Heritage"
              aspectRatio="4-3"
              caption="Authentic local photography documenting geographic landmarks and public infrastructure."
            />
          </div>
        </div>

        <ResponsiveGrid columns={12} gap="lg">
          <div className="col-12">
            <EmptyState
              title="Constituency Data Hub Under Preparation"
              message="Interactive maps, panchayat directory, and civic indicators are scheduled for publication alongside the WordPress backend rollout."
            />
          </div>
        </ResponsiveGrid>
      </Container>
    </Section>
  );
};
