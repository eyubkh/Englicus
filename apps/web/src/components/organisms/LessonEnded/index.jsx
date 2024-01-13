import styled from 'styled-components'
import { LessonFooterEnded } from './LessonFooterEnded'
import { LessonSectionEnded } from './LessonSectionEnded'

const LessonEndedComponent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;
`

export const LessonEnded = () => {
  return (
    <LessonEndedComponent>
      <LessonSectionEnded />
      <LessonFooterEnded />
    </LessonEndedComponent>
  )
}
