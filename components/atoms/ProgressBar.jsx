import { ActionSuccess100, ActionSuccess200, NeutralLight300, Radius2 } from '@tokens'
import styled from 'styled-components'

const ProgressBarComponent = styled.div`
    position: relative;
    background-color: ${NeutralLight300};
    height: 15px;
    border-radius: ${Radius2};
    max-width: 800px;
    width: 100%;
    overflow: hidden;
    
        
    ::after {
        content: '';
        position: absolute;
        ${(args) => args.reverse ? 'right' : 'left'}: -1px;
        top: 0;
        height: 15px;
        border-radius: 8px;
        box-shadow: 
          inset 10px -6px ${ActionSuccess200}, 
          inset 10px 4px ${ActionSuccess200}, 
          inset -8px 0px ${ActionSuccess200};
        transition: width 0.3s;
        width: ${(args) => args.progress + '%'};
        background-color: ${ActionSuccess100};
        animation: width .3s ease-in

    }
`

export const ProgressBar = ({ progress, ...args }) => {
  return <ProgressBarComponent progress={progress} {...args} />
}
