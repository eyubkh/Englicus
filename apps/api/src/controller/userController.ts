import { Context } from "hono";
import { UserModel } from "../model/userModel";

export class UserController {
	static async create(context: Context) {
		const newUser = await UserModel.create();

		return context.json(newUser);
	}

	static async getUser(context: Context) {
		try {
			const id = context.req.param("id");
			if (!id) throw new Error("No user id provided");

			const userData = await UserModel.returnUserInfoById(id);

			return context.json(userData);
		} catch (error) {
			return context.json({ error: "No user id provided" });
		}
	}

	static async updateUser(context: Context) {
		try {
			const body = await context.req.json();

			const id = context.req.param("id");

			if (!id) throw new Error("No user id provided");

			const userData = await UserModel.updateUser(id, body);

			return context.json(userData);
		} catch (error) {
			return context.json({ error: "general error" });
		}
	}
}
