import { MainHeader } from '@components/organisms/MainHeader'
import styled from 'styled-components'

const ListeningComponent = styled.div`
  height: 100vh;
`

export const Listening = () => {
  return (
    <ListeningComponent>
      <MainHeader />
    </ListeningComponent>
  )
}
