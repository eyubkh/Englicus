import { Button } from "@src/components/atoms/buttons/Button";

type Props = {
	onClick?: () => void;
	isDisabled?: boolean;
};
export default function WelcomeFooter({
	onClick = () => {},
	isDisabled,
}: Props) {
	return (
		<footer className="flex justify-end h-[20vh] items-center ">
			<Button isDisabled={isDisabled} onClick={onClick}>
				Continuar
			</Button>
		</footer>
	);
}
