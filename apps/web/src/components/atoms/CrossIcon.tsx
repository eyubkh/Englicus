import { NeutralGrey100 } from "@tokens";
import React from "react";
import Link from "next/link";

type Props = {
	href: string;
};

export const CrossIcon = ({ href }: Props) => {
	return (
		<Link href={href}>
			<svg
				fill={NeutralGrey100}
				height="40"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 320 512"
			>
				<title>Close icon</title>
				<path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
			</svg>
		</Link>
	);
};