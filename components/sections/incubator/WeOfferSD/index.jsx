import React, { useEffect } from 'react'

import Slider from 'react-slick'
import {scroller} from "../../../../lib/onScroll";
import {ButtonOrange} from "../../incubator/Button";
import { FormattedHTMLMessage } from '../../../atoms/FormattedMessage/index'

const itemsData = [
	{
		img: '/images-light/icons/weOfferSD/mobile.svg',
		title: <FormattedHTMLMessage id='page.sdlight.weOffer.item1title' />,
		listItems: [
			<FormattedHTMLMessage id='page.sdlight.weOffer.item1text1' />,
			<FormattedHTMLMessage id='page.sdlight.weOffer.item1text2' />,
			<FormattedHTMLMessage id='page.sdlight.weOffer.item1text3' />,
		],
	},
	{
		img: '/images-light/icons/weOfferSD/DevOps.svg',
		title: <FormattedHTMLMessage id='page.sdlight.weOffer.item2title' />,
		listItems: [
			<FormattedHTMLMessage id='page.sdlight.weOffer.item2text1' />,
			<FormattedHTMLMessage id='page.sdlight.weOffer.item2text2' />,
			<FormattedHTMLMessage id='page.sdlight.weOffer.item2text3' />,
		],
	},
	{
		img: '/images-light/icons/weOfferSD/software.svg',
		title: <FormattedHTMLMessage id='page.sdlight.weOffer.item3title' />,
		listItems: [
			<FormattedHTMLMessage id='page.sdlight.weOffer.item3text1' />,
			<FormattedHTMLMessage id='page.sdlight.weOffer.item3text2' />,
			<FormattedHTMLMessage id='page.sdlight.weOffer.item3text3' />,
		],
	},
	{
		img: '/images-light/icons/weOfferSD/consulting.svg',
		title: <FormattedHTMLMessage id='page.sdlight.weOffer.item4title' />,
		listItems: [
			<FormattedHTMLMessage id='page.sdlight.weOffer.item4text1' />,
			<FormattedHTMLMessage id='page.sdlight.weOffer.item4text2' />,
			<FormattedHTMLMessage id='page.sdlight.weOffer.item4text3' />,
		],
	},
	{
		img: '/images-light/icons/weOfferSD/dedicated.svg',
		title: <FormattedHTMLMessage id='page.sdlight.weOffer.item5title' />,
		listItems: [
			<FormattedHTMLMessage id='page.sdlight.weOffer.item5text1' />,
			<FormattedHTMLMessage id='page.sdlight.weOffer.item5text2' />,
			<FormattedHTMLMessage id='page.sdlight.weOffer.item5text3' />,
		],
	},
	{
		img: '/images-light/icons/weOfferSD/enterprise.svg',
		title: <FormattedHTMLMessage id='page.sdlight.weOffer.item6title' />,
		listItems: [
			<FormattedHTMLMessage id='page.sdlight.weOffer.item6text1' />,
			<FormattedHTMLMessage id='page.sdlight.weOffer.item6text2' />,
			<FormattedHTMLMessage id='page.sdlight.weOffer.item6text3' />,
		],
	},
	{
		img: '/images-light/icons/weOfferSD/UI-and-UX.svg',
		title: <FormattedHTMLMessage id='page.sdlight.weOffer.item7title' />,
		listItems: [
			<FormattedHTMLMessage id='page.sdlight.weOffer.item7text1' />,
			<FormattedHTMLMessage id='page.sdlight.weOffer.item7text2' />,
			<FormattedHTMLMessage id='page.sdlight.weOffer.item7text3' />,
		],
	},
	{
		img: '/images-light/icons/weOfferSD/blockchain.svg',
		title: <FormattedHTMLMessage id='page.sdlight.weOffer.item8title' />,
		listItems: [
			<FormattedHTMLMessage id='page.sdlight.weOffer.item8text1' />,
			<FormattedHTMLMessage id='page.sdlight.weOffer.item8text2' />,
			<FormattedHTMLMessage id='page.sdlight.weOffer.item8text3' />,
		],
	},
]

export const WeOfferSD = ({ isMobile, handleClick }) => {
	const onScroll = () => {
		if (!isMobile) {
			scroller('.we-offer-sd .title-sd', 'on-animation', 'off-animation', true)
			scroller('.we-offer-sd__list', 'on-animation', 'off-animation', true)
		}
	}

	useEffect(() => {
		onScroll()
		window.addEventListener('scroll', onScroll, false)

		return () => {
			window.removeEventListener('scroll', onScroll, false)
		}
	}, [])

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dotsClass: 'slider-dots',
		rows: 2,
		responsive: [
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	}

	return (
		<section className='we-offer-sd section-light' id='we-offer'>
			<div className='we-offer-sd__section-content'>
				<h2 className='title title-sd'>
					<FormattedHTMLMessage id='page.sdlight.weOffer.title' />
				</h2>
				<div className='we-offer-sd__list'>
					{!isMobile &&
						itemsData.map((item, key) => (
							<div className='we-offer-sd__list-cell' key={`title ${key}`}>
								<div className='we-offer-sd-card'>
									<img
										loading='lazy'
										className='we-offer-sd-card__icon'
										src={item.img}
										alt=''
										aria-hidden='true'
										role='presentation'
									/>
									<h3 className='we-offer-sd-card__title'>{item.title}</h3>
									<div className='we-offer-sd-card__list'>
										{item.listItems.map((item, key) => (
											<p className='we-offer-sd-card__list-item' key={`listitem ${key}`}>
												{item}
											</p>
										))}
									</div>
								</div>
							</div>
						))}
					{isMobile && (
						<div className='we-offer-slider__wrapper'>
							<Slider {...settings}>
								{itemsData.map((item, key) => (
									<div className='we-offer-sd-card__wrapper' key={`we-offer-${key}`}>
										<div className='we-offer-sd-card' key={`title ${key}`}>
											<img
												loading='lazy'
												className='we-offer-sd-card__icon'
												src={item.img}
												alt=''
												aria-hidden='true'
												role='presentation'
											/>
											<h3 className='we-offer-sd-card__title'>{item.title}</h3>
											<div className='we-offer-sd-card__list'>
												{item.listItems.map((item, key) => (
													<p className='we-offer-sd-card__list-item' key={`listitem ${key}`}>
														{item}
													</p>
												))}
											</div>
										</div>
									</div>
								))}
							</Slider>
						</div>
					)}
				</div>
				<div className='who-we-sd__container-button'>
					<ButtonOrange className='button-orange--modal' onClick={handleClick}>
						<FormattedHTMLMessage id='button.getinTouch' />
					</ButtonOrange>
				</div>
			</div>
		</section>
	)
}
