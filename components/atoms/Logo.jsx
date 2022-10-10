import styled from 'styled-components'
import { BrandPrimary, NeutralLight100, BodyH4 } from '@tokens'

const LogoComponent = styled.h4`
  ${BodyH4}
  text-transform: uppercase;
  color: ${NeutralLight100};
  span {
    color: ${BrandPrimary};
  }
`

export const Logo = () => {
  return <LogoComponent><span>eng</span>licus</LogoComponent>
}
