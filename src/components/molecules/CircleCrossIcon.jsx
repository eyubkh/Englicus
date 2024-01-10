import styled from 'styled-components'
import { CrossIcon } from '@components/atoms/CrossIcon'
import { ActionError200, DimensionSmall, NeutralLight100 } from '@tokens'

const CircleCrossIconComponent = styled.div`
    display: grid;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    place-content: center;
    background-color: ${NeutralLight100};

    svg {
      fill: ${ActionError200};
    }

    @media (max-width: ${DimensionSmall}) {
        display: none !important;
    }
`

export const CircleCrossIcon = () => {
  return (
    <CircleCrossIconComponent>
      <CrossIcon />
    </CircleCrossIconComponent>
  )
}
