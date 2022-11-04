import { GameTitle } from '@components/atoms/GameTitle'
import { GameLayoutCard } from '@components/molecules/GameLayoutCard'
import styled from 'styled-components'
import FillTheGapsSvg from '@public/assets/FillTheGaps.svg'

const IrregularVerbsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  article {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }

`

export const IrregurlarVerbs = () => {
  return (
    <IrregularVerbsSection>
      <GameTitle>IrregularVerbs</GameTitle>
      <article>
        <GameLayoutCard
          href='/irregularVerbs/FillTheGaps'
          src={FillTheGapsSvg}
          alt='fill the gaps image'
        >
          Fill the gaps
        </GameLayoutCard>
      </article>
    </IrregularVerbsSection>
  )
}
