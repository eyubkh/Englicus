import { GreenButton } from '@components/atoms/buttons/GreenButton'
import { RegisterSection } from '@components/organisms/RegisterSection'
import { Loading } from './Loading'
import { useContext, useEffect } from 'react'

import registerData from '@utils/registerData.json'
import { CrossedProgressBar } from '@components/molecules/CrossedProgressBar'
import { useRouter } from 'next/router'
import writeLocalData from '@utils/writeLocalData'
import { RegisterDispatch, RegisterState } from '@redux/register/registerContext'

export const Register = () => {
  const router = useRouter()
  const dispatch = useContext(RegisterDispatch)

  useEffect(() => {
    writeLocalData()

    dispatch({
      type: 'init',
      payload: registerData
    })
  }, [])

  const { isLoading, progress, isDone } = useContext(RegisterState)

  const handler = () => {
    dispatch({
      type: 'next'
    })
  }

  if (isLoading) return <Loading />

  if (isDone) {
    router.push('/path')
    return <Loading />
  }

  return (
    <>
      <CrossedProgressBar progress={progress} />
      <RegisterSection />
      <footer>
        <GreenButton large onClick={handler}>
          Continue
        </GreenButton>
      </footer>
    </>
  )
}
