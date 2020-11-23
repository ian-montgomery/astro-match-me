import React from 'react'
import { Link } from 'react-router-dom'

import { logOff } from 'authenticare/client'

import { IfAuthenticated, IfNotAuthenticated } from './Auth'


export default function Nav () {
  return (
    <>
    
      <Link to = '/home'>Home</Link>
      <Link to = '/sign-in'>Sing in</Link>
      <Link to = '/register'>Register</Link>
 
     
    </>
  )
}