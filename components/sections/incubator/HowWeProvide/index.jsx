import React from 'react'

import { HowWeProvideDesctop } from './HowProvideDesctop'
import { FormattedHTMLMessage } from '../../../atoms/FormattedMessage/index'

const itemsData = [
	{
		logo: '/images-light/icons/ArtDesign/ArtDesign1.svg',
		title: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem1.title' />,
		description: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem1.description' />,
	},
	{
		logo: '/images-light/icons/ArtDesign/ArtDesign2.svg',
		title: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem2.title' />,
		description: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem2.description' />,
	},
	{
		logo: '/images-light/icons/ArtDesign/ArtDesign3.svg',
		title: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem3.title' />,
		description: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem3.description' />,
	},
	{
		logo: '/images-light/icons/ArtDesign/ArtDesign4.svg',
		title: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem4.title' />,
		description: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem4.description' />,
	},
	{
		logo: '/images-light/icons/ArtDesign/ArtDesign5.svg',
		title: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem5.title' />,
		description: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem5.description' />,
	},
	{
		logo: '/images-light/icons/ArtDesign/ArtDesign6.svg',
		title: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem6.title' />,
		description: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem6.description' />,
	},
]

const photosData = [
	{
		id: 'photo1',
		src: '/images-light/photos/HowProvide/image1.webp',
	},
	{
		id: 'photo2',
		src: '/images-light/photos/HowProvide/image2.webp',
	},
	{
		id: 'photo3',
		src: '/images-light/photos/HowProvide/image3.webp',
	},
	{
		id: 'photo4',
		src: '/images-light/photos/HowProvide/image4.webp',
	},
	{
		id: 'photo5',
		src: '/images-light/photos/HowProvide/image5.webp',
	},
	{
		id: 'photo6',
		src: '/images-light/photos/HowProvide/image6.webp',
	},
	{
		id: 'photo7',
		src: '/images-light/photos/HowProvide/image7.webp',
	},
]


const rowsData = [
	{
		image: '/images-light/photos/HowProvide/image9.webp',
		items: [
			{
				logo: '/images-light/icons/ArtDesign/ArtDesign2.svg',
				title: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem2.title' />,
				description: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem2.description' />,
			},
			{
				logo: '/images-light/icons/ArtDesign/ArtDesign3.svg',
				title: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem3.title' />,
				description: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem3.description' />,
			},
		],
		button: <FormattedHTMLMessage id='button.orderNow' />,
		name: <FormattedHTMLMessage id='page.sdlight.whoWeAre.name2' />,
		nameDesc: <FormattedHTMLMessage id='page.sdlight.whoWeAre.name2.desc' />,
	},
	{
		image: '/images-light/photos/HowProvide/image11.webp',
		items: [
			{
				logo: '/images-light/icons/ArtDesign/ArtDesign1.svg',
				title: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem1.title' />,
				description: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem1.description' />,
			},
			{
				logo: '/images-light/icons/ArtDesign/ArtDesign6.svg',
				title: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem6.title' />,
				description: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem6.description' />,
			},
		],
		button: <FormattedHTMLMessage id='button.startHere' />,
		name: <FormattedHTMLMessage id='page.sdlight.whoWeAre.name4' />,
		nameDesc: <FormattedHTMLMessage id='page.sdlight.whoWeAre.name4.desc' />,
	},
	{
		image: '/images-light/photos/HowProvide/image12.webp',
		items: [
			{
				logo: '/images-light/icons/ArtDesign/ArtDesign4.svg',
				title: <FormattedHTMLMessage id='page.sdlight.provideSoftware.description' />,
				description: <FormattedHTMLMessage id='page.sdlight.provideSoftware.description1' />,
			},
			{
				logo: '/images-light/icons/ArtDesign/ArtDesign5.svg',
				title: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem5.title' />,
				description: <FormattedHTMLMessage id='page.sdlight.provideSoftwareItem5.description' />,
			},
		],
		button: <FormattedHTMLMessage id='button.getThe' />,
		name: <FormattedHTMLMessage id='page.sdlight.whoWeAre.name1' />,
		nameDesc: <FormattedHTMLMessage id='page.sdlight.whoWeAre.name1.desc' />,
	},
]

export const HowWeProvide = ({ ...props }) => (
	<>
		<HowWeProvideDesctop rows={rowsData} items={itemsData} photos={photosData} {...props} />
	</>
)
