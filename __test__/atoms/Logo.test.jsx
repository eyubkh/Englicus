import { render, screen } from '@testing-library/react'
import { Logo } from '@components/atoms/Logo'

beforeEach(() => {
  render(<Logo />)
})

describe('Logo is rendering', () => {
  test('exist on screen', () => {
    expect(screen.queryByRole('paragraph')).toBeDefined()
  })
})

describe('Logo contain englicus', () => {
  test('find text eng', () => {
    expect(screen.getAllByText(/eng|licus/)).toBeDefined()
  })
})
