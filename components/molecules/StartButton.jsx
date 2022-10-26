import styled from 'styled-components'
import { Button } from '@components/atoms/Button'
import { BrandSecondary, NeutralLight100 } from '@tokens'
import Link from 'next/link'

const StartButtonComponent = styled(Button)`
  background-color: ${BrandSecondary};
  text-align: center;
  border-radius: 100px;
  color: ${NeutralLight100};
  max-width: 600px;
  width: 100%;
`

export const StartButton = () => {
  return (
    <Link href='/learn'>
      <StartButtonComponent>
        Start
      </StartButtonComponent>
    </Link>
  )
}
