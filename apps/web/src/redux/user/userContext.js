import { createContext, useReducer } from 'react'
import { initialState, userReducer } from './userReducer'

export const UserState = createContext(null)
export const UserDispatch = createContext(null)

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState)
  return (
    <UserState.Provider value={state}>
      <UserDispatch.Provider value={dispatch}>
        {children}
      </UserDispatch.Provider>
    </UserState.Provider>
  )
}
