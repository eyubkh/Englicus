import { Button } from '@components/atoms/Button'
import Moon from '@assets/Moon.svg'
import Stars from '@assets/Stars.svg'
import { BodyH3, BrandPrimary, BrandSecondary, NeutralDark300, NeutralLight100 } from '@tokens'
import styled from 'styled-components'

const HeroText = styled.div`
    text-align: center;
    width: 540px;
    h3 {
        ${BodyH3}
        color: ${NeutralLight100};
    }

    h3 span {
        color: ${BrandPrimary}
    }
`

const StartButton = styled(Button)`
    background-color: ${BrandSecondary};
    border-radius: 100px;
    color: ${NeutralLight100};
    width: 70%;
`

const HeroComponent = styled.div`
    background-image: url(${Stars.src});
    background-size: 80%;
    background-position: center;

    display: grid;
    place-content: center;
    grid-template-columns: 1fr 1fr;
    background-color: ${NeutralDark300};


    img {
        margin: auto;
        width: 350px;
    }

`

const MainComponent = styled.main`
    display: grid;
    height: 100vh;
    grid-template-rows: 15% 85%;
`
export const Home = () => {
  console.log(Stars)
  return (
    <MainComponent>
      <HeroComponent>
        <img src={Moon.src} alt='content' />
        <HeroText>
          <h3>¡Improve your english with <span>eng</span>licus gradually!</h3>
          <StartButton>Sample</StartButton>
        </HeroText>
      </HeroComponent>
    </MainComponent>
  )
}
