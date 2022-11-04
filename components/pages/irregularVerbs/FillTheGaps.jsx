import { GameFooter } from '@components/organisms/GameFooter'
import { GameHeader } from '@components/organisms/GameHeader'
import { IrregularVerbsSection } from '@components/organisms/IrregularVerbsSection'
import styled from 'styled-components'

const FillTheGapsComponent = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const FillTheGaps = () => {
  return (
    <FillTheGapsComponent>
      <GameHeader />
      <IrregularVerbsSection />
      <GameFooter />

    </FillTheGapsComponent>
  )
}
