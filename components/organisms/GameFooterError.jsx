import { CircleCrossIcon } from '@components/molecules/CircleCrossIcon'
import styled from 'styled-components'
import { ErrorButton } from '@components/molecules/ErrorButton'
import { ActionError100 } from '@tokens'
import { useContext } from 'react'
import { Context, DispatchContext } from '@utils/context'
import { GameFooterNeutralComponent } from './GameFooterNeutral'

const GameFooterErrorComponent = styled(GameFooterNeutralComponent)`
  background-color: ${ActionError100};

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
  const dispatch = useContext(DispatchContext)
  const state = useContext(Context)

  const currentChallenge = state.api[state.current]
  const filter = currentChallenge.choises.filter(chose => chose[currentChallenge.target])[0]

  const handler = () => {
    dispatch({
      type: 'isChecking',
      payload: false
    })
    dispatch({
      type: 'current'
    })
    dispatch({
      type: 'textField',
      payload: ''
    })
    dispatch({
      type: 'fail'
    })
  }

  return (
    <GameFooterErrorComponent>
      <div>
        <CircleCrossIcon />
        <p>{filter[currentChallenge.target]}</p>
      </div>
      <ErrorButton handler={handler} />
    </GameFooterErrorComponent>
  )
}
