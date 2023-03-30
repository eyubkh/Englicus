import { GameTitle } from '@components/atoms/GameTitle'
import { GameLayoutCard } from '@components/molecules/GameLayoutCard'
import styled from 'styled-components'
import FillTheGapsSvg from '@public/assets/FillTheGaps.svg'
import Sample from '@public/assets/Sample.svg'

const IrregularVerbsComponent = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  article {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
  }

`

export const IrregurlarVerbs = () => {
  return (
    <IrregularVerbsComponent>
      <GameTitle>Irregular Verbs</GameTitle>
      <article>
        <GameLayoutCard
          href='/irregularVerbs/FillTheGaps'
          src={FillTheGapsSvg}
          alt='fill the gaps image'
        >
          Fill the gaps
        </GameLayoutCard>
        <GameLayoutCard
          href='#'
          src={Sample}
          alt='sample text'
        >
          Sample text
        </GameLayoutCard>
        <GameLayoutCard
          href='#'
          src={Sample}
          alt='sample text'
        >
          Sample text
        </GameLayoutCard>
      </article>
    </IrregularVerbsComponent>
  )
}
