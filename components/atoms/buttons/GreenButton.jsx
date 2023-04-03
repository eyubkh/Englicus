import React from 'react'
import styled from 'styled-components'
import { ActionSuccess200, ActionSuccess300, Border0, NeutralLight100 } from '@tokens'
import { BaseButton } from '.'

const GreenButtonComponent = styled(BaseButton)`
    color: ${NeutralLight100};
    background-color: ${ActionSuccess200};
    box-shadow: 0px ${Border0} 0px ${ActionSuccess300};
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
