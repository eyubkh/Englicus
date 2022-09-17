import styled from 'styled-components'

const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.center ? 'center' : props.right ? 'right' : 'left'};
  max-width: 450px;
  & > p {
    margin-bottom: 2rem;
  }
`
export const TextContainer = ({ children, spacing, ...args }) => {
  return (
    <Component { ...args} spacing={spacing}>
      {children}
    </Component>
  )
}
