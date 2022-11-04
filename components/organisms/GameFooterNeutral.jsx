import { useContext } from 'react'
import { CheckButton } from '@components/molecules/CheckButton'
import { SkipButton } from '@components/molecules/SkipButton'
import styled from 'styled-components'
import { Context, DispatchContext } from 'utils/context'

const GameFooterNeutralComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 20vh;
  padding: 20px 10%;
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
      <SkipButton />
      <CheckButton handler={handler} disabled />
    </GameFooterNeutralComponent>
  )
}
