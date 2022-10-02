import { BrandSecondary } from '@tokens'
import styled from 'styled-components'

const InputComponent = styled.input`
    border-color: ${BrandSecondary};
    border-bottom: solid black 3px;
`

export const InputUnderLine = () => {
  return <InputComponent type='text' placeholder='Haaaaaa' />
}
