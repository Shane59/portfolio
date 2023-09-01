import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
		<div className='d-flex align-items-center'>
			<div className='ms-2'>
				Shinya Aoi
			</div>
			<div className='ms-auto'>
				<nav className='navbar navbar-expand-lg justify-content-end'>
				<div class="container-fluid justify-content-end">
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      			<span class="navbar-toggler-icon"></span>
    			</button>
					<div className='collapse navbar-collapse' id="navbarSupportedContent">
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<a href="/" className='nav-link'>HOME</a>
							</li>
							<li className='nav-item'>
								<a href="/#projects" className='nav-link'>PROJECTS</a>
							</li>
							<li className='nav-item'>
								<a href="/#aboutme" className='nav-link'>ABOUTME</a>
							</li>
						</ul>
					</div>
				</div>
				</nav>
			</div>
		</div>
	)
}

export default Header;