import styled from 'styled-components'
import { TransparentButton } from './TransparentButton'

const LoginButtonComponent = styled(TransparentButton)`
  @media (max-width: 500px) {
      display: initial;
      width: 100%;
  }
`

export const LoginButton = ({ handler, children, ...props }) => {
  return <LoginButtonComponent onClick={handler} {...props}>{children}</LoginButtonComponent>
}
