import { LessonState } from '@redux/LessonContext'
import { useContext } from 'react'
import styled from 'styled-components'
import { ThreeOptions } from '@components/molecules/lessonType/ThreeOptions'

const LessonTypeThreeOptionsComponent = styled.section`
  display: grid;
  height: 100%;
  overflow-y: scroll;
  grid-template-rows: 100px 1fr;
  place-content: center;
  text-align: center;
`

export const LessonTypeThreeOptions = () => {
  const { challenges, currentChallengeIndex } = useContext(LessonState)
  const { translation } = challenges[currentChallengeIndex]

  return (
    <LessonTypeThreeOptionsComponent>
      <h2>{translation}</h2>
      <ThreeOptions />
    </LessonTypeThreeOptionsComponent>
  )
}
