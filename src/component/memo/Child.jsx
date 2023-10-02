import React, {memo} from 'react'

const Child = ({count}) => {
    console.log("I'm from child component", count);
  return (
    <div>Child</div>
  )
}

export default memo(Child)