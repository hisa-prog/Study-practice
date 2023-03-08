import React from 'react'

import { ContactNow } from '../ContactNow/index.js'

const data = [
	// {
	// 	name: 'Dan k.',
	// 	avatar: '/images/contactNow/dan.webp',
	// 	email: 'd@listing.fund',
	// 	telegram: {
	// 		link: 'https://t.me/dankom',
	// 	},
	// 	wechat: {
	// 		link: 'https://u.wechat.com/IPq5dMg5edYwJJnFBLu2F9s',
	// 		qrCode: '/images/contactNow/qr-wechat-dan.webp',
	// 	},
	// },
	{
		name: 'Anton d.',
		avatar: '/images/contactNow/anton.webp',
		email: 'a@platinum.fund',
		telegram: {
			link: 'https://t.me/antondz2',
		},
		whatsApp: {
			link: 'https://wa.me/66953310253',
		},
		wechat: {
			link: 'https://u.wechat.com/IJIKG0GiB944y12JlusFzs4',
			qrCode: '/images/contactNow/qr-wechat-anton.webp',
		},
	},
]

export const ContactNowMain = () => {
	return (
		<ContactNow title='Contact now!' subtitle={`Write to us right now and we'll respond in 15 minutes. \nYou'll get an absolutely free consultation.`} data={data} />
	)
}
