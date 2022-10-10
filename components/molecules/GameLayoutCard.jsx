import { BodyH4, Radius2, Spacing0, Spacing2 } from '@tokens'
import styled from 'styled-components'

const GameLayoutCardComponent = styled.div`
    display: inline-block;
    text-align: center;
    padding: ${Spacing2};
    
    img {
        border-bottom: ${Spacing0};
        border-radius: ${Radius2};
    }

    h4 {
        ${BodyH4}
        margin: 0;
    }
`

export const GameLayoutCard = ({ src, children }) => {
  return (
    <GameLayoutCardComponent>
      <img src={src} width='240' />
      <h4>{children}</h4>
    </GameLayoutCardComponent>
  )
}
