import styled from 'styled-components'
import { CheckIcon } from '@components/atoms/CheckIcon'
import { ActionSuccess200, NeutralLight100 } from '@tokens'

const CircleSuccesIconComponent = styled.div`
    display: grid;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    place-content: center;
    background-color: ${NeutralLight100};

    svg {
      fill: ${ActionSuccess200};
    }
`

export const CircleCheckIcon = () => {
  return (
    <CircleSuccesIconComponent>
      <CheckIcon />
    </CircleSuccesIconComponent>
  )
}
