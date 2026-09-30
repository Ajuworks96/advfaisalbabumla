# Adv. Fysal Babu MLA — Official Public Office & Constituency Portal

A state-of-the-art, high-performance public office website and citizen portal built for **Adv. Fysal Babu MLA** (Member of the Legislative Assembly, Kerala).

Designed with a modern, lightweight, high-trust visual language inspired by the vibrant royal/cobalt blue gradients of *Future Calicut 360*, featuring frosted glassmorphism surfaces, crisp bilingual typography (English & Malayalam), photorealistic civic assets, and an interactive Citizen Grievance Portal.

---

## 🏛️ Key Features

- **Institutional Identity & Credential Showcase**: Verified 15th Kerala Legislative Assembly credential card, official charter, and legislative mandate.
- **Constituency Priority & Live Metrics**: Dynamic metrics strip tracking developmental sanctions (₹240 Cr+), resolved citizen grievances (1,850+), and legislative motions (48+).
- **Featured Infrastructure Projects**: Interactive showcase of major public works (High-Tech School Modernization, CHC Casualty & Diagnostic Upgrade, Regional Link Bridge & Corridors) complete with live execution progress indicators.
- **Democratic Stewardship & Legislative Record**: Archive of starred/unstarred questions, Rule 304 calling-attention submissions, and legislative interventions on the floor of the Kerala Niyamasabha.
- **Janamaithri & Citizen Services**: Upcoming civic sittings, adalat diary, and an interactive **Citizen Grievance & Issue Submission** modal portal.
- **Constituency Headquarters & Capital Offices**: Detailed public visiting hours, contact coordinates, directions, and direct routing.
- **Responsive & Accessible**: Pixel-perfect layout across desktop, tablet, and mobile with high-contrast text and zero layout shifts.

---

## 🎨 Design System & Palette

- **Primary Canvas**: Multi-stop Royal and Sapphire Blue gradients (`#185EC8` → `#1450B0` → `#1047A0`)
- **Accents**: Luminous Golden Yellow (`#FACC15`) and Electric Emerald (`#00E599` / `#059669`)
- **Glassmorphism**: Frosted translucent backdrops with subtle 1px luminous borders (`rgba(255, 255, 255, 0.14)`) and `backdrop-filter: blur(16px)`
- **Typography**: 
  - Headings & Branding: **Poppins** (600/700/800)
  - Editorial & Body Copy: **Raleway** (400/500/600)
  - Malayalam Typography: **Anek Malayalam** / **Noto Sans Malayalam**

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS Design System with modular token architecture (`tokens.css`, `layout.css`, `components.css`)
- **CMS Integration**: Architecture ready for WordPress Headless REST API / WPGraphQL

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Ajuworks96/advfaisalbabumla.git

# Navigate into project directory
cd advfaisalbabumla

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Production Build

```bash
npm run build
```
Generates an optimized production build in the `dist/` directory.

---

## 📁 Project Structure

```
advfaisalbabumla/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── images/               # High-res Kerala civic & infrastructure photography
├── src/
│   ├── components/           # Reusable UI & Layout Components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── IssueModal.tsx    # Citizen Grievance Portal Dialog
│   │   ├── Section.tsx
│   │   └── ...
│   ├── pages/
│   │   └── HomePage.tsx      # Main Constituency & Public Office Page
│   ├── styles/
│   │   ├── tokens.css        # Color palette, gradients, typography, radius tokens
│   │   ├── layout.css        # Sections, grids, containers, responsive utilities
│   │   └── components.css    # Header, cards, buttons, modals, badges, footer
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📄 License & Attribution

Designed and developed for the official public office of Adv. Fysal Babu MLA.  
© 2026 Office of Adv. Fysal Babu MLA. All rights reserved.
