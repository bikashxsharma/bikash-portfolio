import React, { useState, useEffect } from 'react'

import Button from '../Button'
import ContactForm from '../ContactForm'

import './style.scss'

type CtaCardPropType = {
	title: string
	detail?: string
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
	const [value, setValue] = useState(false)
	let bikash = ''
	const handleClose = (value: boolean) => {
		setValue(value)
		console.log('Close is running')
		bikash = 'hero'
		console.log('Bikash', bikash)

		console.log('value', value)
	}

	const handleOpen = () => {
		setValue(true)
	}
	return (
		<div className='cta-card'>
			<div className='cta-card__container'>
				<h1>{title}</h1>
				{detail && <p>{detail}</p>}
				<Button
					label={label}
					variant={btVariant}
					onClick={handleOpen}
				/>

				<div>
					{value && <ContactForm onclose={handleClose} />}
				</div>
			</div>
		</div>
	)
}

export default CtaCard
