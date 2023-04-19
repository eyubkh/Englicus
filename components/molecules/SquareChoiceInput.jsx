import { Border0, NeutralGrey300, NeutralLight100, NeutralLight300 } from '@tokens'
import styled from 'styled-components'

const SquareChoiceInputComponent = styled.div`
  background-color: ${({ activate }) => activate ? NeutralLight300 : NeutralLight100};
    height: 180px;
    width: 180px;
    border-radius: 20px;
    display: grid;
    place-content: center;
    border: ${Border0} solid ${NeutralGrey300};
    cursor: pointer;

    :hover {
      background-color: ${NeutralLight300};
    }
`

export const SquareChoiceInput = ({ onClick, children, ...props }) => {
  return (
    <SquareChoiceInputComponent {...props} onClick={onClick}>
      <p>{children}</p>
    </SquareChoiceInputComponent>
  )
}
