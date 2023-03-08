import React from 'react'
import { Title } from '../Title'
import { FormattedHTMLMessage } from '../../../atoms/FormattedMessage/index'

const mediaItems = [
	{
		src: '/images/media/thecs.webp',
		alt: 'Thecs',
		href: 'https://thecoinshark.net/the-3rd-round-of-q-dao-token-sale-by-platinum-q-dao-engineering-is-around-the-corner/',
	},
	{
		src: '/images/media/nextmoney.webp',
		alt: 'Nextmoney',
		href: 'https://nextmoney.jp/?p=20907',
	},
	{
		src: '/images/media/venture-times.webp',
		alt: 'Ventures Times',
		href: 'https://venturetimes.jp/cryptocurrency/45171.html',
	},
	{
		src: '/images/media/dailyhodl.webp',
		alt: 'The Daily hodl',
		href: 'https://dailyhodl.com/2019/04/12/an-in-depth-look-at-platinums-q-dao-and-usdq-stablecoin/',
	},
	{
		src: '/images/media/nulltx.webp',
		alt: 'NullTX',
		href: 'https://nulltx.com/is-your-stablecoin-being-disrupted-too/',
	},
	{
		src: '/images/media/ewn.webp',
		alt: 'EWN',
		href: 'https://ethereumworldnews.com/what-are-stable-coins-usdt-tusd-gusd-usdc-and-usdq/',
	},
	{
		src: '/images/media/hackernoon.webp',
		alt: 'Hackernoon',
		href: 'https://hackernoon.com/what-is-q-dao-and-usdq-stablecoin-fully-explained-4435b2f53f54',
	},
	{
		src: '/images/media/blokt.webp',
		alt: 'Blokt',
		href: 'https://blokt.com/press-releases/usdq-operating-token-is-on-the-way',
	},
	{
		src: '/images/media/nbc29.webp',
		alt: 'Nbc29 Times',
		href: 'https://www.nbc29.com/story/40238147/usdq-to-grow-to-family-of-stablecoins',
	},
	{
		src: '/images/media/bitcoingarden.webp',
		alt: 'Bitcoingarden',
		href: 'https://bitcoingarden.org/usdq-the-newest-stablecoin-on-the-block-is-being-developed-by-platinum/',
	},
	{
		src: '/images/media/investinblockchain.webp',
		alt: 'Investinblockchain',
		href: 'https://www.investinblockchain.com/platnium-q-dao-engineering-what-is-usdq-and-q-daowhat-is-usdq-what-is-q-dao-seoul-tokyo-hongkong/',
	},
	{
		src: '/images/media/coinspeaker.webp',
		alt: 'Coinspeaker',
		href: 'https://www.coinspeaker.com/alive-icos-how-did-they-survive',
	},
	{
		src: '/images/media/u-today.webp',
		alt: 'U-today',
		href: 'https://u.today/what-is-usdq-and-q-dao-complete-guide-from-platinum-engineering',
	},
]

export const MediaSlider = () => {
	const showItems = (start, end) =>
		mediaItems.slice(start, end).map((v, index) => (
			<a key={'media-slider' + index} className='media-slider__card-link' href={v.href} target='_blank'>
				<img loading='lazy' className='media-slider__card-logo' src={v.src} alt={v.alt} />
			</a>
		))

	return (
		<section className='section media-slider' data-aos='fade-up'>
			<div className='wrapper_section-content'>
				<Title className='media-slider__title'>
					<FormattedHTMLMessage id='page.home.findUsInMedia' />
				</Title>
				<div data-aos='fade-up'>
					<div className='media-slider__wrapper-cards'>{showItems(0, 15)}</div>
				</div>
			</div>
		</section>
	)
}
