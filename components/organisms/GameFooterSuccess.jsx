import { CircleCrossIcon } from '@components/molecules/CircleCrossIcon'
import styled from 'styled-components'
import { ActionSuccess100 } from '@tokens'
import { SuccessButton } from '@components/molecules/SuccessButton'
import { useContext } from 'react'
import { DispatchContext } from 'utils/context'

const GameFooterSuccessComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 20vh;
  background-color: ${ActionSuccess100};
  padding: 20px 10%;
  div {
    display: flex;
    align-items: center;
    gap: 20px;
    p {
      color: #333;
    }
  }
`

export const GameFooterSuccess = () => {
  const dispatch = useContext(DispatchContext)

  const handler = () => {
    dispatch({
      type: 'isChecking',
      payload: false
    })
    dispatch({
      type: 'current'
    })
  }

  return (
    <GameFooterSuccessComponent>
      <div>
        <CircleCrossIcon />
        <p>success</p>
      </div>
      <SuccessButton handler={handler} />
    </GameFooterSuccessComponent>
  )
}
