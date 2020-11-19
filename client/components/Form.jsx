import React from 'react'
import { connect } from 'react-redux'

import { addPerson } from '../actions'
import { getRobot } from '../actions'

class Form extends React.Component {
  state = {
    name: '',
    sign: ''
  }

  nameHandler = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  signHandler = (e) => {
    this.setState({
      sign: e.target.value
    })
  }

  submitHandler = () => {
    this.props.dispatch(addPerson( this.state.name, this.state.sign ))
    this.props.dispatch(getRobot(this.state.name))
  }

  render () {
    return (
      <div>
        <form className='form'>
          <label className='btn' htmlFor="Name">Name: </label>
          <input onChange={(e) => this.nameHandler(e)} className='input' label='Name' type="text"/>
          <br/>

          <label className='btn' htmlFor="Name">Sign: </label>
          <input onChange={(e) => this.signHandler(e)} className='input' type="text"/>
          <br/>

          <submit onClick ={this.submitHandler} className='text-btn' type="submit"> Submit </submit>
        </form>
      </div>
    )
  }
}

export default connect()(Form)
