import React from 'react'

import Card from './Card'
import Button from '../../common/Button'
import countryApi_thumb from '../../../assets/images/countryApi_thumb.png'
import library_thumb from '../../../assets/images/library_thumb.png'
import spotify_thumb from '../../../assets/images/spotify_thumb.png'
import portfolio_thumb from '../../../assets/images/portfolio_thumb.png'

import './style.scss'

function ClientProjects() {
	return (
		<div className='client-projects'>
			<div className='client-projects__container'>
				<div className='section__title'>
					<h3>Client projects</h3>
				</div>
				<div className='client-projects__cards'>
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	)
}

export default ClientProjects
