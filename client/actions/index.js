import request from 'superagent'

export const GET_USERS = 'GET_USERS'

export const getUsers = (profiles) => {
  return {
    type: GET_USERS,
    profiles
  }
}
    
export function fetchUsers () {
  return (dispatch) => {
    return request
      .get('/')
      .then(res => {
        dispatch(getUsers(res.body))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const GET_ROBOT = 'GET_ROBOT'
          
export const getRobot = (name) => {
  return {
    type:GET_ROBOT,
    imgUrl: `https://robohash.org/${name}.png`

  }
}