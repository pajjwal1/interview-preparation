import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decNumber, incNumber } from './action/index';

const ReduxPractise = () => {
    const myState = useSelector((state)=>state.changeTheNumber);
    const dispatch = useDispatch();

  return (
    <div>
        <h2>Increment Decrement Counter </h2>
        <button onClick={()=> dispatch(incNumber())}> Increment </button>
        <input value={myState} type='text'/>
        <button onClick={()=> dispatch(decNumber())}> Decrement </button>
    </div>
  )
}

export default ReduxPractise