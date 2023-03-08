import React, { useState } from 'react'
import { Title } from '../../incubator/Title/index'
import { Button } from '../../incubator/Button/index'
import { FormattedHTMLMessage } from '../../../atoms/FormattedMessage/index'

export const BlogPreview = () => {
	const [feeds, setData] = useState([])
	// useEffect(() => {
	// 	getNews(1).then(result => {
	// 		setData(result.posts)
	// 	})
	// }, [])

	return (
		<section className='section blog-preview'>
			<div data-aos='fade-up'>
				<div className='wrapper_section-content'>
					<Title className='blog-preview__title'>
						<FormattedHTMLMessage id='page.home.ourBlog' />
					</Title>
					<div className='blog-preview__articles'>
						{feeds.map((item, key) => (
							<Article key={key} { ...item }/>
						))}
					</div>
					<Button className='blog-preview__see-all' href='https://medium.com/@PlatinumFund' target='_blank'>
						<FormattedHTMLMessage id='page.home.seeAllposts' />
					</Button>
				</div>
			</div>
		</section>
	)
}