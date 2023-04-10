import { Lesson } from '@components/pages/Lesson'
import { LessonContextProvider } from '@redux/LessonContext'

export default function lessons () {
  return (
    <LessonContextProvider>
      <Lesson />
    </LessonContextProvider>
  )
}
