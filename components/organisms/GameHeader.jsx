import { CrossedProgressBar } from '@components/molecules/CrossedProgressBar'
import { useContext, useState } from 'react'
import styled from 'styled-components'
import { Context } from 'utils/context'

const GameHeaderComponent = styled.div`
  min-height: 20vh;
  padding: 20px 10%;
  display: grid;
  align-items: center;

`

export const GameHeader = () => {
  return (
    <GameHeaderComponent>
      <CrossedProgressBar href='/learn' progress={0} />
    </GameHeaderComponent>
  )
}
