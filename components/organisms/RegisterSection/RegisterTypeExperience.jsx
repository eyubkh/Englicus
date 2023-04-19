import styled from 'styled-components'
import { SquareChoiceInput } from '@components/molecules/SquareChoiceInput'
import { RegisterDispatch, RegisterState } from '@redux/register/registerContext'
import { UserDispatch } from '@redux/user/userContext'
import writeLocalData from '@utils/writeLocalData'
import { useContext } from 'react'

const RegisterTypeExperienceComponent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  article {
    display: flex;
    gap: 20px;
  }

`

export const RegisterTypeExperience = () => {
  const registerDispatch = useContext(RegisterDispatch)
  const { registerProccess, registerProccessIndex, userChoice } = useContext(RegisterState)
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

    registerDispatch({
      type: 'userChoice',
      payload: event.target.innerText
    })
  }

  return (
    <RegisterTypeExperienceComponent>
      <h3>{prompt}</h3>
      <article>
        <SquareChoiceInput activate={userChoice === 'beginner'} onClick={handler}> beginner</SquareChoiceInput>
        <SquareChoiceInput activate={userChoice === 'experienced'} onClick={handler}> experienced</SquareChoiceInput>
      </article>
    </RegisterTypeExperienceComponent>
  )
}
