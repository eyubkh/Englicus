import { BodyTextRegularBold, NeutralDark300, Radius2, Spacing0, Spacing2 } from '@tokens'
import styled from 'styled-components'
// import Image from 'next/image'
import { useEffect, useState } from 'react'

const GameLayoutCardComponent = styled.article`  
  div {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${Spacing2};

    span  {
      width: 240px;
      height: 120px;
      background-color: black;
    }
  }

  div img {
      border-bottom: ${Spacing0};
      border-radius: ${Radius2};
  }

  div p {
      ${BodyTextRegularBold}
      margin: 0;
      color: ${NeutralDark300}
  }
`

export const GameLayoutCard = ({ src, alt, href, children }) => {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const localData = window.localStorage.getItem('userData')
    if (localData) {
      const objData = JSON.parse(localData)
      setUserData(objData)
    }
  }, [])

  return (
    <GameLayoutCardComponent>
      <div>
        <p>level:{userData.games ? userData.games[0].level : '0'}</p>
        {/* <Image src={src} alt={alt} width='240' height='120' /> */}
        <span />
        <p>{children}</p>
      </div>
    </GameLayoutCardComponent>
  )
}
