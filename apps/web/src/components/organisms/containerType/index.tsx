type Props = {
	prompt: string;
	options: string[];
	setSelect: React.Dispatch<React.SetStateAction<string>>;
	select: string;
};

export function ContainerType({
	prompt,
	options = [],
	setSelect,
	select,
}: Props) {
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
