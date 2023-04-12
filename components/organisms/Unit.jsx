import { UnitSection } from '@components/molecules/UnitSection'
import styled from 'styled-components'

const UnitComponent = styled.div``

export const Unit = ({ unit, title }) => {
  const sectionKeys = Object.keys(unit)

  return (
    <UnitComponent>
      <h3>{title}</h3>
      {
        sectionKeys
          .map((sectionTitle) => {
            return (
              <UnitSection
                key={sectionTitle}
                section={unit[sectionTitle]}
                title={sectionTitle}
              />
            )
          })
      }
    </UnitComponent>
  )
}
