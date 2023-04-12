import { RegisterState } from '@redux/register/registerContext'
import { UserDispatch } from '@redux/user/userContext'
import writeLocalData from '@utils/writeLocalData'
import { useContext } from 'react'

export const RegisterTypeExperience = () => {
  const { registerProccess, registerProccessIndex } = useContext(RegisterState)
  const { prompt } = registerProccess[registerProccessIndex]

  const userDispatch = useContext(UserDispatch)

  const handler = (event) => {
    writeLocalData({
      beginner: event.target.innerText === 'beginner'
    })

    userDispatch({
      type: 'beginner',
      payload: event.target.innerText === 'beginner'
    })
  }

  return (
    <>
      <h3>{prompt}</h3>
      <button onClick={handler}> beginner</button>
      <button onClick={handler}> experienced</button>
    </>
  )
}
