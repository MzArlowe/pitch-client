import React, { useState } from 'react';
import { NavbarData } from './NavbarData';
import './Navbar.css';

export default function Navbar() {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(!clicked);
	};

	return (
		<nav className={`navbar-container ${clicked ? 'active' : ''}`}>
			<h1 className='logo'>
				<a href='/'>
					<i className='fab fa-react'></i>
					Pitch
				</a>
			</h1>

			<div
				className='menu-icons'
				onClick={handleClick}
			>
				<i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
			</div>

			<ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
				{NavbarData.map((item, index) => (
					<li key={index}>
						<a
							href={item.url}
							className={item.className}
						>
							<i className={item.icon}></i>
							{item.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
