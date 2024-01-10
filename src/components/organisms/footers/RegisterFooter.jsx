import { GreenButton } from '@components/atoms/buttons/GreenButton'
import { RegisterDispatch } from '@redux/register/registerContext'
import { useContext } from 'react'
import styled from 'styled-components'

const RegisterFooterComponent = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 20vh;
`

export const RegisterFooter = () => {
  const registerDispatch = useContext(RegisterDispatch)

  const handlerOnClick = () => {
    registerDispatch({
      type: 'next'
    })
  }

  return (
    <RegisterFooterComponent>
      <GreenButton large onClick={handlerOnClick}>Continuar</GreenButton>
    </RegisterFooterComponent>
  )
}
