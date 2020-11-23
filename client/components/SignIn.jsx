// import React, { useState } from 'react'
// import {isAuthenticated, signIn } from 'authenticare/client'

// import { baseApiUrl as baseUrl } from '../config'

// // function SignIn (props) {
// //   const [form, setForm] = useState({
// //     username: '',
// //     password: ''
// //   })

//   const handleChange = e => {
//     const { name, value } = e.target
//     setForm({
//       ...form,
//       [name]: value
//     })
//   }

//   const handleClick = () => {
//     const { username, password } = form
//     return signIn({ username, password }, { baseUrl })
//       .then((token) => {
//         if (isAuthenticated()) {
//           props.history.push('/')
//         }
//         return null
//       })
//   }

//   return (
//     <>

//       <h2>Sign in</h2>
//       <input onChange={this.handleChange} value={this.state.username} type='text'></input>
//       <input onChange={this.handleChange} value={this.state.password} type='text'></input>
//       <button onClick={handleClick}>Sign in</button>
//       {/* <GridForm>
//         <ColOne htmlFor='username'>Username:</ColOne>
//         <ColTwo type='text'
//           id='username'
//           name='username'
//           value={form.username}
//           onChange={handleChange} />

//         <ColOne htmlFor='password'>Password:</ColOne>
//         <ColTwo type='password'
//           id='password'
//           name='password'
//           value={form.password}
//           onChange={handleChange} />

//         <Button type='button' onClick={handleClick}>Sign in</Button>
//       </GridForm> */}
//     </>
//   )
// }
// export default SignIn