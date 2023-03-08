import React from 'react'
import { Title } from '../Title'
import { items } from './data'
import { FormattedHTMLMessage } from '../../../atoms/FormattedMessage/index'
import Slider from 'react-slick'

export const Partnerships = () => {
	const settings = {
		dots: true,
		centerMode: true,
		infinite: true,
		centerPadding: '200px',
		slidesToShow: 1,
		speed: 500,
		dotsClass: 'slider-dots',
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					arrows: true,
					centerPadding: '200px',
				},
			},
			{
				breakpoint: 1440,
				settings: {
					arrows: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					slidesToShow: 1,
					centerPadding: '20px',
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '10px',
					slidesToShow: 1,
				},
			},
		],
	}

	return (
		<section className='partners'>
			<div className='partners__section-content'>
				<Title className='partners__title'>
					<FormattedHTMLMessage id='page.sdlight.partnerships.title' />
				</Title>

				<div className='partners__card-slider'>
					<Slider {...settings}>
						{items.map((item, key) => {
							return (
								<div className={'partners__slide'} key={key}>
									<div className='partners__card'>
										<div className='plus-sign'>
											<img loading='lazy' src='/images/partners/plus.svg' alt='plus' />
										</div>

										<div className='partners__half-slide platinum-bg'></div>
										<div className='partners__half-slide'>
											<img loading='lazy' src={item?.logo} className={item?.class} alt={'logo'} />
										</div>
									</div>
								</div>
							)
						})}
					</Slider>
				</div>
			</div>
		</section>
	)
}
