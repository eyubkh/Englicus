import { BodyTextRegularBold, NeutralDark300, Radius2, Spacing0, Spacing2 } from '@tokens'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const GameLayoutCardComponent = styled.div`
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: ${Spacing2};

    img {
        border-bottom: ${Spacing0};
        border-radius: ${Radius2};
    }

    p {
        ${BodyTextRegularBold}
        margin: 0;
        color: ${NeutralDark300}
    }
`

export const GameLayoutCard = ({ src, alt, href, children }) => {
  return (
    <Link href={href}>
      <GameLayoutCardComponent>
        <Image src={src} alt={alt} width='240' height='120' />
        <p>{children}</p>
      </GameLayoutCardComponent>
    </Link>
  )
}
