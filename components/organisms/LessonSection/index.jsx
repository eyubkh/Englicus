import { LessonState } from '@redux/LessonContext'
import { useContext } from 'react'

import { LessonTypeThreeOptions } from './LessonTypeThreeOptions'
import { LessonTypeAssist } from './LessonTypeAssist'
import { LessonEnded } from './LessonEnded'

export const LessonSection = () => {
  const { challenges, currentChallengeIndex, isLessonEnded } = useContext(LessonState)
  const { type } = challenges[currentChallengeIndex]

  if (isLessonEnded) return <LessonEnded />

  if (type === 'three-options') return <LessonTypeThreeOptions />

  if (type === 'assist') return <LessonTypeAssist />
}
