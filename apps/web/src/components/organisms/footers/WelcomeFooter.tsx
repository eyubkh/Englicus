import { GreenButton } from "@components/atoms/buttons/GreenButton";
import { Button } from "@src/components/atoms/Button";

// const RegisterFooterComponent = styled.footer`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   min-height: 20vh;
// `

export default function WelcomeFooter({
	onClick = () => {},
}: { onClick?: () => void }) {
	return (
		<footer className="flex justify-end">
			<button
				className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
				onClick={onClick}
				type="button"
			>
				Continuar
			</button>
		</footer>
	);
}
