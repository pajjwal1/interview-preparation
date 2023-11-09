import React from 'react'
import { clearAllUser } from './store/slices/UserSlices'
import { useDispatch } from 'react-redux'

const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteUser = () => {
    dispatch(clearAllUser())
  }
  return (
    <div>
      <button onClick={deleteUser}>Delete All</button>
    </div>
  )
}

export default DeleteAllUser