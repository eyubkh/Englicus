export const initialState = {
  registerProccess: [],
  registerProccessIndex: 0,
  isLoading: true,
  isDone: false,
  progress: 0,
  userChoice: ''
}

export const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'init':{
      return {
        ...state,
        isLoading: false,
        registerProccess: payload,
        progress: 100 / payload.length
      }
    }
    case 'next': {
      const { registerProccessIndex, registerProccess, progress } = state
      const rProccessIndex = registerProccessIndex + 1
      return {
        ...state,
        registerProccessIndex: rProccessIndex,
        progress: progress + (100 / registerProccess.length),
        isDone: rProccessIndex > registerProccess.length - 1
      }
    }
    case 'userChoice': {
      return {
        ...state,
        userChoice: payload
      }
    }
    default:
      return initialState
  }
}
