import { render, screen } from '@testing-library/react'
import { Button } from '@components/atoms/Button'
import { BodyTextRegularBold } from '@tokens'

beforeEach(() => {
  render(<Button />)
})
describe('Component is rendering', () => {
  test('exist on screen', () => {
    expect(screen.getByRole('button')).toBeDefined()
  })
})

describe('Component', () => {
  test('has BodyTextRegularBold style', () => {
    const style = Object.entries(BodyTextRegularBold)
    expect(screen.getByRole('button')).toHaveStyle(...style.map(style => `${style[0]}: ${style[1]}`))
  })
})
