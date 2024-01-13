import styled from "styled-components";
import { NeutralLight300, Spacing2 } from "@tokens";
import { Logo } from "@components/atoms/Logo";

const MainHeaderComponent = styled.header`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: ${Spacing2};
  border-bottom: 2px solid ${NeutralLight300};
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 100px;
`;

export const MainHeader = () => {
	return (
		<MainHeaderComponent>
			<Logo dark />
		</MainHeaderComponent>
	);
};
