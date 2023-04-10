import { GreenButton } from '@components/atoms/buttons/GreenButton'
import { RegisterSection } from '@components/organisms/RegisterSection'
import { Loading } from './Loading'
import { useContext, useEffect } from 'react'
import { RegisterDispatch, RegisterState } from '@redux/register/registerContext'
import registerData from '@utils/registerData.json'
import { CrossedProgressBar } from '@components/molecules/CrossedProgressBar'

export const Register = () => {
  const dispatch = useContext(RegisterDispatch)
  useEffect(() => {
    dispatch({
      type: 'init',
      payload: registerData
    })

    window.localStorage.setItem('register', JSON.stringify({ userId: '1' }))
  }, [])

  const { isLoading, progress } = useContext(RegisterState)

  const handler = () => {
    dispatch({
      type: 'next'
    })
  }

  if (isLoading) return <Loading />

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
