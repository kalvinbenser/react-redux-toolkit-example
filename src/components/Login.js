import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {login,logout} from '../features/user' 

export const Login = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const dispatch=useDispatch()
    
    const userLogin=()=>{
        dispatch(login({name:name,email:email}))
    }
    
  return (
    <div>
        <h1>Login</h1>
        <div>
            <label>name</label>
          
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
            <label>Email</label>
           
            <input type="text" onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <button onClick={userLogin}>login</button>
    </div>
  )
}
