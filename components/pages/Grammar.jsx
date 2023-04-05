import styled from 'styled-components'
import { MainHeader } from '@components/organisms/MainHeader'
import { GameSection } from '@components/organisms/GameSection'
import appData from '@utils/appData.json'

const GrammarComponent = styled.main`
`

export const Grammar = () => {
  return (
    <GrammarComponent>
      <MainHeader />
      {
        Object
          .keys(appData.games)
          .map((gameTitle, index) => {
            return (
              <GameSection
                key={index}
                title={gameTitle}
                games={appData.games[gameTitle]}
              />
            )
          })
      }
    </GrammarComponent>
  )
}
