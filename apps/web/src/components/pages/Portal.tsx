import { PortalContextProvider } from "@src/redux/portal/portalContext";
import { CrossedProgressBar } from "../molecules/CrossedProgressBar";
import WelcomeFooter from "../organisms/footers/WelcomeFooter";
import { useEffect, useRef, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const data = [
	{
		prompt: "Que te motiva a aprender?",
		options: ["trabajo", "viajar"],
		key: "motivation",
	},
	{
		prompt: "Elige tu nivel?",
		options: [
			"Aprendiendo ingles por primera vez?",
			"Ya sebes algo de ingles?",
		],
		key: "skillLevel",
	},
];

export default function Portal() {
	const searchParams = useSearchParams();
	const [position, setPosition] = useState(0);
	const [select, setSelect] = useState<null | string>(null);
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
		<PortalContextProvider>
			<main className="flex flex-col justify-between h-full">
				<CrossedProgressBar progress={(position / data.length) * 100} />

				{/* Container */}
				<div className="h-full flex flex-col justify-center p-10">
					<p>selected: {select}</p>
					<h1 className="text-2xl font-bold">{prompt}</h1>
					{options.map((o) => (
						<button
							className={`border-2 mt-4 py-4 ${
								select === o ? "bg-slate-100" : "bg-white"
							}`}
							type="button"
							onClick={() => {
								setSelect(o);
							}}
						>
							{o}
						</button>
					))}
				</div>

				{/* Foooter */}
				<WelcomeFooter
					isDisabled={!select}
					onClick={() => {
						setPosition(position + 1);
						setSelect(null);
						// window.fetch(`/api/welcome?step=${key}`, {
						// 	method: "POST",
						// 	headers: {
						// 		"Content-Type": "application/json",
						// 	},
						// 	body: JSON.stringify({ [key]: select }),
						// });
					}}
				/>
			</main>
		</PortalContextProvider>
	);
}
