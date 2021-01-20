import { combineReducers } from 'redux'

// import profiles from './profiles'
import auth from './auth'
import robots from './robots'
import users from './users'
import people from './people'
import latestPerson from './latestPerson'
import asshole from './asshole'

export default combineReducers({
  asshole, 
  auth,
  // profiles,
  robots,
  users,
  people,
  latestPerson
})
