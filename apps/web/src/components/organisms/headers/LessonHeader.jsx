import { CrossedProgressBar } from '@components/molecules/CrossedProgressBar'
import { LessonState } from '@redux/lesson/lessonContext'
import { useContext } from 'react'
import styled from 'styled-components'

const LessonHeaderComponent = styled.div`
  display: flex;
  padding: 20px 10%;
  min-height: 20vh;
  width: 100%;

`

export const LessonHeader = () => {
  const { progress } = useContext(LessonState)

  return (
    <LessonHeaderComponent>
      <CrossedProgressBar progress={progress} />
    </LessonHeaderComponent>
  )
}
