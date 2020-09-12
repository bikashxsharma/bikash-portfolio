import React from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
//import * as typeformEmbed from '@typeform/embed'

import './style.scss'

type FormProp = {
	onclose: Function
}

const styleDefault = {
	position: 'relative',
	width: '100%',
	height: '100%',
	overflow: 'hidden',
}
const ContactForm: React.FC<FormProp> = ({ onclose }) => {
	const closeModal = () => {
		onclose(false)
	}
	return (
		<div onClick={closeModal} className='contact-form'>
			<div className='form__inner'>
				<HighlightOffIcon
					className='form__close'
					onClick={closeModal}
				/>
				<ReactTypeformEmbed
					url='https://demo.typeform.com/to/XCm2PQqB'
					popup={false}
					style={styleDefault}
				/>
			</div>

			{/* {typeformEmbed.makePopup(
				'https://admin.typeform.com/to/XCm2PQqB',
				{
					mode: 'popup',
					width: 320,
					height: 500,
					open: 'load',
					autoClose: 5,
					onClose: closeModal,
				},
			)} */}
		</div>
	)
}

export default ContactForm
