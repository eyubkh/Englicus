import { Context } from "hono";
import { UserModel } from "../model/userModel";

export class UserController {
	static async create(context: Context) {
		const newUser = await UserModel.create();

		return context.json(newUser);
	}

	static async getUser(context: Context) {
		const { id } = await context.req.json();

		try {
			if (!id) throw new Error("No user id provided");

			const user = await UserModel.getUser({ id });

			return context.json({ user });
		} catch (error) {
			return context.json({ error: "No user id provided" });
		}
	}
}
