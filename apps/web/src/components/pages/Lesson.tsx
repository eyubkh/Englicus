import { useEffect, useState } from "react";
import { LessonFooter } from "@components/organisms/LessonFooter";
import { CrossedProgressBar } from "@components/molecules/CrossedProgressBar";
import { ContentType } from "@components/organisms/ContentType";
import { fail } from "assert";

// {
// 	prompt: "by",
// 	choices: [ "por", "historia", "matemáticas", "geografía" ],
// 	correctIndex: 0,
// 	type: "assist",
// 	difficulty: 0.14,
// 	categories: [ "education" ],
// 	goals: [ "school" ],
// }

export const Lesson = () => {
	const [lessons, setLessons] = useState([]);
	const [position, setPosition] = useState(0);
	const [userAnswer, setUserAnswer] = useState("");
	const [failedLessons, setFailedLessons] = useState([]);

	useEffect(() => {
		(async () => {
			const dataLessons = await fetch(
				`${process.env.API_URL}/lessons/vocabulary`,
			).then((rest) => rest.json());

			setLessons(dataLessons);
		})();
	}, []);

	if (failedLessons.length > 0 && lessons.length - 1 === position) {
		setLessons(failedLessons);
		setFailedLessons([]);
		setPosition(0);
	}

	if (!lessons[position]) {
		return <h1>notting to show</h1>;
	}
	console.log(failedLessons);
	const { prompt, choices, type, correctIndex } = lessons[position];

	return (
		<main className="flex flex-col p-7 justify-between h-[100vh]">
			<CrossedProgressBar progress={(position / lessons.length) * 100} />
			<ContentType
				state={{ userAnswer, setUserAnswer }}
				type={type}
				lesson={{ prompt, choices }}
			/>
			<LessonFooter
				userHasAnswered={!!userAnswer}
				isCorrect={choices.indexOf(userAnswer) === correctIndex}
				positionState={{ position, setPosition }}
				failedLessonsState={{
					setFailedLessons,
					currentLesson: lessons[position],
				}}
				setUserAnswer={setUserAnswer}
			/>
		</main>
	);
};

// has to know with optios is selected to send the answer data
