import { ReloadIcon } from '@components/atoms/ReloadIcon'
import { ActionError100, ActionSuccess100, BodyH2 } from '@tokens'
import { Context, DispatchContext } from '@utils/context'
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

const ButtonComponent = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
`

const ScoreComponent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

`

export const Score = () => {
  const { fail, api } = useContext(Context)
  const dispatch = useContext(DispatchContext)

  const handlerReload = (event) => {
    event.preventDefault()
    dispatch({
      type: 'reload'
    })
  }

  return (
    <ScoreComponent>
      <H2Component>
        <span className='fail'>{fail.length}</span> / <span className='total'>{api.length}</span>
      </H2Component>

      <p>"feel free to put some text here"</p>
      <ButtonComponent onClick={handlerReload}>
        <ReloadIcon />
      </ButtonComponent>
    </ScoreComponent>
  )
}
