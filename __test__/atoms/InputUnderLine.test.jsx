import { render, screen } from '@testing-library/react'
import { InputUnderLine } from '@components/atoms/InputUnderLine'
import { BrandSecondary } from '@tokens'

beforeEach(() => {
  render(<InputUnderLine />)
})

describe('Input is rendering', () => {
  test('is on screen', () => {
    expect(screen.getByRole('textbox')).toBeDefined()
  })
})

describe('Input style', () => {
  test('has border color as secondary brand color', () => {
    expect(screen.getByRole('textbox')).toHaveStyle(`border-color: ${BrandSecondary}`)
  })

  test('has border bottom', () => {
    expect(screen.getByRole('textbox')).toHaveStyle('border-bottom: 3px')
  })
})
