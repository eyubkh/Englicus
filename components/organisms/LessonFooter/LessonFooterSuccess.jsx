import styled from 'styled-components'
import { ActionSuccess100 } from '@tokens'
import { useContext, useEffect } from 'react'
import { DispatchContext } from '@utils/context'
import { CircleCheckIcon } from '@components/molecules/CircleCheckIcon'
import { GameFooterNeutralComponent } from './LessonFooterNeutral'
import { GreenButton } from '@components/molecules/buttons/GreenButton'

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

  @media (max-width: 500px) {
      div {
        opacity: 0;
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
        <h3>!Well done!</h3>
      </div>
      <GreenButton onClick={handler}>
        Continue
      </GreenButton>
    </GameFooterSuccessComponent>
  )
}