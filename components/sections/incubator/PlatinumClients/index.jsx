import React from 'react'
import Slider from 'react-slick'
import { Title } from '../Title/index'
import { ButtonOrange } from '../Button/index'
import { FormattedHTMLMessage } from '../../../atoms/FormattedMessage/index'

const itemsData = [
	{
		image: '/images/clients/foxconn.png',
		link: 'https://www.foxconn.com/zh-tw/',
	},
	{
		image: '/images/clients/lotus.jpg',
		link: 'https://www.lotusenergy.io/',
	},
	{
		image: '/images/clients/ana.jpg',
		link: 'https://www.ana.co.jp/en/jp/amc/reference/tukau/skycoin/ticket-purchase.html',
	},
	{
		image: '/images/clients/acd.jpg',
		link: 'https://acd-coin.com/',
	},
	{
		image: '/images/clients/mindol.jpg',
		link: 'http://mindol.net/',
	},
	{
		image: '/images/clients/z-pop-dream.jpg',
		link: 'https://z-popdream.io/',
	},
	{
		image: '/images/clients/assobimo.jpg',
		link: 'https://asobimo.com/',
	},
	{
		image: '/images/clients/swissborg.jpg',
		link: 'https://swissborg.com/',
	},
	{
		image: '/images/clients/soccoin.jpg',
		link: 'http://soccoin.com/',
	},
	{
		image: '/images/clients/vectorspace.jpg',
		link: 'https://vectorspace.ai/',
	},
	{
		image: '/images/clients/fundrequest.jpg',
		link: 'https://fundrequest.io/requests',
	},
	{
		image: '/images/clients/hoqu.jpg',
		link: 'https://www.hoqu.io/',
	},
	{
		image: '/images/clients/karma.jpg',
		link: 'https://karma.red/',
	},
	{
		image: '/images/clients/lamden.jpg',
		link: 'https://www.lamden.io/',
	},
	{
		image: '/images/clients/lh-crypto.jpg',
		link: 'https://lh-crypto.io/',
	},
	{
		image: '/images/clients/world-wifi.jpg',
		link: 'https://en.worldwifi.io/',
	},
	{
		image: '/images/clients/tomo-chain.jpg',
		link: 'https://tomochain.com/',
	},
	{
		image: '/images/clients/oduwa.jpg',
		link: 'https://oduwacoin.io/',
	},
	{
		image: '/images/clients/gimmer.jpg',
		link: 'https://gimmer.com/',
	},
	{
		image: '/images/clients/vexanium.jpg',
		link: 'https://www.vexanium.com/',
	},
	{
		image: '/images/clients/apollo.jpg',
		link: 'https://apollocurrency.com/',
	},
	{
		image: '/images/clients/hero.jpg',
		link: 'https://www.herocoin.io/',
	},
	{
		image: '/images/clients/iqeon.jpg',
		link: 'https://iqeon.io/',
	},
	{
		image: '/images/clients/neuromation.jpg',
		link: 'https://neuromation.io/',
	},
	{
		image: '/images/clients/nubits.jpg',
		link: 'https://nubits.com/',
	},
	{
		image: '/images/clients/swarm.jpg',
		link: 'https://www.swarm.fund/',
	},
	{
		image: '/images/clients/firelotto.jpg',
		link: 'https://firelotto.io/',
	},
	{
		image: '/images/clients/parkgene.jpg',
		link: 'https://parkgene.io/',
	},
	{
		image: '/images/clients/revain.jpg',
		link: 'http://revain.org/',
	},
	{
		image: '/images/clients/saifu.jpg',
		link: 'https://saifu.ai/',
	},
	{
		image: '/images/clients/sether.jpg',
		link: 'https://www.sether.com/',
	},
	{
		image: '/images/clients/scraps.jpg',
		link: 'https://skraps.io',
	},
	{
		image: '/images/clients/ac3.jpg',
		link: 'https://ac3.io/',
	},
	{
		image: '/images/clients/silkchain.jpg',
		link: 'https://www.silkchain.io/',
	},
	{
		image: '/images/clients/nimiq.jpg',
		link: 'https://www.nimiq.com/',
	},
	{
		image: '/images/clients/signals.jpg',
		link: 'https://signals.network/',
	},
	{
		image: '/images/clients/morpheus.jpg',
		link: 'https://morpheuslabs.io',
	},
	{
		image: '/images/clients/howdoo.jpg',
		link: 'https://www.howdoo.io/',
	},
	{
		image: '/images/clients/wagerr.jpg',
		link: 'https://www.wagerr.com/',
	},
	{
		image: '/images/clients/adhive.jpg',
		link: 'https://adhive.tv/',
	},
	{
		image: '/images/clients/atfs.jpg',
		link: 'https://www.atfslab.io/',
	},
	{
		image: '/images/clients/cappasity.jpg',
		link: 'https://cappasity.com/tech/',
	},
	{
		image: '/images/clients/cvcoin.jpg',
		link: 'https://crypviser.network/',
	},
]

export const PlatinumClients = ({ handleClick, isMobile }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true, 
		dotsClass: 'slider-dots',
		rows: 2,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					slidesToShow: 1,
					rows: 2,
				},
			},
		],
	}

	return (
		<section className='platinum-clients section'>
			<div className='wrapper_section-contentSlick'>
				<Title className='platinum-clients__title'>
					<FormattedHTMLMessage id='page.home.ourClients' />
				</Title>
				<div>
					<div className='platinum-clients__slider'>
						<Slider {...settings}>
							{itemsData.map((item, key) => (
								<div className='platinum-clients__wrapper-cards' key={`platinum-clients__${key}`}>
									<div className='platinum-clients__card'>
										<a href={item.link} target='_blank'>
											<img loading='lazy' className='platinum-clients__image' src={item.image} alt='' />
										</a>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
			<div className='platinum-clients__container-button'>
				<ButtonOrange className='button-orange--modal' onClick={handleClick}>
					<FormattedHTMLMessage id='button.contactUsSimple' />
				</ButtonOrange>
			</div>
		</section>
	)
}
