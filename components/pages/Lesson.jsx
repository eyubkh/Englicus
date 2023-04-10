import { LessonFooter } from '@components/organisms/LessonFooter'
import { LessonHeader } from '@components/organisms/LessonHeader'
import { LessonSection } from '@components/organisms/LessonSection'
import dataFetching from '@libs/dataFetching'
import { handlerCleanUp, handlerEnterPress } from '@libs/handlerEventListener'
import { LessonDispatch, LessonState } from '@redux/LessonContext'
import { useContext, useEffect, useRef } from 'react'
import { Loading } from './Loading'
import styled from 'styled-components'

const LessonComponent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;


`

export const Lesson = () => {
  const dispatch = useContext(LessonDispatch)
  const { isLoading, correctChallenges, challenges } = useContext(LessonState)

  const fetching = useRef(false)

  useEffect(() => {
    if (fetching.current === true) return handlerCleanUp
    fetching.current = true
    handlerEnterPress()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: window.localStorage.getItem('userData')
    }

    dataFetching('/api/path/sessions', options)
      .then((data) => {
        dispatch({
          type: 'init',
          payload: {
            challenges: data.challenges,
            lessonId: ''
          }
        })
      })
  }, [])

  if (isLoading) return <Loading />

  return (
    <LessonComponent>
      <LessonHeader />
      <LessonSection />
      <LessonFooter />
    </LessonComponent>
  )
}
