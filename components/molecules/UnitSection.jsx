import styled from 'styled-components'
import Link from 'next/link'
import { Border2, BrandSecondary, NeutralLight100, NeutralLight300 } from '@tokens'

const UnitSectionComponent = styled.article`
  width: 100%; 
  height: 50px;
  position: relative;
  display: flex;
  overflow: hidden;

  border-radius: 0 0 ${Border2} ${Border2} ;
  background-color: ${({ isDisabled }) => isDisabled ? NeutralLight300 : NeutralLight100};
  align-items: center;
  border: 1px solid black;
  border-top: none;
  h4 {
    color: black;
    margin-left: 20px;
  }

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 10px;
    top: 0px;
    left: -1px;
        
    background-color: ${({ isDisabled }) => isDisabled ? NeutralLight300 : NeutralLight100};
    border: 1px solid black;
    border-bottom: none;
  }
  ::after {
    content: '';
    position: absolute;
    width: ${({ progress }) => progress + '%'};
    height: 8px;
    top: 1px;
    left: -1px;
        

    background-color: ${BrandSecondary};
  }
`

export const UnitSection = ({ xp, maxXp, name, active }) => {
  return (
    <Link href={active ? 'lessons' : '#'}>
      <UnitSectionComponent progress={xp / maxXp * 100} isDisabled={!active}>
        <h4>{name}</h4>
      </UnitSectionComponent>
    </Link>
  )
}
