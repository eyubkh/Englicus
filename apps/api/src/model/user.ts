import { Hono } from "hono";

const userRouter = new Hono();

userRouter.get("/", async (context) => {
	return context.json({ test: "hello" });
});

export default userRouter;
