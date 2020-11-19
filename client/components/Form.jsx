import React from 'react'


const Form = () => {
  return (

      <div>
        <form className='form' action="">
        <label className='btn' for="Name">Name: </label>
        <input className='input' label='Name' type="text"/>
        <br/>

        <label className='btn' for="Name">Sign: </label>
        <input className='input' type="text"/>
        <br/>
        <input className='text-btn' type="submit"/>
        </form>
        </div>


  )
}


export default Form
