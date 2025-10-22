import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heart } from 'lucide-react';
import './navbar.css';

export function Navbar(): JSX.Element {
	return (
		<header className="navbar">
			<div className="nav-inner">
				<NavLink to="/" className="brand">
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
			</div>
		</header>
	);
}
