import { render, screen } from '@testing-library/react'
import { InputUnderLine } from '@components/atoms/InputUnderLine'
import { BodyH3, Border0, BrandSecondary } from '@tokens'

let component

beforeEach(() => {
  render(<InputUnderLine />)
  component = screen.getByRole('textbox')
})

describe('Component is rendering', () => {
  test('is on screen', () => {
    expect(component).toBeDefined()
  })
})

describe('Component style', () => {
  test('has border bottom', () => {
    expect(component).toHaveStyle(`border-bottom: ${Border0} solid ${BrandSecondary}`)
  })
  test('has not border top', () => {
    expect(component).toHaveStyle('border-top: none')
  })
  test('has not border right', () => {
    expect(component).toHaveStyle('border-right: none')
  })
  test('has not border left', () => {
    expect(component).toHaveStyle('border-left: none')
  })
  test('has text h3', () => {
    const stylesH3 = Object.entries(BodyH3).map(style => `${style[0]}: ${style[1]}`)
    expect(component).toHaveStyle(...stylesH3)
  })
})
