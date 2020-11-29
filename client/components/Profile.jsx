import React from 'react'

const Profile = (props) => {
  return (
    <div className='profile-wrapper'>

      <div className='profile'>
        <img className='profile-pic' src={`https://robohash.org/${props.person.name}.png`}/>
        <div className='profile-name-plate'>
          <span className='profile-name'>{props.person.name}</span>
          <span className='profile-sign'>{props.person.sign}</span>
        </div>
      </div>
    </div>
  )
}

export default Profile
