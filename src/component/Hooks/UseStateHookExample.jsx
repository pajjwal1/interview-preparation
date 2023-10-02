import React, { useState } from 'react'

const UseStateHookExample = () =>{
    const [value, setValue] = useState(0);
    return (
        <button onClick={()=>{setValue(value+1)}}> click me!!! {value}</button>
    )
}

export default UseStateHookExample;