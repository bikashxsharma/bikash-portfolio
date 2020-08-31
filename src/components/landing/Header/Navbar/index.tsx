import React from 'react'

import Logo from '../../../../assets/brands/logo'
import Button from '../../../common/Button'

import './style.scss'

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbar__container'>
				<div className='navbar__logo'>
					<Logo />
				</div>
				<div className='navbar__links'>
					<ul>
						<li>About</li>
						<li>Projects</li>
						<li>CV</li>
						<Button label='Contact' variant='outline' />
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar
