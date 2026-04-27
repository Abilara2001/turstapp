import React from 'react';
import { causes } from '../data/causes';
import { CauseCard } from '../components/Card/CauseCard';

export function CausesPage(): React.ReactElement {
	return (
		<div className="section">
			<h2 className="section-title">Our Causes(oc)</h2>
			<div className="grid">
				{causes.map(cause => (
					<CauseCard key={cause.id} cause={cause} />
				))}
			</div>
		</div>
	);
}
