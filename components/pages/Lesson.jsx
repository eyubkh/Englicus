import { LessonFooter } from '@components/organisms/LessonFooter'
import { LessonHeader } from '@components/organisms/LessonHeader'
import { LessonSection } from '@components/organisms/LessonSection'
import dataFetching from '@libs/dataFetching'
import { handlerCleanUp, handlerEnterPress } from '@libs/handlerEventListener'
import { LessonDispatch, LessonState } from '@redux/LessonContext'
import { useContext, useEffect, useRef } from 'react'
import { EndLesson } from './EndLesson'
import { Loading } from './Loading'

export const Lesson = () => {
  const dispatch = useContext(LessonDispatch)
  const { isLoading, currentChallengeIndex, challenges } = useContext(LessonState)

  const fetching = useRef(false)

  useEffect(() => {
    if (fetching.current === true) return handlerCleanUp
    fetching.current = true
    handlerEnterPress()

    dataFetching('/api/game')
      .then((data) => {
        dispatch({
          type: 'init',
          payload: data
        })
      })
  }, [])

  if (isLoading) return <Loading />

  if (currentChallengeIndex > challenges.length - 1) return <EndLesson />

  return (
    <>
      <LessonHeader />
      <LessonSection />
      <LessonFooter />
    </>
  )
}
