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
    const localData = window.localStorage.getItem('userData')
    const objData = JSON.parse(localData)

    objData.courses['Fill the gaps'].level = objData.courses['Fill the gaps'].level + 1
    window.localStorage.setItem('userData', JSON.stringify(objData))

    console.log(objData)
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
