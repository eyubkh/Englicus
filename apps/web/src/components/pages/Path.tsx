import { useRouter } from "next/navigation";

export default function Path() {
	const router = useRouter();

	return (
		<main className="bg-slate-50 min-h-[100vh] flex flex-col p-6 items-center">
			<h1 className="text-2xl opacity-80 border-b-2 w-full text-center py-3">
				Starting point
			</h1>

			<section className="py-6 w-full flex flex-col gap-4 ">
				<article
					className={`
					bg-slate-200
				  w-full 
						h-11
						flex 
						justify-center
						items-center
						rounded-lg
						cursor-pointer

					hover:bg-slate-300
						transition-all
					`}
					onClick={() => {
						router.push("/lesson");
					}}
				>
					<h2 className="text-lg">Grammar</h2>
				</article>
			</section>
		</main>
	);
}
