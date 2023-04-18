import { BodyTextRegularBold, Radius2, Spacing4, Spacing0 } from '@tokens'
import styled from 'styled-components'

export const BaseButton = styled.a`
  ${BodyTextRegularBold}
  display: block;
  border-radius: ${Radius2};
  padding: ${Spacing0} ${Spacing4};
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  text-align: center;
  width: ${({ large }) => large ? '100%' : 'auto'};

  :hover {
    filter: brightness(110%);
  }
`
