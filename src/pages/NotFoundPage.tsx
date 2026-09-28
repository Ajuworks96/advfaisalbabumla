import React from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { EmptyState } from '../components/ui/EmptyState';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <Section padding="xl">
      <Container narrow>
        <EmptyState
          title="Document or Page Not Found"
          message="The requested institutional page or record could not be located in this public office directory. Please return to the homepage or use the navigation index."
          action={
            <Button variant="primary" size="md" asLink href="/">
              Return to Official Homepage
            </Button>
          }
        />
      </Container>
    </Section>
  );
};
