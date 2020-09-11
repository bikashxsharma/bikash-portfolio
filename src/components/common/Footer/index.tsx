import React from 'react'

import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

import './style.scss'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__container'>
				<h4>Follow me on social media</h4>
				<div className='footer__social-icons'>
					<a
						href='https://github.com/bikashxsharma'
						rel='noopener noreferrer'>
						{' '}
						<GitHubIcon className='social-icon' />
					</a>
					<a
						href='https://www.linkedin.com/in/bikashxsharma/'
						rel='noopener noreferrer'>
						<LinkedInIcon className='social-icon' />
					</a>
					<a
						href='https://www.behance.net/user/?username=bikashxsharma'
						rel='noopener noreferrer'>
						Be
					</a>
				</div>
				<p>
					Designed and developed by Bikash Sharma. Built
					with React. Hosted on Netlify.
				</p>
				<p>Copyright © Bikash {new Date().getFullYear()}</p>
			</div>
		</div>
	)
}

export default Footer
