import { ADD_PERSON } from '../actions'

const initialState = null

function latestPerson (state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return action.person
    default:
      return state
  }
}

export default latestPerson
