import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
		<div className='d-flex align-items-center'>
			<div>
				Shinya Aoi
			</div>
			<div className='ms-auto'>
				<nav className='nav justify-content-end'>
					<NavLink to={'/'} className='nav-link'>HOME</NavLink>
					<a href="/#projects" className='nav-link'>PROJECTS</a>
					<a href="/#aboutme" className='nav-link'>ABOUTME</a>
				</nav>
			</div>
		</div>
	)
}

export default Header;