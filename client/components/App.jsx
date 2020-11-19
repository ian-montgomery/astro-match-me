import React from 'react'

import Header from './Header.jsx'
import Search from './Search.jsx'
import Form from './Form.jsx'
import Matches from './Matches.jsx'
import Profile from './Profile.jsx'
import { connect } from 'react-redux'
import {fetchUsers} from '../actions'

// This might need to be turned into a stateful (class-based) component
class App extends React.Component {

    componentDidMount() {
    this.props.dispatch(fetchUsers())
  }

  render() {
  
  return (
    <div className='app'>
      <Header/>
      <Search/>
      <Form/>
      <Matches/>
      <Profile/>
    </div>
  )
}
}

function mapStateToProps (globalState) {
  return {
    activePage: globalState.activePage,
    users: globalState.users

  }
}

export default connect(mapStateToProps)(App)




