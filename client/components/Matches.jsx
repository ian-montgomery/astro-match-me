import React from 'react'
import data from '../../data.json'
import { connect } from 'react-redux'


function Matches({sign, profiles}) {
  //when passing in something stored in redux global state it needs to be props.sign or {sign}
  //when referencing and accessing a variable in a json file it needs to be using square bracket notation so that it knows to read the value of the variable  

  const userSign = sign
  const myMatches = data[userSign].top


  const matchedProfiles = matchFilter(profiles, myMatches)
  //map over these to display them 
  


  return (
    <div className = 'profile-wrapper'>
   
    </div >
  )
}


//Map through the top 



function matchFilter(profiles, topArray){
  console.log(profiles, topArray)
  profiles = profiles.filter((profile) => {
    return topArray.includes(profile.sign)
  })
  return profiles
}
// based on the userSign can we return a list of top matching signs 

// THEN see if we can return matching profile people

function mapStateToProps(globalState) {
  return {
    sign: 'Aries',
    profiles: [
      { id: 1, name: 'Ian', sign: 'Leo' },
      { id: 2, name: 'Orlando', sign: 'Aquarius' },
      { id: 3, name: 'Hortense', sign: 'Cancer' },
      { id: 4, name: 'Emily', sign: 'Aries' },
      { id: 5, name: 'Saskia', sign: 'Leo' },
    ]
  }
}

export default connect(mapStateToProps)(Matches)

