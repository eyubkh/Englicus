import { UnitSection } from '@components/molecules/UnitSection'
import { UserState } from '@redux/user/userContext'
import { useContext } from 'react'
import styled from 'styled-components'

const UnitComponent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
`

export const Unit = () => {
  const { path } = useContext(UserState)

  return (
    <UnitComponent>
      {
        path
          .map(({ name, xp, max_xp: maxXp }, index) => {
            return (
              <UnitSection
                key={name}
                name={name}
                xp={xp}
                position={index}
                maxXp={maxXp}
              />
            )
          })
      }
    </UnitComponent>
  )
}
