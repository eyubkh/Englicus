import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { NeutralDark100, Spacing1, BodyTextRegularBold } from '@tokens'
import { useRouter } from 'next/router'

const HeaderLinkComponent = styled(Link)`
    text-decoration: none;
    color: ${NeutralDark100};
    display: inline-flex;
    align-items: center;
    gap: ${Spacing1};
    padding: 10px 15px;
    filter: ${({ active }) => active ? 'grayscale(0)' : 'grayscale(1)'};

    p {
      ${BodyTextRegularBold}
      text-transform: uppercase;
    }

  :hover {
    cursor: pointer;
  }

`

export const HeaderLink = ({ href, iconSrc, children }) => {
  const router = useRouter()

  return (
    <HeaderLinkComponent
      href={href}
      active={router.asPath === href}
    >
      <Image
        src={iconSrc}
        width={40}
        height={40}
        alt=''
      />
      <p>{children}</p>
    </HeaderLinkComponent>
  )
}
