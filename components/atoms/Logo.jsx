import styled from 'styled-components'
import { BrandPrimary, NeutralLight100, BodyH4 } from '@tokens'
import Link from 'next/link'

const LogoComponent = styled.h4`
  ${BodyH4}
  cursor: pointer;
  text-transform: uppercase;
  color: ${NeutralLight100};
  span {
    color: ${BrandPrimary};
  }
`

export const Logo = () => {
  return (
    <Link href='/'>
      <LogoComponent><span>eng</span>licus</LogoComponent>
    </Link>
  )
}
