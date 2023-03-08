import React from 'react'
import { Title } from '../Title'
import Slider from 'react-slick'

const itemsData = [
	'/images-light/icons/investors/1.svg',
	'/images-light/icons/investors/2.svg',
	'/images-light/icons/investors/3.svg',
	'/images-light/icons/investors/4.svg',
	'/images-light/icons/investors/5.svg',
	'/images-light/icons/investors/6.svg',
	'/images-light/icons/investors/7.svg',
	'/images-light/icons/investors/8.svg',
	'/images-light/icons/investors/9.svg',
	'/images-light/icons/investors/10.svg',
	'/images-light/icons/investors/11.svg',
	'/images-light/icons/investors/12.svg',
	'/images-light/icons/investors/13.svg',
	'/images-light/icons/investors/14.svg',
	'/images-light/icons/investors/15.svg',
	'/images-light/icons/investors/46.svg',
	'/images-light/icons/investors/47.svg',
	'/images-light/icons/investors/48.svg',
	'/images-light/icons/investors/49.svg',
	'/images-light/icons/investors/50.svg',
	'/images-light/icons/investors/51.svg',
	'/images-light/icons/investors/52.svg',
	'/images-light/icons/investors/53.svg',
	'/images-light/icons/investors/54.svg',
	'/images-light/icons/investors/55.svg',
	'/images-light/icons/investors/56.svg',
	'/images-light/icons/investors/57.svg',
	'/images-light/icons/investors/58.svg',
	'/images-light/icons/investors/59.svg',
	'/images-light/icons/investors/60.svg',
	'/images-light/icons/investors/16.svg',
	'/images-light/icons/investors/17.svg',
	'/images-light/icons/investors/18.svg',
	'/images-light/icons/investors/19.svg',
	'/images-light/icons/investors/20.svg',
	'/images-light/icons/investors/21.svg',
	'/images-light/icons/investors/22.svg',
	'/images-light/icons/investors/23.svg',
	'/images-light/icons/investors/24.svg',
	'/images-light/icons/investors/25.svg',
	'/images-light/icons/investors/26.svg',
	'/images-light/icons/investors/27.svg',
	'/images-light/icons/investors/28.svg',
	'/images-light/icons/investors/29.svg',
	'/images-light/icons/investors/30.svg',
	'/images-light/icons/investors/31.svg',
	'/images-light/icons/investors/32.svg',
	'/images-light/icons/investors/33.svg',
	'/images-light/icons/investors/34.svg',
	'/images-light/icons/investors/35.svg',
	'/images-light/icons/investors/36.svg',
	'/images-light/icons/investors/37.svg',
	'/images-light/icons/investors/38.svg',
	'/images-light/icons/investors/39.svg',
	'/images-light/icons/investors/40.svg',
	'/images-light/icons/investors/41.svg',
	'/images-light/icons/investors/42.svg',
	'/images-light/icons/investors/43.svg',
	'/images-light/icons/investors/44.svg',
	'/images-light/icons/investors/45.svg',
	'/images-light/icons/investors/61.svg',
	'/images-light/icons/investors/62.svg',
	'/images-light/icons/investors/63.svg',
	'/images-light/icons/investors/64.svg',
	'/images-light/icons/investors/65.svg',
	'/images-light/icons/investors/66.svg',
	'/images-light/icons/investors/67.svg',
	'/images-light/icons/investors/68.svg',
	'/images-light/icons/investors/69.svg',
	'/images-light/icons/investors/70.svg',
	'/images-light/icons/investors/71.svg',
	'/images-light/icons/investors/72.svg',
	'/images-light/icons/investors/73.svg',
	'/images-light/icons/investors/74.svg',
	'/images-light/icons/investors/75.svg',
	'/images-light/icons/investors/76.svg',
	'/images-light/icons/investors/77.svg',
	'/images-light/icons/investors/78.svg',
	'/images-light/icons/investors/79.svg',
	'/images-light/icons/investors/80.svg',
	'/images-light/icons/investors/81.svg',
	'/images-light/icons/investors/82.svg',
	'/images-light/icons/investors/83.svg',
	'/images-light/icons/investors/84.svg',
	'/images-light/icons/investors/85.svg',
	'/images-light/icons/investors/86.svg',
	'/images-light/icons/investors/87.svg',
	'/images-light/icons/investors/88.svg',
	'/images-light/icons/investors/89.svg',
	'/images-light/icons/investors/90.svg',
	'/images-light/icons/investors/91.svg',
	'/images-light/icons/investors/92.svg',
	'/images-light/icons/investors/93.svg',
	'/images-light/icons/investors/94.svg',
	'/images-light/icons/investors/95.svg',
	'/images-light/icons/investors/96.svg',
	'/images-light/icons/investors/97.svg',
	'/images-light/icons/investors/98.svg',
	'/images-light/icons/investors/99.svg',
	'/images-light/icons/investors/100.svg',
	'/images-light/icons/investors/101.svg',
	'/images-light/icons/investors/102.svg',
	'/images-light/icons/investors/103.svg',
	'/images-light/icons/investors/104.svg',
	'/images-light/icons/investors/105.svg',
	'/images-light/icons/investors/106.svg',
]

export const Investors = ({ handleClick, isMobile }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		arrows: true,
		dotsClass: 'slider-dots',
		rows: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					rows: 3,
					arrows: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					slidesToShow: 3,
					slidesToScroll: 3,
					rows: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					arrows: true,
					slidesToShow: 2,
					slidesToScroll: 2,
					rows: 3,
				},
			},
		],
	}

	return (
		<section className='investors' data-aos='fade-up'>
			<div className=''>
				<Title className='investors__title'>Investors</Title>
				<Slider {...settings}>
					{itemsData.map((item, key) => (
						<div className='investors__wrapper-cards' key={`investors__${key}`}>
							<img loading='lazy' className='investors__image' src={item} alt='' />
						</div>
					))}
				</Slider>
			</div>
		</section>
	)
}
