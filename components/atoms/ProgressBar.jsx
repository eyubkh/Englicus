import { ActionSuccess100, NeutralLight300, Radius2 } from '@tokens'
import styled from 'styled-components'

const ProgressBarComponent = styled.div`
    position: relative;
    background-color: ${NeutralLight300};
    height: 20px;
    border-radius: ${Radius2};
    width: 100%;
    overflow: hidden;
    ::after {
        content: '';
        position: absolute;
        left: -1px;
        top: 0;
        height: 20px;
        width: ${(args) => args.progress + '%'};
        background-color: ${ActionSuccess100};
        animation: width .3s ease-in

    }
`

export const ProgressBar = ({ progress }) => {
  return <ProgressBarComponent progress={progress} />
}
