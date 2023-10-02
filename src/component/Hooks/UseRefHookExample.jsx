import React, { useRef } from 'react'

const UseRefHookExample = () =>{
    const myName = useRef(null);
    const submitHandler = () =>{
        alert(`hi ${myName.current.value} JI !!`)
        myName.current.value = "";
    }
    return (
        <>
        <label>Name</label>
        <input placeholder='Enter your name' id='name' className='fullName' ref={myName}/>
        <button onClick={submitHandler}>Submit</button>
        </>
    )
}

export default UseRefHookExample