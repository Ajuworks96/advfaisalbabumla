import React, { useState } from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Divider } from '../components/ui/Divider';
import { Badge } from '../components/ui/Badge';

export const RaiseAnIssuePage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section padding="lg">
      <Container narrow>
        <Breadcrumb items={[{ label: 'Raise an Issue' }]} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-2)' }}>
          <Badge variant="active">Constituency Grievance Portal</Badge>
          <span className="text-metadata">Direct Public Service</span>
        </div>

        <SectionHeader
          level="h1"
          title="Submit a Public Grievance or Petition"
          description="Directly lodge local community issues, infrastructural concerns, or individual petitions with the office of Adv. Faisal Babu MLA. Every submission is assigned an official tracking reference."
        />

        <Divider />

        {submitted ? (
          <div
            style={{
              backgroundColor: 'var(--color-surface-white)',
              padding: 'var(--space-8)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xs)',
              textAlign: 'center',
            }}
          >
            <h3 style={{ marginBottom: 'var(--space-2)' }}>Grievance Protocol Registered</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)', lineHeight: 'var(--leading-relaxed)' }}>
              Thank you. This interface is currently operating in frontend design validation mode.
              In Phase 2, submissions will connect securely to the WordPress headless grievance endpoint.
            </p>
            <Button variant="secondary" onClick={() => setSubmitted(false)}>
              Reset Form
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: 'var(--color-surface-white)',
              padding: 'var(--space-8)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xs)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-5)',
            }}
          >
            <div>
              <label
                htmlFor="citizen-name"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: 'var(--text-xs)',
                  letterSpacing: 'var(--tracking-wide)',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-2)',
                }}
              >
                Full Name <span aria-hidden="true" style={{ color: '#900' }}>*</span>
              </label>
              <input
                id="citizen-name"
                type="text"
                required
                placeholder="Enter your full name"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  fontSize: 'var(--text-sm)',
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xs)',
                  color: 'var(--color-text-primary)',
                }}
              />
            </div>

            <div className="grid-12" style={{ margin: 0 }}>
              <div className="col-6 col-md-6" style={{ padding: 0 }}>
                <label
                  htmlFor="citizen-phone"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: 'var(--text-xs)',
                    letterSpacing: 'var(--tracking-wide)',
                    textTransform: 'uppercase',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  Contact Number <span aria-hidden="true" style={{ color: '#900' }}>*</span>
                </label>
                <input
                  id="citizen-phone"
                  type="tel"
                  required
                  placeholder="+91 Mobile number"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontSize: 'var(--text-sm)',
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-xs)',
                    color: 'var(--color-text-primary)',
                  }}
                />
              </div>

              <div className="col-6 col-md-6" style={{ padding: 0 }}>
                <label
                  htmlFor="citizen-locality"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: 'var(--text-xs)',
                    letterSpacing: 'var(--tracking-wide)',
                    textTransform: 'uppercase',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  Panchayat / Municipality / Ward <span aria-hidden="true" style={{ color: '#900' }}>*</span>
                </label>
                <input
                  id="citizen-locality"
                  type="text"
                  required
                  placeholder="Local body & ward name"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontSize: 'var(--text-sm)',
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-xs)',
                    color: 'var(--color-text-primary)',
                  }}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="grievance-category"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: 'var(--text-xs)',
                  letterSpacing: 'var(--tracking-wide)',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-2)',
                }}
              >
                Grievance Category
              </label>
              <select
                id="grievance-category"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  fontSize: 'var(--text-sm)',
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xs)',
                  color: 'var(--color-text-primary)',
                }}
              >
                <option value="roads">Roads & Public Works (PWD)</option>
                <option value="water">Drinking Water & Irrigation (KWA)</option>
                <option value="electricity">Electricity & Lighting (KSEB)</option>
                <option value="education">School & Educational Infrastructure</option>
                <option value="health">Public Health Centre / Hospital Assistance</option>
                <option value="welfare">Social Welfare & Relief Entitlements</option>
                <option value="other">Other Constituency Representation</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="grievance-details"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: 'var(--text-xs)',
                  letterSpacing: 'var(--tracking-wide)',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-2)',
                }}
              >
                Detailed Description of the Issue <span aria-hidden="true" style={{ color: '#900' }}>*</span>
              </label>
              <textarea
                id="grievance-details"
                rows={5}
                required
                placeholder="Provide clear details including specific location, previous complaints (if any), and requested intervention..."
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  fontSize: 'var(--text-sm)',
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xs)',
                  color: 'var(--color-text-primary)',
                  resize: 'vertical',
                }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 'var(--space-4)' }}>
              <span className="text-metadata">
                Confidential public office submission
              </span>
              <Button type="submit" variant="primary" size="md">
                Submit Issue to MLA Office
              </Button>
            </div>
          </form>
        )}
      </Container>
    </Section>
  );
};
