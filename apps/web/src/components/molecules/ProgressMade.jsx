
import { NeutralGrey100 } from '@tokens'
import styled from 'styled-components'
import { CrossedProgressBar } from './CrossedProgressBar'

const ProgressMadeComponent = styled.div`
    transform: rotate(90deg);
    position: relative;
    width: 550px;

    span {
      transform: rotate(-90deg);
      position: absolute;
      left: 15%;
      top: 95px;
    }
    .block1 {
      position: absolute;
      left: 20%;
      top: -20px;
      height: 20px;
      width: 10px;
      background-color: ${NeutralGrey100};
    }
    .block2 {
      position: absolute;
      left: 20%;
      top: -60px;
      height: 20px;
      width: 10px;
      background-color: ${NeutralGrey100};
    }
    .block3 {
      position: absolute;
      left: 20%;
      top: 60px;
      height: 20px;
      width: 10px;
      background-color: ${NeutralGrey100};
    }
    .block4 {
      position: absolute;
      left: 20%;
      top: 100px;
      height: 20px;
      width: 10px;
      background-color: ${NeutralGrey100};
    }
    
`

export const ProgressMade = () => {
  return (
    <ProgressMadeComponent>
      <span>min</span>
      <div className='block1' />
      <div className='block2' />
      <div className='block3' />
      <div className='block4' />
      <CrossedProgressBar reverse />
    </ProgressMadeComponent>
  )
}
