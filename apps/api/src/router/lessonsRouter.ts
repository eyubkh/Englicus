import { Hono } from "hono";
import LessonsController from "../controller/lessonsController";

const lessonsRouter = new Hono();

lessonsRouter.get("/vocabulary", LessonsController.getVocabulary);
lessonsRouter.get("/", (context) => {
	return context.text("Welcome to lesson router!");
});

export default lessonsRouter;
