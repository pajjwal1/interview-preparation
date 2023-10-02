import React, { useContext } from 'react'
import {name} from '../../App'
const UseContextHookExample = () =>{
const{firstName, lastName} = useContext(name);
    return (
        <h1>{`Hello ${firstName} ${lastName} !!`}</h1>
    )
}

export default UseContextHookExample