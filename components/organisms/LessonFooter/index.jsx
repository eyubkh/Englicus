import { useContext } from 'react'
import { LessonFooterError } from './LessonFooterError'
import { LessonFooterNeutral } from './LessonFooterNeutral'
import { LessonFooterSuccess } from './LessonFooterSuccess'
import { LessonState } from '@redux/LessonContext'
import { LessonFooterEnded } from './LessonFooterEnded'

export const LessonFooter = () => {
  const { isChecking, isCorrect, isLessonEnded } = useContext(LessonState)

  if (isLessonEnded) return <LessonFooterEnded />

  if (isChecking && isCorrect) {
    return <LessonFooterSuccess />
  }

  if (isChecking && isCorrect === false) {
    return <LessonFooterError />
  }

  return <LessonFooterNeutral />
}
