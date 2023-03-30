import styled from 'styled-components'
import IconBook from '@public/assets/icons-book-48.png'
import IconHearing from '@public/assets/icons-hearing-48.png'
import IconMouth from '@public/assets/icons-mouth-40.png'
import { NeutralLight300, Spacing2 } from '@tokens'
import { Logo } from '@components/atoms/Logo'
import { grammarHref, listeningHref, speakingHref } from '@utils/globalData'
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
      <HeaderLink
        href={grammarHref}
        iconSrc={IconBook}
      >
        grammar
      </HeaderLink>
      <HeaderLink
        href={listeningHref}
        iconSrc={IconHearing}
      >
        Listening
      </HeaderLink>
      <HeaderLink
        href={speakingHref}
        iconSrc={IconMouth}
      >
        Speaking
      </HeaderLink>
    </MainHeaderComponent>
  )
}
