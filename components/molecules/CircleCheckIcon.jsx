import styled from 'styled-components'
import { CheckIcon } from '@components/atoms/CheckIcon'
import { NeutralLight100 } from '@tokens'

const CircleSuccesIconComponent = styled.div`
    display: grid;
    width: 120px;
    height: 120px;
    border-radius: 100%;
    place-content: center;
    background-color: ${NeutralLight100};
`

export const CircleCheckIcon = () => {
  return (
    <CircleSuccesIconComponent>
      <CheckIcon />
    </CircleSuccesIconComponent>
  )
}
