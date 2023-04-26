import { useContext } from 'react'
import { GreenButton } from '@components/atoms/buttons/GreenButton'
import { TransparentButton } from '@components/atoms/buttons/TransparentButton'
import styled from 'styled-components'
import { LessonDispatch, LessonState } from '@redux/lesson/lessonContext'

export const LessonFooterNeutralComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 23vh;
  padding: 20px 10%;
`

export const LessonFooterNeutral = () => {
  const dispatch = useContext(LessonDispatch)
  const { challenges, currentChallengeIndex, userInput } = useContext(LessonState)
  const { choices, correctIndex } = challenges[currentChallengeIndex]

  const handlerIsCorrect = () => {
    if (choices[correctIndex] === userInput) {
      dispatch({ type: 'isCorrect' })
    } else {
      dispatch({ type: 'isIncorrect' })
    }
  }
  return (
    <LessonFooterNeutralComponent>
      <TransparentButton handler={handlerIsCorrect}>
        Skip
      </TransparentButton>
      <GreenButton onClick={handlerIsCorrect}>
        Check
      </GreenButton>
    </LessonFooterNeutralComponent>
  )
}
