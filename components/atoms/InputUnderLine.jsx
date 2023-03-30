import { BodyH3, BodyH4, Border0, BrandSecondary, DimensionSmall, Spacing0, Spacing1 } from '@tokens'
import styled from 'styled-components'

const InputComponent = styled.input`
  ${BodyH3}
    border-bottom: ${Border0} solid ${BrandSecondary};
    border-top: none;
    border-right: none;
    border-left: none;
    text-align: center;
    padding: ${Spacing0} ${Spacing1};
    max-width: 300px;
    outline: none;

    @media (max-width: ${DimensionSmall}) {
        ${BodyH4}
    }
`

export const InputUnderLine = ({ handler, value = '', ...args }) => {
  return <InputComponent onChange={handler} value={value} type='text' placeholder='Text' {...args} />
}
