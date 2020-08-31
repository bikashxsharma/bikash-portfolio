import React from 'react'
import portfolio_thumb from '../../../../assets/images/portfolio_thumb.png'

import './style.scss'

type CardPropType = {}
const Card: React.FC<CardPropType> = ({}) => {
	return (
		<div className='client-card'>
			<div className='client-card__image'>
				<img
					src={portfolio_thumb}
					alt='Everest Helsinki Card'
				/>
				<div className='overlay'></div>
			</div>
			<div className='client-card__contents'>
				<h4>Everest Helsinki</h4>
				<p>Dynamic site design and develop</p>
			</div>
		</div>
	)
}

export default Card
