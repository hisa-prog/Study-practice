import React, { useState } from 'react'
import Slider from 'react-slick'


export const HowWeProvideMobile = ({ items, photos, benefits }) => {
	const [selectedPhoto, setSelectedPhoto] = useState(0)
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		arrows: false,
		dotsClass: 'slider-dots',
		afterChange: (i) => {
			if (i % 2 !== 0 || i === 0) {
				setSelectedPhoto(i)
			} else {
				setSelectedPhoto(i - 1)
			}
		},
	}

	return (
		<section className='section-light section-light--white how-provide section-light' onTouchMove={(e) => {}}>
			<div className='container-ligt how-provide__container'>
				<div className='how-provide__header'>
					<h2 className='title-light title--dark how-provide__title'>
						<FormattedHTMLMessage id='page.sdlight.provideSoftware.title' />
					</h2>
				</div>
				<div className='how-provide__content'>
					<div
						className='how-provide__image'
						style={{ backgroundImage: `url('/images-light/photos/HowProvide/image5.webp')` }}
					/>
					<div
						className='how-provide__image-mobStamp'
						style={{ backgroundImage: `url('/images-light/photos/HowProvide/stamp.svg')` }}
					/>
					<div className='how-provide__description-wrapper'>
						<FormattedHTMLMessage id='page.sdlight.provideSoftware.description' />
						<FormattedHTMLMessage id='page.sdlight.provideSoftware.description1' />
					</div>
					<div className='how-provide__items-container--mobile'>
						<Slider style={{ minHeight: `60rem` }} {...settings}>
							{items.map((item, i) => (
								<div>
									<div className='how-provide__item-wrapper' key={i} style={{ backgroundImage: `url(${item.src})` }} />
								</div>
							))}
						</Slider>
					</div>
					<div className='how-provide__spec-block' data-aos='fade-up' data-aos-duration='1000'>
						{benefits.map((item, i) => {
							return (
								<div className='how-provide-item__wrapper' key={`how-provide-item-${i}`}>
									<div className='how-provide__column-left how-provide__column-left--middle'>
										<div className='how-provide__item-wrapper'>
											<div className='how-provide__item-wrapper-back'>
												<img loading='lazy' src={item.logo} alt='Item logo' />
											</div>
											<h4 className='how-provide__item-title'>{item.title}</h4>
											<p className='how-provide__item-description'>{item.description}</p>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}
