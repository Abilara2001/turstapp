import React from 'react';

export function AboutPage(): JSX.Element {
	return (
		<div className="section">
			<h2 className="section-title">About Us</h2>
			<p className="section-text">
				Founded in 2010, Charity Trust is dedicated to uplifting underserved communities through
				sustainable programs in education, health, and environmental stewardship.
			</p>
			<div className="grid two">
				<div>
					<h3>Vision</h3>
					<p>A world where every individual has equal access to opportunities and well-being.</p>
				</div>
				<div>
					<h3>Mission</h3>
					<p>To empower communities by providing resources, education, and support systems.</p>
				</div>
			</div>
			<div className="section">
				<h3>Founders</h3>
				<ul className="list">
					<li>Alex Sharma — Chairman</li>
					<li>Maria Gomez — Co-Founder</li>
					<li>David Khan — Co-Founder</li>
				</ul>
			</div>
		</div>
	);
}
