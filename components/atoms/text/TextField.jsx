import {
  ColorBrandSecondary,
  TokenBorderRadiusButton,
  TokenFontWeightBold,
} from "@tokens";
import styled from "styled-components";

const Component = styled.input`
  font-size: 2.75rem;
  font-weight: ${TokenFontWeightBold};
  border: none;
  width: 230px;
  border-bottom: 4px solid ${ColorBrandSecondary};
  outline: none;
  padding: 0px ${TokenBorderRadiusButton} ${TokenBorderRadiusButton} 15px;
  background-color: transparent;
  text-align: center;
  border-radius: 5px 5px 0px 0px;
  :disabled {
    background-color: hsla(0, 0%, 9%, 0.1);
    cursor: not-allowed;
    border-bottom: 4px solid ${ColorBrandSecondary};
  }
`;

export const TextField = ({ handler, isDisabled, ...rest }) => {
  return (
    <Component onChange={handler} disabled={isDisabled} {...rest}></Component>
  );
};
