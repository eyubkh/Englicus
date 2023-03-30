import styled from 'styled-components'
import { Logo } from '@components/atoms/Logo'

const HomeHeaderComponent = styled.header`
  position: absolute;
  display: flex;
  align-items: flex-end;
  height: 100px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

`

export const HomeHeader = () => {
  return (
    <HomeHeaderComponent>
      <Logo />
    </HomeHeaderComponent>
  )
}
