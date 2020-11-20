import React from 'react'
import { connect } from 'react-redux'

import { addPerson } from '../actions'
import { getRobot } from '../actions'
import { addUser } from '../actions'

class Form extends React.Component {
  state = {
    name: '',
    sign: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = () => {
    this.props.dispatch(addUser({
      name: this.state.name,
      sign: this.state.sign
    }))
  }

  render () {
    return (
      <div>
        <form className='form'>
          <label className='btn' htmlFor="name">Name: </label>
          <input onChange={this.handleChange} className='input' name="name" label='Name' type="text"/>
          <br/>

          <label className='btn' htmlFor="sign">Sign: </label>
          <input onChange={this.handleChange} className='input' name="sign" type="text"/>
          <br/>

          {/* <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select> */}

          <button onClick ={this.submitHandler} className='text-btn' type="button"> Submit </button>
        </form>
      </div>
    )
  }
}

export default connect()(Form)
