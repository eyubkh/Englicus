import { useContext } from 'react'
import { Context } from '@utils/context'
import { LessonFooterError } from './LessonFooterError'
import { LessonFooterNeutral } from './LessonFooterNeutral'
import { LessonFooterSuccess } from './LessonFooterSuccess'

export const LessonFooter = () => {
  const state = useContext(Context)

  if (state.isChecking && state.isCorrect) {
    return <LessonFooterSuccess />
  }

  if (state.isChecking && !state.isCorrect) {
    return <LessonFooterError />
  }

  return <LessonFooterNeutral />
}
