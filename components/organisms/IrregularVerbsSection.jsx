import { InputUnderLine } from '@components/atoms/InputUnderLine'
import { BodyH2, BodyH3, BrandSecondary, Spacing3, Spacing4 } from '@tokens'
import { useContext } from 'react'
import { Context, DispatchContext } from 'utils/context'
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
  const state = useContext(Context)
  const dispatch = useContext(DispatchContext)
  const currentChallenge = state.api[state.current]
  const handler = (event) => {
    let { value } = event.target
    value = value.toLowerCase()
    dispatch({
      type: 'textField',
      payload: value
    })
  }
  return (
    <Grid>
      <H2>{currentChallenge.translation}</H2>
      <Component>
        {
          currentChallenge.choises.map((challeng, index) => {
            const key = Object.keys(challeng)[0]
            return (
              <div key={index}>
                <p>{key}</p>
                {
                  currentChallenge.target === key
                    ? <InputUnderLine
                        value={state.textField}
                        handler={handler}
                        disabled={state.isChecking}
                      />
                    : <H3>{challeng[key]}</H3>
                }
              </div>
            )
          })
        }
      </Component>
    </Grid>
  )
}
