import React from 'react'
import { ButtonClean } from '../Button/index'
import { FormattedHTMLMessage } from '../../../atoms/FormattedMessage/index'

export const PrefaceSD = ({ loading, handleClick }) => {
	return (
		<>
		<div className='h-[78vh] lg:h-[82vh] w-screen'></div>
		<section className='preface-sd section-light' data-font-size-in-rem="0.5">
			<div className='container-light preface-sd__container'>
				<h1 className='title-light title--white title--main preface__title'>
					<FormattedHTMLMessage id='page.sdlight.prefaceSoftware.slide1Title' />
				</h1>
				<h2 className='title-light title--white preface__subtitle'>
					<FormattedHTMLMessage id='page.sdlight.prefaceSoftware.slide1Subtitle' />
				</h2>
				<div className='preface-sd__container-button'>
					<ButtonClean className='preface-sd__button' onClick={handleClick}>
						<FormattedHTMLMessage id='contactUsButtonTitle' />
					</ButtonClean>
				</div>
			</div>
			<style jsx>{`
				.preface-sd::before {
					${loading ? 'animation: line-increase-horizontal 3.5s;' : ''}
				}

				.preface-sd::after {
					${loading ? 'animation: line-increase-vertical 3.5s;' : ''}
				}
			`}</style>
			<img
				loading='lazy'
				className='preface-sd__background-bottom'
				src='/images-light/backgrounds/deliver-software-new.webp'
				alt='PLATINUM SOFTWARE DEVELOPMENT'
			/>
			<img
				loading='lazy'
				className='preface-sd__background-bottom-mobile'
				src='/images-light/backgrounds/deliver-software-mobile.webp'
				alt='PLATINUM SOFTWARE DEVELOPMENT'
			/>
		</section>
		</>
	)
}
