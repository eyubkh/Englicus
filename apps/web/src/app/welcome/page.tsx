"use client";

import Welcome from "@components/pages/Welcome";
import { RegisterContextProvider } from "@redux/register/registerContext";

export default function register() {
	return (
		<RegisterContextProvider>
			<Welcome />
		</RegisterContextProvider>
	);
}
