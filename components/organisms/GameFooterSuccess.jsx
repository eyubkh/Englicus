import styled from 'styled-components'
import { ActionSuccess100 } from '@tokens'
import { useContext, useEffect } from 'react'
import { DispatchContext } from '@utils/context'
import { CircleCheckIcon } from '@components/molecules/CircleCheckIcon'
import { GameFooterNeutralComponent } from './GameFooterNeutral'
import { GreenButton } from '@components/molecules/GreenButton'

const GameFooterSuccessComponent = styled(GameFooterNeutralComponent)`
  background-color: ${ActionSuccess100};
  
  div {
    display: flex;
    align-items: center;
    gap: 20px;
    p {
      color: #333;
    }
  }
`

export const GameFooterSuccess = () => {
  const dispatch = useContext(DispatchContext)
  useEffect(() => {
    dispatch({
      type: 'progress'
    })
  }, [])

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
  }

  return (
    <GameFooterSuccessComponent>
      <div>
        <CircleCheckIcon />
        <h3>¡Correcto!</h3>
      </div>
      <GreenButton handler={handler}>
        Continue
      </GreenButton>
    </GameFooterSuccessComponent>
  )
}
