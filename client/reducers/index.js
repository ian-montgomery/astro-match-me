import { combineReducers } from 'redux'

// import profiles from './profiles'
import robots from './robots'
import users from './users'
import people from './people'
import latestPerson from './latestPerson'

export default combineReducers({
  // profiles,
  robots,
  users,
  people,
  latestPerson
})
