import { render, screen } from '@testing-library/react'
import { Button } from '@components/atoms/Button'
import { BodyTextRegularBold } from '@tokens'

let component

beforeEach(() => {
  render(<Button />)
  component = screen.getByRole('button')
})
describe('Component is rendering', () => {
  test('exist on screen', () => {
    expect(component).toBeDefined()
  })
})

describe('Component style', () => {
  test('has BodyTextRegularBold style', () => {
    const stylesBodyTextRegularBold = Object.entries(BodyTextRegularBold).map(style => `${style[0]}: ${style[1]}`)
    expect(component).toHaveStyle(...stylesBodyTextRegularBold)
  })
})
