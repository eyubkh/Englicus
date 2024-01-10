import styled from 'styled-components'
import { ActionError200, ActionError300, Border0, NeutralLight100 } from '@tokens'
import { BaseButton } from '.'

const RedButtonComponent = styled(BaseButton)`
    background-color: ${ActionError200};
    color: ${NeutralLight100};
    box-shadow: 0px ${Border0} 0px ${ActionError300};
    transition: box-shadow .1s, margin-top .1s;

    :active {
        margin-top: ${Border0};
        box-shadow: 0px 0px 0px ${ActionError300};
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`

export const RedButton = ({ handler }) => {
  return <RedButtonComponent onClick={handler}>Continue</RedButtonComponent>
}
