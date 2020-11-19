import { RETURN_MATCHES } from '../actions'

const initialState = ['aries']

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case  RETURN_MATCHES:
      return action.matches
    default:
      return state
  }
}

export default reducer
