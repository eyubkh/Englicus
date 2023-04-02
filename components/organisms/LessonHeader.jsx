import { CrossedProgressBar } from '@components/molecules/CrossedProgressBar'
import styled from 'styled-components'

const LessonHeaderComponent = styled.div`
  display: flex;
  padding: 20px 10%;
  min-height: 20vh;
  width: 100%;

`

export const LessonHeader = () => {
  return (
    <LessonHeaderComponent>
      <CrossedProgressBar />
    </LessonHeaderComponent>
  )
}
