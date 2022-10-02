import {
  TokenFontSizeL,
  TokenFontSizeM,
  TokenFontSizeS,
  TokenFontSizeXl,
  TokenFontSizeXs,
  TokenFontSizeXxl
} from '@tokens'
import styled from 'styled-components'

const Component = styled.p`
    color: dark;
    font-size: ${(props) => {
        props.size.toLowerCase()
        switch (props.size) {
            case 'xxl':
                return TokenFontSizeXxl
            case 'xl':
                return TokenFontSizeXl
            case 'l':
                return TokenFontSizeL
            case 'm':
                return TokenFontSizeM
            case 's':
                return TokenFontSizeS
            case 'xs':
                return TokenFontSizeXs
            default:
                return TokenFontSizeL
        }
    }};
`

export const DisplayText = ({ children, size }) => {
  size = size.toLowerCase()
  const rules = ['xxl', 'xl', 'l', 'm', 's', 'xs']
  if (!rules.includes(size)) {
    console.warn(
            `DisplayText size given (: ${size} :) there isn't into rules [${rules}]`
    )
    size = 'm'
  }
  return <Component size={size}>{children}</Component>
}
