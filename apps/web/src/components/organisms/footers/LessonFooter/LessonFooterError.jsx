import styled from 'styled-components'
import { CircleCrossIcon } from '@components/molecules/CircleCrossIcon'
import { RedButton } from '@components/atoms/buttons/RedButton'
import { ActionError100, ActionError300, NeutralLight100 } from '@tokens'
import { useContext } from 'react'
import { LessonFooterNeutralComponent } from './LessonFooterNeutral'
import { LessonDispatch, LessonState } from '@redux/lesson/lessonContext'

const LessonFooterErrorComponent = styled(LessonFooterNeutralComponent)`
  background-color: ${ActionError100};
  padding: 20px 10%;
  div {
    display: flex;
    align-items: center;
    gap: 20px;
    section {
      display: block;
    }
    p {
      color: ${NeutralLight100};
    }
  }

  h3 {
    color: ${ActionError300};
  }
`

export const LessonFooterError = () => {
  const lessonDispatch = useContext(LessonDispatch)
  const { challenges, currentChallengeIndex } = useContext(LessonState)

  const { choices, correctIndex } = challenges[currentChallengeIndex]

  const handler = () => {
    lessonDispatch({
      type: 'finishChecking'
    })
  }

  return (
    <LessonFooterErrorComponent>
      <div>
        <CircleCrossIcon />
        <section>
          <h3>Good solution:</h3>
          <p>{choices[correctIndex]}</p>
        </section>
      </div>
      <RedButton handler={handler} />
    </LessonFooterErrorComponent>
  )
}
