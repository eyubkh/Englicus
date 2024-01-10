import { CrossedProgressBar } from '@components/molecules/CrossedProgressBar'
import { RegisterState } from '@redux/register/registerContext'
import { useContext } from 'react'
import styled from 'styled-components'

const RegisterHeaderComponent = styled.header`
  display: flex;
  min-height: 20vh;
  width: 100%;
`

export const RegisterHeader = () => {
  const { progress } = useContext(RegisterState)

  return (
    <RegisterHeaderComponent>
      <CrossedProgressBar progress={progress} />
    </RegisterHeaderComponent>
  )
}
