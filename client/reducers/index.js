import { combineReducers } from 'redux'

// import profiles from './profiles'
import auth from './auth'
import robots from './robots'
import users from './users'
import people from './people'
import latestPerson from './latestPerson'

export default combineReducers({
  auth,
  // profiles,
  robots,
  users,
  people,
  latestPerson
})
