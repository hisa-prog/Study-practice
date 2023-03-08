import React from 'react'
import { BlackTitle } from '../../incubator/Title/index'
import { FormattedHTMLMessage } from '../../../atoms/FormattedMessage/index'

export const PlacesWeWorked = () => (
	<section className='section places-we-worked' data-aos='fade-up'>
		<div className='wrapper_section-content'>
			<BlackTitle className='places-we-worked__title'>
				<FormattedHTMLMessage id='page.home.placesWeWorkedFor' />
			</BlackTitle>
			<div data-aos='fade-up'>
				<div className='places-we-worked__list'>
					<div className='places-we-worked__list-item '>
						<span className='places-we-worked__image logo logo-bridgestone'></span>
					</div>
					<div className='places-we-worked__list-item '>
						<span className='places-we-worked__image logo logo-cocacola'></span>
					</div>
					<div className='places-we-worked__list-item '>
						<span className='places-we-worked__image logo logo-levis'></span>S
					</div>
					<div className='places-we-worked__list-item '>
						<span className='places-we-worked__image logo logo-jde'></span>
					</div>
					<div className='places-we-worked__list-item '>
						<span className='places-we-worked__image logo logo-redbull'></span>
					</div>
					<div className='places-we-worked__list-item '>
						<span className='places-we-worked__image logo logo-uber'></span>
					</div>
					<div className='places-we-worked__list-item '>
						<span className='places-we-worked__image logo logo-lafarge'></span>
					</div>
					<div className='places-we-worked__list-item '>
						<span className='places-we-worked__image logo logo-mustang'></span>
					</div>
					<div className='places-we-worked__list-item '>
						<span className='places-we-worked__image logo logo-rockwool'></span>
					</div>
					<div className='places-we-worked__list-item '>
						<span className='places-we-worked__image logo logo-calzedonia'></span>
					</div>
					<div className='places-we-worked__list-item '>
						<span className='places-we-worked__image logo logo-nestle'></span>
					</div>
					<div className='places-we-worked__list-item '>
						<span className='places-we-worked__image logo logo-yamaha'></span>
					</div>
					<div className='places-we-worked__list-item '>
						<span className='places-we-worked__image logo logo-docusign'></span>
					</div>
					<div className='places-we-worked__list-item '>
						<span className='places-we-worked__image logo logo-mitsubishi'></span>
					</div>
					<div className='places-we-worked__list-item '>
						<span className='places-we-worked__image logo logo-uniqlo'></span>
					</div>
					<div className='places-we-worked__list-item '>
						<span className='places-we-worked__image logo logo-teletrade'></span>
					</div>
				</div>
			</div>
		</div>
	</section>
)
