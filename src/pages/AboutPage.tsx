import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Image } from '../components/ui/Image';
import { EmptyState } from '../components/ui/EmptyState';
import { Divider } from '../components/ui/Divider';
import { TextLink } from '../components/ui/TextLink';

export const AboutPage: React.FC = () => {
  return (
    <Section padding="lg">
      <Container>
        <Breadcrumb items={[{ label: 'About the MLA' }]} />

        <SectionHeader
          eyebrow="Biographical & Public Service Profile"
          title="Adv. Fysal Babu"
          description="Elected Member of the Kerala Legislative Assembly representing the constituency with an emphasis on institutional reform, legal advocacy, and grassroots empowerment."
        />

        <Divider />

        <div className="editorial-split editorial-split--40-60" style={{ marginBottom: 'var(--space-12)' }}>
          <div>
            <Image
              alt="Adv. Fysal Babu"
              category="portrait"
              placeholderLabel="Biographical Portrait"
              aspectRatio="portrait"
              caption="Archival photograph — Biographical profile documentation."
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 'var(--space-3)' }}>Public Profile & Legislative Mandate</h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-4)' }}>
              Advocate Fysal Babu serves as an elected representative in the Kerala Legislative Assembly. With a background grounded in legal practice and community advocacy, his tenure emphasizes transparent governance, public education, healthcare infrastructure, and the protection of civil liberties.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-6)' }}>
              This section will feature the verified biographical timeline, educational qualifications, parliamentary committee assignments, and major socio-political milestones upon final content approval.
            </p>

            <EmptyState
              title="Official Biography Pending Ingestion"
              message="The detailed biographical archive, committee memberships, and legislative timeline will be synchronized via the Headless WordPress CMS."
              action={<TextLink to="/contact">Contact Office for Press Inquiries</TextLink>}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
