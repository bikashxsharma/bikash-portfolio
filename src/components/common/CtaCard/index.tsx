import { rootCertificates } from 'tls'

import React from 'react'

import Button from '../Button'

import './style.scss'

type CtaCardPropType = {
	title: string
	detail: string
	btVariant:
		| 'solid'
		| 'outline'
		| 'normal'
		| 'solid-primary'
	label: string
}
const CtaCard: React.FC<CtaCardPropType> = ({
	title,
	detail,
	btVariant,
	label,
}) => {
	return (
		<div className='cta-card'>
			<div className='cta-card__container'>
				<h1>{title}</h1>
				<p>{detail}</p>
				<Button label={label} variant={btVariant} />
			</div>
		</div>
	)
}

export default CtaCard
