import styled from 'styled-components'
import { Button } from '@components/atoms/Button'
import { Border0, BrandSecondary } from '@tokens'

const TransparentButtonComponent = styled(Button)`
    background-color: transparent;
    color: ${BrandSecondary};
    border: ${Border0} solid ${BrandSecondary};
`

export const TransparentButton = ({ handler, children }) => {
  return <TransparentButtonComponent onClick={handler}>{children}</TransparentButtonComponent>
}
