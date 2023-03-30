import React from 'react'
import { BodyTextRegularBold, Radius2, Spacing3 } from '@tokens'
import styled from 'styled-components'

const ButtonComponent = styled.a`
  ${BodyTextRegularBold}
  border-radius: ${Radius2};
  padding: 8px ${Spacing3};
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  :hover {
    filter: brightness(110%);
  }
`
export const Button = React.forwardRef(({ onClick, href, className, children }, ref) => {
  return (
    <ButtonComponent
      className={className}
      href={href}
      ref={ref}
      onClick={onClick}
    >
      {children}
    </ButtonComponent>
  )
})
