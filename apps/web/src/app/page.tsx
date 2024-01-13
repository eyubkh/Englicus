import { Home } from "@components/pages/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home",
};

export default function home() {
	return <Home />;
}
