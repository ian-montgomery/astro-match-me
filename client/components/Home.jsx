import React from 'react'
import { connect } from 'react-redux'

import Matches from './Matches.jsx'
import Profile from './Profile.jsx'


class Home extends React.Component {
  


  render () {

    const loggedInUser = this.props.users.filter(user => user.user_id == this.props.auth.user.id)[0]

    return (
      <>
        <Profile person={loggedInUser} />
        <Matches person={loggedInUser} />
      </>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    activePage: globalState.activePage,
    latestPerson: globalState.latestPerson,
    users: globalState.users,
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(Home)
