import styled from 'styled-components'
import { Button } from '@components/atoms/Button'
import { BrandSecondary, NeutralLight100 } from '@tokens'

const StartButtonComponent = styled(Button)`
  background-color: ${BrandSecondary};
  border-radius: 100px;
  color: ${NeutralLight100};
  max-width: 600px;
  width: 100%;
`

export const StartButton = () => {
  return <StartButtonComponent>Start</StartButtonComponent>
}
