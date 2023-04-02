import { useContext } from 'react'
import { GreenButton } from '@components/molecules/buttons/GreenButton'
import { TransparentButton } from '@components/molecules/buttons/TransparentButton'
import styled from 'styled-components'
import { Context, DispatchContext } from '@utils/context'
import { DimensionSmall } from '@tokens'

export const GameFooterNeutralComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 23vh;
  padding: 20px 20%;

  @media (max-width: ${DimensionSmall}) {
      a:first-child {
        opacity: 0;
      }
    }
`

export const GameFooterNeutral = () => {
  const dispatch = useContext(DispatchContext)
  const state = useContext(Context)

  const current = state.api[state.current]
  const filter = current.choises.filter(chose => chose[current.target])[0]
  const handler = () => {
    dispatch({
      type: 'isChecking',
      payload: true
    })
    dispatch({
      type: 'isCorrect',
      payload: state.textField === filter[current.target]
    })
  }
  return (
    <GameFooterNeutralComponent>
      <TransparentButton handler={handler}>
        Skip
      </TransparentButton>
      <GreenButton onClick={handler}>
        Check
      </GreenButton>
    </GameFooterNeutralComponent>
  )
}