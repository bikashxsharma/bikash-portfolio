import React from 'react'
import * as typeformEmbed from '@typeform/embed'

import './style.scss'

type FormProp = {
	onclose: Function
}

const ContactForm: React.FC<FormProp> = ({ onclose }) => {
	const closeModal = () => {
		onclose(false)
	}
	return (
		<div onClick={closeModal} className='contact-form'>
			{typeformEmbed.makePopup(
				'https://admin.typeform.com/to/XCm2PQqB',
				{
					mode: 'popup',
					width: 320,
					height: 500,
					open: 'load',
					autoClose: 5,
					onClose: closeModal,
				},
			)}
		</div>
	)
}

export default ContactForm
