import { MainHeader } from '@components/organisms/headers/MainHeader'
import styled from 'styled-components'
import smallSamples from '@utils/path/smallSamples'
import { useContext, useEffect } from 'react'
import { Unit } from '@components/organisms/Unit'
import { UserDispatch, UserState } from '@redux/user/userContext'
import writeLocalData from '@utils/writeLocalData'

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
  const { goal } = useContext(UserState)
  const userDispatch = useContext(UserDispatch)

  useEffect(() => {
    let definePath = []

    if (goal === 'Family and Friends') definePath = smallSamples.family

    userDispatch({
      type: 'path',
      payload: definePath
    })

    writeLocalData({
      path: definePath
    })
  }, [])

  return (
    <PathComponent>
      <MainHeader />
      <h1>Aprender Ingles</h1>
      <Unit />
    </PathComponent>
  )
}
