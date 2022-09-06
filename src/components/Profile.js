import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

import {logout} from '../features/user'

export const Profile = () => {

    const user=useSelector(state=>state.user.value)

    const userLogout=useDispatch()
  return (
    <div>Profile

        <div>name:{user.name}</div>
        <div>email:{user.email}</div>
        <button onClick={()=>userLogout(logout())}>Logout</button>
    </div>
  )
}
