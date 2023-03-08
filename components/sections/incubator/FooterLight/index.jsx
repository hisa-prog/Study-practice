import React from 'react'

export const Footer = () => {
	const socials = [
		{
			name: 'Youtube',
			link: 'https://www.youtube.com/c/PlatinumQDAOEngineering/videos',
			icon: 'youtube.svg',
		},
		{
			name: 'Twitter',
			link: 'https://twitter.com/platinum_fund',
			icon: 'twitter.svg',
		},
		{
			name: 'Facebook',
			link: 'https://www.facebook.com/FundPlatinum',
			icon: 'facebook.svg',
		},
		{
			name: 'Telegram',
			link: 'https://t.me/platinumfund',
			icon: 'telegram.svg',
		},
		{
			name: 'Medium',
			link: 'https://medium.com/platinum-fund',
			icon: 'medium.svg',
		},
		{
			name: 'Gitlab',
			link: 'https://github.com/platinum-engineering',
			icon: 'github.svg',
		},
	]

	return (
		<footer className='footer_white'>
			<div className='footer-light__container'>
				{socials.map((item, i) => (
					<div key={`footeritem${i}`} className='footer_white_link'>
						<a href={item.link} target='_blank'>
							<img loading='lazy' src={`/images/icons/socialsSidebar/${item.icon}`} alt={item.name} title={item.name} />
						</a>
						{/*<a className='mobile' href={item.link} target='_blank'>*/}
						{/*	{item.name.substr(0, 2)}*/}
						{/*</a>*/}
					</div>
				))}
			</div>
		</footer>
	)
}
