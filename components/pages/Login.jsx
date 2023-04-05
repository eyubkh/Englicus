import { GreenButton } from '@components/atoms/buttons/GreenButton'
import { CrossIcon } from '@components/atoms/CrossIcon'
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'

const LoginComponent = styled.main`
  display: grid;
  place-content: center;
  padding: 30px;
  width: 100vw;
  height: 100vh;

  /* a {
    position: absolute;
  } */
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;
    width: 300px;
    height: auto;
  }
`

export const Login = () => {
  const [userData, setUserData] = useState({})

  const handlerOnChange = ({ target }, type) => {
    const obj = {
      ...userData,
      [type]: target.value
    }
    setUserData(obj)
  }

  const handlerSubmit = () => {
    console.log(userData)
  }

  return (
    <LoginComponent onSubmit={handlerSubmit}>
      <Link href='/' passHref legacyBehavior>
        <CrossIcon />
      </Link>
      <form>
        <h1>log in</h1>
        <input placeholder='username' onChange={(event) => handlerOnChange(event, 'username')} />
        <input placeholder='password' type='password' onChange={(event) => handlerOnChange(event, 'password')} />
        <GreenButton onClick={handlerSubmit} type='sumbit'>Log in</GreenButton>
      </form>
    </LoginComponent>
  )
}
