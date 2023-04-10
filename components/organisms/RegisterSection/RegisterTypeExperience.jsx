import { RegisterState } from '@redux/register/registerContext'
import { useContext } from 'react'

export const RegisterTypeExperience = () => {
  const { registerProccess, registerProccessIndex } = useContext(RegisterState)
  const { prompt } = registerProccess[registerProccessIndex]

  const handler = (event) => {
    const localData = window.localStorage.getItem('register')
    const registerData = JSON.parse(localData)
    registerData.beginner = event.target.innerText === 'beginner'
    window.localStorage.setItem('register', JSON.stringify(registerData))
  }

  return (
    <>
      <h3>{prompt}</h3>
      <button onClick={handler}> beginner</button>
      <button onClick={handler}> experienced</button>
    </>
  )
}
