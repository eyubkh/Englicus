import { createContext, useReducer } from 'react'
import { initialState, reducer } from './lessonReducer'

export const LessonState = createContext(null)
export const LessonDispatch = createContext(null)

export const GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <LessonState.Provider value={state}>
      <LessonDispatch.Provider value={dispatch}>
        {children}
      </LessonDispatch.Provider>
    </LessonState.Provider>
  )
}
