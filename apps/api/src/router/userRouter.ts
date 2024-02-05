import { Hono } from "hono";
import { UserController } from "../controller/userController";

const userRouter = new Hono();

userRouter.get("/create", UserController.create);
userRouter.post("/", UserController.getUser);

export default userRouter;
