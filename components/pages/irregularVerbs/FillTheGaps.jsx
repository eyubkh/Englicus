import { GameFooter } from '@components/organisms/GameFooter'
import { GameHeader } from '@components/organisms/GameHeader'
import { IrregularVerbsSection } from '@components/organisms/IrregularVerbsSection'
import { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Context, DispatchContext } from '@utils/context'
import { Loading } from '@components/pages/Loading'
import { EndLevel } from '@components/organisms/EndLevel'
import dataFetching from '@libs/dataFetching'
import { handlerCleanUp, handlerEnterPress } from 'libs/handlerEventListener'

const FillTheGapsComponent = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const FillTheGaps = () => {
  const dispatch = useContext(DispatchContext)
  const state = useContext(Context)
  const fetching = useRef(false)

  useEffect(() => {
    if (fetching.current === true) return handlerCleanUp
    fetching.current = true

    handlerEnterPress()

    dataFetching('/api/game')
      .then(data => {
        dispatch({
          type: 'api',
          payload: data
        })
        dispatch({
          type: 'isLoading'
        })
      })
  }, [])

  if (state.isLoading) return <Loading />

  if (state.current > state.api.length - 1) return <EndLevel />

  return (
    <FillTheGapsComponent>
      <GameHeader />
      <IrregularVerbsSection />
      <GameFooter />
    </FillTheGapsComponent>
  )
}
