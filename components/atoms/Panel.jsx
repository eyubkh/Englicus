import styled from 'styled-components'

const Component = styled.div`
  width: 240px;
  height: 120px;
  background-color: #dddddd;
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  color: dark;
  margin: auto ;
  border-radius: 12px;
`

export const Panel = ({ children }) => {
  return <Component >{children}</Component>
}
