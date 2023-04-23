import { LessonFooter } from '@components/organisms/footers/LessonFooter'
import { LessonHeader } from '@components/organisms/headers/LessonHeader'
import { LessonSection } from '@components/organisms/LessonSection'
import dataFetching from '@libs/dataFetching'
import { handlerCleanUp, handlerEnterPress } from '@libs/handlerEventListener'
import { LessonDispatch, LessonState } from '@redux/LessonContext'
import { useContext, useEffect, useRef } from 'react'
import { Loading } from './Loading'
import styled from 'styled-components'
import { UserState } from '@redux/user/userContext'
import { LessonRetry } from '@components/organisms/LessonRetry'
import { LessonEnded } from '@components/organisms/LessonEnded'

const LessonComponent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;


`

export const Lesson = () => {
  const dispatch = useContext(LessonDispatch)
  const { isLoading, isLessonEnded } = useContext(LessonState)
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
