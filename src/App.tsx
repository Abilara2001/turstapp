import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CausesPage } from './pages/CausesPage';
import { DonatePage } from './pages/DonatePage';
import { MembersPage } from './pages/MembersPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App(): JSX.Element {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/causes" element={<CausesPage />} />
				<Route path="/donate" element={<DonatePage />} />
				<Route path="/members" element={<MembersPage />} />
				<Route path="/gallery" element={<GalleryPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</Layout>
	);
} 
