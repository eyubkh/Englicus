import { CrossedProgressBar } from '@components/molecules/CrossedProgressBar'
import styled from 'styled-components'

const GameHeaderComponent = styled.div`
  min-height: 20vh;
  padding: 20px 10%;
  display: block;
  width: 100%;

`

export const GameHeader = () => {
  return (
    <GameHeaderComponent>
      <CrossedProgressBar />
    </GameHeaderComponent>
  )
}
