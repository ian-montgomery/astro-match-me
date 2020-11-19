const initialState = []
import { GET_USERS } from '../actions/index'

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            return action.profiles
        default: 
            return state
    }
}

export default reducer

