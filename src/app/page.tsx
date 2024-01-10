"use client";

import { Home } from "@components/pages/Home";
import { UserContextProvider } from "@redux/user/userContext";

export default function home() {
	return (
		<UserContextProvider>
			<Home />
		</UserContextProvider>
	);
}
