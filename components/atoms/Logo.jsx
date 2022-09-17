import styled from 'styled-components'
import { ColorBrandPrimary, TokenFontSizeM, TokenFontWeightSemiBold, TokenLineHeightM } from '@token:js'

const LogoComponent = styled.p`
  text-transform: uppercase;
  font-weight: ${TokenFontWeightSemiBold};
  font-size: ${TokenFontSizeM};
  line-height: ${TokenLineHeightM};
  color:white;
  span {
    color: ${ColorBrandPrimary};
  }
`

export const Logo = () => {
  return <LogoComponent><span>eng</span>licus</LogoComponent>
}
