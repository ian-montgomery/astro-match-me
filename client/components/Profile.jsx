import React from 'react'


const Profile = () => {
  return (
<>
      <div className='profile-wrapper'>

      <div className='profile'>
          <img className='profile-pic' src= 'https://ca.slack-edge.com/T02SQPVAC-U01A44SB7T2-ce31a05eb871-512'/>
        <div className='profile-name-plate'>
          <span className='profile-name'>Hortense</span>
          <span className='profile-sign'>Cancer</span>
        </div>
        </div>


      <div className='profile'>
          <img className='profile-pic' src= 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/rabbit-face.png'/>
        <div className='profile-name-plate'>
          <span className='profile-name'>Bunny</span>
          <span className='profile-sign'>Capricorn</span>
        </div>
        </div>


      <div className='profile'>
          <img className='profile-pic' src= 'https://i.pinimg.com/originals/b2/d4/6f/b2d46fbb7ed4de9a73f55f5b8cbfc084.png'/>
        <div className='profile-name-plate'>
          <span className='profile-name'>Tigger</span>
          <span className='profile-sign'>Leo</span>
        </div>
    </div>
    </div>
    </>
  )
}


export default Profile
