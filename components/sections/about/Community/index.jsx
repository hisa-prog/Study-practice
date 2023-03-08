import React, { useState } from 'react'
import dataSocials from './dataSocials'
import dataNews from './dataNews'
import { BlackTitle } from '../../incubator/Title/index'
import { FormattedHTMLMessage } from '../../../atoms/FormattedMessage/index'

const SocialItem = (props) => {
	const { icon, caption, url } = props
	const [isActive, onHover] = useState(false)

	const captionContent = caption ? <p className='community__caption'>{caption}</p> : ''

	const iconSrc = isActive === true ? '/images/icons/socials/light' : '/images/icons/socials'

	return (
		<a href={url} target='_blank' className='community__item'>
			<div className='community__icon-container' onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)}>
				<img loading='lazy' className={'community__icon'} src={`${iconSrc}/${icon}`} alt={icon} />
			</div>
			{captionContent}
		</a>
	)
}

export const Community = () => (
	<section className='section community px-4'>
		<div className='wrapper_section-content'>
			<BlackTitle className='community__main-title'>
				<FormattedHTMLMessage id='page.home.community' />
			</BlackTitle>
			<div data-aos='fade-up'>
				<div className='community__container'>
					{dataSocials.map((item, key) => (
						<SocialItem key={key} icon={item.icon} caption={item.title} url={item.url} />
					))}
				</div>
				<h3 className='community__title'>
					<FormattedHTMLMessage id='page.home.readOurNew' />
				</h3>
				<div className='community__container'>
					{dataNews.map((item, key) => (
						<SocialItem key={key} icon={item.icon} caption={item.title} url={item.url} />
					))}
				</div>
			</div>
		</div>
	</section>
)
