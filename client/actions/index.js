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
