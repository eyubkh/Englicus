import { CircleCrossIcon } from '@components/molecules/CircleCrossIcon'
import styled from 'styled-components'
import { ErrorButton } from '@components/molecules/ErrorButton'
import { ActionError100 } from '@tokens'

const GameFooterErrorComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 20vh;
  background-color: ${ActionError100};
  padding: 20px 10%;
  div {
    display: flex;
    align-items: center;
    gap: 20px;
    p {
      color: white;
    }
  }
`

export const GameFooterError = () => {
  return (
    <GameFooterErrorComponent>
      <div>
        <CircleCrossIcon />
        <p>error</p>
      </div>
      <ErrorButton />
    </GameFooterErrorComponent>
  )
}
