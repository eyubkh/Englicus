import { CrossIcon } from "@components/atoms/CrossIcon";
import { ProgressBar } from "@components/atoms/ProgressBar";

type Props = {
	progress: number;
	href?: string;
};

export const CrossedProgressBar = ({ progress, href = "/" }: Props) => {
	return (
		<header className="flex items-center justify-center gap-4">
			<CrossIcon href="/" />
			<ProgressBar progress={progress} />
		</header>
	);
};
