import styled from 'styled-components'
import { GameTitle } from '@components/atoms/GameTitle'
import { GameLayoutCard } from '@components/molecules/GameLayoutCard'

const GameSectionComponent = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
  }
`

export const GameSection = ({ title, games = [] }) => {
  return (
    <GameSectionComponent>
      <GameTitle>{title}</GameTitle>
      <section>
        {
          games
            .map(({ alt, href, name, src }, index) => {
              return (
                <GameLayoutCard
                  key={index}
                  href={href}
                  alt={alt}
                  src={src}
                >
                  {name}
                </GameLayoutCard>
              )
            })
         }
      </section>
    </GameSectionComponent>
  )
}
