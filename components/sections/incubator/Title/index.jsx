import React from 'react'

export const Title = (
  {
    children,
    className='',
    type='h2',
    neonShadow,
    size='default',
    color='',
    ...props
  }) =>
{
  const classNameTitle = 'title'
    + ` title_size_${size}`
    + (color ? ` title_color_${color}` : '')
    + (className ? ` ${className}` : '')
    + (neonShadow ? ' title-neon' : '')

  if (type === 'h1') {
    return (
      <h1 className={classNameTitle} {...props}>
        {children}
      </h1>
    )
  } else if (type === 'h2') {
    return (
      <h2 className={classNameTitle}  {...props}>
        {children}
      </h2>
    )

  } else if (type === 'h3') {
    return (
      <h3 className={classNameTitle}  {...props}>
        {children}
      </h3>
    )

  } else if (type === 'h4') {
    return (
      <h4 className={classNameTitle}  {...props}>
        {children}
      </h4>
    )

  } else {
    return (
      <h5 className={classNameTitle}  {...props}>
        {children}
      </h5>
    )
  }
}

export const BlackTitle = ({ children, className='', ...props }) => {
  return (
    <h2 className={`title-black ${className}`} {...props}>
        {children}
    </h2>
  )
}