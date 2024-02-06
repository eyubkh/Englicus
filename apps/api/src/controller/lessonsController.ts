import { Context } from "hono";
import LessonsModel from "../model/lessonsModel";

class LessonsController {
	static async getVocabulary(context: Context) {
		const lessons = await LessonsModel.vocabulary();
		return context.json(lessons);
	}
}

export default LessonsController;
