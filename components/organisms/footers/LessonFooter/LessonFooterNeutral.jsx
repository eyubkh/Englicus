import { useContext } from 'react'
import { GreenButton } from '@components/atoms/buttons/GreenButton'
import { TransparentButton } from '@components/atoms/buttons/TransparentButton'
import styled from 'styled-components'
import { LessonDispatch, LessonState } from '@redux/lesson/lessonContext'
import { UserState } from '@redux/user/userContext'
import dataFetching from '@libs/dataFetching'

export const LessonFooterNeutralComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 23vh;
  padding: 20px 10%;
`

export const LessonFooterNeutral = () => {
  const lessonDisptch = useContext(LessonDispatch)
  const { challenges, currentChallengeIndex, userInput } = useContext(LessonState)
  const { choices, correctIndex, difficulty, type } = challenges[currentChallengeIndex]

  const { currentLevel, path, _id } = useContext(UserState)

  const currentLesson = path[currentLevel]

  const handlerIsCorrect = () => {
    let isCorrect = false

    if (type === 'assist') {
      isCorrect = choices[correctIndex] === userInput[0]
    }
    if (type === 'translate') {
      if (correctIndex.length === userInput.length) {
        isCorrect = userInput
          .every((value, index) => {
            return correctIndex[index] === value.indexFrom
          })
      }
    }
    if (type === 'listenAssist') {
      if (correctIndex.length === userInput.length) {
        isCorrect = userInput
          .every((value, index) => {
            return correctIndex[index] === value.indexFrom
          })
      }
    }

    if (isCorrect) {
      lessonDisptch({ type: 'isCorrect' })
    } else {
      lessonDisptch({ type: 'isIncorrect' })
    }
    
    dataFetching('/api/lesson/check', {
      _id,
      target: currentLesson.target,
      isCorrect,
      difficulty
    })
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
