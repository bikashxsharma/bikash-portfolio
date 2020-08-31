import React from 'react'

import Skill from './Skill'
import figmaIcon from '../../../assets/icons/figma'
import reactIcon from '../../../assets/icons/react-icon'
import nodeIcon from '../../../assets/icons/node'
import sassIcon from '../../../assets/icons/sass'
import pythonIcon from '../../../assets/icons/python'
import uxIcon from '../../../assets/icons/ux'
import './style.scss'

function Skills() {
	return (
		<div className='skills'>
			<div className='skills__container'>
				<div className='section__title'>
					<h3>What I know</h3>
				</div>
				<div className='skills__lists'>
					<Skill
						name='Front-end'
						detail='React, Typescript, Redux, Gatsby'
						icon={reactIcon}
					/>
					<Skill
						name='Back-end'
						detail='React, Typescript, Redux, Gatsby'
						icon={nodeIcon}
					/>
					<Skill
						name='Style/Library'
						detail='React, Typescript, Redux, Gatsby'
						icon={sassIcon}
					/>
					<Skill
						name='UX/UI'
						detail='React, Typescript, Redux, Gatsby'
						icon={uxIcon}
					/>
					<Skill
						name='Additional Languages'
						detail='React, Typescript, Redux, Gatsby'
						icon={pythonIcon}
					/>
					<Skill
						name='Tools'
						detail='React, Typescript, Redux, Gatsby'
						icon={figmaIcon}
					/>
				</div>
			</div>
		</div>
	)
}

export default Skills
