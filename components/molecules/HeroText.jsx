import styled from 'styled-components'
import { StartButton } from './StartButton'
import { BodyH3, NeutralLight100, BrandPrimary } from '@tokens'

const HeroTextComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;

  h3 {
    text-align: center;
      ${BodyH3}
      color: ${NeutralLight100};
  }

  h3 span {
      color: ${BrandPrimary}
  }
`

export const HeroText = () => {
  return (
    <HeroTextComponent>
      <h3>¡Improve your english with <span>eng</span>licus gradually!</h3>
      <StartButton>Start</StartButton>
    </HeroTextComponent>
  )
}
