import React, { useRef } from 'react'

import Logo from 'assets/brands/logo'
import MenuIcon from '@material-ui/icons/Menu'
import Button from 'components/common/Button'
import CloseIcon from '@material-ui/icons/Close'

import './style.scss'

const Navbar = () => {
	const hamburgerRef = useRef<HTMLDivElement>(null)
	const closeIconRef = useRef<HTMLDivElement>(null)
	const navRef = useRef<HTMLUListElement>(null)
	const toggleMenu = () => {
		hamburgerRef.current?.classList.toggle('hide')
		closeIconRef.current?.classList.toggle('hide')
		navRef.current?.classList.toggle('show')
	}

	return (
		<div id='nav-bar' className='navbar'>
			<div className='navbar__container'>
				<div className='navbar__logo'>
					<a href='#nav-bar' rel='noopener noreferrer'>
						<Logo />
					</a>
				</div>
				<div className='navbar__links'>
					<div ref={hamburgerRef}>
						<MenuIcon
							onClick={toggleMenu}
							id='nav-hamburger'
							className='navbar__hamburger '
						/>
					</div>
					<div ref={closeIconRef} className='hide'>
						<CloseIcon
							onClick={toggleMenu}
							id='nav-close'
							className='navbar__closeIcon '
						/>
					</div>

					<ul
						ref={navRef}
						onClick={toggleMenu}
						className='navigation '>
						<li>
							<a
								href='#recent-projects'
								rel='noopener noreferrer'>
								Projects
							</a>
						</li>
						<li>
							<a
								href='#recent-experience'
								rel='noopener noreferrer'>
								CV
							</a>
						</li>
						<Button label='Contact' variant='outline' />
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar
