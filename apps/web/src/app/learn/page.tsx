"use client";
import { Path } from "@components/pages/Path";
import { useEffect, useState } from "react";

export default function path() {
	const [userState, setUserState] = useState(false);

	return <Path />;
}
