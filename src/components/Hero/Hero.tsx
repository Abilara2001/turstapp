import React from 'react';
import './hero.css';

interface HeroProps {
	title: string;
	subtitle?: string;
	cta?: React.ReactNode;
}

export function Hero({ title, subtitle, cta }: HeroProps): JSX.Element {
	return (
		<section className="hero">
			<div className="hero-inner">
				<h1>{title}</h1>
				{subtitle && <p className="subtitle">{subtitle}</p>}
				{cta}
			</div>
		</section>
	);
}
