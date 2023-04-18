import { useContext } from 'react'
import styled from 'styled-components'
import { RegisterState } from '@redux/register/registerContext'
import { UserDispatch } from '@redux/user/userContext'
import writeLocalData from '@utils/writeLocalData'
import { Border0, NeutralGrey300, NeutralLight100, NeutralLight300 } from '@tokens'

const RegisterTypeAssistComponent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;

  article {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  article div {
    background-color: ${NeutralLight100};
    height: 180px;
    width: 180px;
    border-radius: 20px;
    display: grid;
    place-content: center;
    border: ${Border0} solid ${NeutralGrey300};
    cursor: pointer;

    :hover {
      background-color: ${NeutralLight300};
    }
  }

`

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
    <RegisterTypeAssistComponent>
      <h3>{prompt}</h3>
      <article>
        {
          choices
            .map((choice, index) => {
              return <div onClick={handlerUserInput} key={index}>{choice}</div>
            })
        }
      </article>
    </RegisterTypeAssistComponent>
  )
}
