import { ADD_PERSON } from '../actions'

const initialState = []

function profiles (state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return action.person
    default:
      return state
  }
}

export default profiles
