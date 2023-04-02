import React from 'react'
import styled from 'styled-components'
import { ActionSuccess200, ActionSuccess300, Border0, NeutralLight100, Spacing3, Radius2, BodyTextRegularBold, Spacing0, Spacing4 } from '@tokens'

const GreenButtonComponent = styled.a`
    ${BodyTextRegularBold}
    border-radius: ${Radius2};
    padding: ${Spacing0} ${Spacing3};
    text-transform: uppercase;
    cursor: pointer;
    border: none;

    :hover {
      filter: brightness(110%);
    }

    width: ${({ large }) => large ? '350px' : 'auto'};
    padding: ${Spacing0} ${Spacing4};
    text-align: center;
    color: ${NeutralLight100};
    background-color: ${ActionSuccess200};
    box-shadow: 0px ${Border0} 0px ${ActionSuccess300};
    margin-top: 0px;
    transition: box-shadow .1s, margin-top .1s;

    :active {
      margin-top: ${Border0};
      box-shadow: 0px 0px 0px ${ActionSuccess300};
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`

export const GreenButton = React.forwardRef(({ href, className, children, onClick, ...props }, ref) => {
  return (
    <GreenButtonComponent
      className={className}
      href={href}
      ref={ref}
      onClick={onClick}
      {...props}
    >
      {children}
    </GreenButtonComponent>
  )
})
