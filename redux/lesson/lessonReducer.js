export const initialState = {
  lessonId: '',
  currentChallengeIndex: 0,
  challenges: [],
  failedChallenges: [],
  correctChallenges: 0,
  progressSteps: 0,
  progress: 0,
  xp: 0,
  userInput: '',
  isRetrying: false,
  isLessonEnded: false,
  isLoading: true,
  isCorrect: false,
  isIncorrect: false,
  isChecking: false
}

export const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'init':{
      const { challenges } = payload
      return {
        ...state,
        isLoading: false,
        progressSteps: (100 / challenges.length),
        challenges
      }
    }
    case 'isCorrect':{
      const { progress, progressSteps, correctChallenges, xp } = state
      return {
        ...state,
        isChecking: true,
        isIncorrect: false,
        isRetrying: false,
        isCorrect: true,
        progress: progress + progressSteps,
        correctChallenges: correctChallenges + 1,
        xp: xp + 2
      }
    }
    case 'isIncorrect': {
      const { failedChallenges, challenges, currentChallengeIndex } = state
      return {
        ...state,
        isChecking: true,
        isRetrying: false,
        isCorrect: false,
        failedChallenges: [...failedChallenges, challenges[currentChallengeIndex]]
      }
    }
    case 'finishChecking': {
      const { currentChallengeIndex, challenges, failedChallenges } = state

      const cChallengeIndex = currentChallengeIndex + 1
      const challengesLength = challenges.length - 1

      const isRetrying = cChallengeIndex > challengesLength && failedChallenges.length > 0

      return {
        ...state,
        isChecking: false,
        currentChallengeIndex: isRetrying ? 0 : cChallengeIndex,
        userInput: '',
        isRetrying,
        challenges: isRetrying ? failedChallenges : challenges,
        failedChallenges: isRetrying ? [] : failedChallenges,
        isLessonEnded: cChallengeIndex > challengesLength && failedChallenges.length === 0
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
