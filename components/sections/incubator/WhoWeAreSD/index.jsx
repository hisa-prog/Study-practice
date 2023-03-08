import React, { useEffect, useState } from 'react'
import { ButtonOrange } from '../Button/index'
import { FormattedHTMLMessage } from '../../../atoms/FormattedMessage/index'

export const WhoWeAreSD = ({ isMobile, handleClick }) => {
	const [isShowSign, setIsShowSign] = useState(true)

	useEffect(() => {
		setInterval(() => {
			setIsShowSign(false)
			setTimeout(() => {
				setIsShowSign(true)
			}, 0)
		}, 8000)
	}, [])

	return (
		<section className='who-we-sd section-light' id='who-we-are'>
			<div className='who-we-sd__section-content'>
				<img
					className='who-we-sd__squares'
					src='/images-light/icons/logo-squares.svg'
					alt=''
					aria-hidden='true'
					role='presentation'
				/>
				<h2 className='title-sd' data-aos='who-we-sd-title' data-aos-duration='1000'>
					<FormattedHTMLMessage id='page.sdlight.whowe.title' />
				</h2>
				<div className='who-we-sd-text' data-aos='fade-up' data-aos-duration='1000'>
					<p className='who-we-sd__text'>
						<FormattedHTMLMessage id='page.sdlight.whowe.text' />
					</p>
					<div className='who-we-sd__sign-wrapper'>
						<p className='who-we-sd__sign-position'>
							<FormattedHTMLMessage id='page.sdlight.whowe.position' />
						</p>
						<img
							loading='lazy'
							className='who-we-sd__sign'
							src={isShowSign ? '/images-light/icons/one-sign.webp' : ''}
						/>
					</div>
				</div>
				<div className='who-we-sd__container-button'>
					<ButtonOrange className='button-orange--modal' onClick={handleClick}>
						<FormattedHTMLMessage id='button.talkToOurTeam' />
					</ButtonOrange>
				</div>
			</div>
		</section>
	)
}
