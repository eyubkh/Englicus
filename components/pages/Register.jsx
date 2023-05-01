import { RegisterSection } from '@components/organisms/RegisterSection'
import { Loading } from './Loading'
import { useContext, useEffect } from 'react'
import styled from 'styled-components'

import registerData from '@utils/registerData.json'
import { useRouter } from 'next/router'
import { RegisterDispatch, RegisterState } from '@redux/register/registerContext'
import { RegisterHeader } from '@components/organisms/headers/RegisterHeader'
import { RegisterFooter } from '@components/organisms/footers/RegisterFooter'
import { UserDispatch } from '@redux/user/userContext'
import dataFetching from '@libs/dataFetching'
import writeLocalData from '@utils/writeLocalData'

const RegisterComponent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;


  footer {
    height: 10vh;
  }

  header {
    height: 10vh;
  }
`

export const Register = () => {
  const router = useRouter()
  const registerDispatch = useContext(RegisterDispatch)
  const userDispatch = useContext(UserDispatch)

  useEffect(() => {
    (async function () {
      const user = await dataFetching('/api/register')

      userDispatch({
        type: 'update',
        payload: user
      })
      writeLocalData({
        id: user._id
      })
      registerDispatch({
        type: 'init',
        payload: registerData
      })
    })()
  }, [])

  const { isLoading, isDone } = useContext(RegisterState)

  if (isLoading) return <Loading />

  if (isDone) {
    router.push('/path')
    return <Loading />
  }

  return (
    <RegisterComponent>
      <RegisterHeader />
      <RegisterSection />
      <RegisterFooter />
    </RegisterComponent>
  )
}
