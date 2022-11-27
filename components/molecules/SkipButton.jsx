import styled from 'styled-components'
import { Button } from '@components/atoms/Button'
import { Border0, BrandSecondary } from '@tokens'

const SkipButtonComponent = styled(Button)`
    background-color: transparent;
    color: ${BrandSecondary};
    border: ${Border0} solid ${BrandSecondary};
`

export const SkipButton = ({ handler }) => {
  return <SkipButtonComponent onClick={handler}>Skip</SkipButtonComponent>
}
