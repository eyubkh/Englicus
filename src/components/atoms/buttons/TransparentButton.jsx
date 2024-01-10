import React from 'react'
import styled from 'styled-components'
import { Border0, BrandSecondary } from '@tokens'
import { BaseButton } from '.'

const TransparentButtonComponent = styled(BaseButton)`
  background-color: transparent;
  color: ${BrandSecondary};
  border: ${Border0} solid ${BrandSecondary};

  @media (max-width: 500px) {
      display: none;
    }
`
export const TransparentButton = React.forwardRef(({ href, className, children, type = 'button', onClick, ...props }, ref) => {
  return (
    <TransparentButtonComponent
      className={className}
      href={href}
      ref={ref}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </TransparentButtonComponent>
  )
})
