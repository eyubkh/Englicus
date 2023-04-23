import styled from 'styled-components'
// import IconBook from '@public/icons/book.png'
import IconHearing from '@public/icons/hearing.png'
// import IconMouth from '@public/icons/mouth.png'
import { NeutralLight300, Spacing2 } from '@tokens'
import { Logo } from '@components/atoms/Logo'
import { HeaderLink } from '@components/molecules/HeaderLink'

const MainHeaderComponent = styled.header`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: ${Spacing2};
  border-bottom: 2px solid ${NeutralLight300};
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 100px;
`

export const MainHeader = () => {
  return (
    <MainHeaderComponent>
      <Logo dark />
      {/* <HeaderLink
        href={grammarHref}
        iconSrc={IconBook}
      >
        grammar
      </HeaderLink> */}
      <HeaderLink
        href='/path'
        iconSrc={IconHearing}
      >
        Path
      </HeaderLink>
      {/* <HeaderLink
        href={speakingHref}
        iconSrc={IconMouth}
      >
        Speaking
      </HeaderLink> */}
    </MainHeaderComponent>
  )
}
