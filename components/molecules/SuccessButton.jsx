import styled from 'styled-components'
import { Button } from '@components/atoms/Button'
import { ActionSuccess200, ActionSuccess300, Border0, NeutralLight100 } from '@tokens'

const SuccessButtonComponent = styled(Button)`
    color: ${NeutralLight100};
    background-color: ${ActionSuccess200};
    box-shadow: 0px ${Border0} 0px ${ActionSuccess300};
    margin-top: 0px;
    transition: box-shadow .1s, margin-top .1s;

    :active {
      margin-top: ${Border0};
      box-shadow: 0px 0px 0px ${ActionSuccess300};
    }
`

export const SuccessButton = ({ children }) => {
  return <SuccessButtonComponent handler>{children}</SuccessButtonComponent>
}
