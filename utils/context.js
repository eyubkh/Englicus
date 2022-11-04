import { createContext, useReducer } from 'react'
import { initialState, reducer } from './reduce'

export const Context = createContext(null)
export const DispatchContext = createContext(null)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </Context.Provider>
  )
}
