import { GreenButton } from "@components/atoms/buttons/GreenButton";
import { Button } from "@src/components/atoms/Button";

// const RegisterFooterComponent = styled.footer`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   min-height: 20vh;
// `

export default function WelcomeFooter() {
	return (
		<footer className="flex justify-end">
			<Button>Continuar</Button>
		</footer>
	);
}
