import { CrossedProgressBar } from "../molecules/CrossedProgressBar";
import WelcomeFooter from "../organisms/footers/WelcomeFooter";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ContainerType } from "../organisms/containerType";

const data = [
	{
		prompt: "Que te motiva a aprender?",
		options: ["trabajo", "viajar"],
		key: "motivation",
		type: "question",
	},
	{
		prompt: "Elige tu nivel?",
		options: [
			"Aprendiendo ingles por primera vez?",
			"Ya sebes algo de ingles?",
		],
		key: "skillLevel",
		type: "question",
	},
];

export default function Welcome() {
	const [position, setPosition] = useState(0);
	const [select, setSelect] = useState("");
	const searchParams = useSearchParams();
	const router = useRouter();

	useEffect(() => {
		const user = window.localStorage.getItem("user");
		if (!user) {
			const userObject = {
				id: "1",
			};
			window.localStorage.setItem("user", JSON.stringify(userObject));
		}
	}, []);

	useEffect(() => {
		console.log(" Searchparam effect firrred");
		const params = new URLSearchParams(searchParams.toString());
		const step = params.get("step");

		if (step) {
			const target = data.filter((obj) => obj.key === step)[0];
			if (target) {
				setPosition(data.indexOf(target));
			}
		}
	}, [searchParams.toString()]);

	useEffect(() => {
		console.log(" position effect firrred");
		if (data[position]) {
			router.push(`/welcome?step=${data[position].key}`);
		}

		if (!data[position]) {
			router.push("/learn");
		}
	}, [position]);

	if (!data[position]) return <h1>you are done here</h1>;

	const { options, prompt, key } = data[position];

	return (
		<main className="flex flex-col justify-between h-[100vh] p-10 bg-slate-50">
			<CrossedProgressBar progress={(position / data.length) * 100} />
			<ContainerType
				options={options}
				prompt={prompt}
				setSelect={setSelect}
				select={select}
			/>
			<WelcomeFooter
				isDisabled={!select}
				onClick={() => {
					setPosition(position + 1);
					setSelect("");
					const user = window.localStorage.getItem("user");
					if (user) {
						const userParsed = JSON.parse(user);
						const userObject = {
							...userParsed,
							welcome_completed: position >= data.length - 1,
							[key]: select,
						};
						window.localStorage.setItem("user", JSON.stringify(userObject));
					}
				}}
			/>
		</main>
	);
}
