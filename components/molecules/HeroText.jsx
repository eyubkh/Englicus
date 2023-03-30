import styled from 'styled-components'
import { NeutralLight100, BrandPrimary, Spacing1, BodyH4 } from '@tokens'

import { GreenButton } from './buttons/GreenButton'
import { TransparentButton } from './buttons/TransparentButton'
import Link from 'next/link'
import { grammarHref } from '@utils/globalData'

const HeroTextComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing1};
  justify-content: center;
  align-items: center;

  h4 {
    text-align: center;
      ${BodyH4}
      color: ${NeutralLight100};
  }

  h4 span {
      color: ${BrandPrimary}
  }
`

export const HeroText = () => {
  return (
    <HeroTextComponent>
      <h4>¡Improve your english with <br /> <span>eng</span>licus gradually!</h4>
      <Link href={grammarHref} passHref legacyBehavior>
        <GreenButton large>Start</GreenButton>
      </Link>
      <TransparentButton large>Login</TransparentButton>

    </HeroTextComponent>
  )
}
