import React, { forwardRef } from 'react'

const ComponentY = (props, ref) => {
  return (
    <div>
        <input type='text' ref={ref} placeholder='autopopulate' />
    </div>
  )
}

export default forwardRef (ComponentY)