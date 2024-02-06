import vocabularyLessons from "../../data/vocabulary.json";

class LessonsModel {
	static async vocabulary() {
		const allLessons = vocabularyLessons;

		const lessons = allLessons.slice(0, 10);

		console.log(lessons, lessons.length);

		return lessons;
	}
}

export default LessonsModel;
