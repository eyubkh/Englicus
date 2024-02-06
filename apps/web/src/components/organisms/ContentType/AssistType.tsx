import { AssistChoces } from "@src/components/molecules/ChoicesType/AssistChoces";

type Props = {
	lesson: { choices: string[]; prompt: string };
	state: {
		setUserAnswer: React.Dispatch<React.SetStateAction<string>>;
		userAnswer: string;
	};
};

export const AssistType = ({ lesson, state }: Props) => {
	return (
		<article className="flex flex-col gap-5 py-5 overflow-y-scroll bg-yellow-200">
			<h3>Como se dice "{lesson.prompt}"?</h3>
			<AssistChoces state={state} choices={lesson.choices} />
		</article>
	);
};
