import styled from 'styled-components'
import { CircleCrossIcon } from '@components/molecules/CircleCrossIcon'
import { RedButton } from '@components/atoms/buttons/RedButton'
import { ActionError100, ActionError300, NeutralLight100 } from '@tokens'
import { useContext } from 'react'
import { LessonFooterNeutralComponent } from './LessonFooterNeutral'
import { LessonDispatch, LessonState } from '@redux/LessonContext'

const LessonFooterErrorComponent = styled(LessonFooterNeutralComponent)`
  background-color: ${ActionError100};

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
  const dispatch = useContext(LessonDispatch)
  const { challenges, currentChallengeIndex } = useContext(LessonState)

  const { choices, correctIndex } = challenges[currentChallengeIndex]

  const handler = () => {
    dispatch({
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
