import { Border0, NeutralGrey300, NeutralLight100, NeutralLight300 } from '@tokens'
import Image from 'next/image'
import styled from 'styled-components'
import familySvg from '@public/icons/comments-solid.svg'

const OptionSelectComponent = styled.div`
  display: flex;
  height: auto;
  width: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 10px;
  padding: 30px 15px;
  background-color: ${({ activate }) => activate ? NeutralLight300 : NeutralLight100};
  border-radius: 20px;
  box-shadow: 0px ${Border0} 0px ${NeutralGrey300};
  border: 1px solid ${NeutralGrey300};
  cursor: pointer;

  :hover {
    box-shadow: 0px 0px 0px ${NeutralGrey300};
  }
`

export const OptionSelect = ({ onClick, children, ...props }) => {
  return (
    <OptionSelectComponent {...props} onClick={onClick}>
      <Image src={familySvg} width={50} height={50} alt='family icon' />
      <h4>{children}</h4>
    </OptionSelectComponent>
  )
}
