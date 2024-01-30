import { LessonFooter } from "@components/organisms/footers/LessonFooter";
import { LessonHeader } from "@components/organisms/headers/LessonHeader";
import { LessonSection } from "@components/organisms/LessonSection";
import dataFetching from "@libs/dataFetching";
import { LessonDispatch, LessonState } from "@redux/lesson/lessonContext";
import { useContext } from "react";
import { Loading } from "./Loading";
import { UserState } from "@redux/user/userContext";
import { LessonRetry } from "@components/organisms/LessonRetry";
import { LessonEnded } from "@components/organisms/LessonEnded";
import { useCustomEffect } from "@libs/hooks/useCustomEffect";
import { ProgressBar } from "../atoms/ProgressBar";
import { CrossedProgressBar } from "../molecules/CrossedProgressBar";
import { Button } from "../atoms/buttons/Button";

// const LessonComponent = styled.main`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   height: 100vh;
// `;

export const Lesson = () => {
	return (
		<main className="flex flex-col p-7 justify-between h-[100vh]">
			<CrossedProgressBar progress={33} />
			<article className="flex flex-col gap-4">
				<h3>Como se dice Dog? </h3>
				<div>
					<button type="button">Perro</button>
					<button type="button">Gato</button>
					<button type="button">Caballo</button>
				</div>
			</article>
			<footer>
				<Button>Continuar</Button>
			</footer>
		</main>
	);
};
