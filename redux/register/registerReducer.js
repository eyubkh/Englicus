export const initialState = {
  registerProccess: [],
  registerProccessIndex: 0,
  isLoading: true,
  isDone: false,
  progress: 0
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
    case 'next': {
      const { registerProccessIndex, registerProccess, progress } = state
      return {
        ...state,
        registerProccessIndex: registerProccessIndex + 1,
        progress: progress + (100 / registerProccess.length),
        isDone: registerProccessIndex + 2 > registerProccess.length
      }
    }
    default:
      return initialState
  }
}
