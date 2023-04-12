import styled from 'styled-components'
import Link from 'next/link'
import { useContext } from 'react'
import { UserState } from '@redux/user/userContext'

const UnitSectionComponent = styled.div`
  
`

export const UnitSection = ({ section, title }) => {
  const { currentSection } = useContext(UserState)
  const { xp, max_xp: maxXp } = section
  return (
    <UnitSectionComponent>
      <p>current xp: {xp} --- xp to complete: {maxXp}</p>
      <Link href='/lessons' key={title}>
        <button
          disabled={title !== currentSection}
        >
          {title}
        </button><br />
      </Link>
    </UnitSectionComponent>
  )
}
