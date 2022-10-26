import { GameTitle } from '@components/atoms/GameTitle'
import { GameLayoutCard } from '@components/molecules/GameLayoutCard'
import { Header } from '@components/molecules/Header'
import Link from 'next/link'
import styled from 'styled-components'
import FillTheGapsImage from '@assets/FillTheGaps.svg'

const MainComponent = styled.main`
  padding-top: 117px;
  padding: 0px 10%;
`

export const Learn = () => {
  return (
    <MainComponent>
      <Header />
      <h1>Welcome to Learn page!</h1>
      <GameTitle>Irregular verbs</GameTitle>
      <GameLayoutCard
        href='/irregularVerbs/FillTheGaps'
        src={FillTheGapsImage}
        alt='fill the gaps image'
      >
        Fill the gaps
      </GameLayoutCard>
      <Link href='/'>Go back</Link>
    </MainComponent>
  )
}
