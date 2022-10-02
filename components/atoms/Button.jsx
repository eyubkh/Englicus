import { BodyTextRegularBold, Radius0, Spacing0, Spacing3 } from '@tokens'
import styled from 'styled-components'
// box-shadow: 0px 4px ${(props) => {
//   props.variant = props.variant.toLowerCase();
//   switch (props.variant) {
//     case "success":
//       return ColorActionSuccess300;
//     case "error":
//       return ColorActionError300;
//     default:
//       return "none";
//   }
// }};
// color: ${(props) => {
//   props.variant.toLowerCase();
//   switch (props.variant) {
//     case "success":
//     case "error":
//       return ColorNeutralLight100;
//     case "transparent":
//       return ColorBrandSecondary;
//     default:
//       return ColorNeutralDark100;
//   }
// }};

// background-color: ${(props) => {
//   props.variant = props.variant.toLowerCase();
//   switch (props.variant) {
//     case "success":
//       return ColorActionSuccess200;
//     case "error":
//       return ColorActionError200;
//     case "transparent":
//       return "transparent";
//     default:
//       return ColorBrandSecondary;
//   }
// }};

// border: ${(props) => {
//   props.variant = props.variant;
//   return props.variant === "transparent"
//     ? `solid 3px ${ColorBrandSecondary}`
//     : "none";
// }};

const ButtonComponent = styled.button`
  ${BodyTextRegularBold}
  border-radius: ${Radius0};
  padding: ${Spacing0} ${Spacing3};
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    filter: brightness(110%);
  }
`
export const Button = ({ handler, children }) => {
  return <ButtonComponent onClick={handler}>{children} </ButtonComponent>
}
