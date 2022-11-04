import { FillTheGaps as FillTheGapsPage } from '@components/pages/irregularVerbs/FillTheGaps'
import { ContextProvider } from 'utils/context'

export default function FillTheGaps () {
  return (
    <ContextProvider>
      <FillTheGapsPage />
    </ContextProvider>
  )
}
