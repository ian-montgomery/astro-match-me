import React from 'react'

import {
  // BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Header from './Header.jsx'
// import Search from './Search.jsx'
// import Form from './Form.jsx'
// import Matches from './Matches.jsx'
// import Profile from './Profile.jsx'
import { connect } from 'react-redux'
import {fetchUsers} from '../actions'
import Nav from './Nav'
import Register from './Register.jsx';
import SignIn from './SignIn'
import Home from './Home'

// This might need to be turned into a stateful (class-based) component
class App extends React.Component {

    componentDidMount() {
    this.props.dispatch(fetchUsers())
  }

  // pretendFormComponent = () => {
  //   return (
  //     <>
  //       <Form/>
  //       {this.props.latestPerson && <Profile person={this.props.latestPerson}/>}
  //       {this.props.latestPerson && <Matches/>}
  //     </>
  //   )
  // }

  render() {
  
  return (
    <div className='app'>
      <Header/>
      <Route path='/' component={Nav} />
      {/* <Search/> */}
      <Route exact path='/register' component={Register}/>
      <Route exact path='/sign-in' component={SignIn}/>
      <Route exact path='/home' component={Home}/>

      {/* <Route exact path='/' component={this.pretendFormComponent}> */}
      
      {/* </Route> */}
    </div>
  )
}
}

function mapStateToProps (globalState) {
  return {
    activePage: globalState.activePage,
    latestPerson: globalState.latestPerson,
    users: globalState.users

  }
}

export default connect(mapStateToProps)(App)




