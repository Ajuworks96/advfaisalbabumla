import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { ResponsiveGrid } from '../components/layout/ResponsiveGrid';
import { SectionHeader } from '../components/ui/SectionHeader';
import { TextLink } from '../components/ui/TextLink';
import {
  IconArrowRight,
  IconLocation,
  IconPhone,
  IconMail,
  IconCalendar,
  IconCheck,
} from '../components/icons/Icons';

export const HomePage: React.FC = () => {
  // Interactive state for FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do I lodge a citizen petition or civic grievance?',
      answer:
        'Citizens can submit grievances directly online through the "Raise an Issue" portal, visit the Constituency Headquarters during regular visiting hours, or hand over representations in person at weekly Janamaithri Adalats. Each submission receives a unique digital tracking ID.',
    },
    {
      question: 'What types of development works are covered under MLA-ADS funds?',
      answer:
        'The MLA Asset Development Scheme prioritizes high-impact community assets including school laboratory blocks, public drinking water supply augmentation, community health centre facilities, rural link roads, and public library modernizations.',
    },
    {
      question: 'When can constituents meet Adv. Fysal Babu MLA in person?',
      answer:
        'Constituents can meet the MLA at the Constituency Headquarters on Mondays, Wednesdays, and Saturdays between 09:30 AM – 01:30 PM. On Fridays, open Janamaithri Adalats are conducted across various panchayaths for on-the-spot grievance redressing.',
    },
    {
      question: 'How can students apply for the Annual Educational Merit Awards?',
      answer:
        'Top-performing SSLC, Plus-Two, and vocational higher secondary students from government and aided schools within the constituency are nominated automatically through school headmasters. Private applicants can submit mark sheets through our online portal.',
    },
  ];

  return (
    <div className="page-canvas-fluid">
      {/* ====================================================================
          1. HERO SECTION (Off-White with Minimal Blue & Calicut South Elements)
          Left: Sri Fysal Babu MLA Full-Height Portrait (Integrated into Background)
          Right: Editorial Leadership Typography, Malayalam Lead & Direct CTAs
          ==================================================================== */}
      <section className="hero-light-section">
        {/* Subtle Calicut South Landmark Watermark & Minimal Blue Ambient Glow */}
        <div className="hero-light-section__bg-watermark" />
        <div className="hero-light-section__ambient-glow" />

        <Container>
          <div className="hero-light-grid">
            {/* Left Column: Sri Fysal Babu MLA Official HD Cutout Portrait */}
            <div className="hero-light-leader">
              <div className="hero-light-leader__halo" />
              <div className="hero-light-leader__portrait-wrapper">
                <img
                  src="/images/fysal-babu-mla-hd.png"
                  alt="Adv. Fysal Babu MLA - Member of Legislative Assembly, Kozhikode South"
                  className="hero-light-leader__img"
                  width={480}
                  height={540}
                  loading="eager"
                />
              </div>
              <div className="hero-light-leader__tag">
                <span className="hero-light-leader__tag-dot" />
                <span>Adv. Fysal Babu MLA • 16th KLA (കോഴിക്കോട് സൗത്ത്)</span>
              </div>
            </div>

            {/* Right Column: Identity, Editorial Narrative & Action Center */}
            <div className="hero-light-content">
              {/* Institutional Eyebrow Pills */}
              <div className="hero-light-pills">
                <span className="hero-light-pill hero-light-pill--assembly">
                  <span className="hero-light-pill__dot" />
                  16th Kerala Legislative Assembly
                </span>
                <span className="hero-light-pill hero-light-pill--constituency">
                  Kozhikode South • കോഴിക്കോട് സൗത്ത്
                </span>
              </div>

              {/* Malayalam Poster Lead (Inspired by User's Reference Poster) */}
              <div className="hero-light-malayalam-lead">
                ജനനായകൻ • കോഴിക്കോട് സൗത്തിന്റെ ശബ്ദം
              </div>

              {/* Grand Headline */}
              <h1 className="hero-light-title">
                Adv. Fysal Babu <span className="hero-light-title__mla">MLA</span>
              </h1>

              {/* Bilingual Subtitle */}
              <div className="hero-light-subtitle">
                <span>Member of the Legislative Assembly</span>
                <span className="hero-light-subtitle__sep">|</span>
                <span className="hero-light-subtitle__mal">കേരള നിയമസഭാ സാമാജികൻ</span>
              </div>

              {/* Vision Statement */}
              <p className="hero-light-statement">
                A proactive <strong>360° Vision</strong> driving modern public healthcare, high-tech government schools,
                sustainable coastal infrastructure, and transparent democratic governance for every family in Kozhikode South.
              </p>

              {/* Primary Action Buttons */}
              <div className="hero-light-actions">
                <Link
                  to="/raise-an-issue"
                  className="btn btn--primary btn--lg"
                  style={{
                    backgroundColor: '#059669',
                    borderColor: '#059669',
                    color: '#FFFFFF',
                    boxShadow: '0 8px 24px rgba(5, 150, 105, 0.3)',
                  }}
                >
                  <span>Raise a Citizen Grievance</span>
                  <IconArrowRight size={18} />
                </Link>
                <Link
                  to="/development"
                  className="btn btn--secondary btn--lg"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#0A2858',
                    borderColor: '#CBD5E1',
                    boxShadow: '0 4px 14px rgba(10, 42, 102, 0.08)',
                  }}
                >
                  Explore Priority Works
                </Link>
              </div>

              {/* Quick Highlights Bar */}
              <div className="hero-light-highlights">
                <div className="hero-light-highlight-item">
                  <span className="hero-light-highlight-icon">🏛️</span>
                  <div>
                    <strong>Kozhikode South</strong>
                    <span>Constituency Office</span>
                  </div>
                </div>
                <div className="hero-light-highlight-item">
                  <span className="hero-light-highlight-icon">⚖️</span>
                  <div>
                    <strong>Advocate & Legislator</strong>
                    <span>Legal Advocacy</span>
                  </div>
                </div>
                <div className="hero-light-highlight-item">
                  <span className="hero-light-highlight-icon">🤝</span>
                  <div>
                    <strong>Janamaithri</strong>
                    <span>Citizen Adalat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics & Impact Bar (Refined Light Aesthetic bridging smoothly into the Blue Canvas) */}
          <div className="metrics-strip metrics-strip--light">
            <div className="metric-stat">
              <div className="metric-stat__num">
                ₹240 <span>Cr+</span>
              </div>
              <div className="metric-stat__label">
                Constituency Development Sanctions & Works
              </div>
            </div>

            <div className="metric-stat">
              <div className="metric-stat__num">
                1,850<span>+</span>
              </div>
              <div className="metric-stat__label">
                Citizen Grievances & Petitions Resolved
              </div>
            </div>

            <div className="metric-stat">
              <div className="metric-stat__num">
                48<span>+</span>
              </div>
              <div className="metric-stat__label">
                Legislative Assembly Questions & Motions
              </div>
            </div>

            <div className="metric-stat">
              <div className="metric-stat__num">
                100<span>%</span>
              </div>
              <div className="metric-stat__label">
                Open Door Citizen Secretariat & Tracking
              </div>
            </div>
          </div>
        </Container>

        {/* Smooth bottom transition into the blue page canvas */}
        <div className="hero-light-section__bottom-fade" />
      </section>

      {/* ====================================================================
          2. VISION & STEWARDSHIP (MANIFESTO CHARTER SHOWCASE)
          Inspired by the crisp white document showcase in Future Calicut 360
          Dynamic Asymmetric Layout breaking monotony
          ==================================================================== */}
      <Section padding="xl" background="transparent">
        <Container>
          <div className="editorial-split editorial-split--40-60" style={{ alignItems: 'center', gap: 'var(--space-12)' }}>
            {/* Left: Printed Manifesto Document Paper (High-contrast pure white) */}
            <div>
              <div className="manifesto-doc">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
                  <span className="manifesto-doc__tag">OFFICIAL CHARTER</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0D3E84', letterSpacing: '0.05em' }}>
                    16th KLA • KOZHIKODE SOUTH
                  </span>
                </div>

                <h3 className="manifesto-doc__title">
                  People’s Manifesto & Progress Blueprint
                </h3>
                <p className="manifesto-doc__text">
                  "Public representation is an unbroken covenant of trust. Our mission is to ensure
                  transparent governance, modern civic infrastructure, and swift administrative solutions
                  for every family in our constituency."
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: '0.875rem', color: '#1E293B', fontWeight: 600 }}>
                    <IconCheck size={16} style={{ color: '#059669' }} />
                    <span>Participatory Budgeting & Ward Planning</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: '0.875rem', color: '#1E293B', fontWeight: 600 }}>
                    <IconCheck size={16} style={{ color: '#059669' }} />
                    <span>Real-time Digital Grievance Tracking</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: '0.875rem', color: '#1E293B', fontWeight: 600 }}>
                    <IconCheck size={16} style={{ color: '#059669' }} />
                    <span>Modern Science & High-Tech Schooling</span>
                  </div>
                </div>

                <div className="manifesto-doc__meta">
                  <div>
                    <strong style={{ color: '#0F172A', display: 'block', fontSize: '0.9375rem' }}>Adv. Fysal Babu MLA</strong>
                    <span>Member, Kerala Legislative Assembly</span>
                  </div>
                  <div style={{ textAlign: 'right', fontWeight: 800, color: '#0D3E84', fontSize: '0.875rem' }}>
                    GOVT OF KERALA
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visionary Narrative */}
            <div>
              <div className="text-eyebrow" style={{ color: 'var(--color-accent-green)', marginBottom: 'var(--space-2)' }}>
                Democratic Stewardship
              </div>
              <h2
                style={{
                  color: '#FFFFFF',
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  lineHeight: '1.2',
                  marginBottom: 'var(--space-4)',
                  letterSpacing: '-0.02em',
                }}
              >
                A day for what our constituency <span className="highlight-yellow">deserved</span>.
              </h2>
              <p
                style={{
                  color: '#F1F5F9',
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  marginBottom: 'var(--space-5)',
                }}
              >
                Combining deep legal advocacy with grassroots community leadership, Adv. Fysal Babu
                bridges everyday citizen challenges with state-level administrative action. Every bill,
                motion, and submission on the floor of the Kerala Niyamasabha directly champions the
                welfare and progressive future of the constituency.
              </p>
              <p
                style={{
                  color: '#F1F5F9',
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  marginBottom: 'var(--space-8)',
                }}
              >
                From expanding drinking water connectivity to building world-class taluk healthcare,
                progress is measured by tangible improvements in the daily lives of citizens.
              </p>

              <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn--primary btn--md">
                  <span>Read Full Biographical Profile</span>
                  <IconArrowRight size={16} />
                </Link>
                <Link to="/constituency" className="btn btn--secondary btn--md">
                  Constituency Overview
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          3. FIVE SECTORS IN FOCUS (Dynamic Sector Cards)
          Inspired by "Five sectors the conclave takes up in focus"
          ==================================================================== */}
      <Section padding="xl" background="transparent">
        <Container>
          <SectionHeader
            eyebrow="Key Focus Sectors"
            title="Five Strategic Sectors Driving Transformation"
            description="Targeted public investments creating lasting systemic progress across healthcare, education, connectivity, and local governance."
            action={
              <Link to="/constituency" className="btn btn--secondary btn--sm">
                Explore Full Directory
              </Link>
            }
          />

          <ResponsiveGrid columns={12} gap="lg">
            {/* Sector 01 */}
            <div className="col-4 col-md-6">
              <div className="sector-card">
                <span className="sector-card__badge">01</span>
                <h3 className="sector-card__title">Decentralized Governance</h3>
                <p className="sector-card__text">
                  Strengthening Grama Panchayaths and Municipal Wards with participatory budgeting,
                  ward-level development councils, and zero-delay administrative sanctions.
                </p>
                <div style={{ marginTop: 'auto', paddingTop: 'var(--space-4)', borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-accent-green)', fontWeight: 600 }}>
                    100% Ward Coverage Active
                  </span>
                </div>
              </div>
            </div>

            {/* Sector 02 */}
            <div className="col-4 col-md-6">
              <div className="sector-card">
                <span className="sector-card__badge">02</span>
                <h3 className="sector-card__title">Public Healthcare Upgrades</h3>
                <p className="sector-card__text">
                  24-hour diagnostic laboratories, modernized casualty wings at Community Health Centres,
                  maternal welfare clinics, and emergency cardiac life-support facilities.
                </p>
                <div style={{ marginTop: 'auto', paddingTop: 'var(--space-4)', borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-accent-green)', fontWeight: 600 }}>
                    3 Taluk Hospitals Modernized
                  </span>
                </div>
              </div>
            </div>

            {/* Sector 03 */}
            <div className="col-4 col-md-6">
              <div className="sector-card">
                <span className="sector-card__badge">03</span>
                <h3 className="sector-card__title">Smart School Infrastructure</h3>
                <p className="sector-card__text">
                  High-tech digital science blocks, robotics labs, multimedia classrooms, and hygienic dining
                  spaces for government and aided educational institutions.
                </p>
                <div style={{ marginTop: 'auto', paddingTop: 'var(--space-4)', borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-accent-green)', fontWeight: 600 }}>
                    14 Schools Upgraded
                  </span>
                </div>
              </div>
            </div>

            {/* Sector 04 */}
            <div className="col-6 col-md-6">
              <div className="sector-card">
                <span className="sector-card__badge">04</span>
                <h3 className="sector-card__title">Roads, Bridges & River Corridors</h3>
                <p className="sector-card__text">
                  Major arterial road resurfacing, double-lane reinforced concrete bridge constructions,
                  and flood mitigation desiltation along major canal networks.
                </p>
                <div style={{ marginTop: 'auto', paddingTop: 'var(--space-4)', borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-accent-green)', fontWeight: 600 }}>
                    120+ km PWD Corridors Sanctioned
                  </span>
                </div>
              </div>
            </div>

            {/* Sector 05 */}
            <div className="col-6 col-md-12">
              <div className="sector-card">
                <span className="sector-card__badge">05</span>
                <h3 className="sector-card__title">Drinking Water & Sustainability</h3>
                <p className="sector-card__text">
                  Jal Jeevan Mission augmentation, rural overhead storage reservoirs, and community river
                  conservation schemes eliminating summer water stress.
                </p>
                <div style={{ marginTop: 'auto', paddingTop: 'var(--space-4)', borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-accent-green)', fontWeight: 600 }}>
                    ₹4.8 Cr KWA Water Scheme Underway
                  </span>
                </div>
              </div>
            </div>
          </ResponsiveGrid>
        </Container>
      </Section>

      {/* ====================================================================
          4. PRIORITY DEVELOPMENT PROJECTS (Real Photographs with Progress)
          ==================================================================== */}
      <Section padding="xl" background="transparent">
        <Container>
          <SectionHeader
            eyebrow="Public Works in Progress"
            title="Featured Development Projects"
            description="Major infrastructure initiatives sanctioned under the MLA Asset Development Scheme (MLA-ADS), Special Development Funds, and departmental allocations."
            action={
              <Link to="/development" className="btn btn--secondary btn--sm">
                View All Projects
              </Link>
            }
          />

          <ResponsiveGrid columns={12} gap="lg">
            {/* Project 1 */}
            <div className="col-4 col-md-6">
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  padding: 'var(--space-5)',
                  boxShadow: '0 15px 35px rgba(7, 30, 80, 0.25)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                <div style={{ marginBottom: 'var(--space-4)', overflow: 'hidden', borderRadius: 'var(--radius-sm)' }}>
                  <img
                    src="/images/school-project.jpg"
                    alt="Kerala Model High-Tech Public School"
                    style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--color-accent-green)', textTransform: 'uppercase' }}>
                    MLA-ADS Sanction
                  </span>
                  <span className="badge-pill badge-pill--green" style={{ fontSize: '0.6875rem', padding: '2px 8px' }}>
                    Under Execution
                  </span>
                </div>
                <h3 style={{ fontSize: '1.1875rem', color: '#FFFFFF', marginBottom: 'var(--space-2)', fontWeight: 700 }}>
                  GHSS Academic Block & Science Wing Modernization
                </h3>
                <p style={{ color: '#F1F5F9', fontSize: '0.9375rem', lineHeight: '1.6', marginBottom: 'var(--space-4)', flexGrow: 1 }}>
                  Three-storey academic block with high-tech science laboratories and computer hub benefiting 1,200+ students.
                </p>

                {/* Progress bar */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#F1F5F9', marginBottom: '4px' }}>
                    <span>Milestone Progress</span>
                    <span style={{ color: 'var(--color-accent-green)', fontWeight: 700 }}>85% Completed</span>
                  </div>
                  <div className="progress-bar-track">
                    <div className="progress-bar-fill" style={{ width: '85%' }} />
                  </div>
                </div>

                <div style={{ marginTop: 'var(--space-4)' }}>
                  <TextLink to="/development" style={{ color: 'var(--color-accent-green)' }}>
                    View Project Details
                  </TextLink>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-4 col-md-6">
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  padding: 'var(--space-5)',
                  boxShadow: '0 15px 35px rgba(7, 30, 80, 0.25)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                <div style={{ marginBottom: 'var(--space-4)', overflow: 'hidden', borderRadius: 'var(--radius-sm)' }}>
                  <img
                    src="/images/hospital-project.jpg"
                    alt="Community Health Centre & Hospital"
                    style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--color-accent-green)', textTransform: 'uppercase' }}>
                    Special Development Fund
                  </span>
                  <span className="badge-pill badge-pill--yellow" style={{ fontSize: '0.6875rem', padding: '2px 8px' }}>
                    Final Stage
                  </span>
                </div>
                <h3 style={{ fontSize: '1.1875rem', color: '#FFFFFF', marginBottom: 'var(--space-2)', fontWeight: 700 }}>
                  Community Health Centre Casualty & Diagnostic Upgrade
                </h3>
                <p style={{ color: '#F1F5F9', fontSize: '0.9375rem', lineHeight: '1.6', marginBottom: 'var(--space-4)', flexGrow: 1 }}>
                  24-hour computerized radiography unit, intensive observation ward, and specialized pediatric care section.
                </p>

                {/* Progress bar */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#F1F5F9', marginBottom: '4px' }}>
                    <span>Milestone Progress</span>
                    <span style={{ color: 'var(--color-accent-yellow)', fontWeight: 700 }}>92% Completed</span>
                  </div>
                  <div className="progress-bar-track">
                    <div className="progress-bar-fill" style={{ width: '92%', background: 'var(--gradient-yellow-badge)' }} />
                  </div>
                </div>

                <div style={{ marginTop: 'var(--space-4)' }}>
                  <TextLink to="/development" style={{ color: 'var(--color-accent-green)' }}>
                    View Project Details
                  </TextLink>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-4 col-md-12">
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  padding: 'var(--space-5)',
                  boxShadow: '0 15px 35px rgba(7, 30, 80, 0.25)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                <div style={{ marginBottom: 'var(--space-4)', overflow: 'hidden', borderRadius: 'var(--radius-sm)' }}>
                  <img
                    src="/images/bridge-project.jpg"
                    alt="Regional Link Road & River Bridge"
                    style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--color-accent-green)', textTransform: 'uppercase' }}>
                    PWD State Allotment
                  </span>
                  <span className="badge-pill badge-pill--glass" style={{ fontSize: '0.6875rem', padding: '2px 8px' }}>
                    Sanctioned
                  </span>
                </div>
                <h3 style={{ fontSize: '1.1875rem', color: '#FFFFFF', marginBottom: 'var(--space-2)', fontWeight: 700 }}>
                  Regional Link Corridor & River Bridge Rehabilitation
                </h3>
                <p style={{ color: '#F1F5F9', fontSize: '0.9375rem', lineHeight: '1.6', marginBottom: 'var(--space-4)', flexGrow: 1 }}>
                  Upgradation of 6.2 km key transit route and construction of a modern double-lane reinforced concrete bridge.
                </p>

                {/* Progress bar */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#F1F5F9', marginBottom: '4px' }}>
                    <span>Milestone Progress</span>
                    <span style={{ color: '#38BDF8', fontWeight: 700 }}>Tendering Completed</span>
                  </div>
                  <div className="progress-bar-track">
                    <div className="progress-bar-fill" style={{ width: '40%', background: 'linear-gradient(135deg, #38BDF8 0%, #2563EB 100%)' }} />
                  </div>
                </div>

                <div style={{ marginTop: 'var(--space-4)' }}>
                  <TextLink to="/development" style={{ color: 'var(--color-accent-green)' }}>
                    View Project Details
                  </TextLink>
                </div>
              </div>
            </div>
          </ResponsiveGrid>
        </Container>
      </Section>

      {/* ====================================================================
          5. DIRECT CITIZEN GRIEVANCE REDRESSAL DESK
          High-Impact Dynamic Digital Portal Showcase
          ==================================================================== */}
      <Section padding="xl" background="transparent">
        <Container>
          <div className="editorial-split editorial-split--50-50" style={{ alignItems: 'center', gap: 'var(--space-10)' }}>
            {/* Left: Transparent 3-Step Protocol */}
            <div>
              <div className="text-eyebrow" style={{ color: 'var(--color-accent-green)', marginBottom: 'var(--space-2)' }}>
                Citizen First Governance
              </div>
              <h2
                style={{
                  color: '#FFFFFF',
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  lineHeight: '1.2',
                  marginBottom: 'var(--space-3)',
                }}
              >
                Direct Citizen Grievance <span className="highlight-yellow">Redressal</span>
              </h2>
              <p
                style={{
                  color: '#F1F5F9',
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  marginBottom: 'var(--space-6)',
                }}
              >
                Every constituent has the constitutional right to be heard. Our secretariat operates
                a systematic, accountable workflow with direct MLA oversight to guarantee timely resolution.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div className="service-step">
                  <span className="service-step__number">01 / REGISTRATION & TRACKING</span>
                  <h4 className="service-step__title">Formal Case Logging with Digital Token</h4>
                  <p className="service-step__text">
                    Submissions are logged into the digital secretariat and immediately assigned an SMS-trackable token code.
                  </p>
                </div>

                <div className="service-step">
                  <span className="service-step__number">02 / EXECUTIVE ACTION</span>
                  <h4 className="service-step__title">Ministerial & Departmental Representation</h4>
                  <p className="service-step__text">
                    Official representations dispatched to District Collectors, Executive Engineers, or State Ministries within 48 hours.
                  </p>
                </div>

                <div className="service-step">
                  <span className="service-step__number">03 / RESOLUTION & VERIFICATION</span>
                  <h4 className="service-step__title">Continuous Follow-up & Direct Citizen Briefing</h4>
                  <p className="service-step__text">
                    Continuous monitoring until verified physical completion, with status updates sent directly to the petitioner.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Modern Interactive Portal Card */}
            <div>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.12)',
                  padding: 'var(--space-8)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(255, 255, 255, 0.28)',
                  boxShadow: '0 25px 60px rgba(7, 30, 80, 0.35), 0 0 40px rgba(0, 229, 153, 0.2)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  position: 'relative',
                }}
              >
                <div className="text-eyebrow" style={{ color: 'var(--color-accent-green)', marginBottom: 'var(--space-2)' }}>
                  Constituency Secretariat Fast-Track
                </div>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.75rem', marginBottom: 'var(--space-3)', fontWeight: 700 }}>
                  Lodge an Issue Online
                </h3>
                <p
                  style={{
                    color: '#F1F5F9',
                    fontSize: '0.9375rem',
                    lineHeight: '1.65',
                    marginBottom: 'var(--space-6)',
                  }}
                >
                  Drinking water scarcity, road damage, school infrastructure, electricity disruptions,
                  or medical aid — register your petition directly with the MLA office.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontSize: 'var(--text-sm)', color: '#FFFFFF' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent-green)', boxShadow: '0 0 8px var(--color-accent-green)' }} />
                    <span>Average official response initiation: Within 48 hours</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontSize: 'var(--text-sm)', color: '#FFFFFF' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent-green)', boxShadow: '0 0 8px var(--color-accent-green)' }} />
                    <span>Direct personal review by Adv. Fysal Babu MLA</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontSize: 'var(--text-sm)', color: '#FFFFFF' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent-green)', boxShadow: '0 0 8px var(--color-accent-green)' }} />
                    <span>SMS & WhatsApp tracking alerts enabled</span>
                  </div>
                </div>

                <Link
                  to="/raise-an-issue"
                  className="btn btn--primary btn--lg"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Submit a Public Grievance Now</span>
                  <IconArrowRight size={18} />
                </Link>

                <div
                  style={{
                    marginTop: 'var(--space-6)',
                    paddingTop: 'var(--space-4)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                    textAlign: 'center',
                    fontSize: 'var(--text-xs)',
                    color: '#E2E8F0',
                  }}
                >
                  Urgent civic inquiries? Call Secretariat Helpline:{' '}
                  <a href="tel:+914830000000" style={{ color: 'var(--color-accent-yellow)', fontWeight: 700 }}>
                    +91 483 0000000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          6. ASSEMBLY STEWARDSHIP & KEY PANELS
          Kerala Niyamasabha Parliamentary Record (With Real Assembly Photo)
          ==================================================================== */}
      <Section padding="xl" background="transparent">
        <Container>
          <div className="editorial-split editorial-split--50-50" style={{ alignItems: 'center', gap: 'var(--space-10)' }}>
            {/* Left: Authentic Assembly Visual Frame */}
            <div>
              <div
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: '0 20px 50px rgba(7, 30, 80, 0.35)',
                }}
              >
                <img
                  src="/images/kerala-assembly.jpg"
                  alt="Kerala Legislative Assembly Niyamasabha Complex"
                  style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ padding: 'var(--space-3) var(--space-4)', background: 'rgba(15, 60, 140, 0.9)', color: '#CBD5E1', fontSize: '0.75rem' }}>
                  Kerala Niyamasabha, Thiruvananthapuram — Official parliamentary debates and advocacy.
                </div>
              </div>
            </div>

            {/* Right: Assembly Interventions Record */}
            <div>
              <div className="text-eyebrow" style={{ color: 'var(--color-accent-green)', marginBottom: 'var(--space-2)' }}>
                Parliamentary Record • Kerala Niyamasabha
              </div>
              <h2
                style={{
                  color: '#FFFFFF',
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  lineHeight: '1.2',
                  marginBottom: 'var(--space-3)',
                }}
              >
                Legislative Voice in the <span className="highlight-yellow">Assembly</span>
              </h2>
              <p
                style={{
                  color: '#F1F5F9',
                  lineHeight: '1.75',
                  marginBottom: 'var(--space-6)',
                }}
              >
                Adv. Fysal Babu actively participates in statutory law-making, budgetary scrutiny,
                and ministerial accountability on the floor of the house in Thiruvananthapuram.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                <div style={{ borderLeft: '3px solid var(--color-accent-green)', paddingLeft: 'var(--space-4)' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-sm)', color: '#FFFFFF' }}>
                    Legislative Questions (Starred & Unstarred)
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: '#CBD5E1', marginTop: '2px' }}>
                    Key queries regarding healthcare infrastructure, rural road allocations, and flood embankment works.
                  </div>
                </div>

                <div style={{ borderLeft: '3px solid var(--color-accent-yellow)', paddingLeft: 'var(--space-4)' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-sm)', color: '#FFFFFF' }}>
                    Calling Attention & Rule 304 Submissions
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: '#CBD5E1', marginTop: '2px' }}>
                    Spotlighting urgent constituency crises requiring immediate ministerial sanction and departmental directives.
                  </div>
                </div>

                <div style={{ borderLeft: '3px solid #38BDF8', paddingLeft: 'var(--space-4)' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-sm)', color: '#FFFFFF' }}>
                    Subject Committee Deliberations
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: '#CBD5E1', marginTop: '2px' }}>
                    Scrutinizing draft legislative acts, public revenue accounts, and departmental budget allotments.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
                <Link to="/assembly" className="btn btn--primary btn--md">
                  Assembly Records & Speeches
                </Link>
                <Link to="/assembly" className="btn btn--secondary btn--md">
                  Browse House Questions
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          7. PUBLIC DIARY & CONSTITUENCY SCHEDULE
          ==================================================================== */}
      <Section padding="xl" background="transparent">
        <Container>
          <SectionHeader
            eyebrow="Public Diary"
            title="Upcoming Events & Janamaithri Sittings"
            description="Open citizen grievance adalats, field inspections, development reviews, and institutional inaugurations."
            action={<TextLink to="/events" style={{ color: 'var(--color-accent-green)' }}>View Full Calendar</TextLink>}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {/* Event 1 */}
            <div
              className="event-row"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: 'var(--space-5) var(--space-6)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 10px 30px rgba(7, 30, 80, 0.2)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >
              <div className="event-date-box" style={{ backgroundColor: 'rgba(0, 229, 153, 0.2)', borderColor: 'rgba(0, 229, 153, 0.45)' }}>
                <span className="event-date-box__month" style={{ color: 'var(--color-accent-green)' }}>OCT</span>
                <span className="event-date-box__day" style={{ color: '#FFFFFF' }}>03</span>
                <span className="event-date-box__time" style={{ color: '#F1F5F9' }}>09:30 AM</span>
              </div>
              <div className="event-details">
                <h3 className="event-details__title" style={{ color: '#FFFFFF' }}>
                  Weekly Janamaithri Citizen Adalat & Public Grievance Hearing
                </h3>
                <div className="event-details__venue" style={{ color: '#F1F5F9' }}>
                  <IconLocation size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle', color: 'var(--color-accent-green)' }} />
                  Main Constituency Office, Civil Station Road
                </div>
              </div>
              <div>
                <Link to="/events" className="btn btn--secondary btn--sm">
                  View Details
                </Link>
              </div>
            </div>

            {/* Event 2 */}
            <div
              className="event-row"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: 'var(--space-5) var(--space-6)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 10px 30px rgba(7, 30, 80, 0.2)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >
              <div className="event-date-box" style={{ backgroundColor: 'rgba(250, 204, 21, 0.2)', borderColor: 'rgba(250, 204, 21, 0.45)' }}>
                <span className="event-date-box__month" style={{ color: 'var(--color-accent-yellow)' }}>OCT</span>
                <span className="event-date-box__day" style={{ color: '#FFFFFF' }}>08</span>
                <span className="event-date-box__time" style={{ color: '#F1F5F9' }}>11:00 AM</span>
              </div>
              <div className="event-details">
                <h3 className="event-details__title" style={{ color: '#FFFFFF' }}>
                  Inauguration of Government School Smart Science Wing
                </h3>
                <div className="event-details__venue" style={{ color: '#F1F5F9' }}>
                  <IconLocation size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle', color: 'var(--color-accent-green)' }} />
                  Government Higher Secondary School Auditorium
                </div>
              </div>
              <div>
                <Link to="/events" className="btn btn--secondary btn--sm">
                  View Details
                </Link>
              </div>
            </div>

            {/* Event 3 */}
            <div
              className="event-row"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: 'var(--space-5) var(--space-6)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 10px 30px rgba(7, 30, 80, 0.2)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >
              <div className="event-date-box" style={{ backgroundColor: 'rgba(56, 189, 248, 0.2)', borderColor: 'rgba(56, 189, 248, 0.45)' }}>
                <span className="event-date-box__month" style={{ color: '#38BDF8' }}>OCT</span>
                <span className="event-date-box__day" style={{ color: '#FFFFFF' }}>14</span>
                <span className="event-date-box__time" style={{ color: '#F1F5F9' }}>03:30 PM</span>
              </div>
              <div className="event-details">
                <h3 className="event-details__title" style={{ color: '#FFFFFF' }}>
                  Ward Consultative Meeting on Local Sanitation & Solid Waste Management
                </h3>
                <div className="event-details__venue" style={{ color: '#F1F5F9' }}>
                  <IconLocation size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle', color: 'var(--color-accent-green)' }} />
                  Panchayath Community Hall, Ward 12
                </div>
              </div>
              <div>
                <Link to="/events" className="btn btn--secondary btn--sm">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          8. CITIZEN FAQ DESK (Directly inspired by Future Calicut 360 FAQ)
          Interactive Accordion to break content monotony
          ==================================================================== */}
      <Section padding="xl" background="transparent">
        <Container>
          <div className="editorial-split editorial-split--40-60" style={{ alignItems: 'flex-start', gap: 'var(--space-12)' }}>
            <div>
              <div className="text-eyebrow" style={{ color: 'var(--color-accent-green)', marginBottom: 'var(--space-2)' }}>
                Citizen Information Desk
              </div>
              <h2
                style={{
                  color: '#FFFFFF',
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  lineHeight: '1.2',
                  marginBottom: 'var(--space-4)',
                }}
              >
                Frequently asked <span className="highlight-yellow">questions</span>
              </h2>
              <p
                style={{
                  color: '#F1F5F9',
                  fontSize: '1.0625rem',
                  lineHeight: '1.7',
                  marginBottom: 'var(--space-6)',
                }}
              >
                Find swift answers regarding MLA office procedures, fund recommendations,
                government welfare schemes, and public petition timelines.
              </p>
              <div
                style={{
                  padding: 'var(--space-5)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 'var(--radius-md)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                }}
              >
                <div style={{ color: '#FFFFFF', fontWeight: 700, marginBottom: 'var(--space-1)' }}>
                  Have an unlisted inquiry?
                </div>
                <div style={{ fontSize: '0.875rem', color: '#CBD5E1', marginBottom: 'var(--space-4)' }}>
                  Contact our public secretariat team directly for personalized guidance.
                </div>
                <Link to="/contact" className="btn btn--primary btn--sm">
                  Contact Office Desk
                </Link>
              </div>
            </div>

            {/* Accordion Column */}
            <div className="faq-accordion">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="faq-card"
                    onClick={() => toggleFaq(index)}
                    role="button"
                    tabIndex={0}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleFaq(index);
                      }
                    }}
                  >
                    <div className="faq-card__header">
                      <span className="faq-card__question">{faq.question}</span>
                      <span className="faq-card__toggle">{isOpen ? '−' : '+'}</span>
                    </div>
                    {isOpen && <div className="faq-card__answer">{faq.answer}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          9. OFFICIAL PHOTO & MEDIA ARCHIVE (Real High-Res Imagery)
          ==================================================================== */}
      <Section padding="xl" background="transparent">
        <Container>
          <SectionHeader
            eyebrow="Visual Documentation"
            title="Official Photo & Media Archive"
            description="High-resolution photographic documentation recording assembly debates, ground-level inspections, and citizen dialogues."
            action={
              <Link to="/media" className="btn btn--secondary btn--sm">
                Explore Full Archive
              </Link>
            }
          />

          <ResponsiveGrid columns={12} gap="lg">
            <div className="col-4 col-md-6">
              <div
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  boxShadow: '0 12px 35px rgba(7, 30, 80, 0.25)',
                }}
              >
                <img
                  src="/images/kerala-assembly.jpg"
                  alt="Kerala Niyamasabha Floor"
                  style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ padding: 'var(--space-3) var(--space-4)', background: 'rgba(15, 60, 140, 0.95)', color: '#FFFFFF', fontSize: '0.8125rem', fontWeight: 600 }}>
                  Floor of the Kerala Niyamasabha — Official parliamentary debates.
                </div>
              </div>
            </div>

            <div className="col-4 col-md-6">
              <div
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  boxShadow: '0 12px 35px rgba(7, 30, 80, 0.25)',
                }}
              >
                <img
                  src="/images/civic-townhall.jpg"
                  alt="Civic Townhall Janamaithri Conference"
                  style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ padding: 'var(--space-3) var(--space-4)', background: 'rgba(15, 60, 140, 0.95)', color: '#FFFFFF', fontSize: '0.8125rem', fontWeight: 600 }}>
                  Kerala Janasabha Civic Conference — People's dialogue for progress.
                </div>
              </div>
            </div>

            <div className="col-4 col-md-12">
              <div
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  boxShadow: '0 12px 35px rgba(7, 30, 80, 0.25)',
                }}
              >
                <img
                  src="/images/bridge-project.jpg"
                  alt="Regional River Corridor & Highway"
                  style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ padding: 'var(--space-3) var(--space-4)', background: 'rgba(15, 60, 140, 0.95)', color: '#FFFFFF', fontSize: '0.8125rem', fontWeight: 600 }}>
                  Field inspection — Reviewing public works quality and execution milestones.
                </div>
              </div>
            </div>
          </ResponsiveGrid>
        </Container>
      </Section>

      {/* ====================================================================
          10. CONTACT & OFFICE DIRECTORY
          ==================================================================== */}
      <Section padding="xl" background="transparent">
        <Container>
          <SectionHeader
            eyebrow="Office Directory"
            title="Connect with the MLA Office"
            description="Direct communication channels for constituents, civil society delegations, and official administrative inquiries."
          />

          <ResponsiveGrid columns={12} gap="lg">
            {/* Constituency Headquarters */}
            <div
              className="col-6 col-md-12"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: 'var(--space-8)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.22)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                boxShadow: '0 12px 35px rgba(7, 30, 80, 0.25)',
              }}
            >
              <div className="text-eyebrow" style={{ color: 'var(--color-accent-green)', marginBottom: 'var(--space-2)' }}>
                Primary Constituency Office
              </div>
              <h3 style={{ color: '#FFFFFF', marginBottom: 'var(--space-4)', fontSize: '1.375rem', fontWeight: 700 }}>
                Constituency Headquarters
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-4)',
                  fontSize: 'var(--text-sm)',
                  color: '#F1F5F9',
                  marginBottom: 'var(--space-6)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <IconLocation
                    size={18}
                    style={{ color: 'var(--color-accent-green)', marginTop: '2px', flexShrink: 0 }}
                  />
                  <div>
                    <strong style={{ color: '#FFFFFF' }}>Address:</strong>
                    <br />
                    Office of Adv. Fysal Babu MLA
                    <br />
                    Civil Station Road, Constituency Headquarters
                    <br />
                    Kerala, PIN: 676 000
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <IconPhone size={18} style={{ color: 'var(--color-accent-green)', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#FFFFFF' }}>Landline:</strong>{' '}
                    <a
                      href="tel:+914830000000"
                      style={{ color: 'var(--color-accent-yellow)', fontWeight: 700, textDecoration: 'underline' }}
                    >
                      +91 483 0000000
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <IconMail size={18} style={{ color: 'var(--color-accent-green)', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#FFFFFF' }}>Email:</strong>{' '}
                    <a
                      href="mailto:office@advfysalbabu.in"
                      style={{ color: 'var(--color-accent-yellow)', fontWeight: 700, textDecoration: 'underline' }}
                    >
                      office@advfysalbabu.in
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <IconCalendar
                    size={18}
                    style={{ color: 'var(--color-accent-green)', marginTop: '2px', flexShrink: 0 }}
                  />
                  <div>
                    <strong style={{ color: '#FFFFFF' }}>Public Visiting Hours:</strong>
                    <br />
                    Monday – Saturday: 09:30 AM – 01:30 PM & 03:00 PM – 05:30 PM
                  </div>
                </div>
              </div>

              <Link to="/contact" className="btn btn--primary btn--sm">
                Get Office Directions
              </Link>
            </div>

            {/* State Capital Office */}
            <div
              className="col-6 col-md-12"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: 'var(--space-8)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.22)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                boxShadow: '0 12px 35px rgba(7, 30, 80, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div className="text-eyebrow" style={{ color: 'var(--color-accent-green)', marginBottom: 'var(--space-2)' }}>
                  State Capital Office
                </div>
                <h3 style={{ color: '#FFFFFF', marginBottom: 'var(--space-4)', fontSize: '1.375rem', fontWeight: 700 }}>
                  Thiruvananthapuram Assembly Office
                </h3>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-4)',
                    fontSize: 'var(--text-sm)',
                    color: '#F1F5F9',
                    marginBottom: 'var(--space-6)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                    <IconLocation
                      size={18}
                      style={{ color: 'var(--color-accent-green)', marginTop: '2px', flexShrink: 0 }}
                    />
                    <div>
                      <strong style={{ color: '#FFFFFF' }}>Address:</strong>
                      <br />
                      Room No. 312, Members' Hostel (Old Block)
                      <br />
                      Legislative Assembly Complex, Vikas Bhavan P.O.
                      <br />
                      Thiruvananthapuram, Kerala – 695 033
                    </div>
                  </div>

                  <p style={{ lineHeight: '1.7' }}>
                    During active legislative sessions in Thiruvananthapuram, please route state department
                    memoranda and government representations through the capital assembly office.
                  </p>
                </div>
              </div>

              <div>
                <Link to="/contact" className="btn btn--secondary btn--sm">
                  Schedule an Appointment
                </Link>
              </div>
            </div>
          </ResponsiveGrid>
        </Container>
      </Section>
    </div>
  );
};
