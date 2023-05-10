import { MainHeader } from '@components/organisms/headers/MainHeader'
import styled from 'styled-components'
import { useContext } from 'react'
import { Unit } from '@components/organisms/Unit'
import { UserDispatch, UserState } from '@redux/user/userContext'
import dataFetching from '@libs/dataFetching'
import { useRouter } from 'next/router'
import { useCustomEffect } from 'hooks/useCustomEffect'

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
  const router = useRouter()
  const userDispatch = useContext(UserDispatch)
  const { path = [] } = useContext(UserState)

  useCustomEffect(() => {
    const localUser = window.localStorage.getItem('user')
    if (localUser) {
      (async function () {
        const userUpdated = await dataFetching('/api/generate_challenges', {
          id: JSON.parse(localUser).id
        })
        console.log(userUpdated)
        userDispatch({
          type: 'update',
          payload: userUpdated
        })
      })()
    } else {
      router.push('/')
    }
  })

  return (
    <PathComponent>
      <MainHeader />
      <h1>Aprender Ingles</h1>
      {
        path
          .map(({ target, sectionLevel, sections, id }) => {
            return (
              <Unit
                key={id}
                target={target}
                sections={sections}
                sectionLevel={sectionLevel}
              />
            )
          })
      }
      <Unit />
    </PathComponent>
  )
}
