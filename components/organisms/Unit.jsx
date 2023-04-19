import { UnitSection } from '@components/molecules/UnitSection'
import styled from 'styled-components'

const UnitComponent = styled.main`

  section {
    display: flex;
    gap: 10px;
  }
`

export const Unit = ({ unit }) => {
  return (
    <UnitComponent>
      <h3>unit 1 </h3>
      <section>
        {
          unit
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
      </section>
    </UnitComponent>
  )
}
