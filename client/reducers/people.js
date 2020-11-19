import { ADD_PERSON } from '../actions'

const initialState = []

function people (state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return [...state, action.person]
    default:
      return state
  }
}

export default people