import styled from 'styled-components'
import Link from 'next/link'
import { ActionSuccess100, ActionSuccess200, ActionSuccess300, Border2, BrandSecondary, NeutralGrey100, NeutralLight100, NeutralLight300 } from '@tokens'
import educationSvg from '@public/icons/education.svg'
import Image from 'next/image'

const varibales = {
  size: 200
}

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
    background: ${ActionSuccess100};
    box-shadow: inset 0px 0px 5px ${ActionSuccess300};
    position: absolute;
    z-index: 3;
    border: 10px solid white;
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
    animation: fill ease-in-out 3s ;
    transform: rotate(140deg);
  }

@keyframes fill{
  0% {
    transform: rotate(100deg);
  }
  100% {
    transform: rotate(140deg);
  }
}

`

export const UnitSection = ({ xp, maxXp, name, active }) => {
  return (
    <Link href={active ? 'lessons' : '#'}>
      <UnitSectionComponent progress={xp / maxXp * 100} isActive={active}>
        <div class='circle'>
          <div class='inside-circle'>
            <Image src={educationSvg} width={varibales.size / 2} alt='education icon' />
          </div>
          <div class='mask half'>
            <div class='fill' />
          </div>
          <div class='mask full'>
            <div class='fill' />
          </div>
        </div>
      </UnitSectionComponent>
    </Link>
  )
}
