import React from 'react'

import HeroImage from '../../../../assets/images/hero-image.png'
import Button from '../../../common/Button'

import './style.scss'

export const Banner = () => {
	return (
		<div className='banner'>
			<div className='banner__container'>
				<div className='banner__content'>
					<h3>HELLO, I’M BIKASH SHARMA</h3>
					<h1>Full-Stack Developer</h1>
					<h5>
						Helsinki based driven Front-end focused Full
						Stack Developer who has also gained experience
						as a consultant, product designer, and digital
						marketer. I commit code to{' '}
						<span className='github'>Github</span>, and take
						shots on{' '}
						<span className='dribbble'> Dribbble.</span>
					</h5>
					<Button label='See projects' variant='outline' />
				</div>
				<div className='banner__image'>
					<img
						src={HeroImage}
						alt='Bikash Sharma smiling'
					/>
				</div>
			</div>
		</div>
	)
}
export default Banner
