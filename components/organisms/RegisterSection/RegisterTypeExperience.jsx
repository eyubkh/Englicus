import styled from 'styled-components'
import { OptionSelect } from '@components/molecules/OptionSelect'
import { RegisterDispatch, RegisterState } from '@redux/register/registerContext'
import { UserDispatch, UserState } from '@redux/user/userContext'
import { useContext } from 'react'
import { DimensionSmall } from '@tokens'
import dataFetching from '@libs/dataFetching'

const RegisterTypeExperienceComponent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:  30px;
  
  article {
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }

  @media screen and (max-width: ${DimensionSmall}) {
    article {
      flex-direction: column;
    }
  }

`

export const RegisterTypeExperience = () => {
  const registerDispatch = useContext(RegisterDispatch)
  const { registerProccess, registerProccessIndex, userChoice } = useContext(RegisterState)
  const { prompt } = registerProccess[registerProccessIndex]

  const userDispatch = useContext(UserDispatch)
  const userState = useContext(UserState)

  const handler = async (event) => {
    const updatedUser = await dataFetching('/api/user/update', {
      id: userState._id,
      beginner: event.target.innerText === 'beginner'
    })
    userDispatch({
      type: 'update',
      payload: updatedUser
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
        <OptionSelect activate={userChoice === 'beginner'} onClick={handler}>beginner</OptionSelect>
        <OptionSelect activate={userChoice === 'experienced'} onClick={handler}>experienced</OptionSelect>
      </article>
    </RegisterTypeExperienceComponent>
  )
}
