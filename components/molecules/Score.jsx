import { ActionError100, ActionSuccess100, BodyH2 } from '@tokens'
import styled from 'styled-components'

const H1 = styled.h1`
  ${BodyH2}
  margin: 0;

  .fail {
    color: ${ActionError100};
  }
  .total {
    color: ${ActionSuccess100};
  }
`

const ScoreComponent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

`

export const Score = () => {
  return (
    <ScoreComponent>
      <H1><span className='fail'>6</span> / <span className='total'>10</span></H1>
      <p>"feel free to put some text here"</p>
      <span>reload</span>
    </ScoreComponent>
  )
}
