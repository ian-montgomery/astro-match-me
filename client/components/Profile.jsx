import React from 'react'
import { connect } from 'react-redux'


const Profile = (props) => {
  
  return (
      <div className='profile-wrapper'>

      <div className='profile'>
          <img className='profile-pic' src={props.robots}/>
        <div className='profile-name-plate'>
          <span className='profile-name'>{props.name}</span>
          <span className='profile-sign'>{props.sign}</span>
        </div>
        </div>
    </div>
  )
}

function mapStateToProps(globalState) {
  return {
    robots: globalState.robots,
    person: globalState.person
  }
}
export default connect(mapStateToProps)(Profile)
