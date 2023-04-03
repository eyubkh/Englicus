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

export const TransparentButton = ({ handler, children, ...props }) => {
  return <TransparentButtonComponent onClick={handler} {...props}>{children}</TransparentButtonComponent>
}
