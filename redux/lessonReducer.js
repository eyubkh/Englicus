export const initialState = {
  currentChallengeIndex: 0,
  challenges: [],
  failedChallenges: [],
  progress: 0,
  isLoading: true,
  isCorrect: false,
  isChecking: false
}

export const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'init':
      return {
        ...state,
        isLoading: false,
        challenges: payload
      }
    case 'isCorrect':
      return {
        ...state,
        isChecking: true,
        isCorrect: payload
      }
    case 'finishChecking': {
      const { currentChallengeIndex } = state
      return {
        ...state,
        isChecking: false,
        currentChallengeIndex: currentChallengeIndex + 1

      }
    }
    case 'failedChallenges': {
      const { failedChallenges, challenges, currentChallengeIndex } = state
      return {
        ...state,
        isChecking: false,
        failedChallenges: [...failedChallenges, challenges[currentChallengeIndex]]
      }
    }
    default:
      return initialState
  }
}
