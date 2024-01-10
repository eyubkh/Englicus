import { LessonState } from '@redux/lesson/lessonContext'
import { useContext } from 'react'

import { LessonTypeAssist } from './LessonTypeAssist'
import { LessonTypeSelect } from './LessonTypeSelect'
import { LessonTypeTranslate } from './LessonTypeTranslate'
import { LessonTypeListenAssist } from './LessonTypeListenAssist'

export const LessonSection = () => {
  const { challenges, currentChallengeIndex } = useContext(LessonState)
  const { type } = challenges[currentChallengeIndex]

  if (type === 'translate') return <LessonTypeTranslate />

  if (type === 'assist') return <LessonTypeAssist />

  if (type === 'select') return <LessonTypeSelect />

  if (type === 'listenAssist') return <LessonTypeListenAssist />
}
