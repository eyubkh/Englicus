import styled from 'styled-components'
import { CrossIcon } from '@components/atoms/CrossIcon'
import { NeutralLight100 } from '@tokens'

const CircleCrossIconComponent = styled.div`
    display: grid;
    width: 120px;
    height: 120px;
    border-radius: 100%;
    place-content: center;
    background-color: ${NeutralLight100};
`

export const CircleCrossIcon = () => {
  return (
    <CircleCrossIconComponent>
      <CrossIcon />
    </CircleCrossIconComponent>
  )
}
