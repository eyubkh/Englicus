import { Ad } from '@components/atoms/Ad'
import { ProgressMade } from '@components/molecules/ProgressMade'
import { Score } from '@components/molecules/Score'
import styled from 'styled-components'

const EndLevelComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const EndLevel = () => {
  return (
    <EndLevelComponent>
      <Score />
      <ProgressMade reverse />
      <Ad />
    </EndLevelComponent>
  )
}
