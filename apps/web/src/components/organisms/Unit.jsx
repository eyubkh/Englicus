import { UnitSection } from "@components/molecules/UnitSection";
import styled from "styled-components";

const UnitComponent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: center;
`;

export const Unit = ({ target, sectionLevel, sections = [] }) => {
	return (
		<UnitComponent>
			<h3>{target}</h3>
			{sections.map(({ id, topic, xp, max_xp: maxXp }, index) => {
				return (
					<UnitSection
						key={id}
						name={topic}
						xp={xp}
						active={sectionLevel === index}
						maxXp={maxXp}
					/>
				);
			})}
		</UnitComponent>
	);
};