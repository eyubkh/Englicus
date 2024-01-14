import { MainHeader } from "@components/organisms/headers/MainHeader";
import { useContext, useEffect, useState } from "react";
import { Unit } from "@components/organisms/Unit";
import { UserDispatch, UserState } from "@redux/user/userContext";
import dataFetching from "@libs/dataFetching";
import { useRouter } from "next/navigation";
import { useCustomEffect } from "@libs/hooks/useCustomEffect";
import PathRegister from "../organisms/PathRegister";
import { GreenButton } from "../atoms/buttons/GreenButton";
import { Button } from "../atoms/Button";
import Portal from "./Portal";
import Welcome from "./Welcome";

// const PathComponent = styled.main`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   max-width: 1000px;
//   margin: 100px auto;
//   padding: 0 50px;
//   height: auto;

//   .section {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 30px;
//   }
// `;

type UserProps = {
	info: {
		goal: {
			travel?: null | "england";
			work?: null | "engineer";
		};
	};
	path: [];
};

export default function Learn() {
	const [start, setStart] = useState(false);
	const [user, setUser] = useState<null | UserProps>(null);
	// start learning
	// register
	// show path according to registation

	useEffect(() => {
		const user = window.localStorage.getItem("user");
		if (user) {
			const userObject: UserProps = JSON.parse(user);
			setUser(userObject);
			setStart(true);
		}
	}, []);

	if (user?.path && start === true) {
		return <h1>learn</h1>;
	}

	if (start === true) {
		return <Welcome />;
	}

	return (
		<section className="flex flex-col h-full gap-10 justify-center items-center">
			<h1 className="text-4xl font-bold opacity-50">Empieza a aprender</h1>
			<button
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				type="button"
				onClick={() => setStart(true)}
			>
				empezar
			</button>
		</section>
	);
}
