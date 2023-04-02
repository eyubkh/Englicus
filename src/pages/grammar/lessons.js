import { Lesson } from '@components/pages/Lesson'
import { LessonContextProvider } from '@redux/LessonContext'

export default function Lessons () {
  return (
    <LessonContextProvider>
      <Lesson />
    </LessonContextProvider>
  )
}
