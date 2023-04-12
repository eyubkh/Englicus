import styled from 'styled-components'
import { GreenButton } from '@components/atoms/buttons/GreenButton'
import { TransparentButton } from '@components/atoms/buttons/TransparentButton'
import { BrandSecondary } from '@tokens'
import Link from 'next/link'

const LessonFooterEndedComponent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  min-height: 23vh;
  padding: 20px 20%;
  border-top: 4px solid ${BrandSecondary};
`

export const LessonFooterEnded = () => {
  const handlerLevelUp = () => {
    console.log('lesson footer end,  level up')
  }
  return (
    <LessonFooterEndedComponent>
      <TransparentButton>
        try again
      </TransparentButton>
      <Link href='/grammar' passHref legacyBehavior>
        <GreenButton onClick={handlerLevelUp}>
          Continue
        </GreenButton>
      </Link>
    </LessonFooterEndedComponent>
  )
}
