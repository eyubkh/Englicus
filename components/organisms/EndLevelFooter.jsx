import styled from 'styled-components'
import { GreenButton } from '@components/molecules/GreenButton'
import { BorderButton } from '@components/molecules/buttons/TransparentButton'
import { BrandSecondary } from '@tokens'

const EndLevelFooterComponent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  min-height: 23vh;
  padding: 20px 20%;
  border-top: 4px solid ${BrandSecondary};
`

export const EndLevelFooter = () => {
  return (
    <EndLevelFooterComponent>
      <BorderButton>
        try again
      </BorderButton>
      <GreenButton>
        Continue
      </GreenButton>
    </EndLevelFooterComponent>
  )
}
