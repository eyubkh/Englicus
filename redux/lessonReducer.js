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
  isDone: false,
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
      const { progress, challenges, correctChallenges } = state
      return {
        ...state,
        isChecking: true,
        isCorrect: payload,
        progress: payload ? progress + (100 / challenges.length) : progress,
        correctChallenges: correctChallenges + 1
      }
    }
    case 'finishChecking': {
      const {
        currentChallengeIndex,
        challenges,
        failedChallenges
      } = state

      const isRetrying = currentChallengeIndex + 1 > challenges.length - 1 && failedChallenges.length > 0
      const fChallenges = isRetrying ? [] : failedChallenges
      console.log(fChallenges)

      return {
        ...state,
        isChecking: false,
        currentChallengeIndex: isRetrying ? 0 : currentChallengeIndex + 1,
        userInput: '',
        isRetrying,
        challenges: isRetrying ? failedChallenges : challenges,
        failedChallenges: fChallenges,
        isDone: currentChallengeIndex + 1 > challenges.length && fChallenges.length === 0
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
