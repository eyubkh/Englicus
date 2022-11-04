import { Header } from '@components/molecules/Header'
import styled from 'styled-components'
import { IrregurlarVerbs } from '@components/organisms/IrregularVerbs'

const MainComponent = styled.main`
  margin-top: 50px;
  padding: 0px 10%;
`

export const Learn = () => {
  return (
    <MainComponent>
      <Header />
      <IrregurlarVerbs />
    </MainComponent>
  )
}
