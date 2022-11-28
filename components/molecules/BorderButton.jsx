import styled from 'styled-components'
import { Button } from '@components/atoms/Button'
import { Border0, BrandSecondary } from '@tokens'

const BorderButtonComponent = styled(Button)`
    background-color: transparent;
    color: ${BrandSecondary};
    border: ${Border0} solid ${BrandSecondary};
`

export const BorderButton = ({ handler, children }) => {
  return <BorderButtonComponent onClick={handler}>{children}</BorderButtonComponent>
}
