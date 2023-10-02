import React, { useRef } from 'react'
import ComponentY from './ComponentY'

const ComponentX = () => {
    const myRef = useRef(null);
    const handleClick = () =>{
        myRef.current.value = "I love you!!"
        myRef.current.focus()
        myRef.current.style.color = "red"
    }
  return (
    <div>
        <ComponentY ref = {myRef}/>
        <button onClick={handleClick}> click me!! </button>
    </div>
  )
}

export default ComponentX