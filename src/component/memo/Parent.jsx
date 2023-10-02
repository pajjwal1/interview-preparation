import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const[data, setData] = useState(0);
    const[count, setCount] = useState(10);
  return (
    <>
    <Child count={count} />
    <p>{data}</p>
    <button onClick={()=> setData(data+1)}>data</button>
    </>
  )
}

export default Parent