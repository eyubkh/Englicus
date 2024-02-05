import { Hono } from "hono";
import userRouter from "./router/userRouter";
require("dotenv").config();

const app = new Hono();

app.route("/user", userRouter);

export default {
	port: 3001,
	fetch: app.fetch,
};
