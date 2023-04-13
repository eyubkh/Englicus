import { LessonState } from '@redux/LessonContext'
import { useContext } from 'react'

import { LessonTypeThreeOptions } from './LessonTypeThreeOptions'
import { LessonTypeAssist } from './LessonTypeAssist'

export const LessonSection = () => {
  const { challenges, currentChallengeIndex } = useContext(LessonState)
  const { type } = challenges[currentChallengeIndex]

  if (type === 'three-options') return <LessonTypeThreeOptions />

  if (type === 'assist') return <LessonTypeAssist />
}
