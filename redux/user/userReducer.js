export const initialState = {
  userId: '1',
  goal: '',
  path: [],
  beginner: true,
  currentLevel: 0,
  currentSection: 0,
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
        ...path[currentLevel][currentSection],
        xp: path[currentLevel][currentSection].xp + payload
      }

      path[currentLevel][currentSection] = updatedSection
      const pathUpdated = [...path]
      const maxLevelReached = updatedSection.xp >= updatedSection.max_xp

      return {
        ...state,
        path: pathUpdated,
        currentSection: maxLevelReached ? currentSection + 1 : currentSection

      }
    }
    default:
      return initialState
  }
}
