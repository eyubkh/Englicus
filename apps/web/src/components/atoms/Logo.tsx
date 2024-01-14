import Link from "next/link";

export const Logo = () => {
	return (
		<Link className="text-3xl font-bold capitalize" href="#">
			<span className={`text-blue-400 `}>eng</span>licus
		</Link>
	);
};
