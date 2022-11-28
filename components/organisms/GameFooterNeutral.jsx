import { useContext } from 'react'
import { GreenButton } from '@components/molecules/GreenButton'
import { BorderButton } from '@components/molecules/BorderButton'
import styled from 'styled-components'
import { Context, DispatchContext } from '@utils/context'

export const GameFooterNeutralComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 23vh;
  padding: 20px 20%;
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
      <BorderButton handler={handler}>
        Skip
      </BorderButton>
      <GreenButton handler={handler}>
        Check
      </GreenButton>
    </GameFooterNeutralComponent>
  )
}
