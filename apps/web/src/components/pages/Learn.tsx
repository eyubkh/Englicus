import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Path from "./Path";
import { Button } from "@components/atoms/buttons/Button";

type UserProps = {
	info: {
		goal: {
			travel?: null | "england";
			work?: null | "engineer";
		};
	};
	welcome_completed: boolean;
};

export default function Learn() {
	const router = useRouter();
	const [user, setUser] = useState<null | UserProps>(null);

	useEffect(() => {
		const user = window.localStorage.getItem("user");
		console.log("from learn path", user);
		if (user) {
			const userObject: UserProps = JSON.parse(user);
			setUser(userObject);
		}
	}, []);

	if (user?.welcome_completed) {
		return <Path />;
	}

	return (
		<section className="flex flex-col h-[100vh] gap-10 justify-center items-center">
			<h1 className="text-4xl font-bold opacity-50">Empieza a aprender</h1>
			<Button
				isDisabled={false}
				onClick={() => {
					router.push("/welcome");
				}}
			>
				empezar
			</Button>
		</section>
	);
}
