import { LessonFooter } from '@components/organisms/LessonFooter'
import { LessonHeader } from '@components/organisms/LessonHeader'
import { LessonSection } from '@components/organisms/LessonSection'
import dataFetching from '@libs/dataFetching'
import { LessonDispatch } from '@redux/LessonContext'
import { useContext, useEffect } from 'react'

export const Lesson = () => {
  const dispatch = useContext(LessonDispatch)

  useEffect(() => {
    dataFetching('/api/game')
      .then((data) => {
        console.log(data)
        dispatch({
          type: 'init',
          payload: data
        })
      })
  }, [])

  return (
    <>
      <LessonHeader />
      <LessonSection />
      <LessonFooter />
    </>
  )
}
