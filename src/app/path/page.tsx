"use client";
import { Path } from "@components/pages/Path";
import { UserContextProvider } from "@src/redux/user/userContext";

export default function path() {
	return (
		<UserContextProvider>
			<Path />
		</UserContextProvider>
	);
}
