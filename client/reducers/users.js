import { GET_USERS } from '../actions/index'
const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}

export default reducer
