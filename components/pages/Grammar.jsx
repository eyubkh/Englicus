import styled from 'styled-components'
import { IrregurlarVerbs } from '@components/organisms/IrregularVerbs'
import { MainHeader } from '@components/organisms/MainHeader'

const GrammarComponent = styled.main`
`

export const Grammar = () => {
  return (
    <GrammarComponent>
      <MainHeader />
      <IrregurlarVerbs />
    </GrammarComponent>
  )
}
