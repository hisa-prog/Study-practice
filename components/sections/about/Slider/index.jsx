import React, { useState, useEffect } from 'react'
// import { SliderNavigation } from '~/components/UI/SliderNavigation'
import { SliderNavigation } from '../SliderNavigation/index'

export const Slider = props => {
	const { children, className = '', strictHeight = true , dataAos = 'fade-up', navTheme = 'default', autoPlay = false, autoPlayDuration = 7000} = props

	const [currentSlide, setCurrentSlide] = useState(0)

	let slidesRefs = []
	const lastSlideIndex = React.Children.count(children) - 1

	const onAutoPlay = () => {
		setCurrentSlide(currentSlide < lastSlideIndex ? currentSlide + 1 : 0)
	}
	useEffect(() => {
		if (autoPlay) {
			const interval = setTimeout(onAutoPlay, autoPlayDuration)
			return () => clearInterval(interval)
		}
		if (!strictHeight) return undefined

		let highestHeight = 0
		for (const slide of slidesRefs) {
			if (slide.offsetHeight > highestHeight) {
				highestHeight = slide.offsetHeight
			}
		}
	})

	const setNextSlide = () => {
		setCurrentSlide(currentSlide < lastSlideIndex ? currentSlide + 1 : 0)
	}

	const setPreviousSlide = () => {
		setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : lastSlideIndex)
	}

	const slides = React.Children.map(children, (child, i) =>
		child ? (
			<div className={`slider__slide ${currentSlide !== i ? 'invisible' : ''}`} ref={e => (slidesRefs[i] = e)}>
				{React.cloneElement(child)}
			</div>
		) : null
	)

	return (
		<div className={`slider ${className}`} data-aos={dataAos ? dataAos : ''}>
			<div className='slider__body'>{slides}</div>
			<SliderNavigation 
				theme={navTheme}
				onNext={setNextSlide}
				onPrev={setPreviousSlide}
				currentSlide={currentSlide}
				slidesLength={lastSlideIndex}
			/>
		</div>
	)
}
