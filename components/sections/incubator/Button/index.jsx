import React, { useContext } from 'react'
import Link from 'next/link'

export const Button = React.forwardRef((props, ref) => {
	const { children, icon, className, type = '', size = 'middle', href, ...other } = props
	const language = 'en'
	return href ? (
		<Link href={`${href.includes('://') ? href : `/${language}${href}`}`}>
			<a className={`button ${className} button--${size}`} {...other} ref={ref}>
				{children}
				{icon && <img loading='lazy' className='button__icon' {...icon} />}
			</a>
		</Link>
	) : (
		<button className={`button ${className} button--${size}`} {...other}>
			{children}
		</button>
	)
})

export const ButtonWhite = ({ children, className, ...props }) => {
	return (
		<a className={`button-white ${className}`} {...props}>
			{children}
		</a>
	)
}
export const ButtonClean = ({ children, onClick, className, ...props }) => {
	return (
		<button className={className} onClick={onClick} {...props}>
			{children}
		</button>
	)
}
export const ButtonOrange = ({
	type = 'button',
	onClick,
	children,
	className,
	href,
	target,
	isExternal = true,
	...props
}) => {
	const buttonClassName = 'button-orange' + (className ? ` ${className}` : '')

	if (type === 'link') {
		if (isExternal) {
			return (
				<a href={href} target={target} className={buttonClassName} {...props}>
					{children}
				</a>
			)
		} else {
			return (
				<Link href={href}>
					<a target={target} className={buttonClassName} {...props}>
						{children}
					</a>
				</Link>
			)
		}
	} else {
		return (
			<button className={buttonClassName} onClick={onClick} {...props}>
				{children}
			</button>
		)
	}
}
