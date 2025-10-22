import React from 'react';
import { members } from '../data/members';

export function MembersPage(): JSX.Element {
	return (
		<div className="section">
			<h2 className="section-title">Our Members</h2>
			<div className="grid">
				{members.map(m => (
					<div key={m.id} className="member-card">
						<img src={m.image} alt={m.name} />
						<h3>{m.name}</h3>
						<p className="muted">{m.role}</p>
					</div>
				))}
			</div>
		</div>
	);
}
