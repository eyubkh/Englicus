
import { CheckButton } from '@components/molecules/CheckButton'
import { SkipButton } from '@components/molecules/SkipButton'
import styled from 'styled-components'

const GameFooterNeutralComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 20vh;
  padding: 20px 10%;
`

export const GameFooterNeutral = () => {
  return (
    <GameFooterNeutralComponent>
      <SkipButton />
      <CheckButton />
    </GameFooterNeutralComponent>
  )
}
