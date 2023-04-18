export const initialState = {
  userId: '1',
  goal: '',
  path: [],
  beginner: true,
  currentLevel: 0,
  currentSection: 'Basic Communication',
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
      const { currentLevel, currentSection, path } = state
      const updatedSection = {
        ...path[currentLevel],
        [currentSection]: {
          ...path[currentLevel][currentSection],
          xp: path[currentLevel][currentSection].xp + payload
        }
      }
      path[currentLevel] = updatedSection
      const pathUpdated = [...path]
      const maxLevelReached = updatedSection[currentSection].xp >= updatedSection[currentSection].max_xp
      const nextSection = updatedSection[currentSection].next_level

      return {
        ...state,
        path: pathUpdated,
        currentSection: maxLevelReached ? nextSection : currentSection

      }
    }
    default:
      return initialState
  }
}
