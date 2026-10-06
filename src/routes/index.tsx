import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Single-Page MLA Public Office Portal */}
        <Route index element={<HomePage />} />

        {/* Backward-compatible Deep Hash Redirects */}
        <Route path="about" element={<Navigate to="/#about" replace />} />
        <Route path="constituency" element={<Navigate to="/#constituency" replace />} />
        <Route path="development" element={<Navigate to="/#development" replace />} />
        <Route path="projects" element={<Navigate to="/#development" replace />} />
        <Route path="updates" element={<Navigate to="/#updates" replace />} />
        <Route path="events" element={<Navigate to="/#events" replace />} />
        <Route path="gallery" element={<Navigate to="/#gallery" replace />} />
        <Route path="media" element={<Navigate to="/#gallery" replace />} />
        <Route path="assembly" element={<Navigate to="/#assembly" replace />} />
        <Route path="citizen-services" element={<Navigate to="/#citizen-services" replace />} />
        <Route path="services" element={<Navigate to="/#citizen-services" replace />} />
        <Route path="raise-an-issue" element={<Navigate to="/#citizen-services" replace />} />
        <Route path="grievance" element={<Navigate to="/#citizen-services" replace />} />
        <Route path="contact" element={<Navigate to="/#contact" replace />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
