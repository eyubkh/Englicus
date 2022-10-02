import {
  ColorActionError300,
  ColorActionSuccess300,
  ColorBrandSecondary,
  ColorNeutralDark300,
  ColorNeutralGrey100,
  ColorNeutralLight100,
  TokenFontWeightBold,
} from "@tokens";
import styled from "styled-components";

const Component = styled.span`
  color: ${(props) => {
    switch (props.variant) {
      case "success":
        return ColorActionSuccess300;
      case "error":
        return ColorActionError300;
      case "light":
        return ColorNeutralLight100;
      case "grey":
        return ColorNeutralGrey100;
      case "purple":
        return ColorBrandSecondary;
      default:
        return ColorNeutralDark300;
    }
  }};
  font-weight: ${(props) => (props.bold ? TokenFontWeightBold : "none")};
`;
export const TextStyle = ({ children, ...args }) => {
  const rules = ["success", "error", "light", "grey", "default", "purple"];
  if (!rules.includes(args.variant)) {
    console.warn(
      `Text Stlye variant given (: ${args.variant} :) there isn't into rules [${rules}]`
    );
    args.variant = "default";
  }
  args.variant = args.variant.toLowerCase();
  return <Component {...args}>{children}</Component>;
};
