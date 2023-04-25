import styled from 'styled-components'
import { GreenButton } from '@components/atoms/buttons/GreenButton'
import { BrandSecondary } from '@tokens'
import Link from 'next/link'
import { useContext } from 'react'
import { LessonState } from '@redux/LessonContext'
import { UserDispatch } from '@redux/user/userContext'

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
  const { xp } = useContext(LessonState)
  const userDispatch = useContext(UserDispatch)

  const handlerLevelUp = () => {
    userDispatch({
      type: 'xp',
      payload: xp
    })
  }
  return (
    <LessonFooterEndedComponent>
      <Link href='/path' passHref legacyBehavior>
        <GreenButton large onClick={handlerLevelUp}>
          Continue
        </GreenButton>
      </Link>
    </LessonFooterEndedComponent>
  )
}
