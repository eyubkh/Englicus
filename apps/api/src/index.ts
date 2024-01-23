import { Hono } from "hono";
import userRouter from "./model/user";

const app = new Hono();

app.route("/test", userRouter);

export default {
	port: 3001,
	fetch: app.fetch,
};
