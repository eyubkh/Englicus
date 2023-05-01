import { MainHeader } from '@components/organisms/headers/MainHeader'
import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { Unit } from '@components/organisms/Unit'
import { UserDispatch } from '@redux/user/userContext'
import dataFetching from '@libs/dataFetching'
import { useRouter } from 'next/router'

const PathComponent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 50px;
  height: auto;

`

export const Path = () => {
  const userDispatch = useContext(UserDispatch)
  const router = useRouter()

  useEffect(() => {
    const localUser = window.localStorage.getItem('user')
    if (localUser) {
      (async function () {
        const userUpdated = await dataFetching(`/api/user/${JSON.parse(localUser).id}`)
        userDispatch({
          type: 'update',
          payload: userUpdated
        })
      })()
    } else {
      router.push('/')
    }
  }, [])

  return (
    <PathComponent>
      <MainHeader />
      <h1>Aprender Ingles</h1>
      <Unit />
    </PathComponent>
  )
}
