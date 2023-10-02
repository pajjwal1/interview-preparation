import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
    const sendBeautifulLine = (value) => <i>Hey your favourite write is here {value}</i>
  return (
    <div>
        Below is the example of render this.props.
        <ComponentB sendData = {sendBeautifulLine}/>
    </div>
  )
}

export default ComponentA