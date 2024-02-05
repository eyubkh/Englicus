import { Hono } from "hono";
import { UserController } from "../controller/userController";

const userRouter = new Hono();

userRouter.get("/create", UserController.create);

userRouter.get("/:id", UserController.getUser);
userRouter.patch("/:id", UserController.updateUser);

export default userRouter;
