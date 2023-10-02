import React from 'react'

const ChildComponent = () =>{
    return(
        <>from child component</>
    )
}
const UseCallbackHookExample = () =>{
    return (
        <>
        <button></button>
        <ChildComponent />
        </>
    )
}

export default UseCallbackHookExample