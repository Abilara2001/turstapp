import React from 'react';
import './card.css';
import { Button } from '../common/Button';
import type { Cause } from '../../types/models';

interface Props {
	cause: Cause;
}

export function CauseCard({ cause }: Props): JSX.Element {
	return (
		<div className="card">
			<img src={cause.image} alt={cause.title} className="card-img" />
			<div className="card-body">
				<h3>{cause.title}</h3>
				<p>{cause.description}</p>
				<div className="actions"><Button onClick={() => {}} aria-label={`Donate to ${cause.title}`}>Donate</Button></div>
			</div>
		</div>
	);
}
