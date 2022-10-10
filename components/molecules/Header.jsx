import { Logo } from '@components/atoms/Logo'
import { NeutralDark300 } from '@tokens'
import styled from 'styled-components'

const HeaderComponent = styled.header`
    display: flex;
    align-items: center;
    background-color: ${NeutralDark300};
    padding-left: 10%;
`

export const Header = () => {
  return (
    <HeaderComponent>
      <Logo />
    </HeaderComponent>
  )
}
