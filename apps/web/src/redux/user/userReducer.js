export const initialState = {}

export const userReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'update':{
      return { ...payload }
    }
    default:
      return initialState
  }
}
