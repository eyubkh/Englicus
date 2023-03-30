import styled from 'styled-components'
import { GreenButton } from '@components/molecules/buttons/GreenButton'
import { TransparentButton } from '@components/molecules/buttons/TransparentButton'
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
      <TransparentButton>
        try again
      </TransparentButton>
      <GreenButton>
        Continue
      </GreenButton>
    </EndLevelFooterComponent>
  )
}
