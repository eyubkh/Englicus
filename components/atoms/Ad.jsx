import { NeutralGrey200 } from '@tokens'
import styled from 'styled-components'

const AdComponent = styled.div`
  width: 270px;
  height: 270px;
  background-color: ${NeutralGrey200};
`

export const Ad = () => {
  return (
    <AdComponent />
  )
}
