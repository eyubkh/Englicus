import { LessonState } from '@redux/lesson/lessonContext'
import { NeutralLight100 } from '@tokens'
import { useContext } from 'react'
import styled, { keyframes } from 'styled-components'

const hide = keyframes`
    to {
      opacity: 0;
      height: 0px;
    }
`

const LessonRetryComponent = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
  animation: ${hide} 1s forwards step-end; 
  background-color: ${NeutralLight100};
  z-index: 3;
`

export const LessonRetry = () => {
  const { isRetrying } = useContext(LessonState)

  if (isRetrying) {
    return (
      <LessonRetryComponent>
        <h2>Lest take a look the the wrong one's</h2>
      </LessonRetryComponent>
    )
  }
}
