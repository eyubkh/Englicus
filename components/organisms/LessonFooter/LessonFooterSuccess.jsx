import styled from 'styled-components'
import { ActionSuccess100 } from '@tokens'
import { useContext } from 'react'
import { CircleCheckIcon } from '@components/molecules/CircleCheckIcon'
import { LessonFooterNeutralComponent } from './LessonFooterNeutral'
import { GreenButton } from '@components/atoms/buttons/GreenButton'
import { LessonDispatch } from '@redux/LessonContext'

const LessonFooterSuccessComponent = styled(LessonFooterNeutralComponent)`
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

export const LessonFooterSuccess = () => {
  const dispatch = useContext(LessonDispatch)

  const handler = () => {
    dispatch({
      type: 'finishChecking'
    })
  }

  return (
    <LessonFooterSuccessComponent>
      <div>
        <CircleCheckIcon />
        <h3>!Well done!</h3>
      </div>
      <GreenButton onClick={handler}>
        Continue
      </GreenButton>
    </LessonFooterSuccessComponent>
  )
}
