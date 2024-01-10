import { LessonFooter } from '@components/organisms/footers/LessonFooter'
import { LessonHeader } from '@components/organisms/headers/LessonHeader'
import { LessonSection } from '@components/organisms/LessonSection'
import dataFetching from '@libs/dataFetching'
import { LessonDispatch, LessonState } from '@redux/lesson/lessonContext'
import { useContext } from 'react'
import { Loading } from './Loading'
import styled from 'styled-components'
import { UserState } from '@redux/user/userContext'
import { LessonRetry } from '@components/organisms/LessonRetry'
import { LessonEnded } from '@components/organisms/LessonEnded'
import { useCustomEffect } from '@libs/hooks/useCustomEffect'

const LessonComponent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;


`

export const Lesson = () => {
  const lessonDispatch = useContext(LessonDispatch)
  const { isLoading, isLessonEnded } = useContext(LessonState)
  const { path, currentLevel, _id } = useContext(UserState)

  useCustomEffect(() => {
    dataFetching('/api/sessions', {
      currentLesson: path[currentLevel],
      _id
    })
      .then((data) => {
        if (data.challenges.length === 0) throw new Error('no sessions available')
        lessonDispatch({
          type: 'init',
          payload: {
            challenges: data.challenges
          }
        })
      })
      .catch((error) => {
        console.error(error)
      })
  })

  if (isLoading) return <Loading />

  if (isLessonEnded) return <LessonEnded />

  return (
    <LessonComponent>
      <LessonRetry />
      <LessonHeader />
      <LessonSection />
      <LessonFooter />
    </LessonComponent>
  )
}
