import React from 'react'
import { connect } from 'react-redux'


function Matches () {
<div className='profile-wrapper'>
    return <h1>HI</h1>
    </div>
}



// based on the userSign can we return a list of top matching signs 

// THEN see if we can return matching profile people

function mapStateToProps (globalState) {
    return {
      userSign: 'Aries',
      profiles: [   
        { id: 1, name: 'Ian', sign: 'Leo' },
        { id: 2, name: 'Orlando', sign: 'Aquarius'},
        { id: 3, name: 'Hortense', sign: 'Cancer'},
        { id: 4, name: 'Emily', sign: 'Aries'},
        { id: 5, name: 'Saskia', sign: 'Leo'},
      ]
    }
  }
  
  export default connect(mapStateToProps)(Matches)
  
