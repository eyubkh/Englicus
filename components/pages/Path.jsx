import { MainHeader } from '@components/organisms/MainHeader'
import styled from 'styled-components'
import smallSamples from '@utils/path/sample/smallSamples'
import { useContext, useEffect } from 'react'
import { Unit } from '@components/organisms/Unit'
import { UserDispatch, UserState } from '@redux/user/userContext'
import writeLocalData from '@utils/writeLocalData'

const PathComponent = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  height: auto;

  div {
    background-color: aliceblue;
    place-content: center;
  }

`

export const Path = () => {
  const { goal, path } = useContext(UserState)
  const userDispatch = useContext(UserDispatch)

  useEffect(() => {
    let definePath = []

    if (goal === 'School') definePath = smallSamples.school
    if (goal === 'Family and Friends') definePath = smallSamples.family
    if (goal === 'Culture') definePath = smallSamples.culture
    if (goal === 'Brain Training') definePath = smallSamples.brain
    if (goal === 'Job Opportunities') definePath = smallSamples.job
    if (goal === 'Travel') definePath = smallSamples.travel
    if (goal === 'Other') definePath = smallSamples.school

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
      <p>{goal}</p>
      {
        path
          .map((unit, index) => {
            return (
              <Unit
                key={index}
                title={`unit ${index}`}
                unit={unit}
              />
            )
          })
      }
    </PathComponent>
  )
}
