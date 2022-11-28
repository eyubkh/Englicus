import { Logo } from '@components/atoms/Logo'
import { NeutralDark300 } from '@tokens'
import styled from 'styled-components'

const HeaderComponent = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${NeutralDark300};
  padding: 20px 15%;
`

export const Header = () => {
  return (
    <HeaderComponent>
      <Logo />
    </HeaderComponent>
  )
}
