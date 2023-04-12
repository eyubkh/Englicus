import { RegisterState } from '@redux/register/registerContext'
import { UserDispatch } from '@redux/user/userContext'
import writeLocalData from '@utils/writeLocalData'
import { useContext } from 'react'

export const RegisterTypeAssist = () => {
  const { registerProccess, registerProccessIndex } = useContext(RegisterState)
  const { prompt, choices } = registerProccess[registerProccessIndex]

  const userDispatch = useContext(UserDispatch)

  const handlerUserInput = (event) => {
    writeLocalData({
      goal: event.target.innerText
    })

    userDispatch({
      type: 'goal',
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
