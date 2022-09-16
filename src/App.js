import React from 'react'
import './App.css'
import { Login } from './components/Login'
import { Profile } from './components/Profile'
import {useSelector} from 'react-redux'

function App() {
  const user =useSelector(state=>state.user.value)
  return (
    <>
    {user.name?<Profile/>:  <Login/>}
  
    
  
    </>
  )
}

export default App