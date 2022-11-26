import { GameFooter } from '@components/organisms/GameFooter'
import { GameHeader } from '@components/organisms/GameHeader'
import { IrregularVerbsSection } from '@components/organisms/IrregularVerbsSection'
import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Context, DispatchContext } from 'utils/context'
import { Loading } from '@components/pages/Loading'
import { EndLevel } from '@components/pages/EndLevel'

const FillTheGapsComponent = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const FillTheGaps = () => {
  const dispatch = useContext(DispatchContext)
  const state = useContext(Context)
  useEffect(() => {
    window.fetch('/api/game')
      .then(res => res.json())
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
