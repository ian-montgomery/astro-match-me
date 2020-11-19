import { combineReducers } from 'redux'

import robots from './robots'
import people from './people'
import latestPerson from './latestPerson'

export default combineReducers({
  robots,
  people,
  latestPerson
})
