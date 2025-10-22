import React from 'react';
import { causes } from '../data/causes';
import { CauseCard } from '../components/Card/CauseCard';

export function CausesPage(): JSX.Element {
	return (
		<div className="section">
			<h2 className="section-title">Our Causes</h2>
			<div className="grid">
				{causes.map(cause => (
					<CauseCard key={cause.id} cause={cause} />
				))}
			</div>
		</div>
	);
}
