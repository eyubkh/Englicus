export const initialState = {
  userId: '',
  registerProccess: [],
  registerProccessIndex: 0,
  isLoading: true,
  progress: 0,
  userInput: ''
}

export const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'init':{
      return {
        ...state,
        isLoading: false,
        registerProccess: payload
      }
    }
    case 'userInput': {
      return {
        ...state,
        userInput: payload
      }
    }
    case 'next': {
      const { registerProccessIndex, registerProccess, progress } = state
      return {
        ...state,
        registerProccessIndex: registerProccessIndex + 1,
        progress: progress + (100 / registerProccess.length)
      }
    }
    default:
      return initialState
  }
}
