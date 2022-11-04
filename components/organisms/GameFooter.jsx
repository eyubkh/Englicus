import { useContext } from 'react'
import { Context } from 'utils/context'
import { GameFooterError } from './GameFooterError'
import { GameFooterNeutral } from './GameFooterNeutral'
import { GameFooterSuccess } from './GameFooterSuccess'

export const GameFooter = () => {
  const state = useContext(Context)

  if (state.isChecking && state.isCorrect) {
    return <GameFooterSuccess />
  }

  if (state.isChecking && !state.isCorrect) {
    return <GameFooterError />
  }

  return <GameFooterNeutral />
}
