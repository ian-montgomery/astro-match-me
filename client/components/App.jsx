import React from 'react'
import { connect } from 'react-redux'

import { fetchFruits } from '../actions'

export class App extends React.Component {
  state = {
    fruits: []
  }

  // componentDidMount () {
  //   this.props.dispatch(fetchFruits())
  // }

  render () {
    return (
      <div className='app'>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
       
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
