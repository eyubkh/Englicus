export const initialState = {
  currentChallenge: 0,
  challenges: [],
  failedChallenges: [],
  progress: 0,
  isLoading: true,
  isCorrect: false,
  isChecking: false
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'init': {
      const { payload } = action
      return {
        ...state,
        isLoading: false,
        challenges: payload
      }
    }
    default:
      return initialState
  }
}
