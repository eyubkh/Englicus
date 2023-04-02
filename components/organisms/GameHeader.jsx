import { CrossedProgressBar } from '@components/molecules/CrossedProgressBar'
import styled from 'styled-components'

const GameHeaderComponent = styled.div`
  display: flex;
  padding: 20px 10%;
  min-height: 20vh;
  width: 100%;

`

export const GameHeader = () => {
  return (
    <GameHeaderComponent>
      <CrossedProgressBar progress={0} />
    </GameHeaderComponent>
  )
}
