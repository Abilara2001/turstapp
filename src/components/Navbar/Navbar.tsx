import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import './navbar.css';

export function Navbar(): JSX.Element {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<header className="navbar">
			<div className="nav-inner">
				<NavLink to="/" className="brand" onClick={closeMobileMenu}>
					<Heart size={20} />
					<span>Charity Trust</span>
				</NavLink>
				
				<nav className="links">
					<NavLink to="/" end>Home</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/causes">Causes</NavLink>
					<NavLink to="/donate">Donate</NavLink>
					<NavLink to="/members">Members</NavLink>
					<NavLink to="/gallery">Gallery</NavLink>
					<NavLink to="/contact">Contact</NavLink>
				</nav>

				<button 
					className="mobile-menu-toggle" 
					onClick={toggleMobileMenu}
					aria-label="Toggle mobile menu"
				>
					{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>

				<nav className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
					<NavLink to="/" end onClick={closeMobileMenu}>Home</NavLink>
					<NavLink to="/about" onClick={closeMobileMenu}>About</NavLink>
					<NavLink to="/causes" onClick={closeMobileMenu}>Causes</NavLink>
					<NavLink to="/donate" onClick={closeMobileMenu}>Donate</NavLink>
					<NavLink to="/members" onClick={closeMobileMenu}>Members</NavLink>
					<NavLink to="/gallery" onClick={closeMobileMenu}>Gallery</NavLink>
					<NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
				</nav>
			</div>
		</header>
	);
}
