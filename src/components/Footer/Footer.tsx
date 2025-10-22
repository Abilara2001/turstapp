import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import './footer.css';

export function Footer(): JSX.Element {
	return (
		<footer className="footer">
			<div className="footer-inner">
				<div className="col">
					<h4>Charity Trust</h4>
					<p>Empowering communities through education, health, and environment.</p>
				</div>
				<div className="col">
					<h5>Contact</h5>
					<p><Phone size={16} /> +1 (555) 123-4567</p>
					<p><Mail size={16} /> support@charitytrust.org</p>
					<p><MapPin size={16} /> 123 Hope Ave, Kind City</p>
				</div>
				<div className="col">
					<h5>Follow</h5>
					<div className="socials">
						<a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">Twitter</a>
						<a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">Facebook</a>
						<a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a>
					</div>
				</div>
			</div>
			<div className="copy">© {new Date().getFullYear()} Charity Trust. All rights reserved.</div>
		</footer>
	);
}
