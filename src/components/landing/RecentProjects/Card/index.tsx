import React from 'react'

import './style.scss'

type ButtonPropType = {
	label: string
	link: string
	variant?: string
}
type CardPropType = {
	title: string
	detail: string
	image: string
	buttons?: ButtonPropType[]
}
const Card: React.FC<CardPropType> = ({
	title,
	detail,
	image,
	buttons,
	children,
}) => {
	return (
		<div className='rp-card'>
			<div className='rp-card__image'>
				<img src={image} alt={title} />
			</div>
			<div className='rp-card__contents'>
				<h4>{title}</h4>
				<p>{detail}</p>
				<div className='rp-card__buttons'>{children}</div>
			</div>
		</div>
	)
}

export default Card
