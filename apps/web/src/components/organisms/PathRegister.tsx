"use client";
import { GreenButton } from "../atoms/buttons/Button";
import { TransparentButton } from "../atoms/buttons/TransparentButton";
import { CrossedProgressBar } from "../molecules/CrossedProgressBar";
import { LessonSection } from "./LessonSection";
import { LessonFooter } from "./footers/LessonFooter";
import { LessonContextProvider } from "@src/redux/lesson/lessonContext";

export default function PathRegister() {
	return (
		<LessonContextProvider>
			<header>
				<CrossedProgressBar progress={50} />
			</header>
			<section>
				<h3>Como se dice potatoe? </h3>
				<article>
					<p>
						<span>{1}</span>
						<p>patata</p>
					</p>
				</article>
			</section>

			<footer className="flex justify-between">
				<TransparentButton handler={() => {}}>Pasar</TransparentButton>
				<GreenButton onClick={() => {}}>Continuar</GreenButton>
			</footer>
		</LessonContextProvider>
	);
}
