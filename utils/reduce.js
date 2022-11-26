export const initialState = {
  current: 0,
  isCorrect: false,
  isChecking: false,
  isLoading: true,
  progress: 0,
  api: [],
  textField: ''
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'progress':
      return {
        ...state,
        progress: state.progress + (100 / state.api.length) / 2
      }
    case 'current':
      return {
        ...state,
        current: state.current + 1
      }
    case 'isCorrect':
      return {
        ...state,
        isCorrect: action.payload
      }
    case 'isChecking':
      return {
        ...state,
        isChecking: action.payload
      }
    case 'isLoading':
      return {
        ...state,
        isLoading: false
      }
    case 'api':
      return {
        ...state,
        api: action.payload
      }
    case 'textField':
      return {
        ...state,
        textField: action.payload
      }
    default:
      return initialState
  }
}
