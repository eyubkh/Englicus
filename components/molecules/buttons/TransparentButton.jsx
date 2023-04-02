import styled from 'styled-components'
import { Button } from '@components/atoms/Button'
import { Border0, BrandSecondary } from '@tokens'

const TransparentButtonComponent = styled(Button)`
  text-align: center;
  width: ${({ large }) => large ? '350px' : 'auto'};
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
