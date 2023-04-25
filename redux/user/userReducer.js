export const initialState = {
  userId: '1',
  goal: '',
  path: [],
  beginner: true,
  currentLevel: 0,
  totalXp: 0
}

export const userReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'init':{
      return {
        ...state
      }
    }
    case 'goal': {
      return {
        ...state,
        goal: payload
      }
    }
    case 'beginner': {
      return {
        ...state,
        beginner: payload
      }
    }
    case 'path': {
      return {
        ...state,
        path: payload
      }
    }
    case 'xp': {
      const { currentLevel, path } = state

      const updatedSection = {
        ...path[currentLevel],
        xp: payload
      }
      const maxLevelReached = updatedSection.xp >= updatedSection.max_xp
      updatedSection.completed = maxLevelReached

      path[currentLevel] = updatedSection
      const pathUpdated = [...path]

      return {
        ...state,
        path: pathUpdated,
        currentLevel: maxLevelReached ? currentLevel + 1 : currentLevel
      }
    }
    default:
      return initialState
  }
}
