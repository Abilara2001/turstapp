import React from 'react';
import { Hero } from '../components/Hero/Hero';
import { Button } from '../components/common/Button';
import { CauseCard } from '../components/Card/CauseCard';
import { causes } from '../data/causes';

export function HomePage(): JSX.Element {
	return (
		<div>
			<Hero
				title="Together, we can make a difference"
				subtitle="Join us in empowering communities through education, health, and the environment."
				cta={<Button onClick={() => (window.location.href = '/donate')}>Donate Now</Button>}
			/>
			<section className="section">
				<h2 className="section-title">Our Mission</h2>
				<p className="section-text">
					We strive to create sustainable change by focusing on quality education, accessible
					healthcare, and a greener environment.
				</p>
			</section>
			<section className="section">
				<h2 className="section-title">Featured Causes</h2>
				<div className="grid">
					{causes.slice(0, 3).map(cause => (
						<CauseCard key={cause.id} cause={cause} />
					))}
				</div>
			</section>
		</div>
	);
}
