import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { BackToTop } from '../common/BackToTop';
import './layout.css';

interface LayoutProps {
	children: React.ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
	return (
		<div className="layout">
			<Navbar />
			<main className="container">{children}</main>
			<Footer />
			<BackToTop />
		</div>
	);
}
