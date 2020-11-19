// import { getFruits } from '../apis/fruits'

// export const SET_FRUITS = 'SET_FRUITS'

// export function setFruits (fruits) {
  //   return {
    //     type: SET_FRUITS,
    //     fruits
    //   }
    // }
    
    // export function fetchFruits () {
      //   return dispatch => {
        //     return getFruits()
        //       .then(fruits => {
          //         dispatch(setFruits(fruits))
          //         return null
          //       })
          //   }
          // }

export const GET_ROBOT = 'GET_ROBOT'
          
export const getRobot = (name) => {
  return {
    type:GET_ROBOT,
    imgUrl: `https://robohash.org/${name}.png`

  }
}