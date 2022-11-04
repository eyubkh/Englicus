import { CrossedProgressBar } from '@components/molecules/CrossedProgressBar'
import styled from 'styled-components'

const GameHeaderComponent = styled.div`
  min-height: 20vh;
  padding: 20px 10%;
  display: grid;
  align-items: center;

`

export const GameHeader = ({ progress }) => {
  return (
    <GameHeaderComponent>
      <CrossedProgressBar href='/learn' progress={progress} />
    </GameHeaderComponent>
  )
}
