import styled from 'styled-components'
import Link from 'next/link'
import { useContext } from 'react'
import { UserState } from '@redux/user/userContext'

const UnitSectionComponent = styled.article`
  width: 200px; 
  height: 200px;
  background-color: ${({ isDisabled }) => isDisabled ? 'gray' : 'orangered'};
  border-radius: 20px;
  display: grid;
  place-content: center;

`

export const UnitSection = ({ xp, maxXp, name, position }) => {
  const { currentSection } = useContext(UserState)
  return (
    <Link href='/lessons'>
      <UnitSectionComponent isDisabled={position !== currentSection}>
        <p>{name}</p>
        <p>{xp / maxXp * 100}%</p>
      </UnitSectionComponent>
    </Link>
  )
}
