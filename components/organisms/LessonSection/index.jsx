import { LessonState } from '@redux/LessonContext'
import { useContext } from 'react'

import { LessonTypeThreeOptions } from './LessonTypeThreeOptions'

export const LessonSection = () => {
  const { challenges, currentChallengeIndex } = useContext(LessonState)
  const { type } = challenges[currentChallengeIndex]

  if (type === 'three-options') return <LessonTypeThreeOptions />
}
