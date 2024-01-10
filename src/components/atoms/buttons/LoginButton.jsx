import React from 'react'
import styled from 'styled-components'
import { TransparentButton } from './TransparentButton'

const LoginButtonComponent = styled(TransparentButton)`
  @media (max-width: 500px) {
      display: initial;
      width: 100%;
  }
`

export const LoginButton = React.forwardRef(({ href, className, onClick, children, ...props }, ref) => {
  return (
    <LoginButtonComponent
      className={className}
      onClick={onClick}
      ref={ref}
      {...props}
    >
      {children}
    </LoginButtonComponent>
  )
})
