import { ActionError100, ActionSuccess100, BodyH2 } from '@tokens'
import { Context } from '@utils/context'
import { useContext } from 'react'
import styled from 'styled-components'

const H2Component = styled.h2`
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
  const { fail = 0, api } = useContext(Context)

  return (
    <ScoreComponent>
      <H2Component>
        <span className='fail'>{fail}</span> / <span className='total'>{api.length}</span>
      </H2Component>
      <p>"feel free to put some text here"</p>
      <span>reload</span>
    </ScoreComponent>
  )
}
