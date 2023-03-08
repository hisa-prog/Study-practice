import React, { useState, useEffect } from 'react'

export const SliderNavigation = ({ theme = 'default', onPrev, onNext, currentSlide, slidesLength }) => {
	return (
		<>
			<div className={`slider-${theme}__progress`}>
				<div
					className={`slider-${theme}__progress-bar`}
					style={{ width: currentSlide || slidesLength ? `${(currentSlide / slidesLength) * 100}%` : 'auto' }}
				/>
			</div>
			<div className={`slider-${theme}__navigation`}>
				<div className={`slider-${theme}__navigation-item`} onClick={onPrev}>
					<img
						loading='lazy'
						className={`slider-${theme}__navigation-icon`}
						src='/images/icons/arrow-left.svg'
						alt='previous slide'
					/>
				</div>
				<div className={`slider-${theme}__navigation-item`} onClick={onNext}>
					<img
						loading='lazy'
						className={`slider-${theme}__navigation-icon`}
						src='/images/icons/arrow-right.svg'
						alt='next slide'
					/>
				</div>
			</div>
		</>
	)
}
