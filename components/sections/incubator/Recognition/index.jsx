import React from 'react'
import { Title } from '../Title'
import { items } from './data'
import { FormattedHTMLMessage } from '../../../atoms/FormattedMessage/index'
import Slider from 'react-slick'

export const Recognition = () => {
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
				breakpoint: 768,
				settings: {
					className: 'centered-slides',
					arrows: true,
					rows: 2,
					centerMode: true,
					centerPadding: '20px',
					slidesToShow: 1,
					slidesPerRow: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '20px',
					slidesToShow: 1,
				},
			},
		],
	}

	return (
		<section className='recognition'>
			<div className='recognition__section-content'>
				<Title className='recognition__title'>
					<FormattedHTMLMessage id='page.sdlight.recognition.title' />
				</Title>

				<div className='recognition__card-slider'>
					<Slider {...settings}>
						{items.map((item, key) => {
							return (
								<div className={'recognition__slide'} key={key}>
									<div className='recognition__card'>
										<a className='recognition__link' href={item.link} target='_blank'>
											<img loading='lazy' src={item.img} className={item.class} alt={item.title} title={item.title} />
										</a>
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
