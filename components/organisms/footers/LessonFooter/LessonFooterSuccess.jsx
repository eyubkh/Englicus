import styled from 'styled-components'
import { ActionSuccess100, ActionSuccess300 } from '@tokens'
import { useContext } from 'react'
import { CircleCheckIcon } from '@components/molecules/CircleCheckIcon'
import { LessonFooterNeutralComponent } from './LessonFooterNeutral'
import { GreenButton } from '@components/atoms/buttons/GreenButton'
import { LessonDispatch, LessonState } from '@redux/lesson/lessonContext'
import { UserDispatch } from '@redux/user/userContext'

const LessonFooterSuccessComponent = styled(LessonFooterNeutralComponent)`
  background-color: ${ActionSuccess100};
  padding: 20px 10%;
  
  div {
    display: flex;
    align-items: center;
    gap: 20px;
    p {
      color: #333;
    }
  }

  h3 {
    color: ${ActionSuccess300};
  }
`

export const LessonFooterSuccess = () => {
  const lessonDispatch = useContext(LessonDispatch)
  const { currentChallengeIndex, challenges } = useContext(LessonState)
  const challenge = challenges[currentChallengeIndex]

  const userDispatch = useContext(UserDispatch)

  const handler = () => {
    lessonDispatch({
      type: 'finishChecking'
    })
    userDispatch({
      type: 'fluency',
      payload: challenge.difficulty
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
