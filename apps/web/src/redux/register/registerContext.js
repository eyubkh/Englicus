import { createContext, useReducer } from 'react'
import { initialState, reducer } from './registerReducer'

export const RegisterState = createContext(null)
export const RegisterDispatch = createContext(null)

export const RegisterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <RegisterState.Provider value={state}>
      <RegisterDispatch.Provider value={dispatch}>
        {children}
      </RegisterDispatch.Provider>
    </RegisterState.Provider>
  )
}
