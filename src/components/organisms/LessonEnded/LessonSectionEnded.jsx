import styled from 'styled-components'
import { Ad } from '@components/atoms/Ad'
import { LessonState } from '@redux/lesson/lessonContext'
import { useContext } from 'react'

const LessonSectionEndedComponent = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  padding: 20px 20%;

  place-items: center;

`

export const LessonSectionEnded = () => {
  const { xp } = useContext(LessonState)
  return (
    <LessonSectionEndedComponent>
      <div>
        <h3>xp ganado {xp}ps</h3>
      </div>
      <Ad />
    </LessonSectionEndedComponent>
  )
}
