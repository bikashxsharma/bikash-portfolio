import React from 'react'

import HeroImage from '../../../../assets/images/hero-image.png'
import HeaderBg from '../../../../assets/images/header__bg.png'
import Button from '../../../common/Button'

import './style.scss'

export const Banner = () => {
	return (
		<div className='banner'>
			<div className='banner__container'>
				<div className='banner__content'>
					<h3>HELLO, I’M BIKASH SHARMA</h3>
					<h1>Full Stack Developer</h1>
					<h5>
						I’m a Helsinki based full stack developer
						focused on writing code that makes an{' '}
						<span className='text-highlight'>
							impact to users.
						</span>
						 I have also gained experience as a consultant
						,
						<span className='text-highlight'>
							product designer
						</span>
						, and digital marketer. Currently a co-founder and Lead Product Developer at <a
							className='github'
							href='https://wonsta.io'
							target='_blank'
							rel='noopener noreferrer'>
							Wonsta.
						</a>. I commit code
						to{' '}
						<a
							className='github'
							href='https://github.com/bikashxsharma'
							target='_blank'
							rel='noopener noreferrer'>
							Github.
						</a>Make videos on{' '}
						<a
							className='github'
							href='https://www.youtube.com/channel/UCKtcuEBjG-8T1HDrpuAprww/videos'
							target='_blank'
							rel='noopener noreferrer'>
							 Bikashweb.
						</a>{' '}And write articles on <a
							className='github'
							href='https://bikashxsharma.medium.com/'
							target='_blank'
							rel='noopener noreferrer'>
							Medium.
						</a>
					</h5>
					<a href='#recent-projects'>
						<Button
							label='View projects'
							variant='outline'
						/>
					</a>
				</div>
				<div className='banner__image'>
					<img
						src={HeroImage}
						alt='Bikash Sharma smiling'
					/>
				</div>
			</div>
			<img
				src={HeaderBg}
				alt='code abstract background'
				className='banner__bg'
			/>
		</div>
	)
}
export default Banner
