import styled from 'styled-components'
import { Button } from '@components/atoms/Button'
import { ActionError200, ActionError300, Border0, NeutralLight100 } from '@tokens'

const ErrorButtonComponent = styled(Button)`
    background-color: ${ActionError200};
    color: ${NeutralLight100};
    box-shadow: 0px ${Border0} 0px ${ActionError300};
    transition: box-shadow .1s, margin-top .1s;

    :active {
        margin-top: ${Border0};
        box-shadow: 0px 0px 0px ${ActionError300};
    }
`

export const ErrorButton = ({ handler }) => {
  return <ErrorButtonComponent onClick={handler}>Continue</ErrorButtonComponent>
}
