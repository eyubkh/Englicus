import { CrossedProgressBar } from "../molecules/CrossedProgressBar";
import WelcomeFooter from "../organisms/footers/WelcomeFooter";
import { useEffect, useRef, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ContainerType } from "../organisms/ContentType";

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

export default function Portal() {
	const [position, setPosition] = useState(0);
	const [select, setSelect] = useState("");
	const searchParams = useSearchParams();
	const router = useRouter();

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
			router.push("/");
		}
	}, [position]);

	if (!data[position]) return <h1>you are done here</h1>;

	const { options, prompt } = data[position];

	return (
		<>
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
				}}
			/>
		</>
	);
}
