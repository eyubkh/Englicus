import { Button } from "@src/components/atoms/buttons/Button";
import { TransparentButton } from "@src/components/atoms/buttons/TransparentButton";
import { useState } from "react";

type Props = {
	userHasAnswered: boolean;
	isCorrect: boolean;
	positionState: {
		position: number;
		setPosition: React.Dispatch<React.SetStateAction<number>>;
	};
	setUserAnswer: React.Dispatch<React.SetStateAction<string>>;
	failedLessonsState: {
		setFailedLessons: React.Dispatch<React.SetStateAction<string[]>>;
		currentLesson: string;
	};
};

export function LessonFooter({
	userHasAnswered,
	isCorrect,
	positionState,
	setUserAnswer,
	failedLessonsState,
}: Props) {
	const [isChecking, setIsChecking] = useState(false);

	if (isChecking && isCorrect) {
		return (
			<footer className="flex justify-end items-center bg-green-300">
				<Button
					onClick={() => {
						setIsChecking(false);
						positionState.setPosition((prev) => prev + 1);
						setUserAnswer("");
					}}
					isDisabled={false}
				>
					Correcto
				</Button>
			</footer>
		);
	}

	if (isChecking && !isCorrect) {
		return (
			<footer className="flex justify-end items-center bg-red-300">
				<Button
					onClick={() => {
						setIsChecking(false);
						positionState.setPosition((prev) => prev + 1);
						setUserAnswer("");
						failedLessonsState.setFailedLessons((prev) => [
							...prev,
							failedLessonsState.currentLesson,
						]);
					}}
					isDisabled={false}
				>
					Incorrecto
				</Button>
			</footer>
		);
	}

	return (
		<footer className="flex justify-between items-center bg-slate-200">
			<TransparentButton>Saltar</TransparentButton>
			<Button
				isDisabled={!userHasAnswered}
				onClick={() => {
					setIsChecking(true);
				}}
			>
				Continuar
			</Button>
		</footer>
	);
}

// handler button check if correct thus is checking
