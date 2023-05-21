import styled, { keyframes } from 'styled-components'
import Link from 'next/link'
import { ActionSuccess100, ActionSuccess300, BrandSecondary, NeutralGrey100, NeutralLight200, NeutralLight300 } from '@tokens'
import educationSvg from '@public/icons/education.svg'
import Image from 'next/image'

const varibales = {
  size: 100,
  full: 180
}

const completed = (progress) => keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(${progress + 'deg'});
  }
`

const UnitSectionComponent = styled.article`
  position: relative;
  width: ${varibales.size + 'px'};
  height: ${varibales.size + 'px'};
  border-radius: 50%;
  background-color: ${NeutralLight300};
  box-shadow: inset 0px 0px 5px ${NeutralGrey100};

  .inside-circle {
    display: grid;
    place-content: center;
    width: ${varibales.size * 0.9 + 'px'};
    height: ${varibales.size * 0.9 + 'px'};
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
    top: 50%;
    border-radius: 100%;
    background-color: ${({ isActive }) => isActive ? BrandSecondary : NeutralLight200};
    box-shadow: inset 0px 0px 5px ${ActionSuccess300};
    position: absolute;
    z-index: 3;
    border: 5px solid white;
  }

  .circle .mask,
  .circle .fill {
  width: ${varibales.size + 'px'};
  height: ${varibales.size + 'px'};
  position: absolute;
  border-radius: 100%;
}

  .mask .fill {
    clip: rect(0px, ${varibales.size / 2 + 'px'}, ${varibales.size + 'px'}, 0px);
    box-shadow: inset 0px 0px 5px ${NeutralGrey100};
    background-color: ${ActionSuccess100};
  }

  .circle .mask {
    clip: rect(0px, ${varibales.size + 'px'}, ${varibales.size + 'px'}, ${varibales.size / 2 + 'px'});
  }

  .mask.full,
  .circle .fill {
    animation: ${({ progress }) => completed(progress)} ease-in-out 3s forwards;
    transform: rotate(140deg);
  }
`

export const UnitSection = ({ xp, maxXp, name, active }) => {
  return (
    <Link href={active ? 'lessons' : '#'}>
      <UnitSectionComponent progress={xp / maxXp * varibales.full} isActive={active}>
        <div className='circle'>
          <div className='inside-circle'>
            <Image src={educationSvg} width={varibales.size / 2} alt='education icon' />
          </div>
          <div className='mask half'>
            <div className='fill' />
          </div>
          <div className='mask full'>
            <div className='fill' />
          </div>
        </div>
      </UnitSectionComponent>
    </Link>
  )
}
