import { PortalContextProvider } from "@src/redux/portal/portalContext";
import { LessonHeader } from "../organisms/headers/LessonHeader";

export default function Portal() {
	return (
		<PortalContextProvider>
			<h1>hello</h1>
		</PortalContextProvider>
	);
}
