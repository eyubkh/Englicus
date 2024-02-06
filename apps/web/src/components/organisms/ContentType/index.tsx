import { AssistType } from "./AssistType";

type Props = {
	prompt: string;
	options: string[];
	setSelect: React.Dispatch<React.SetStateAction<string>>;
	select: string;
	type: string;
	lesson: {
		prompt: string;
		choices: string[];
	};
	state: {
		setUserAnswer: React.Dispatch<React.SetStateAction<string>>;
		userAnswer: string;
	};
};

export function ContentType({
	prompt,
	options = [],
	setSelect,
	select,
	type,
	lesson,
	state,
}: Props) {
	if (type === "assist") return <AssistType state={state} lesson={lesson} />;

	return (
		<div className="h-full flex flex-col justify-center p-10">
			<h1 className="text-2xl font-bold">{prompt}</h1>
			{options.map((o) => (
				<button
					className={`
     border-2 
     mt-4 
     py-4 
     ${select === o ? "bg-slate-100" : "bg-white"}
     `}
					type="button"
					onClick={() => {
						setSelect(o);
					}}
				>
					{o}
				</button>
			))}
		</div>
	);
}
