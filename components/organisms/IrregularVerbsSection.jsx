import { InputUnderLine } from '@components/atoms/InputUnderLine'
import { BodyH2, BodyH3, BrandSecondary, Spacing3, Spacing4 } from '@tokens'
import styled from 'styled-components'

const H2 = styled.h2`
  width: fit-content;
  ${BodyH2}
  margin-top: 0;
  margin-bottom: ${Spacing3};
  color: ${BrandSecondary};
`

const H3 = styled.h3`
  ${BodyH3}
  margin: 0;
  
`

const Component = styled.div`
  
  display: flex;
  gap: ${Spacing4};
  div {
    text-align: center;
  }
  div:first-child,
  div:last-child {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-bottom: 19px;
    height: auto;
  }
`

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const IrregularVerbsSection = () => {
  return (
    <Grid>
      <H2>Translate</H2>
      <Component>
        <div>
          <p>Irregular</p>
          <H3>Irregular</H3>
        </div>
        <div>
          <p>Past</p>
          <InputUnderLine />
        </div>
        <div>
          <p>Participle</p>
          <H3>Particple</H3>
        </div>

      </Component>
    </Grid>
  )
}
