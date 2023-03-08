export const isPartiallyVisible = (el) => {

	if (el.getBoundingClientRect) {
		const elementBoundary = el.getBoundingClientRect()

		const top = elementBoundary.top
		const bottom = elementBoundary.bottom
		const height = elementBoundary.height
		return ((top + height >= 0) && (height + window.innerHeight >= bottom))
	}
}

export const isFullyVisible = el => {
	if (el && el.getBoundingClientRect) {
		const elementBoundary = el.getBoundingClientRect()

		const top = elementBoundary.top
		const bottom = elementBoundary.bottom

		return top >= 0 && bottom <= window.innerHeight
	}
}

const scrolling = (el, addingClass, removingClass, part, bigpart) => {
	if (el) {
		if (isFullyVisible(el)) {
			el.classList.remove(removingClass)
			el.classList.add(addingClass)
		} else {
			el.classList.add(removingClass)
			el.classList.remove(addingClass)
		}
		if (part) {
			if (isPartiallyVisible(el)) {
				el.classList.remove(removingClass)
				el.classList.add(addingClass)
			} else {
				el.classList.add(removingClass)
				el.classList.remove(addingClass)
			}
		}
		if (bigpart) {
			if (isBigPartVisible(el)) {
				el.classList.remove(removingClass)
				el.classList.add(addingClass)
			} else {
				el.classList.add(removingClass)
				el.classList.remove(addingClass)
			}
		}
	}
}

export const scroller = (selector, addingClass, removingClass, part, bigpart) => {

  let isScrolling = false

  const el = document.querySelector(selector)

  if (isScrolling == false) {
    window.requestAnimationFrame(() => {
      scrolling(el, addingClass, removingClass, part, bigpart)
      isScrolling = false
    })
  }
  isScrolling = true

}

export const isBigPartVisible = el => {
	  if (el && typeof(el.getBoundingClientRect) === 'function') {
		  const elementBoundary = el.getBoundingClientRect()

		  const top = elementBoundary.top
		  const bottom = elementBoundary.bottom
			
		  return top >= -window.innerHeight * 0.2 && bottom <= window.innerHeight + window.innerHeight * 0.2
	  }
  }
