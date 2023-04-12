import { LessonFooter } from '@components/organisms/LessonFooter'
import { LessonHeader } from '@components/organisms/LessonHeader'
import { LessonSection } from '@components/organisms/LessonSection'
import dataFetching from '@libs/dataFetching'
import { handlerCleanUp, handlerEnterPress } from '@libs/handlerEventListener'
import { LessonDispatch, LessonState } from '@redux/LessonContext'
import { useContext, useEffect, useRef } from 'react'
import { Loading } from './Loading'
import styled from 'styled-components'
import { UserState } from '@redux/user/userContext'
import { EndLesson } from './EndLesson'

const LessonComponent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;


`

export const Lesson = () => {
  const dispatch = useContext(LessonDispatch)
  const { isLoading, isDone } = useContext(LessonState)
  const userStata = useContext(UserState)

  const fetching = useRef(false)

  useEffect(() => {
    if (fetching.current === true) return handlerCleanUp
    fetching.current = true
    handlerEnterPress()

    dataFetching('/api/sessions', userStata)
      .then((data) => {
        dispatch({
          type: 'init',
          payload: {
            challenges: data.challenges
          }
        })
      })
  }, [])

  if (isLoading) return <Loading />

  if (isDone) return <EndLesson />

  return (
    <LessonComponent>
      <LessonHeader />
      <LessonSection />
      <LessonFooter />
    </LessonComponent>
  )
}
