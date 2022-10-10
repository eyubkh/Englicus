import { BodyTextRegularBold, Radius2, Spacing0, Spacing3 } from '@tokens'
import styled from 'styled-components'

const ButtonComponent = styled.button`
  ${BodyTextRegularBold}
  border-radius: ${Radius2};
  padding: ${Spacing0} ${Spacing3};
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  :hover {
    filter: brightness(110%);
  }
`
export const Button = ({ handler, children }) => {
  return <ButtonComponent onClick={handler}>{children} </ButtonComponent>
}
