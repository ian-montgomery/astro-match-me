import React from 'react'
import { Link } from 'react-router-dom'

import { logOff } from 'authenticare/client'

import { IfAuthenticated, IfNotAuthenticated } from './Auth'


export default function Nav () {
  return (
    <>
      <IfAuthenticated>
        <Link to='/home'>Home</Link>
        <Link to='/sign-in' onClick={logOff}>Log off</Link>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Link to='/sign-in'>Sign in</Link>
        <Link to='/register'>Register</Link>
      </IfNotAuthenticated>
     
    </>
  )
}