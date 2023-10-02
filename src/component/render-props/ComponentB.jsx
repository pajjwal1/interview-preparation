import React, { useState } from 'react'

const ComponentB = ({sendData}) => {
    const[values, setValues] = useState("");
  return (
    <div>
        <input placeholder='enter your choice' value={values} onChange={(e)=> setValues(e.target.value)} />
        <p>{sendData(values)}</p>
    </div>
  )
}

export default ComponentB