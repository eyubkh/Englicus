import styled from 'styled-components'
import { BrandPrimary, NeutralLight100, BodyH4, NeutralDark100, Spacing2 } from '@tokens'
import Link from 'next/link'
import { homeHref } from '@utils/globalData'

const LogoComponent = styled.h4`
  position: absolute;
  left: 0;
  margin-bottom: ${Spacing2};

  ${BodyH4}
  cursor: pointer;
  
  span {
    color: ${BrandPrimary};
  }
  a {
    text-transform: uppercase;
    color: ${({ dark }) => dark ? NeutralDark100 : NeutralLight100};
    text-decoration: none;
  }
`

export const Logo = ({ dark }) => {
  return (
    <LogoComponent dark={dark}>
      <Link href={homeHref}>
        <span>eng</span>licus
      </Link>
    </LogoComponent>
  )
}
