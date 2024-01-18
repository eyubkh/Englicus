import { PortalContextProvider } from "@src/redux/portal/portalContext";
import { CrossedProgressBar } from "../molecules/CrossedProgressBar";
import WelcomeFooter from "../organisms/footers/WelcomeFooter";
import { useState } from "react";

const data = [
	{
		prompt: "Que te motiva a aprender?",
		options: ["trabajo", "viajar"],
	},
	{
		prompt: "Elige tu nivel?",
		options: [
			"Aprendiento ingles por primeva vez?",
			"Ya sebes algo de ingles?",
		],
	},
];

export default function Portal() {
	const [progress, setProgress] = useState(0);
	if (!data[progress]) {
		return <h1>done</h1>;
	}
	return (
		<PortalContextProvider>
			<main className="flex flex-col justify-between h-full">
				<CrossedProgressBar progress={(progress / data.length) * 100} />
				<div className="h-full flex flex-col justify-center p-10">
					<h1 className="text-2xl font-bold">{data[progress].prompt}</h1>
					{data[progress].options.map((o) => (
						<p className="bg-slate-100 p-5 rounded-lg w-full mt-4">{o}</p>
					))}
				</div>
				<WelcomeFooter
					onClick={() => {
						setProgress((old) => old + 1);
					}}
				/>
			</main>
		</PortalContextProvider>
	);
}
