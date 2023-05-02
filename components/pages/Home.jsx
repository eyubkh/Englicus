import styled from 'styled-components'
// import { HomeHeader } from '@components/organisms/HomeHeader'
import { HeroText } from '@components/molecules/HeroText'
import { DimensionSmall, NeutralDark300 } from '@tokens'

import Image from 'next/image'
import Stars from '@public/assets/Stars.svg'
import Moon from '@public/assets/Moon.svg'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import dataFetching from '@libs/dataFetching'
import { UserDispatch } from '@redux/user/userContext'

const HeroComponent = styled.div`
    position: absolute;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 40% 60%;
    height: 100vh;
    width: auto;
    gap: 35px;
 
    img {
      width: 100%;
    }

    @media (max-width: ${DimensionSmall}) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0;

      img {
        width: 250px;
      }
    }

`

const MainComponent = styled.main`
  position: relative;
  background-color: ${NeutralDark300};
  background-image: url(${Stars.src});
  background-size: 1500px;
  background-position: center;
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`
export const Home = () => {
  const router = useRouter()
  const userDispatch = useContext(UserDispatch)

  useEffect(() => {
    const localUser = window.localStorage.getItem('user')
    if (localUser) {
      (async function () {
        const userUpdated = await dataFetching(`/api/user/${JSON.parse(localUser).id}`)
        userDispatch({
          type: 'update',
          payload: userUpdated
        })
      })()
      router.push('/path')
    }
  }, [])
  return (
    <MainComponent>
      {/* <HomeHeader /> */}
      <HeroComponent>
        <Image
          width={400}
          height={400}
          src={Moon}
          alt='content'
        />
        <HeroText />
      </HeroComponent>
    </MainComponent>
  )
}
