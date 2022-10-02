import styled from 'styled-components'

const Template = styled.p`
    white-space: nowrap;
    @media (max-width: 700px) {
        white-space: normal;
    }
`
export const Heading = ({ children, element, size }) => {
  element = element.toLowerCase()
  const rules = ['h1', 'h2', 'h3', 'h4', 'p']
  if (!rules.includes(element)) {
    console.warn(
            `Heading element given (: ${element} :) there isn't into rules [${rules}]`
    )
    element = 'p'
  }
  return (
    <Template size={size} as={element}>
      {children}
    </Template>
  )
}
