import Moon from '@public/assets/Moon.svg'
import Stars from '@public/assets/Stars.svg'
import { Header } from '@components/molecules/Header'
import { HeroText } from '@components/molecules/HeroText'
import { NeutralDark300 } from '@tokens'
import styled from 'styled-components'

const HeroComponent = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: 40% 60%;
 
    img {
      max-width: 400px;
      width: 100%;
      height: 100vh;
    }

`

const MainComponent = styled.main`
  position: relative;
  background-color: ${NeutralDark300};
  background-image: url(${Stars.src});
  background-size: 80%;
  background-position: center;
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`
export const Home = () => {
  return (
    <MainComponent>
      <Header />
      <HeroComponent>
        <img width='300px' src={Moon.src} alt='content' />
        <HeroText />
      </HeroComponent>
    </MainComponent>
  )
}
