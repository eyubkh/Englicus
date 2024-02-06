import { useState } from "react";

type Props = {
	choices: string[];
	state: {
		setUserAnswer: React.Dispatch<React.SetStateAction<string>>;
		userAnswer: string;
	};
};
export function AssistChoces({ choices, state }: Props) {
	return (
		<ul className="flex flex-col gap-2">
			{choices.map((choice) => {
				return (
					<li
						style={{
							backgroundColor: state.userAnswer === choice ? "red" : "white",
						}}
						className="bg-slate-200 block py-2 border-2 border-slate-400 cursor-pointer "
						onClick={() => state.setUserAnswer(choice)}
					>
						{choice}
					</li>
				);
			})}
		</ul>
	);
}
