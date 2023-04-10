import { RegisterDispatch, RegisterState } from '@redux/register/registerContext'
import { useContext } from 'react'

export const RegisterTypeAssist = () => {
  const { registerProccess, registerProccessIndex } = useContext(RegisterState)
  const { prompt, choices } = registerProccess[registerProccessIndex]

  const dispatch = useContext(RegisterDispatch)

  const handlerUserInput = (event) => {
    const localData = window.localStorage.getItem('register')
    const registerData = JSON.parse(localData)
    registerData.goal = event.target.innerText
    window.localStorage.setItem('register', JSON.stringify(registerData))

    dispatch({
      type: 'userInput',
      payload: event.target.innerText
    })
  }
  return (
    <>
      <h3>{prompt}</h3>
      {
        choices
          .map((choice, index) => {
            return <button onClick={handlerUserInput} key={index}>{choice}</button>
          })
      }
    </>
  )
}
