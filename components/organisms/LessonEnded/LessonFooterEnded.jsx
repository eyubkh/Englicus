import styled from 'styled-components'
import { GreenButton } from '@components/atoms/buttons/GreenButton'
import { BrandSecondary } from '@tokens'
import Link from 'next/link'
import { useContext } from 'react'
import { LessonState } from '@redux/lesson/lessonContext'
import { UserState } from '@redux/user/userContext'
import dataFetching from '@libs/dataFetching'

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
  const { currentLevel, path, _id } = useContext(UserState)

  const handlerLevelUp = () => {
    dataFetching('/api/lesson/finish', {
      currentLevel,
      path,
      _id,
      xp
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
