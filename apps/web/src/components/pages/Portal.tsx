import { PortalContextProvider } from "@src/redux/portal/portalContext";
import { CrossedProgressBar } from "../molecules/CrossedProgressBar";
import WelcomeFooter from "../organisms/footers/WelcomeFooter";

export default function Portal() {
	return (
		<PortalContextProvider>
			<main className="flex flex-col justify-between h-full">
				<CrossedProgressBar progress={50} />
				<h1>hello</h1>
				<WelcomeFooter />
			</main>
		</PortalContextProvider>
	);
}
