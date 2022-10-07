import React from 'react'
import { memo } from 'react'

// memo rerender this component when its argument value changes only
export const Small = memo(({ value }) => {
    console.log('It draws again')
  return (
    <small>{ value }</small>
  )
})
