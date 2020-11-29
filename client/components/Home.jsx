import React from 'react'
import { connect } from 'react-redux'

import Matches from './Matches.jsx'
import Profile from './Profile.jsx'

class Home extends React.Component {
  render () {
    return (
      <>
        {this.props.latestPerson && <Profile person={this.props.latestPerson}/>}
        {this.props.latestPerson && <Matches/>}
      </>
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

export default connect(mapStateToProps)(Home)
