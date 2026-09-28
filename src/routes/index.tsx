import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';

import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ConstituencyPage } from '../pages/ConstituencyPage';
import { DevelopmentPage } from '../pages/DevelopmentPage';
import { UpdatesPage } from '../pages/UpdatesPage';
import { EventsPage } from '../pages/EventsPage';
import { GalleryPage } from '../pages/GalleryPage';
import { AssemblyPage } from '../pages/AssemblyPage';
import { CitizenServicesPage } from '../pages/CitizenServicesPage';
import { RaiseAnIssuePage } from '../pages/RaiseAnIssuePage';
import { ContactPage } from '../pages/ContactPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="constituency" element={<ConstituencyPage />} />
        <Route path="development" element={<DevelopmentPage />} />
        <Route path="updates" element={<UpdatesPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="media" element={<GalleryPage />} />
        <Route path="assembly" element={<AssemblyPage />} />
        <Route path="citizen-services" element={<CitizenServicesPage />} />
        <Route path="raise-an-issue" element={<RaiseAnIssuePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
