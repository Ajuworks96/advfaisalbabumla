import React, { useState, useCallback } from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { ResponsiveGrid } from '../components/layout/ResponsiveGrid';
import { SectionHeader } from '../components/ui/SectionHeader';
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

  // Interactive state for Gallery filtering
  const [activeGalleryFilter, setActiveGalleryFilter] = useState<'all' | 'legislative' | 'development' | 'community'>('all');

  // Interactive state for Citizen Grievance Submission
  const [grievanceSubmitted, setGrievanceSubmitted] = useState<boolean>(false);
  const [citizenName, setCitizenName] = useState<string>('');
  const [citizenPhone, setCitizenPhone] = useState<string>('');
  const [citizenCategory, setCitizenCategory] = useState<string>('Infrastructure & Roads');
  const [citizenDetails, setCitizenDetails] = useState<string>('');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  /**
   * Smoothly scrolls to section target with header offset
   */
  const scrollToSection = useCallback((hash: string) => {
    const cleanHash = hash.replace(/^#/, '');
    if (!cleanHash) return;

    const target = document.getElementById(cleanHash);
    if (target) {
      const headerOffset = 76;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });

      if (window.history.pushState) {
        window.history.pushState(null, '', `#${cleanHash}`);
      }
    }
  }, []);

  const handleGrievanceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!citizenName.trim() || !citizenPhone.trim()) return;
    setGrievanceSubmitted(true);
  };

  const handleResetGrievance = () => {
    setGrievanceSubmitted(false);
    setCitizenName('');
    setCitizenPhone('');
    setCitizenDetails('');
  };

  const faqs = [
    {
      question: 'How do I lodge a citizen petition or civic grievance?',
      answer:
        'Citizens can submit grievances directly online through the "Raise an Issue" portal on this page, visit the Constituency Headquarters during regular visiting hours, or hand over representations in person at weekly Janamaithri Adalats. Each submission receives a unique digital tracking ID.',
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
    <div className="site-page-container">
      {/* ====================================================================
          1. HOME / HERO (#home)
          Off-White with Minimal Blue & Calicut South Elements
          Left: Sri Fysal Babu MLA Portrait (Integrated, Chair Removed, Hands Free)
          Right: Editorial Leadership Typography, Malayalam Lead & Direct CTAs
          ==================================================================== */}
      <section className="hero-light-section" id="home">
        {/* Subtle Calicut South Landmark Watermark & Minimal Blue Ambient Glow */}
        <div className="hero-light-section__bg-watermark" />
        <div className="hero-light-section__ambient-glow" />

        <Container style={{ position: 'relative', zIndex: 3 }}>
          <div className="hero-light-grid">
            {/* Left Column: Sri Fysal Babu MLA Official HD Cutout Portrait */}
            <div className="hero-light-leader">
              <div className="hero-light-leader__halo" />
              
              {/* Floating Leadership Credential Chip placed cleanly above portrait */}
              <div className="hero-light-leader__badge-float">
                <span className="hero-light-leader__badge-star">★</span>
                <span>Adv. Fysal Babu MLA</span>
                <span className="hero-light-leader__badge-sep">•</span>
                <span className="hero-light-leader__badge-constituency">കോഴിക്കോട് സൗത്ത്</span>
              </div>

              <div className="hero-light-leader__portrait-wrapper">
                <img
                  src="/images/fysal-babu-mla-hd.png"
                  alt="Adv. Fysal Babu MLA - Member of Legislative Assembly, Kozhikode South"
                  className="hero-light-leader__img"
                  width={520}
                  height={620}
                  loading="eager"
                />
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

              {/* Malayalam Poster Lead */}
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
                <a
                  href="#citizen-services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('citizen-services');
                  }}
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
                </a>
                <a
                  href="#development"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('development');
                  }}
                  className="btn btn--secondary btn--lg"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#0A2858',
                    borderColor: '#CBD5E1',
                    boxShadow: '0 4px 14px rgba(10, 42, 102, 0.08)',
                  }}
                >
                  Explore Priority Works
                </a>
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
      </section>

      {/* Seamless Fluid Gradient Transition Flow: Pure White melting smoothly into Royal Blue (Zero Cutting) */}
      <div className="hero-seamless-transition" aria-hidden="true" />

      {/* Unified Royal Blue Canvas with Minimal Civic & Architectural Elements */}
      <div className="page-canvas-fluid">
        {/* Minimal Subtle Background Elements (Breaks Monotony while Preserving Blue Identity) */}
        <div className="page-canvas-fluid__grid" aria-hidden="true" />
        <div className="page-canvas-fluid__glow-cyan" aria-hidden="true" />
        <div className="page-canvas-fluid__glow-green" aria-hidden="true" />
        <div className="page-canvas-fluid__glow-gold" aria-hidden="true" />
        <div className="page-canvas-fluid__rings" aria-hidden="true" />

      {/* ====================================================================
          2. ABOUT THE MLA (#about)
          Vision & Democratic Stewardship (Manifesto Charter Showcase)
          ==================================================================== */}
      <Section id="about" padding="xl" background="transparent">
        <Container>
          <div className="editorial-split editorial-split--40-60" style={{ alignItems: 'center', gap: 'var(--space-12)' }}>
            {/* Left: Printed Manifesto Document Paper */}
            <div>
              <div className="manifesto-doc">
                <div className="manifesto-doc__header">
                  <div>
                    <span className="manifesto-doc__tag">OFFICIAL CHARTER</span>
                    <h3 className="manifesto-doc__title">16th KLA • KOZHIKODE SOUTH</h3>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>TERM</span>
                    <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#0F172A' }}>2026–2031</div>
                  </div>
                </div>

                <div className="manifesto-doc__body">
                  Advocate Fysal Babu serves with an unwavering mandate for constitutional accountability,
                  speedy infrastructure delivery, high-grade public education, and modern healthcare facilities
                  for every family in Kozhikode South.
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: '0.875rem', color: '#1E293B', fontWeight: 600 }}>
                    <IconCheck size={16} style={{ color: '#059669' }} />
                    <span>Total Accountability & Transparent MLA-ADS Fund Utilization</span>
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
                Through the &quot;Future Calicut 360&quot; framework, strategic priorities are established across
                modern healthcare centers, high-tech schools, clean drinking water, and comprehensive
                coastal development.
              </p>

              <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <a
                  href="#development"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('development');
                  }}
                  className="btn btn--secondary btn--lg"
                >
                  Explore Priority Works
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="btn btn--ghost btn--lg"
                  style={{ color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.4)' }}
                >
                  Constituency Office
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          3. CONSTITUENCY PROFILE (#constituency)
          Five Sectors in Focus (Dynamic Sector Cards)
          ==================================================================== */}
      <Section id="constituency" padding="xl" background="transparent">
        <Container>
          <SectionHeader
            eyebrow="Key Strategic Pillars"
            title="Five Sectors in Focus"
            description="Targeted developmental interventions addressing systemic community requirements across Kozhikode South."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-6)' }}>
            {/* Sector 1: Health */}
            <div className="col-2 col-md-4 col-sm-6">
              <div className="sector-card">
                <div className="sector-card__icon-box">
                  <span style={{ fontSize: '1.75rem' }}>🏥</span>
                </div>
                <h3 className="sector-card__title">Modern Healthcare & CHC</h3>
                <p className="sector-card__desc">
                  24/7 casualty modernization, specialized maternal wings, and free pharmacy stock guarantees.
                </p>
                <div className="sector-card__stat">
                  ₹28 Cr Sanctioned
                </div>
              </div>
            </div>

            {/* Sector 2: Education */}
            <div className="col-2 col-md-4 col-sm-6">
              <div className="sector-card">
                <div className="sector-card__icon-box" style={{ background: 'rgba(250, 204, 21, 0.2)', borderColor: 'rgba(250, 204, 21, 0.4)' }}>
                  <span style={{ fontSize: '1.75rem' }}>🎓</span>
                </div>
                <h3 className="sector-card__title">High-Tech Public Schools</h3>
                <p className="sector-card__desc">
                  Smart interactive classrooms, advanced robotics & STEM labs, and modern sports facilities.
                </p>
                <div className="sector-card__stat" style={{ color: 'var(--color-accent-yellow)' }}>
                  14 Schools Upgraded
                </div>
              </div>
            </div>

            {/* Sector 3: Coastal */}
            <div className="col-2 col-md-4 col-sm-6">
              <div className="sector-card">
                <div className="sector-card__icon-box" style={{ background: 'rgba(56, 189, 248, 0.2)', borderColor: 'rgba(56, 189, 248, 0.4)' }}>
                  <span style={{ fontSize: '1.75rem' }}>🌊</span>
                </div>
                <h3 className="sector-card__title">Coastal & Port Infrastructure</h3>
                <p className="sector-card__desc">
                  Permanent sea-wall reinforcements, modernized fish landing harbors, and fisherfolk welfare hubs.
                </p>
                <div className="sector-card__stat" style={{ color: '#38BDF8' }}>
                  Mission Samudra
                </div>
              </div>
            </div>

            {/* Sector 4: Youth & Employment */}
            <div className="col-2 col-md-4 col-sm-6">
              <div className="sector-card">
                <div className="sector-card__icon-box" style={{ background: 'rgba(168, 85, 247, 0.2)', borderColor: 'rgba(168, 85, 247, 0.4)' }}>
                  <span style={{ fontSize: '1.75rem' }}>⚡</span>
                </div>
                <h3 className="sector-card__title">Youth Empowerment & Sports</h3>
                <p className="sector-card__desc">
                  Skill development bootcamps, competitive civil exam coaching, and synthetic turf turf arenas.
                </p>
                <div className="sector-card__stat" style={{ color: '#C084FC' }}>
                  Youth Skill Hub
                </div>
              </div>
            </div>

            {/* Sector 5: Water & Environment */}
            <div className="col-2 col-md-4 col-sm-12">
              <div className="sector-card">
                <div className="sector-card__icon-box" style={{ background: 'rgba(239, 68, 68, 0.2)', borderColor: 'rgba(239, 68, 68, 0.4)' }}>
                  <span style={{ fontSize: '1.75rem' }}>💧</span>
                </div>
                <h3 className="sector-card__title">Clean Water & Sanitation</h3>
                <p className="sector-card__desc">
                  Jal Jeevan piped tap connections, urban drainage overhaul, and decentralized purification tanks.
                </p>
                <div className="sector-card__stat" style={{ color: '#FCA5A5' }}>
                  ₹4.8 Cr KWA Water Scheme Underway
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          4. DEVELOPMENT / PROJECTS (#development)
          Priority Development Projects (Real Photographs with Progress)
          ==================================================================== */}
      <Section id="development" padding="xl" background="transparent">
        <Container>
          <SectionHeader
            eyebrow="Public Works in Progress"
            title="Featured Development Projects"
            description="Major infrastructure initiatives sanctioned under the MLA Asset Development Scheme (MLA-ADS), Special Development Funds, and departmental allocations."
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
                  <span style={{ color: 'var(--color-accent-green)', fontSize: '0.875rem', fontWeight: 600 }}>
                    ₹14.5 Cr Project Allocation
                  </span>
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
                  <span style={{ color: 'var(--color-accent-yellow)', fontSize: '0.875rem', fontWeight: 600 }}>
                    ₹28.2 Cr Sanctioned Works
                  </span>
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
                  <span style={{ color: '#38BDF8', fontSize: '0.875rem', fontWeight: 600 }}>
                    ₹65.0 Cr Infrastructure Scheme
                  </span>
                </div>
              </div>
            </div>
          </ResponsiveGrid>
        </Container>
      </Section>

      {/* ====================================================================
          5. LATEST UPDATES & OFFICIAL DISPATCHES (#updates)
          ==================================================================== */}
      <Section id="updates" padding="xl" background="transparent">
        <Container>
          <SectionHeader
            eyebrow="Official Dispatches & Media Room"
            title="Press Statements & Latest Updates"
            description="Authoritative announcements, developmental policy decisions, and verified commentary from the office of Adv. Fysal Babu MLA."
          />

          <ResponsiveGrid columns={12} gap="lg">
            {/* Update 1 */}
            <div className="col-4 col-md-6 col-sm-12">
              <div
                className="sector-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-6)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      color: 'var(--color-accent-green)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Constituency Gazette
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#CBD5E1' }}>28 Sep 2026</span>
                </div>
                <h3 style={{ fontSize: '1.1875rem', color: '#FFFFFF', marginBottom: 'var(--space-2)', fontWeight: 700, lineHeight: '1.4' }}>
                  Future Calicut 360: Action Plan for Kozhikode South Conclave Announced
                </h3>
                <p style={{ color: '#F1F5F9', fontSize: '0.9375rem', lineHeight: '1.6', marginBottom: 'var(--space-4)', flexGrow: 1 }}>
                  Comprehensive public development blueprint focusing on smart public schooling, coastal economic resilience, and decentralized health centers.
                </p>
                <div style={{ paddingTop: 'var(--space-3)', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-accent-yellow)', fontWeight: 600 }}>
                    Official Press Statement →
                  </span>
                </div>
              </div>
            </div>

            {/* Update 2 */}
            <div className="col-4 col-md-6 col-sm-12">
              <div
                className="sector-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-6)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      color: '#38BDF8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Mission Samudra
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#CBD5E1' }}>22 Sep 2026</span>
                </div>
                <h3 style={{ fontSize: '1.1875rem', color: '#FFFFFF', marginBottom: 'var(--space-2)', fontWeight: 700, lineHeight: '1.4' }}>
                  Modernization of Beypore Port & Coastal Fish Landing Facilities Sanctioned
                </h3>
                <p style={{ color: '#F1F5F9', fontSize: '0.9375rem', lineHeight: '1.6', marginBottom: 'var(--space-4)', flexGrow: 1 }}>
                  Special allocation approved under coastal infrastructure development for cold storage augmentation and modernized wharf safety amenities.
                </p>
                <div style={{ paddingTop: 'var(--space-3)', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-accent-yellow)', fontWeight: 600 }}>
                    Official Press Statement →
                  </span>
                </div>
              </div>
            </div>

            {/* Update 3 */}
            <div className="col-4 col-md-12 col-sm-12">
              <div
                className="sector-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-6)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      color: 'var(--color-accent-yellow)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Public Education
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#CBD5E1' }}>15 Sep 2026</span>
                </div>
                <h3 style={{ fontSize: '1.1875rem', color: '#FFFFFF', marginBottom: 'var(--space-2)', fontWeight: 700, lineHeight: '1.4' }}>
                  Smart Classrooms & STEM Labs: Phase 2 Equipment Delivery
                </h3>
                <p style={{ color: '#F1F5F9', fontSize: '0.9375rem', lineHeight: '1.6', marginBottom: 'var(--space-4)', flexGrow: 1 }}>
                  Delivery of interactive smart displays, computer hardware, and biology lab consumables across 12 high schools in Kozhikode South completed.
                </p>
                <div style={{ paddingTop: 'var(--space-3)', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-accent-yellow)', fontWeight: 600 }}>
                    Official Press Statement →
                  </span>
                </div>
              </div>
            </div>
          </ResponsiveGrid>
        </Container>
      </Section>

      {/* ====================================================================
          6. UPCOMING EVENTS & PUBLIC DIARY (#events)
          ==================================================================== */}
      <Section id="events" padding="xl" background="transparent">
        <Container>
          <SectionHeader
            eyebrow="Public Diary"
            title="Upcoming Events & Janamaithri Sittings"
            description="Open citizen grievance adalats, field inspections, development reviews, and institutional inaugurations."
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
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="btn btn--secondary btn--sm"
                >
                  Office Location
                </a>
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
                <a
                  href="#development"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('development');
                  }}
                  className="btn btn--secondary btn--sm"
                >
                  Project Details
                </a>
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
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="btn btn--secondary btn--sm"
                >
                  Directions
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          7. GALLERY / MEDIA (#gallery)
          Official Photo & Media Archive (Real High-Res Imagery)
          ==================================================================== */}
      <Section id="gallery" padding="xl" background="transparent">
        <Container>
          <SectionHeader
            eyebrow="Visual Documentation"
            title="Official Photo & Media Archive"
            description="High-resolution photographic documentation recording assembly debates, ground-level inspections, and citizen dialogues."
          />

          {/* Interactive Category Filter Pills */}
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: 'var(--space-6)' }}>
            {(['all', 'legislative', 'development', 'community'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveGalleryFilter(cat)}
                className={`badge-pill ${
                  activeGalleryFilter === cat ? 'badge-pill--green' : 'badge-pill--glass'
                }`}
                style={{
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  fontSize: '0.8125rem',
                  padding: '6px 14px',
                  textTransform: 'capitalize',
                  fontWeight: 600,
                }}
              >
                {cat === 'all' ? 'All Archival Photos' : cat}
              </button>
            ))}
          </div>

          <ResponsiveGrid columns={12} gap="lg">
            {(activeGalleryFilter === 'all' || activeGalleryFilter === 'legislative') && (
              <div className="col-4 col-md-6 col-sm-12">
                <div
                  style={{
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.22)',
                    boxShadow: '0 12px 35px rgba(7, 30, 80, 0.25)',
                    background: 'rgba(15, 60, 140, 0.4)',
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
            )}

            {(activeGalleryFilter === 'all' || activeGalleryFilter === 'community') && (
              <div className="col-4 col-md-6 col-sm-12">
                <div
                  style={{
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.22)',
                    boxShadow: '0 12px 35px rgba(7, 30, 80, 0.25)',
                    background: 'rgba(15, 60, 140, 0.4)',
                  }}
                >
                  <img
                    src="/images/civic-townhall.jpg"
                    alt="Civic Townhall Janamaithri Conference"
                    style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ padding: 'var(--space-3) var(--space-4)', background: 'rgba(15, 60, 140, 0.95)', color: '#FFFFFF', fontSize: '0.8125rem', fontWeight: 600 }}>
                    Kerala Janasabha Civic Conference — People&apos;s dialogue for progress.
                  </div>
                </div>
              </div>
            )}

            {(activeGalleryFilter === 'all' || activeGalleryFilter === 'development') && (
              <div className="col-4 col-md-12 col-sm-12">
                <div
                  style={{
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.22)',
                    boxShadow: '0 12px 35px rgba(7, 30, 80, 0.25)',
                    background: 'rgba(15, 60, 140, 0.4)',
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
            )}
          </ResponsiveGrid>
        </Container>
      </Section>

      {/* ====================================================================
          8. ASSEMBLY WORK (#assembly)
          Assembly Stewardship & Key Panels (Kerala Niyamasabha Parliamentary Record)
          ==================================================================== */}
      <Section id="assembly" padding="xl" background="transparent">
        <Container>
          <div className="editorial-split editorial-split--50-50" style={{ alignItems: 'center', gap: 'var(--space-10)' }}>
            {/* Left: Real Assembly Photograph */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 20px 50px rgba(7, 30, 80, 0.4)',
                  position: 'relative',
                }}
              >
                <img
                  src="/images/kerala-assembly.jpg"
                  alt="Kerala Legislative Assembly Chamber"
                  style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(7, 30, 80, 0.95) 0%, transparent 100%)',
                    padding: 'var(--space-6)',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-heading)', color: '#FFFFFF', fontWeight: 700, fontSize: '1.125rem' }}>
                    Kerala Legislative Assembly Chamber
                  </div>
                  <div style={{ color: 'var(--color-accent-green)', fontSize: '0.8125rem', fontWeight: 600 }}>
                    16th Niyamasabha Active Member • Thiruvananthapuram
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Legislative Record Data */}
            <div>
              <div className="text-eyebrow" style={{ color: 'var(--color-accent-green)', marginBottom: 'var(--space-2)' }}>
                Legislative Accountability
              </div>
              <h2
                style={{
                  color: '#FFFFFF',
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  lineHeight: '1.2',
                  marginBottom: 'var(--space-4)',
                }}
              >
                On the Floor of the <span className="highlight-yellow">Niyamasabha</span>
              </h2>
              <p
                style={{
                  color: '#F1F5F9',
                  fontSize: '1.0625rem',
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
                    Legislative Questions (Starred &amp; Unstarred)
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: '#CBD5E1', marginTop: '2px' }}>
                    Key queries regarding healthcare infrastructure, rural road allocations, and flood embankment works.
                  </div>
                </div>

                <div style={{ borderLeft: '3px solid var(--color-accent-yellow)', paddingLeft: 'var(--space-4)' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-sm)', color: '#FFFFFF' }}>
                    Rule 304 Submissions &amp; Call Attention Motions
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: '#CBD5E1', marginTop: '2px' }}>
                    Direct urgent constituency representations moved before relevant cabinet ministers.
                  </div>
                </div>

                <div style={{ borderLeft: '3px solid #38BDF8', paddingLeft: 'var(--space-4)' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-sm)', color: '#FFFFFF' }}>
                    Subject Committee Memberships
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: '#CBD5E1', marginTop: '2px' }}>
                    Active scrutiny of department budget grants and statutory regulatory bills.
                  </div>
                </div>
              </div>

              {/* Stat badges */}
              <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <span className="badge-pill badge-pill--green">
                  48+ Assembly Questions
                </span>
                <span className="badge-pill badge-pill--yellow">
                  12 Motions Moved
                </span>
                <span className="badge-pill badge-pill--glass">
                  100% Session Attendance
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ====================================================================
          9. CITIZEN SERVICES & RAISE AN ISSUE (#citizen-services)
          Direct Citizen Grievance Redressal Desk + FAQ Desk
          ==================================================================== */}
      <Section id="citizen-services" padding="xl" background="transparent">
        <Container>
          {/* Part A: Grievance Desk */}
          <div className="editorial-split editorial-split--50-50" style={{ alignItems: 'flex-start', gap: 'var(--space-10)', marginBottom: 'var(--space-16)' }}>
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

            {/* Right: Interactive Public Grievance Portal Card */}
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

                {grievanceSubmitted ? (
                  <div
                    style={{
                      background: 'rgba(5, 150, 105, 0.25)',
                      border: '1px solid rgba(5, 150, 105, 0.6)',
                      borderRadius: 'var(--radius-md)',
                      padding: 'var(--space-6)',
                      textAlign: 'center',
                      color: '#FFFFFF',
                    }}
                  >
                    <div style={{ fontSize: '2rem', marginBottom: 'var(--space-2)' }}>✅</div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 'var(--space-2)' }}>
                      Grievance Protocol Registered!
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: '#E2E8F0', marginBottom: 'var(--space-4)', lineHeight: '1.6' }}>
                      Token <strong>#KZD-2026-8842</strong> generated for <strong>{citizenName}</strong> ({citizenPhone}).
                      Direct notification will be dispatched within 48 hours.
                    </p>
                    <button
                      type="button"
                      onClick={handleResetGrievance}
                      className="btn btn--secondary btn--sm"
                    >
                      Submit Another Grievance
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleGrievanceSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    <div>
                      <label htmlFor="citizen-name" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#F1F5F9', marginBottom: '6px' }}>
                        Full Name *
                      </label>
                      <input
                        id="citizen-name"
                        type="text"
                        required
                        value={citizenName}
                        onChange={(e) => setCitizenName(e.target.value)}
                        placeholder="Enter your name"
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          background: 'rgba(255, 255, 255, 0.95)',
                          color: '#0F172A',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                        }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
                      <div>
                        <label htmlFor="citizen-phone" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#F1F5F9', marginBottom: '6px' }}>
                          Phone Number *
                        </label>
                        <input
                          id="citizen-phone"
                          type="tel"
                          required
                          value={citizenPhone}
                          onChange={(e) => setCitizenPhone(e.target.value)}
                          placeholder="+91 Mobile number"
                          style={{
                            width: '100%',
                            padding: '10px 14px',
                            borderRadius: 'var(--radius-xs)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            background: 'rgba(255, 255, 255, 0.95)',
                            color: '#0F172A',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                          }}
                        />
                      </div>

                      <div>
                        <label htmlFor="citizen-category" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#F1F5F9', marginBottom: '6px' }}>
                          Category
                        </label>
                        <select
                          id="citizen-category"
                          value={citizenCategory}
                          onChange={(e) => setCitizenCategory(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px 14px',
                            borderRadius: 'var(--radius-xs)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            background: 'rgba(255, 255, 255, 0.95)',
                            color: '#0F172A',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                          }}
                        >
                          <option value="Infrastructure & Roads">Infrastructure & Roads</option>
                          <option value="Drinking Water & KWA">Drinking Water & KWA</option>
                          <option value="Public School Assistance">Public School Assistance</option>
                          <option value="Healthcare & CHC Aid">Healthcare & CHC Aid</option>
                          <option value="Electricity & Lighting">Electricity & Lighting</option>
                          <option value="General Community Petition">General Community Petition</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="citizen-details" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#F1F5F9', marginBottom: '6px' }}>
                        Petition Summary & Location Details
                      </label>
                      <textarea
                        id="citizen-details"
                        rows={3}
                        value={citizenDetails}
                        onChange={(e) => setCitizenDetails(e.target.value)}
                        placeholder="Briefly state your concern and locality/ward..."
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          background: 'rgba(255, 255, 255, 0.95)',
                          color: '#0F172A',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn--primary btn--lg"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span>Submit Grievance to MLA Office</span>
                      <IconArrowRight size={18} />
                    </button>
                  </form>
                )}

                <div
                  style={{
                    marginTop: 'var(--space-5)',
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

          {/* Part B: Citizen FAQ Desk */}
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
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="btn btn--primary btn--sm"
                >
                  Contact Office Desk
                </a>
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
          10. CONTACT & OFFICE DIRECTORY (#contact)
          ==================================================================== */}
      <Section id="contact" padding="xl" background="transparent">
        <Container>
          <SectionHeader
            eyebrow="Office Directory"
            title="Constituency Headquarters & Capital Office"
            description="Dedicated contact channels and citizen visit hours for official representations and public meetings."
          />

          <ResponsiveGrid columns={12} gap="lg">
            {/* Kozhikode South Main Office */}
            <div className="col-6 col-md-12">
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  padding: 'var(--space-8)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  boxShadow: '0 15px 35px rgba(7, 30, 80, 0.25)',
                  height: '100%',
                }}
              >
                <div className="text-eyebrow" style={{ color: 'var(--color-accent-green)', marginBottom: 'var(--space-2)' }}>
                  Constituency Headquarters
                </div>
                <h3 style={{ color: '#FFFFFF', marginBottom: 'var(--space-4)', fontSize: '1.375rem', fontWeight: 700 }}>
                  MLA Constituency Secretariat
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', color: '#CBD5E1', fontSize: 'var(--text-sm)' }}>
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
                      Kozhikode South, Kerala, PIN: 673 020
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
                      Monday to Saturday: 09:30 AM – 01:30 PM &amp; 03:00 PM – 05:30 PM
                      <br />
                      <span style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>
                        (Prior appointment recommended for delegations)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thiruvananthapuram State Capital Office */}
            <div className="col-6 col-md-12">
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  padding: 'var(--space-8)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  boxShadow: '0 15px 35px rgba(7, 30, 80, 0.25)',
                  height: '100%',
                }}
              >
                <div className="text-eyebrow" style={{ color: 'var(--color-accent-yellow)', marginBottom: 'var(--space-2)' }}>
                  State Capital
                </div>
                <h3 style={{ color: '#FFFFFF', marginBottom: 'var(--space-4)', fontSize: '1.375rem', fontWeight: 700 }}>
                  Legislative Assembly Office
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', color: '#CBD5E1', fontSize: 'var(--text-sm)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                    <IconLocation
                      size={18}
                      style={{ color: 'var(--color-accent-yellow)', marginTop: '2px', flexShrink: 0 }}
                    />
                    <div>
                      <strong style={{ color: '#FFFFFF' }}>Address:</strong>
                      <br />
                      Room No. 312, Members&apos; Hostel (Old Block)
                      <br />
                      Legislative Assembly Complex, Vikas Bhavan P.O.
                      <br />
                      Thiruvananthapuram, Kerala, PIN: 695 033
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <IconPhone size={18} style={{ color: 'var(--color-accent-yellow)', flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: '#FFFFFF' }}>Hostel Office:</strong>{' '}
                      <a
                        href="tel:+914712512000"
                        style={{ color: 'var(--color-accent-yellow)', fontWeight: 700, textDecoration: 'underline' }}
                      >
                        +91 471 2512000
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                    <IconCalendar
                      size={18}
                      style={{ color: 'var(--color-accent-yellow)', marginTop: '2px', flexShrink: 0 }}
                    />
                    <div>
                      <strong style={{ color: '#FFFFFF' }}>Availability:</strong>
                      <br />
                      During active assembly sessions and legislative committee sittings.
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 'var(--space-6)',
                    padding: 'var(--space-4)',
                    background: 'rgba(250, 204, 21, 0.1)',
                    border: '1px solid rgba(250, 204, 21, 0.3)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8125rem',
                    color: '#F1F5F9',
                  }}
                >
                  <p style={{ lineHeight: '1.7' }}>
                    Citizens visiting the capital can schedule appointments via the constituency office desk.
                  </p>
                </div>
              </div>
            </div>
          </ResponsiveGrid>
        </Container>
      </Section>
      </div>
    </div>
  );
};
