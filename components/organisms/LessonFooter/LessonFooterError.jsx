import styled from 'styled-components'
import { CircleCrossIcon } from '@components/molecules/CircleCrossIcon'
import { RedButton } from '@components/atoms/buttons/RedButton'
import { ActionError100, NeutralLight100 } from '@tokens'
import { useContext } from 'react'
import { LessonFooterNeutralComponent } from './LessonFooterNeutral'
import { LessonDispatch } from '@redux/LessonContext'

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
`

export const LessonFooterError = () => {
  const dispatch = useContext(LessonDispatch)

  const handler = () => {
    dispatch({
      type: 'failedChallenges'
    })
    dispatch({
      type: 'finishChecking'
    })
  }

  return (
    <LessonFooterErrorComponent>
      <div>
        <CircleCrossIcon />
        <section>
          <h2>Good solution:</h2>
          <p>not that one</p>
        </section>
      </div>
      <RedButton handler={handler} />
    </LessonFooterErrorComponent>
  )
}
