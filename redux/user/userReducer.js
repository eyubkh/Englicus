import dataFetching from '@libs/dataFetching'

export const initialState = {}

export const userReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'update':{
      return { ...payload }
    }
    case 'beginner': {
      const updatedUser = dataFetching('/api/user/update', {
        id: state._id,
        beginner: payload
      })
      return {
        ...state,
        ...updatedUser
      }
    }
    case 'path': {
      return {
        ...state,
        path: payload
      }
    }
    case 'fluency': {
      return {
        ...state,
        fluency: state.fluency + (payload / 10)
      }
    }
    case 'xp': {
      const { currentLevel, path } = state

      const copyPath = path

      const updatedSection = {
        ...copyPath[currentLevel],
        xp: copyPath[currentLevel].xp + payload
      }
      const maxLevelReached = updatedSection.xp >= updatedSection.max_xp
      updatedSection.completed = maxLevelReached

      copyPath[currentLevel] = updatedSection

      return {
        ...state,
        path: copyPath,
        currentLevel: maxLevelReached ? currentLevel + 1 : currentLevel
      }
    }
    default:
      return initialState
  }
}
