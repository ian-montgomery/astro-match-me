import {GET_ROBOT} from '../actions'

function robots (state = 'https://robohash.org/YOUR-TEXT.png', action) {
  switch (action.type) {
    case GET_ROBOT:
      return action.imgUrl

    default:
      return state
  }
}

export default robots