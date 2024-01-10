import { useContext } from 'react'
import { LessonFooterError } from './LessonFooterError'
import { LessonFooterNeutral } from './LessonFooterNeutral'
import { LessonFooterSuccess } from './LessonFooterSuccess'
import { LessonState } from '@redux/lesson/lessonContext'

export const LessonFooter = () => {
  const { isChecking, isCorrect } = useContext(LessonState)

  if (isChecking && isCorrect) {
    return <LessonFooterSuccess />
  }

  if (isChecking && isCorrect === false) {
    return <LessonFooterError />
  }

  return <LessonFooterNeutral />
}
