import React from 'react'

import './style.scss'

type ButtonProps = {
	label: string
	variant: 'solid' | 'outline' | 'normal' | 'solid-primary'
	onClick?: Function
}

const Button: React.FC<ButtonProps> = ({
	label,
	variant,
}) => {
	return (
		<>
			<button className={`button ${variant}`}>
				{label}
			</button>
		</>
	)
}

export default Button
