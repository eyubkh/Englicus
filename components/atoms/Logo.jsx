import styled from 'styled-components'
import { BrandPrimary, NeutralLight100, H3 } from '@tokens'

const LogoComponent = styled.p`
  ${H3}
  text-transform: uppercase;
  color: ${NeutralLight100};
  span {
    color: ${BrandPrimary};
  }
`

export const Logo = () => {
  return <LogoComponent><span>eng</span>licus</LogoComponent>
}
