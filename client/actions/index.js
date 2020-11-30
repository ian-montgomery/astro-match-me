import request from 'superagent'
import { addProfile, getProfile } from '../apis/profiles'

export const GET_USERS = 'GET_USERS'
export const SET_LOADED = 'SET_LOADED'

export const setLoaded = () => {
  return {
    type: SET_LOADED,
  }
}

export const getUsers = (users) => {
  return {
    type: GET_USERS,
    users
  }
}

export function fetchUsers () {
  return (dispatch) => {
    return request
    .get('/api/v1/profiles')
    .then(res => {
      dispatch(getUsers(res.body))
      dispatch(setLoaded())
      })
      .catch(err => console.log(err))
  }
}

export const GET_ROBOT = 'GET_ROBOT'
export const RETURN_MATCHES = 'RETURN_MATCHES'

export const getRobot = (name) => {
  return {
    type: GET_ROBOT,
    imgUrl: `https://robohash.org/${name}.png`

  }
}

export const ADD_PERSON = 'ADD_PERSON'
export const addPerson = (name, sign) => {
  return {
    type: ADD_PERSON,
    person: {
      name: name,
      sign: sign,
    }
  }
}

export function addUser (user) {
  return (dispatch) => {
    return addProfile(user)
    .then(res => {
        dispatch(addPerson(user.name, user.sign))
        dispatch(getRobot(user.name))
      })
  }
}

 
export function loggedInUser (user) {
  const logUser = this.props.users.filter(user => user.user_id == this.props.auth.user.id)[0]
  return (dispatch) => {
    return logUser()
      .then(res => {
        dispatch()
      })
  }
}
