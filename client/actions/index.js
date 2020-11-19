
export const GET_ROBOT = 'GET_ROBOT'
          
export const getRobot = (name) => {
  return {
    type:GET_ROBOT,
    imgUrl: `https://robohash.org/${name}.png`

  }
}