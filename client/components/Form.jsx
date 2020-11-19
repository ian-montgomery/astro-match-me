import React from 'react'
import addPerson from '../actions'
import getRobot from '../actions'

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
    this.props.dispatch(getRobot(this.state.name))
    this.props.dispatch(addPerson( this.state.name, this.state.sign ))
  }

  render () {
    return (
      <div>
        <form className='form' action="">
          <label className='btn' htmlFor="Name">Name: </label>
          <input onChange={(e) => this.nameHandler(e)} className='input' label='Name' type="text"/>
          <br/>

          <label className='btn' htmlFor="Name">Sign: </label>
          <input onChange={(e) => this.signHandler(e)} className='input' type="text"/>
          <br/>

          <button onClick ={this.submitHandler} className='text-btn'> sybmit </button>
        </form>
      </div>
    )
  }
}

export default Form