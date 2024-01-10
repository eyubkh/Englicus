import { Lesson } from "@components/pages/Lesson";
import { LessonContextProvider } from "@redux/lesson/lessonContext";

export default function lessons() {
	return (
		<LessonContextProvider>
			<Lesson />
		</LessonContextProvider>
	);
}
