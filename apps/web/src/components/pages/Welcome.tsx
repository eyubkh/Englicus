import { CrossedProgressBar } from "../molecules/CrossedProgressBar";
import WelcomeFooter from "../organisms/footers/WelcomeFooter";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ContentType } from "../organisms/ContentType";
import { getLocalUserId, setLocalUserId } from "@src/utils/localStorageHandler";

const data = [
	{
		prompt: "Que te motiva a aprender?", // this has to be translated
		options: ["travel", "work"], // this has to be translated
		stepName: "motivation",
		key: "motivation", // this is the db key target to change
		type: "question",
	},
	{
		prompt: "Elige tu nivel?", // this has to be translated
		options: [
			"Aprendiendo ingles por primera vez?",
			"Ya sebes algo de ingles?",
		], // this has to be translated
		stepName: "skillLevel",
		key: "skill_level", // this is the db key target to change
		type: "question",
	},
];

export default function Welcome() {
	const [position, setPosition] = useState(0);
	const [select, setSelect] = useState("");
	const searchParams = useSearchParams();
	const router = useRouter();

	useEffect(() => {
		const userId = getLocalUserId();
		if (!userId) {
			(async () => {
				const user = await fetch("http://localhost:3001/user/create").then(
					(res) => res.json(),
				);
				setLocalUserId(user.id);
			})();
		}
	}, []);

	useEffect(() => {
		const params = new URLSearchParams(searchParams.toString());
		const step = params.get("step");

		if (step) {
			const target = data.filter((obj) => obj.stepName === step)[0];
			if (target) {
				setPosition(data.indexOf(target));
			}
		}
	}, [searchParams.toString()]);

	useEffect(() => {
		console.log(" position effect firrred");
		if (data[position]) {
			router.push(`/welcome?step=${data[position].stepName}`);
		}

		if (!data[position]) {
			router.push("/learn");
		}
	}, [position]);

	if (!data[position]) {
		return <h1>you are done here</h1>;
	}

	const { options, prompt, key } = data[position];

	return (
		<main className="flex flex-col justify-between h-[100vh] p-10 bg-slate-50">
			<CrossedProgressBar progress={(position / data.length) * 100} />
			<ContentType
				options={options}
				prompt={prompt}
				setSelect={setSelect}
				select={select}
				type="question"
			/>
			<WelcomeFooter
				isDisabled={!select}
				onClick={async () => {
					if (key) {
						const userId = getLocalUserId();
						await fetch(`${process.env.API_URL}/user/${userId}`, {
							method: "PATCH",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								[key]: select,
								welcome_completed: position === data.length - 1,
							}),
						});
					}

					setSelect("");
					setPosition(position + 1);
				}}
			/>
		</main>
	);
}
