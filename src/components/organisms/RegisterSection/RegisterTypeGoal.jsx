import { useContext } from 'react'
import styled from 'styled-components'
import { RegisterDispatch, RegisterState } from '@redux/register/registerContext'
import { UserDispatch, UserState } from '@redux/user/userContext'
import { OptionSelect } from '@components/molecules/OptionSelect'
import { DimensionSmall } from '@tokens'
import dataFetching from '@libs/dataFetching'

const RegisterTypeGoalComponent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  gap: 30px;

  article {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  @media screen and (max-width: ${DimensionSmall}) {
    article {
      display: flex;
    }
  }

`

export const RegisterTypeGoal = () => {
  const { registerProccess, registerProccessIndex, userChoice } = useContext(RegisterState)
  const { prompt, choices } = registerProccess[registerProccessIndex]

  const registerDispatch = useContext(RegisterDispatch)
  const userDispatch = useContext(UserDispatch)
  const userState = useContext(UserState)

  const handlerUserInput = async (event) => {
    const updatedUser = await dataFetching('/api/user/update', {
      id: userState._id,
      goal: event.target.innerText
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
    <RegisterTypeGoalComponent>
      <h3>{prompt}</h3>
      <article>
        {
          choices
            .map((choice, index) => {
              return (
                <OptionSelect
                  key={index}
                  onClick={handlerUserInput}
                  activate={userChoice === choice}
                >
                  {choice}
                </OptionSelect>
              )
            })
        }
      </article>
    </RegisterTypeGoalComponent>
  )
}
