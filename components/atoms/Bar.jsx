import {
  ColorActionSuccess100,
  ColorNeutralGrey100,
  TokenBorderRadiusBar,
} from "@tokens";
import styled from "styled-components";

const Component = styled.div`
  position: relative;
  width: 50%;
  height: 10px;
  background: ${ColorNeutralGrey100};
  border-radius: ${TokenBorderRadiusBar};
  margin-left: 20px;
  overflow: hidden;
  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => (props.progress ? props.progress + "%" : "0%")};
    height: 100%;
    transition: all 0.2s;
    background-color: ${ColorActionSuccess100};
  }
`;

export const Bar = ({ progress }) => {
  return <Component progress={progress} />;
};
