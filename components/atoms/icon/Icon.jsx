
import {
  ColorBrandSecondary,
  ColorActionError200,
  ColorNeutralGrey200,
  ColorActionSuccess200,
  ColorNeutralGrey100
} from '@token:js'
import styled from 'styled-components'
import Svg from './Svg'

const Component = styled.div`
  width: ${(props) => {
    return props.size
      ? `${props.size}`
      : '50px'
  }};
  cursor: ${(props) => {
    return props.onClick
      ? 'pointer'
      : 'normal'
  }};
`

export const Icon = ({ size, icon, handler }) => {
  let fill = ColorNeutralGrey200
  icon = icon.toLowerCase()
  switch (icon) {
    case 'circlecheck':
      fill = ColorActionSuccess200
      break
    case 'lang':
      fill = ColorBrandSecondary
      break
    case 'circlexmark':
      fill = ColorActionError200
      break
    case 'rotate':
      fill = ColorNeutralGrey100
      break
    default:
      fill = ColorNeutralGrey200
  }
  return (
    <Component onClick={handler} size={size}>
      { Svg[icon] ? Svg[icon](fill) : 'Chose icon' }
    </Component>
  )
}
