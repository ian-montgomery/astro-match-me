
export const GET_ROBOT = 'GET_ROBOT'
export const RETURN_MATCHES = 'RETURN_MATCHES'
          
export const getRobot = (name) => {
  return {
    type: GET_ROBOT,
    imgUrl: `https://robohash.org/${name}.png`

  }
}

// export const matches = () => {
//   return {
//     type:RETURN_MATCHES,
//     matches: 

//   }
// }

export const ADD_PERSON = 'ADD_PERSON'

export const addPerson = (name, sign) => {
  return {
    type: ADD_PERSON,
    person: {
      name: name,
      sign: sign
    }
  }
}
