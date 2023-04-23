import styled from 'styled-components'
import Link from 'next/link'
import { useContext } from 'react'
import { UserState } from '@redux/user/userContext'
import { ActionSuccess100, BrandSecondary, NeutralGrey100 } from '@tokens'

const UnitSectionComponent = styled.article`
  width: 190px; 
  height: 190px;
  border-radius: 27px;
  display: grid;
  place-content: center;

  svg {
    width: 114px;
    height: 114px;
    margin: 1em;
  }

  .bg {
    fill: ${({ isDisabled }) => isDisabled ? NeutralGrey100 : BrandSecondary};
    stroke-width: 10px;
    stroke: #1A2C34;
  }

  .meter-1 {
    stroke-dasharray: 360;
    stroke-dashoffset: ${({ progress }) => progress};
    stroke: ${ActionSuccess100};
    transition: stroke-dashoffset 1s ease-out;

    fill: none;
    stroke-width: 10px;
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
`

export const UnitSection = ({ xp, maxXp, name, position }) => {
  const { currentLevel } = useContext(UserState)
  return (
    <Link href={position !== currentLevel ? '#' : 'lessons'}>
      <UnitSectionComponent progress={xp >= maxXp ? 0 : 360 - (xp / maxXp * 360)} isDisabled={position !== currentLevel}>
        <svg>
          <circle class='bg' cx='57' cy='57' r='52' />
          <text x='35' y='60'>{name}</text>
          <circle class='meter-1' cx='57' cy='57' r='52' />
        </svg>
      </UnitSectionComponent>
    </Link>
  )
}
