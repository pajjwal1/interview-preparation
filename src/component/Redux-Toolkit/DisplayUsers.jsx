import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from './store/slices/UserSlices';

const DisplayUsers = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.users;
})
const deleteUser = (index) =>{
    dispatch(removeUser(index));
}
  return (
    <div>
        <ul>
        {
            data.map((elements, index) =>{
                return(
                    <div key={index}>
                        <li>{elements}</li>
                        <button onClick={() => deleteUser(index)}>Delete</button>
                    </div>
                )
            })
        }
        </ul>
    </div>
  )
}

export default DisplayUsers