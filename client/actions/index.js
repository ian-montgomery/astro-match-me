
export const GET_ROBOT = 'GET_ROBOT'
<<<<<<< HEAD
export const RETURN_MATCHES = 'RETURN_MATCHES'
          
=======

>>>>>>> 27104e15b6e7816e36267e8f4203abd86e636a15
export const getRobot = (name) => {
  return {
    type: GET_ROBOT,
    imgUrl: `https://robohash.org/${name}.png`

  }
}

<<<<<<< HEAD
// export const matches = () => {
//   return {
//     type:RETURN_MATCHES,
//     matches: 

//   }
// }

=======
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
>>>>>>> 27104e15b6e7816e36267e8f4203abd86e636a15
