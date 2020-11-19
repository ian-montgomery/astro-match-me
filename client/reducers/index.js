import { combineReducers } from 'redux'

import profiles from './profiles'
import robots from './robots'
import users from './users'

export default combineReducers({
  profiles,
  robots,
  users
})
