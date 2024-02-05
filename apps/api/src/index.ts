import { Hono } from "hono";
import { cors } from "hono/cors";
import userRouter from "./router/userRouter";
require("dotenv").config();

const app = new Hono();

app.use(
	"*",
	cors({
		origin: "http://localhost:3000",
	}),
);

app.route("/user", userRouter);

export default {
	port: 3001,
	fetch: app.fetch,
};
