import React from 'react'

import Card from './Card'
import Button from '../../common/Button'
import countryApi_thumb from '../../../assets/images/countryApi_thumb.png'
import library_thumb from '../../../assets/images/library_thumb.png'
import spotify_thumb from '../../../assets/images/spotify_thumb.png'
import portfolio_thumb from '../../../assets/images/portfolio_thumb.png'

import './style.scss'

const RecentProjectData = [
	{
		title: 'Library App',
		detail:
			'React, Redux, Thunk, Material UI, SCSS, Node, Express, MongoDB',
		image: { library_thumb },
		buttons: [{ label: 'Demo' }, { label: 'Code' }],
	},
	{
		title: 'Spotify Clone',
		detail:
			'React, Redux, Thunk, Material UI, SCSS, Node, Express, MongoDB',
		image: { spotify_thumb },
		buttons: [{ label: 'Demo' }, { label: 'Code' }],
	},
	{
		title: 'My portfolio',
		detail:
			'React, Redux, Thunk, Material UI, SCSS, Node, Express, MongoDB',
		image: { portfolio_thumb },
		buttons: [{ label: 'Demo' }, { label: 'Code' }],
	},
	{
		title: 'Country Api',
		detail:
			'React, Redux, Thunk, Material UI, SCSS, Node, Express, MongoDB',
		image: { countryApi_thumb },
		buttons: [{ label: 'Demo' }, { label: 'Code' }],
	},
	{
		title: 'Web Scrap v1',
		detail:
			'React, Redux, Thunk, Material UI, SCSS, Node, Express, MongoDB',
		image: { spotify_thumb },
		buttons: [{ label: 'Demo' }, { label: 'Code' }],
	},
	{
		title: 'Git Trending',
		detail:
			'React, Redux, Thunk, Material UI, SCSS, Node, Express, MongoDB',
		image: { countryApi_thumb },
		buttons: [{ label: 'Demo' }, { label: 'Code' }],
	},
]

function RecentProjects() {
	return (
		<div className='recent-projects'>
			<div className='recent-projects__container'>
				<div className='section__title'>
					<h3>Recent projects</h3>
				</div>
				<div className='recent-projects__cards'>
					{RecentProjectData.map((card) => (
						<Card
							title={card.title}
							detail={card.detail}
							image={spotify_thumb}>
							{card.buttons.map((button) => (
								<Button
									variant='outline'
									label={button.label}
								/>
							))}
						</Card>
					))}
				</div>
			</div>
		</div>
	)
}

export default RecentProjects
