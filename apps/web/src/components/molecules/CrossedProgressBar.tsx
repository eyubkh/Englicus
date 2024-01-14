import { CrossIcon } from "@components/atoms/CrossIcon";
import { ProgressBar } from "@components/atoms/ProgressBar";
import Link from "next/link";

// const CrossedProgressBarComponent = styled.div`
//   display: flex;
//   width: 100%;
//   gap: ${Spacing2};
//   align-items: center;
//   justify-content: center;
// `;

type Props = {
	progress: number;
};
export const CrossedProgressBar = ({ progress }: Props) => {
	return (
		<header className="flex items-center justify-center gap-4">
			<Link href="/path" passHref legacyBehavior>
				<CrossIcon />
			</Link>
			<ProgressBar progress={progress} />
		</header>
	);
};
