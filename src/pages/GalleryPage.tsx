import React from 'react';
import { gallery } from '../data/gallery';

export function GalleryPage(): JSX.Element {
	return (
		<div className="section">
			<h2 className="section-title">Gallery & Events</h2>
			<div className="grid">
				{gallery.map(img => (
					<figure key={img.id} className="gallery-card">
						<img src={img.url} alt={img.caption} />
						<figcaption className="muted text-center">{img.caption}</figcaption>
					</figure>
				))}
			</div>
		</div>
	);
}
