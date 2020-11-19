import React from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../actions'

export class App extends React.Component {
 

  componentDidMount () {
    this.props.dispatch(fetchUsers())
  }

  render () {
    return (
      <div className='app'>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {this.props.profiles.map(profile => (
            <li key={profile}>{profile.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    profiles: globalState.profiles
  }
}

export default connect(mapStateToProps)(App)
