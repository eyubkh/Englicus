import { BodyH3, Border0, NeutralGrey100, Radius0, Spacing2 } from '@tokens'
import styled from 'styled-components'

const GameTitleComponent = styled.h3`
    ${BodyH3}
    display: flex;
    align-items: center;
    text-align: center;
    white-space: nowrap;

    ::before {
      content: '';
      display: block;
      height: ${Border0};
      border-radius: ${Radius0};
      width: 100%;
      background-color: ${NeutralGrey100};

      margin-right: ${Spacing2}
    }

    ::after {
      content: '';
      display: block;
      height: ${Border0};
      width: 100%;
      background-color: ${NeutralGrey100};

      margin-left: ${Spacing2};
    }


`
export const GameTitle = ({ children }) => {
  return <GameTitleComponent>{children}</GameTitleComponent>
}
