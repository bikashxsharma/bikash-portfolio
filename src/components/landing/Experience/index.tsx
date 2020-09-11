import React from 'react'

import ExperienceCard from './Card'
import { ExperienceData } from './data'

import './style.scss'

function Experience() {
	return (
		<div id='recent-experience' className='experience'>
			<div className='experience__container'>
				<div className='section__title'>
					<h3>Recent Experiences</h3>
				</div>
				<p>
					I have taken part in different projects, startups
					and clients projects. Following are my involvement
					in different startups and projects.{' '}
				</p>
				<div className='experience__cards'>
					{ExperienceData.map((data) => (
						<ExperienceCard
							title={data.title}
							detail={data.detail}
							progress={data.progress}
							logo={data.image}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Experience
