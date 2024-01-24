import styled from "styled-components";
import { GreenButton } from "@src/components/atoms/buttons/Button";
import { BrandSecondary } from "@tokens";
import Link from "next/link";
import { useContext } from "react";
import { LessonState } from "@redux/lesson/lessonContext";
import { UserDispatch, UserState } from "@redux/user/userContext";
import dataFetching from "@libs/dataFetching";

const LessonFooterEndedComponent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  min-height: 23vh;
  padding: 20px 20%;
  border-top: 4px solid ${BrandSecondary};
`;

export const LessonFooterEnded = () => {
	const { xp } = useContext(LessonState);
	const userDispatch = useContext(UserDispatch);
	const { currentLevel, path, _id } = useContext(UserState);

	const handler = async () => {
		const userUpdated = await dataFetching("/api/lesson/finish", {
			currentLesson: path[currentLevel],
			_id,
			xp,
		});

		userDispatch({
			type: "update",
			payload: userUpdated,
		});
	};
	return (
		<LessonFooterEndedComponent>
			<Link href="/path" passHref legacyBehavior>
				<GreenButton large onClick={handler}>
					Continue
				</GreenButton>
			</Link>
		</LessonFooterEndedComponent>
	);
};
