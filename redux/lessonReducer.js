export const initialState = {
  lessonId: '',
  currentChallengeIndex: 0,
  challenges: [],
  failedChallenges: [],
  correctChallenges: 0,
  isRetrying: false,
  isLessonEnded: false,
  progress: 0,
  isLoading: true,
  isCorrect: false,
  isChecking: false,
  userInput: ''
}

export const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'init':{
      const { lessonId, challenges } = payload
      return {
        ...state,
        isLoading: false,
        lessonId,
        challenges
      }
    }
    case 'isCorrect':{
      const { progress, challenges } = state
      return {
        ...state,
        isChecking: true,
        isCorrect: payload,
        progress: payload ? progress + (100 / challenges.length) : progress
      }
    }
    case 'finishChecking': {
      const { currentChallengeIndex, correctChallenges } = state
      return {
        ...state,
        isChecking: false,
        currentChallengeIndex: currentChallengeIndex + 1,
        correctChallenges: correctChallenges + 1,
        userInput: ''

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
    case 'userInput': {
      return {
        ...state,
        userInput: payload
      }
    }
    default:
      return initialState
  }
}
