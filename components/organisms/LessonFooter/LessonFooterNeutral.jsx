import { useContext } from 'react'
import { GreenButton } from '@components/atoms/buttons/GreenButton'
import { TransparentButton } from '@components/atoms/buttons/TransparentButton'
import styled from 'styled-components'
import { LessonDispatch, LessonState } from '@redux/LessonContext'

export const LessonFooterNeutralComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 23vh;
  padding: 20px 20%;
`

export const LessonFooterNeutral = () => {
  const dispatch = useContext(LessonDispatch)
  const { challenges, currentChallengeIndex } = useContext(LessonState)
  const { choises, target, correctIndex } = challenges[currentChallengeIndex]

  console.log(choises[correctIndex][target])

  const handlerIsCorrect = () => {
    dispatch({
      type: 'isCorrect',
      payload: choises[correctIndex][target] === ''
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
