import React from 'react'

import { FormattedHTMLMessage } from '../../../atoms/FormattedMessage/index'

export const HowWeProvideDesctop = ({ rows, items, photos, handleClick }) => {
	return (
		<section className='section-light--white how-provide' id='our-advantages'>
			<div className='container-ligt how-provide__container'>
				<div className='how-provide-item__wrapper'>
					<div className='how-provide__column-left how-provide__column-left--between'>
						<h2 className='title-light title--dark how-provide__title' data-aos='fade-right' data-aos-duration='1000'>
							<FormattedHTMLMessage id='page.sdlight.provideSoftware.title' />
						</h2>
					</div>
				</div>

				<div className='how-provide__rows'>
					{rows.map((row, i) => (
						<div key={i} className='how-provide__row' data-aos='fade-up' data-aos-duration='1000'>
							<div className='how-provide__row__item'>
								<div className='how-provide__row__image-block'>
									<img loading='lazy' src={row.image} alt='' />
									<div className='how-provide__row__name'>
										<span>{row.name}</span>
										<p>{row?.nameDesc}</p>
									</div>
								</div>
							</div>
							<div className='how-provide__row__item'>
								{row.items.map((item, key) => (
									<div className='how-provide__feature-wrapper' key={key}>
										<div className='how-provide__feature-content'>
											<h4 className='how-provide__feature-title'>{item.title}</h4>
											<p className='how-provide__feature-text'>{item.description}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
