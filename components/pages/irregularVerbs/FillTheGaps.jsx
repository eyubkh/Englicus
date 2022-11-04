import { GameFooter } from '@components/organisms/GameFooter'
import { GameHeader } from '@components/organisms/GameHeader'
import { IrregularVerbsSection } from '@components/organisms/IrregularVerbsSection'
import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Context, DispatchContext } from 'utils/context'

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

  if (state.isLoading) return <h1>Loading</h1>

  if (state.current > state.api.length - 1) return <h1>Que quieres mas bro</h1>

  return (
    <FillTheGapsComponent>
      <GameHeader />
      <IrregularVerbsSection />
      <GameFooter />
    </FillTheGapsComponent>
  )
}
